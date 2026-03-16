import Link from "next/link";

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

      {exercises.map((exercise) => (
        <article key={exercise.id} className="exercise-card">
          <h2>{exercise.title}</h2>
          <p style={{ marginTop: "0.5rem", color: "#475569" }}>
            {exercise.description}
          </p>
          <Link
            href={`/practice?video=${exercise.youtubeId}&title=${encodeURIComponent(
              exercise.title,
            )}`}
            className="start-button"
          >
            Start Practice
          </Link>
        </article>
      ))}
    </main>
  );
}
