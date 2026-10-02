import Link from "next/link";

const experiments = [
  { slug: "01-disclosure", title: "Disclosure" },
  { slug: "02-streaming-text", title: "Streaming text" },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-xl p-8">
      <h1 className="mb-6 text-xl font-medium">de-lab</h1>
      <ul className="space-y-2">
        {experiments.map((e) => (
          <li key={e.slug}>
            <Link href={`/lab/${e.slug}`} className="underline underline-offset-4">
              {e.slug.slice(0, 2)} — {e.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
