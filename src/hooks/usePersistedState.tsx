import { Dispatch, SetStateAction, useEffect, useState } from "react";

export function usePersistedState<T>(
  key: string,
  defaultValue: T,
): [T, Dispatch<SetStateAction<T>>] {
  const storageKey = "persistedState." + key;

  const [value, setValue] = useState<T>(() => {
    const storedValue = localStorage.getItem(storageKey);
    return storedValue !== null ? (JSON.parse(storedValue) as T) : defaultValue;
  });

  useEffect(() => {
    if (value !== undefined) {
      localStorage.setItem(storageKey, JSON.stringify(value));
    }
  }, [value, storageKey]);

  return [value, setValue];
}
