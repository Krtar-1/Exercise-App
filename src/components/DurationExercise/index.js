import React, { useEffect, useRef, useState } from "react";

const COUNTDOWN_START = 60;

function pad2(value) {
  return String(value).padStart(2, "0");
}

function formatMMSS(totalSeconds) {
  const safeSeconds = Math.max(totalSeconds, 0);
  const minutes = Math.floor(safeSeconds / 60);
  const seconds = safeSeconds % 60;
  return `${pad2(minutes)}:${pad2(seconds)}`;
}

export default function DurationExercise({ name }) {
  const [mode, setMode] = useState("up");
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!running) {
      return undefined;
    }

    intervalRef.current = setInterval(() => {
      setSeconds((currentSeconds) => {
        if (mode === "up") {
          return currentSeconds + 1;
        }

        if (currentSeconds <= 1) {
          setRunning(false);
          return 0;
        }

        return currentSeconds - 1;
      });
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, [running, mode]);

  useEffect(() => {
    setRunning(false);
    setSeconds(mode === "up" ? 0 : COUNTDOWN_START);
  }, [mode]);

  const handleStart = () => {
    if (mode === "down" && seconds === 0) {
      setSeconds(COUNTDOWN_START);
    }
    setRunning(true);
  };

  const handleStop = () => {
    setRunning(false);
  };

  const handleReset = () => {
    setRunning(false);
    setSeconds(mode === "up" ? 0 : COUNTDOWN_START);
  };

  return (
    <div className="exercise-layout">
      <div className="exercise-media" aria-hidden="true" />

      <div className="exercise-value">{formatMMSS(seconds)}</div>

      <button className="action-button" onClick={handleStart}>
        Start
      </button>

      <button className="action-button" onClick={handleStop}>
        Stop
      </button>

      <hr className="divider" />

      <p className="mode-title">Count Mode</p>

      <label className="mode-option">
        <input
          type="radio"
          name={`${name}-mode`}
          value="up"
          checked={mode === "up"}
          onChange={() => setMode("up")}
        />
        <span>Count Up</span>
      </label>

      <label className="mode-option">
        <input
          type="radio"
          name={`${name}-mode`}
          value="down"
          checked={mode === "down"}
          onChange={() => setMode("down")}
        />
        <span>Count Down</span>
      </label>

      <hr className="divider" />

      <p className="helper-text">
        Count down starts from {formatMMSS(COUNTDOWN_START)}.
      </p>

      <button className="action-button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}