import { useEffect, useRef, useState } from "react";

export const OTPBox = ({ text = "Validate OTP", otpLength = 6 }) => {
  const [otpInput, setOtpInput] = useState(new Array(otpLength).fill(""));

  const inputRefArr = useRef([]);

  useEffect(() => {
    inputRefArr?.current[0]?.focus();
  }, []);

  const handleOtpChange = (number, index) => {
    if (isNaN(number)) return;
    const newValue = number.trim();
    const newArr = [...otpInput];
    newArr[index] = newValue.slice(-1);
    setOtpInput(newArr);
    newValue && inputRefArr.current[index + 1]?.focus();
  };

  const onKeyPressed = (e, index) => {
    if (e.key === "Backspace" && !e.target.value) {
      inputRefArr.current[index - 1]?.focus();
    }
  };

  return (
    <div className="text-center">
      <h3>{text}</h3>

      {otpInput.map((box, index) => {
        return (
          <input
            type="text"
            className="border 2px solid black w-12 h-12 text-3xl text-center mt-2 mr-2"
            key={index}
            value={otpInput[index]}
            onChange={(e) => handleOtpChange(e.target.value, index)}
            ref={(input) => {
              return (inputRefArr.current[index] = input);
            }}
            onKeyDown={(e) => onKeyPressed(e, index)}
          />
        );
      })}
    </div>
  );
};
