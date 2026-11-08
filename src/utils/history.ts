export interface History<T> {
  past: T[];
  future: T[];
}

export const DEFAULT_HISTORY_LIMIT = 50;

export function emptyHistory<T>(): History<T> {
  return { past: [], future: [] };
}

export function canUndo<T>(history: History<T>): boolean {
  return history.past.length > 0;
}

export function canRedo<T>(history: History<T>): boolean {
  return history.future.length > 0;
}

/**
 * Records the state *before* a mutation. Any new edit invalidates the redo
 * branch, which is what users expect from an editor undo stack.
 */
export function recordSnapshot<T>(
  history: History<T>,
  snapshot: T,
  limit: number = DEFAULT_HISTORY_LIMIT
): History<T> {
  const past = [...history.past, snapshot];
  return {
    past: past.slice(Math.max(0, past.length - limit)),
    future: [],
  };
}

export function undoStep<T>(
  history: History<T>,
  current: T,
  limit: number = DEFAULT_HISTORY_LIMIT
): { history: History<T>; value: T } | null {
  if (history.past.length === 0) return null;
  const value = history.past[history.past.length - 1];
  return {
    history: {
      past: history.past.slice(0, -1),
      future: [current, ...history.future].slice(0, limit),
    },
    value,
  };
}

export function redoStep<T>(
  history: History<T>,
  current: T,
  limit: number = DEFAULT_HISTORY_LIMIT
): { history: History<T>; value: T } | null {
  if (history.future.length === 0) return null;
  const [value, ...rest] = history.future;
  return {
    history: {
      past: [...history.past, current].slice(-limit),
      future: rest,
    },
    value,
  };
}
