import React, { useState } from "react";
import "./App.css";
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

  return (
    <div className="app-shell">
      <div className="phone">
        {!selectedExercise ? (
          <>
            <header className="top-bar top-bar--center">
              <h1 className="app-title">Carter&apos;s Fitness App</h1>
            </header>

            <main className="screen screen--menu">
              <section className="menu-card">
                {EXERCISES.map((exercise) => (
                  <button
                    key={exercise.name}
                    className="menu-item"
                    onClick={() => setSelectedExercise(exercise)}
                  >
                    <span className="menu-item__label">{exercise.name}</span>
                    <span className="menu-item__arrow">&#8250;</span>
                  </button>
                ))}
              </section>
            </main>
          </>
        ) : (
          <>
            <header className="top-bar">
              <button
                className="back-button"
                onClick={() => setSelectedExercise(null)}
                aria-label="Go back"
              >
                &#8592;
              </button>

              <h2 className="screen-title">
                {selectedExercise.name.toUpperCase()}
              </h2>

              <div className="top-bar-spacer" />
            </header>

            <main className="screen">
              {selectedExercise.type === "repetition" ? (
                <RepetitionExercise name={selectedExercise.name} />
              ) : (
                <DurationExercise name={selectedExercise.name} />
              )}
            </main>
          </>
        )}
      </div>
    </div>
  );
}