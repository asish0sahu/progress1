import React from "react";

const ProgressBar = ({ progress }) => {
  let colorClass = "bg-green-500";

  if (progress < 33) {
    colorClass = "bg-red-500"; // Red for 0-33%
  } else if (progress < 66) {
    colorClass = "bg-yellow-500"; // Yellow for 34-66%
  }

  return (
    <div className="w-full h-8 bg-red-300 rounded-md overflow-hidden relative">
      <div
        className={`h-full transition-all duration-500 ${colorClass}`}
        style={{ width: `${progress}%` }}
      />
      <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
