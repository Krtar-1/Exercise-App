import React, { useState } from "react";

export default function RepetitionExercise() {
  const [count, setCount] = useState(0);

  return (
    <div className="exercise-layout">
      <div className="exercise-media" aria-hidden="true" />

      <div className="exercise-value">{count}</div>

      <button
        className="action-button"
        onClick={() => setCount((currentCount) => currentCount + 1)}
      >
        + Add Rep
      </button>

      <button className="action-button" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}