"use client";

import { useState } from "react";

type ExerciseRecommendation = {
  id: string;
  problem: string;
  solution: string;
  youtubeId: string;
};

const recommendations: ExerciseRecommendation[] = [
  {
    id: "stress",
    problem: "I feel stressed and anxious.",
    solution: "Do a 5-minute guided deep breathing practice.",
    youtubeId: "SEfs5TJZ6Nk",
  },
  {
    id: "stiffness",
    problem: "My body feels stiff in the morning.",
    solution: "Follow a gentle full body stretching routine.",
    youtubeId: "g_tea8ZNk5A",
  },
  {
    id: "focus",
    problem: "I am struggling to focus.",
    solution: "Try a short mindful movement + breath session.",
    youtubeId: "inpok4MKVLM",
  },
];

export default function Home() {
  const [selected, setSelected] = useState<ExerciseRecommendation | null>(null);

  return (
    <main>
      <h1>Problem-based Exercise Suggestions</h1>
      <p style={{ marginTop: "0.75rem", color: "#475569" }}>
        Press <strong>Start Practice</strong> and we will open the embedded
        YouTube practice video related to that problem/solution.
      </p>

      {recommendations.map((item) => (
        <article key={item.id} className="exercise-card">
          <h2>Problem: {item.problem}</h2>
          <p className="solution-text">Solution: {item.solution}</p>
          <button
            type="button"
            className="start-button"
            onClick={() => setSelected(item)}
          >
            Start Practice
          </button>
        </article>
      ))}

      {selected ? (
        <section className="practice-panel" aria-live="polite">
          <h2>Now Practicing</h2>
          <p className="solution-text">
            <strong>Problem:</strong> {selected.problem}
          </p>
          <p className="solution-text">
            <strong>Solution:</strong> {selected.solution}
          </p>
          <div className="video-wrapper">
            <iframe
              title={`Practice for ${selected.problem}`}
              width="100%"
              height="460"
              src={`https://www.youtube.com/embed/${selected.youtubeId}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>
      ) : null}
    </main>
  );
}
