import { Dispatch, SetStateAction, useEffect, useState } from "react";

export function usePersistedState<T>(
  key: string,
): [T | undefined, Dispatch<SetStateAction<T | undefined>>];
export function usePersistedState<T>(
  key: string,
  defaultValue: T,
): [T, Dispatch<SetStateAction<T>>];
export function usePersistedState<T>(
  key: string,
  defaultValue?: T,
): [T | undefined, Dispatch<SetStateAction<T | undefined>>] {
  const storageKey = "persistedState." + key;
  const [value, setValue] = useState<T | undefined>(() => {
    const storedValue = localStorage.getItem(storageKey);
    return storedValue !== null ? (JSON.parse(storedValue) as T) : defaultValue;
  });

  // Persist value
  useEffect(() => {
    if (value !== undefined) {
      localStorage.setItem(storageKey, JSON.stringify(value));
    }
  }, [value, storageKey]);

  return [value, setValue];
}
