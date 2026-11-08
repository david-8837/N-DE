import { describe, it, expect, beforeEach } from 'vitest';
import { fireEvent, render, screen, within } from '@testing-library/react';
import App from '../App';
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

  it('renders the keymap, persists edits and keeps the applied preset accurate', () => {
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
    expect(screen.getAllByRole('button', { name: /apply preset/i })).toHaveLength(3);

    // Settings switches are real switches and persist.
    fireEvent.click(nav(/app settings/i));
    const startup = screen.getByRole('switch', { name: /launch at windows startup/i });
    expect(startup).toHaveAttribute('aria-checked', 'false');
    fireEvent.click(startup);
    expect(startup).toHaveAttribute('aria-checked', 'true');
    expect(JSON.parse(localStorage.getItem(STORAGE_KEYS.settings) || '{}')).toMatchObject({
      launchAtStartup: true,
    });
  }, 20000);
});
