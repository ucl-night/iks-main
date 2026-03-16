import Link from "next/link";

const fallbackVideoId = "SEfs5TJZ6Nk";

type PracticePageProps = {
  searchParams: { video?: string; title?: string };
};

function getSafeVideoId(videoId: string | undefined) {
  return videoId && /^[a-zA-Z0-9_-]{11}$/.test(videoId)
    ? videoId
    : fallbackVideoId;
}

export default function PracticePage({ searchParams }: PracticePageProps) {
  const videoId = getSafeVideoId(searchParams.video);
  const title = searchParams.title || "Guided Exercise";

  return (
    <main>
      <Link href="/" style={{ color: "#2563eb", textDecoration: "none" }}>
        ← Back to exercises
      </Link>
      <h1 style={{ marginTop: "1rem" }}>{title}</h1>
      <p style={{ marginTop: "0.5rem", color: "#475569" }}>
        Follow the embedded session below.
      </p>

      <div className="video-wrapper">
        <iframe
          title={title}
          width="100%"
          height="460"
          src={`https://www.youtube.com/embed/${videoId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </main>
  );
}
