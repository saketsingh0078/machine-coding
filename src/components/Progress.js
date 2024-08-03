import React, { useEffect, useState, useRef } from "react";

export const Progress = () => {
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timerId = useRef(null);

  const startProgress = () => {
    if (isRunning || progress >= 100) return;
    setIsRunning(true);
    setIsPaused(false);
    timerId.current = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 200);
  };

  const stopProgress = () => {
    clearInterval(timerId.current);
    setIsRunning(false);
    setProgress(0);
  };

  const pauseProgress = () => {
    if (!isRunning) return;
    clearInterval(timerId.current);
    setIsPaused(true);
    setIsRunning(false);
  };

  const resumeProgress = () => {
    if (isRunning || !isPaused) return;
    setIsRunning(true);
    setIsPaused(false);
    timerId.current = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 200);
  };

  const resetProgress = () => {
    clearInterval(timerId.current);
    setIsRunning(false);
    setIsPaused(false);
    setProgress(0);
  };

  useEffect(() => {
    return () => clearInterval(timerId.current);
  }, []);

  return (
    <div className="flex flex-col gap-20 items-center">
      <div className="flex justify-center w-screen mt-20">
        <div className="w-[300px] h-[10px] bg-gray-300 rounded-lg overflow-hidden">
          <div
            className="bg-green-600 h-full rounded-lg"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <div className="flex gap-8">
        <button onClick={startProgress} className="bg-slate-500 p-2 rounded-lg">
          Start
        </button>
        <button onClick={stopProgress} className="bg-slate-500 p-2 rounded-lg">
          Stop
        </button>
        <button onClick={pauseProgress} className="bg-slate-500 p-2 rounded-lg">
          Pause
        </button>
        <button
          onClick={resumeProgress}
          className="bg-slate-500 p-2 rounded-lg"
        >
          Resume
        </button>
        <button onClick={resetProgress} className="bg-slate-500 p-2 rounded-lg">
          Reset
        </button>
      </div>
    </div>
  );
};
