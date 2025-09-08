// src/app/projects/page.tsx
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold">Projects</h1>

      <ul className="mt-6 list-disc pl-6 space-y-2">
        {projects.map((p) => (
          <li key={p.slug}>{p.title}</li>
        ))}
      </ul>
    </main>
  );
}
