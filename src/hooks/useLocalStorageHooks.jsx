// export const useLocalStorage = () => {
//   const setLocalStorage = (key, value) => {
//     window.localStorage.setItem(key, value);
//   };

//   const getLocalStorageItem = (key) => {
//     return window.localStorage.getItem(key);
//   };

//   return { setLocalStorage, getLocalStorageItem };
// };

import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  // Get the initial value from localStorage or use the provided initial value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error accessing localStorage", error);
      return initialValue;
    }
  });

  // Function to set value in localStorage and state
  const setLocalStorage = (value) => {
    try {
      // Support functions for dynamic updates
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      // Update state
      setStoredValue(valueToStore);

      // Update localStorage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error("Error setting localStorage", error);
    }
  };

  return [storedValue, setLocalStorage];
};
