import { useState, useRef } from "react";

// initialTime => 30 to 0
// mechanism to start the timer
// reset the timer

const useTimer = ({ initialTime, onFinish }) => {
  // 30
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const timerId = useRef();

  const startTimer = () => {
    timerId.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerId.current);
          timerId.current = null;
          onFinish?.();

          return 0;
        }

        return t - 1;
      });
    }, 1000);
  };

  const resetTimer = () => {
    setTimeLeft(initialTime);
    timerId.current = null;
  };

  return {
    timeLeft,
    startTimer,
    resetTimer,
  };
};

export default useTimer;
