import React from "react";

const Booking = ({
  label,
  seatsRow,
  seatsColumn,
  selected,
  onGridClickHandler,
}) => {
  const seatsRowArr = new Array(seatsRow).fill(1);
  const seatsColArr = new Array(seatsColumn).fill(1);

  const isSeatBooked = (key, row, col) => {
    return selected && selected[`${key}-${row}-${col}`];
  };
  return (
    <div className="flex flex-col justify-center items-center my-4">
      <p className="text-lg font-mono font-bold">{label}</p>
      <div className="flex flex-col gap-3">
        {seatsRowArr.map((row, i) => {
          return (
            <div key={i} className={`flex  justify-center  cursor-pointer`}>
              {seatsColArr.map((col, j) => {
                return (
                  <div
                    key={j}
                    className={`${
                      isSeatBooked(label.toLowerCase(), i + 1, j + 1)
                        ? "bg-red-400"
                        : "bg-green-400"
                    } w-10 h-10  flex justify-center items-center cursor-pointer gap-6`}
                    onClick={() =>
                      onGridClickHandler(label.toLowerCase(), i + 1, j + 1)
                    }
                  >
                    {j + 1}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Booking;
