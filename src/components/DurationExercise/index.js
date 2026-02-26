import React, { useEffect, useRef, useState } from "react";

function pad2(n) {
  return String(n).padStart(2, "0");
}

function formatMMSS(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${pad2(minutes)}:${pad2(seconds)}`;
}

export default function DurationExercise({ name }) {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    // start or stop interval based on `running`
    if (running) {
      intervalRef.current = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    }

    // cleanup when running changes or component unmounts
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, [running]);

  const handleStart = () => setRunning(true);
  const handleStop = () => setRunning(false);

  const handleReset = () => {
    setRunning(false);
    setSeconds(0);
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: 6 }}>{name.toUpperCase()}</h2>

      <div style={styles.placeholder} />

      <div style={styles.bigNumber}>{formatMMSS(seconds)}</div>

      {!running ? (
        <button style={styles.button} onClick={handleStart}>
          Start
        </button>
      ) : (
        <button style={styles.button} onClick={handleStop}>
          Stop
        </button>
      )}

      <button style={styles.button} onClick={handleReset}>
        Reset
      </button>

      <div style={styles.note}>
        Digits are padded (example: 01:05 instead of 1:5).
      </div>
    </div>
  );
}

const styles = {
  placeholder: {
    height: 140,
    background: "#e9e9e9",
    borderRadius: 12,
    margin: "14px 0",
  },
  bigNumber: {
    textAlign: "center",
    fontSize: 54,
    fontWeight: 500,
    margin: "10px 0 18px",
  },
  button: {
    width: "100%",
    padding: "12px 10px",
    borderRadius: 10,
    border: "1px solid #bbb",
    background: "white",
    cursor: "pointer",
    fontSize: 18,
    marginBottom: 10,
  },
  note: {
    fontSize: 12,
    opacity: 0.7,
    marginTop: 6,
    textAlign: "center",
  },
};