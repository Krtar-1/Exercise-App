import React, { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";

const EXERCISES = [
  { name: "Push Ups", type: "repetition" },
  { name: "Plank", type: "duration" },
  { name: "Running", type: "duration" },
  { name: "Jump Rope", type: "duration" },
  { name: "Sit Ups", type: "repetition" },
  { name: "Squats", type: "repetition" },
];

export default function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  let screen = (
    <div style={styles.card}>
      <h1 style={styles.title}>Carter&apos;s Fitness App</h1>

      <div style={styles.menu}>
        {EXERCISES.map((ex) => (
          <button
            key={ex.name}
            style={styles.menuButton}
            onClick={() => setSelectedExercise(ex)}
          >
            <span>{ex.name}</span>
            <span style={{ opacity: 0.6 }}>&rsaquo;</span>
          </button>
        ))}
      </div>
    </div>
  );

  if (selectedExercise) {
    if (selectedExercise.type === "repetition") {
      screen = (
        <div style={styles.card}>
          <button style={styles.backButton} onClick={() => setSelectedExercise(null)}>
            &larr; Back
          </button>
          <RepetitionExercise name={selectedExercise.name} />
        </div>
      );
    } else {
      screen = (
        <div style={styles.card}>
          <button style={styles.backButton} onClick={() => setSelectedExercise(null)}>
            &larr; Back
          </button>
          <DurationExercise name={selectedExercise.name} />
        </div>
      );
    }
  }

  return <div style={styles.page}>{screen}</div>;
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    padding: 24,
    background: "#f2f2f2",
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
  },
  card: {
    width: 360,
    background: "white",
    borderRadius: 14,
    padding: 18,
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
  },
  title: { margin: "8px 0 16px", textAlign: "center" },
  menu: { display: "flex", flexDirection: "column", gap: 8 },
  menuButton: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 12px",
    borderRadius: 10,
    border: "1px solid #ddd",
    background: "white",
    cursor: "pointer",
    fontSize: 18,
    fontWeight: 600,
  },
  backButton: {
    border: "none",
    background: "transparent",
    cursor: "pointer",
    fontSize: 16,
    marginBottom: 10,
  },
};