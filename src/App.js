import React, { useState, useEffect } from "react";
import ProgressBar from "./Progressbar";

const App = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress < 100 ? prevProgress + 10 : 0
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4"> Progress Bar</h1>
      <ProgressBar progress={progress} />
    </div>
  );
};

export default App;
