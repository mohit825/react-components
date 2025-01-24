import React, { useEffect, useState } from "react";

const Timer = () => {
  const [hour, setHour] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);

  const [isSubmit, setIsSubmit] = useState(false);

  const OnSubmitBtnClicked = () => {
    setIsSubmit(true);
  };

  useEffect(() => {
    let interval;
    if (isSubmit) {
      interval = setInterval(() => {
        if (secs > 0) {
          setSecs(secs - 1);
        }
      }, 1000);
    }
  }, [isSubmit]);

  return (
    <div className="flex justify-center gap-2 mt-4">
      {!isSubmit ? (
        <input
          type="number"
          value={hour}
          onChange={(e) => setHour(e.target.value)}
          className="border border-black"
        />
      ) : (
        <p>{hour}</p>
      )}
      <span>:</span>
      {!isSubmit ? (
        <input
          type="number"
          value={mins}
          onChange={(e) => setMins(e.target.value)}
          className="border border-black"
        />
      ) : (
        <p>{mins}</p>
      )}
      <span>:</span>
      {!isSubmit ? (
        <input
          type="number"
          value={secs}
          onChange={(e) => setSecs(e.target.value)}
          className="border border-black"
        />
      ) : (
        <p>{secs}</p>
      )}

      {!isSubmit ? (
        <button
          className="border bg-slate-200 p-3"
          onClick={OnSubmitBtnClicked}
        >
          Submit
        </button>
      ) : (
        <>
          <button
            className="border bg-slate-200 p-3"
            onClick={OnSubmitBtnClicked}
          >
            Reset
          </button>
          <button
            className="border bg-slate-200 p-3"
            onClick={OnSubmitBtnClicked}
          >
            Pause
          </button>
        </>
      )}
    </div>
  );
};

export default Timer;
