import { useEffect, useRef, useState } from 'react';
import { readStorage, writeStorage } from '../utils/storage';

/**
 * useState that survives a reload by mirroring the value into localStorage.
 * Invalid or corrupt payloads fall back to the provided initial value.
 */
export function usePersistentState<T>(
  key: string,
  initialValue: T,
  validate?: (value: unknown) => value is T
) {
  const [value, setValue] = useState<T>(() => readStorage(key, initialValue, validate));
  const keyRef = useRef(key);

  useEffect(() => {
    keyRef.current = key;
    writeStorage(key, value);
  }, [key, value]);

  return [value, setValue] as const;
}
