const exercises = [
  {
    id: "breathing-1",
    title: "Deep Breathing",
    description: "A calming 5 minute breathing flow for stress relief.",
    youtubeId: "SEfs5TJZ6Nk",
  },
  {
    id: "stretch-1",
    title: "Morning Stretch",
    description: "Gentle full body stretch routine for beginners.",
    youtubeId: "g_tea8ZNk5A",
  },
];

export default function Home() {
  return (
    <main>
      <h1>Recommended Exercises</h1>
      <p style={{ marginTop: "0.75rem", color: "#475569" }}>
        Click <strong>Start Practice</strong> to open the embedded YouTube guided
        session.
      </p>

      {exercises.map((exercise) => {
        const query = new URLSearchParams({
          video: exercise.youtubeId,
          title: exercise.title,
        }).toString();

        return (
          <article key={exercise.id} className="exercise-card">
            <h2>{exercise.title}</h2>
            <p style={{ marginTop: "0.5rem", color: "#475569" }}>
              {exercise.description}
            </p>
            <a href={`/practice?${query}`} className="start-button">
              Start Practice
            </a>
          </article>
        );
      })}
    </main>
  );
}
