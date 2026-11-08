import { useCallback, useReducer, useRef } from 'react';
import {
  DEFAULT_HISTORY_LIMIT,
  History,
  canRedo,
  canUndo,
  emptyHistory,
  recordSnapshot,
  redoStep,
  undoStep,
} from '../utils/history';

export interface DocumentHistoryOptions {
  limit?: number;
  /** Consecutive edits sharing a key merge into one undo step within this window. */
  coalesceMs?: number;
}

function clone<T>(value: T): T {
  try {
    return JSON.parse(JSON.stringify(value)) as T;
  } catch {
    return value;
  }
}

/**
 * Undo/redo for a plain-JSON document. Call `record(snapshot, key?)` *before*
 * mutating; `key` coalesces rapid same-field edits (e.g. typing a layer name)
 * into a single undo step.
 */
export function useDocumentHistory<T>(
  current: T,
  apply: (next: T) => void,
  options: DocumentHistoryOptions = {}
) {
  const limit = options.limit ?? DEFAULT_HISTORY_LIMIT;
  const coalesceMs = options.coalesceMs ?? 800;

  const historyRef = useRef<History<T>>(emptyHistory<T>());
  const currentRef = useRef(current);
  const applyRef = useRef(apply);
  const lastRecordRef = useRef<{ key: string; at: number } | null>(null);
  const [, forceRender] = useReducer((n: number) => n + 1, 0);

  currentRef.current = current;
  applyRef.current = apply;

  const record = useCallback(
    (snapshot: T, coalesceKey?: string) => {
      const now = Date.now();
      if (
        coalesceKey &&
        lastRecordRef.current &&
        lastRecordRef.current.key === coalesceKey &&
        now - lastRecordRef.current.at < coalesceMs
      ) {
        lastRecordRef.current = { key: coalesceKey, at: now };
        return;
      }
      lastRecordRef.current = coalesceKey ? { key: coalesceKey, at: now } : null;
      historyRef.current = recordSnapshot(historyRef.current, clone(snapshot), limit);
      forceRender();
    },
    [coalesceMs, limit]
  );

  const undo = useCallback((): boolean => {
    const step = undoStep(historyRef.current, clone(currentRef.current), limit);
    if (!step) return false;
    historyRef.current = step.history;
    lastRecordRef.current = null;
    applyRef.current(step.value);
    forceRender();
    return true;
  }, [limit]);

  const redo = useCallback((): boolean => {
    const step = redoStep(historyRef.current, clone(currentRef.current), limit);
    if (!step) return false;
    historyRef.current = step.history;
    lastRecordRef.current = null;
    applyRef.current(step.value);
    forceRender();
    return true;
  }, [limit]);

  const reset = useCallback(() => {
    historyRef.current = emptyHistory<T>();
    lastRecordRef.current = null;
    forceRender();
  }, []);

  return {
    record,
    undo,
    redo,
    reset,
    canUndo: canUndo(historyRef.current),
    canRedo: canRedo(historyRef.current),
    undoDepth: historyRef.current.past.length,
    redoDepth: historyRef.current.future.length,
  };
}
