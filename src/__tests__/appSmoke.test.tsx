import { describe, it, expect, beforeEach } from 'vitest';
import { act, fireEvent, render, screen, within } from '@testing-library/react';
import App from '../App';
import { PRESET_LIBRARY } from '../constants/presets';
import { STORAGE_KEYS } from '../utils/storage';

function nav(name: RegExp) {
  return within(screen.getByRole('navigation', { name: 'Primary' })).getByRole('button', {
    name,
  });
}

describe('Studio app smoke test', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders the keymap, persists edits and keeps the applied preset accurate', async () => {
    render(<App />);

    expect(screen.getByRole('navigation', { name: 'Primary' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /row 1 column 1/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /row 3 column 3/i })).toBeInTheDocument();

    // Rate the first preset 1-100 and confirm it is stored.
    fireEvent.click(nav(/presets library/i));
    const sliders = screen.getAllByRole('slider', { name: /rating for/i });
    expect(sliders.length).toBeGreaterThan(0);
    fireEvent.change(sliders[0], { target: { value: '88' } });

    expect(sliders[0]).toHaveAttribute('aria-valuetext', expect.stringContaining('88'));
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEYS.ratings) || '{}');
    expect(Object.values(stored)).toContain(88);

    // Top-rated sorting is exposed as a pressed toggle.
    const topRated = screen.getByRole('button', { name: /top rated/i });
    fireEvent.click(topRated);
    expect(topRated).toHaveAttribute('aria-pressed', 'true');

    // Apply a preset, then confirm only that preset reads "Applied".
    const framerCard = screen
      .getByRole('heading', { name: /framer canvas suite/i })
      .closest('div.group') as HTMLElement;
    fireEvent.click(within(framerCard).getByRole('button', { name: /apply preset/i }));

    fireEvent.click(nav(/presets library/i));
    const applied = screen.getAllByRole('button', { name: /applied/i });
    expect(applied).toHaveLength(1);
    expect(applied[0]).toBeDisabled();
    expect(screen.getAllByRole('button', { name: /apply preset/i })).toHaveLength(
      PRESET_LIBRARY.length - 1
    );

    // Undo puts the layer back; redo re-applies the preset.
    expect(screen.getByRole('button', { name: /undo last change/i })).toBeEnabled();
    fireEvent.keyDown(window, { key: 'z', ctrlKey: true });
    expect(screen.queryAllByRole('button', { name: /applied/i })).toHaveLength(0);
    expect(screen.getAllByRole('button', { name: /apply preset/i })).toHaveLength(
      PRESET_LIBRARY.length
    );

    fireEvent.keyDown(window, { key: 'z', ctrlKey: true, shiftKey: true });
    expect(screen.getAllByRole('button', { name: /applied/i })).toHaveLength(1);

    // The header buttons mirror the stack.
    fireEvent.click(screen.getByRole('button', { name: /undo last change/i }));
    expect(screen.queryAllByRole('button', { name: /applied/i })).toHaveLength(0);
    fireEvent.click(screen.getByRole('button', { name: /redo change/i }));
    expect(screen.getAllByRole('button', { name: /applied/i })).toHaveLength(1);

    // First-run guide is visible, dismisses, and can be brought back from Settings.
    fireEvent.click(nav(/keymap studio/i));
    expect(screen.getByRole('heading', { name: /welcome to grid macro 1/i })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /dismiss welcome guide/i }));
    expect(screen.queryByRole('heading', { name: /welcome to grid macro 1/i })).not.toBeInTheDocument();

    // Settings switches are real switches and persist.
    fireEvent.click(nav(/app settings/i));
    const startup = screen.getByRole('switch', { name: /launch at windows startup/i });
    expect(startup).toHaveAttribute('aria-checked', 'false');
    await act(async () => {
      fireEvent.click(startup);
    });
    expect(startup).toHaveAttribute('aria-checked', 'true');
    expect(JSON.parse(localStorage.getItem(STORAGE_KEYS.settings) || '{}')).toMatchObject({
      launchAtStartup: true,
    });

    fireEvent.click(screen.getByRole('button', { name: /show welcome guide/i }));
    expect(screen.getByRole('heading', { name: /welcome to grid macro 1/i })).toBeInTheDocument();
  }, 20000);
});
