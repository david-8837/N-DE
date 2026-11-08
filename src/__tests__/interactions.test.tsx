import { describe, it, expect, beforeEach } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

describe('Layer rename and dialog accessibility', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renames the active layer and shows the new name on its tab', () => {
    render(<App />);

    expect(screen.getByRole('button', { name: /base layer|layer 1/i })).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /rename active layer/i }));
    const input = screen.getByRole('textbox', { name: /layer name/i });
    expect(input).toHaveValue('Base Layer');

    fireEvent.change(input, { target: { value: 'Media Keys' } });
    fireEvent.click(screen.getByRole('button', { name: /save layer name/i }));

    expect(screen.queryByRole('textbox', { name: /layer name/i })).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: /media keys/i })).toBeInTheDocument();
  });

  it('cancels a rename with Escape', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: /rename active layer/i }));
    const input = screen.getByRole('textbox', { name: /layer name/i });
    fireEvent.change(input, { target: { value: 'Throwaway' } });
    fireEvent.keyDown(input, { key: 'Escape' });

    expect(screen.queryByRole('textbox', { name: /layer name/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /throwaway/i })).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: /base layer|layer 1/i })).toBeInTheDocument();
  });

  it('opens the icon picker as a modal dialog and closes it with Escape', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: /change key icon/i }));

    const dialog = screen.getByRole('dialog', { name: /choose an icon or emoji/i });
    expect(dialog).toHaveAttribute('aria-modal', 'true');
    expect(screen.getByRole('searchbox', { name: /search icons and emojis/i })).toBeInTheDocument();

    fireEvent.keyDown(document, { key: 'Escape' });
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  }, 20000);
});
