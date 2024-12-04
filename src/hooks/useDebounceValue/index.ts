import {useEffect, useState} from 'react';

/**
 *
 * Hook for debounce searching input value
 * to use it in search requests
 *
 * @param value - value to debounce
 * @param delay - delay value of debounce
 *
 * @returns debounced value
 *
 */
const useDebouncedValue = (value: string, delay = 350) => {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay], // Only re-call effect if value or delay changes
  );
  return debouncedValue;
};

export default useDebouncedValue;
