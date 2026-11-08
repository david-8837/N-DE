import { describe, it, expect } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import {
  DEFAULT_HISTORY_LIMIT,
  canRedo,
  canUndo,
  emptyHistory,
  recordSnapshot,
  redoStep,
  undoStep,
} from '../utils/history';
import { useDocumentHistory } from '../hooks/useDocumentHistory';

type Doc = { value: string };

describe('Undo/redo stack', () => {
  it('starts empty and records snapshots', () => {
    let history = emptyHistory<Doc>();
    expect(canUndo(history)).toBe(false);
    expect(canRedo(history)).toBe(false);

    history = recordSnapshot(history, { value: 'a' });
    expect(canUndo(history)).toBe(true);
    expect(history.past).toEqual([{ value: 'a' }]);
  });

  it('undoes and redoes in order', () => {
    let history = recordSnapshot(recordSnapshot(emptyHistory<Doc>(), { value: 'a' }), {
      value: 'b',
    });

    const undone = undoStep(history, { value: 'c' })!;
    expect(undone.value).toEqual({ value: 'b' });
    history = undone.history;

    const redone = redoStep(history, undone.value)!;
    expect(redone.value).toEqual({ value: 'c' });

    const last = undoStep(redone.history, redone.value)!;
    const first = undoStep(last.history, last.value)!;
    expect(first.value).toEqual({ value: 'a' });
    expect(undoStep(first.history, first.value)).toBeNull();
  });

  it('drops the redo branch when a new edit lands', () => {
    const undoable = recordSnapshot(emptyHistory<Doc>(), { value: 'a' });
    const undone = undoStep(undoable, { value: 'b' })!;
    expect(canRedo(undone.history)).toBe(true);

    const branched = recordSnapshot(undone.history, undone.value);
    expect(canRedo(branched)).toBe(false);
    expect(redoStep(branched, { value: 'c' })).toBeNull();
  });

  it('caps the stack at the configured limit', () => {
    let history = emptyHistory<Doc>();
    for (let i = 0; i < 10; i += 1) {
      history = recordSnapshot(history, { value: String(i) }, 3);
    }
    expect(history.past).toHaveLength(3);
    expect(history.past[history.past.length - 1]).toEqual({ value: '9' });
    expect(DEFAULT_HISTORY_LIMIT).toBeGreaterThan(3);
  });
});

describe('useDocumentHistory', () => {
  it('applies undo and redo values and exposes availability', () => {
    let doc: Doc = { value: 'current' };
    const { result, rerender } = renderHook(() =>
      useDocumentHistory<Doc>(doc, (next) => {
        doc = next;
      }, { coalesceMs: 0 })
    );

    expect(result.current.canUndo).toBe(false);

    act(() => result.current.record({ value: 'before' }));
    rerender();
    expect(result.current.canUndo).toBe(true);
    expect(result.current.canRedo).toBe(false);

    act(() => {
      result.current.undo();
    });
    expect(doc).toEqual({ value: 'before' });
    rerender();
    expect(result.current.canRedo).toBe(true);

    act(() => {
      result.current.redo();
    });
    expect(doc).toEqual({ value: 'current' });
  });

  it('coalesces rapid edits that share a key', () => {
    let doc: Doc = { value: 'x' };
    const { result, rerender } = renderHook(() =>
      useDocumentHistory<Doc>(doc, (next) => {
        doc = next;
      }, { coalesceMs: 5000 })
    );

    act(() => result.current.record({ value: 'first' }, 'rename'));
    rerender();
    act(() => result.current.record({ value: 'second' }, 'rename'));
    rerender();

    // One step only: the snapshot from before the first keystroke.
    expect(result.current.undoDepth).toBe(1);
    act(() => {
      result.current.undo();
    });
    expect(doc).toEqual({ value: 'first' });
  });
});
