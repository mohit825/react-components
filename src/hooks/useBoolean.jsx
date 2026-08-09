import { useState } from "react";
export default function useBoolean(initialValue = false) {
  const [currentBoolean, setCurrentBoolean] = useState(initialValue);

  const setTrue = () => {
    setCurrentBoolean(true);
  };

  const setFalse = () => {
    setCurrentBoolean(false);
  };

  return {
    value: currentBoolean,
    setTrue,
    setFalse,
  };
}
