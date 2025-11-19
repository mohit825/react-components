import "./progressBar.css";

export const ProgressBar = ({ fillColor = "#0d6efd", completed = 20 }) => {
  const clampedValue = Math.max(Math.min(completed, 100), 0);
  return (
    <div className="progress" tabIndex={0}>
      <div
        className="progress-bar"
        style={{ width: `${clampedValue}%`, backgroundColor: fillColor }}
        role="progressbar"
        aria-valuenow={clampedValue}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Progress: ${clampedValue}%`}
      >
        <div className="center"> {clampedValue}%</div>
      </div>
    </div>
  );
};
