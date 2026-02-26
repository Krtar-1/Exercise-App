import React, { useState } from "react";

export default function RepetitionExercise({ name }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: 6 }}>{name.toUpperCase()}</h2>

      <div style={styles.placeholder} />

      <div style={styles.bigNumber}>{count}</div>

      <button style={styles.button} onClick={() => setCount((c) => c + 1)}>
        + Add Rep
      </button>

      <button style={styles.button} onClick={() => setCount(0)}>
        Reset
      </button>
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
    fontSize: 64,
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
};