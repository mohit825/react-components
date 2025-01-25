import React from "react";

const Pagination = ({
  totalPages,
  currentPage,
  onPrevButtonHandler,
  onNextButtonHandler,
  onPageSelectHandler,
}) => {
  let pagesBtnArr = new Array(totalPages).fill(0);
  return (
    <div className="flex justify-center">
      <span
        className={`w-10 h-10 border flex justify-center items-center  ${
          currentPage === 1
            ? "cursor-not-allowed bg-slate-200"
            : "cursor-pointer bg-slate-400"
        }`}
        onClick={onPrevButtonHandler}
      >
        ◀️
      </span>
      {pagesBtnArr.map((_, i) => {
        return (
          <span
            key={i}
            onClick={() => onPageSelectHandler(i + 1)}
            className={`w-10 h-10 border flex justify-center items-center cursor-pointer ${
              currentPage === i + 1 ? "bg-green-400" : "bg-slate-400"
            }`}
          >
            {i + 1}
          </span>
        );
      })}
      <span
        className={`w-10 h-10 border flex justify-center items-center  ${
          currentPage === totalPages
            ? "cursor-not-allowed bg-slate-200"
            : "cursor-pointer bg-slate-400"
        }`}
        onClick={onNextButtonHandler}
      >
        ▶️
      </span>
    </div>
  );
};

export default Pagination;
