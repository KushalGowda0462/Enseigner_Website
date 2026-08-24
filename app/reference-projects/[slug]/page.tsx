import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getReferenceProject, referenceProjects } from "@/data/reference-projects";

export function generateStaticParams() {
  return referenceProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getReferenceProject(slug);

  if (!project) {
    return { title: "Reference Project — Enseigner" };
  }

  return {
    title: `${project.title} — Enseigner`,
    description: project.summary,
  };
}

export default async function ReferenceProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getReferenceProject(slug);

  if (!project) {
    notFound();
  }

  const others = referenceProjects.filter((item) => item.slug !== project.slug);

  return (
    <main className="min-h-screen bg-[#080d16] text-[#dce8f5]">
      <div className="mx-auto max-w-3xl px-5 py-24 sm:px-8">
        <Link
          href="/reference-projects"
          className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#c9a84c] transition hover:text-[#dbb85a]"
        >
          ← Reference Projects
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <span className="bg-[#c9a84c] px-3 py-1 font-mono text-xs font-black uppercase tracking-[0.12em] text-[#080d16]">
            {project.sector}
          </span>
          <span className="text-sm font-black uppercase tracking-[0.06em] text-[#7a90a8]">
            {project.sectorLabel}
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#7a90a8]">
            {project.date}
          </span>
        </div>

        <h1 className="mt-6 text-[clamp(2rem,4vw,3rem)] font-black uppercase leading-tight">
          {project.title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-[#7a90a8]">{project.summary}</p>

        <div className="my-10 h-px bg-[linear-gradient(to_right,#c9a84c,transparent)]" />

        <div className="border border-[rgba(243,210,113,0.35)] bg-[#0c1422] p-7">
          <h2 className="font-mono text-xs font-black uppercase tracking-[0.12em] text-[#c9a84c]">
            At a Glance
          </h2>
          <ul className="mt-4 space-y-3">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-4 text-base leading-7">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-[#c9a84c]" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 space-y-6">
          {project.body.map((paragraph) => (
            <p key={paragraph} className="text-base leading-8 text-[#7a90a8]">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {project.scope.map((item) => (
            <span
              key={item}
              className="border border-[#c9a84c]/25 px-2.5 py-1 font-mono text-xs uppercase tracking-[0.08em] text-[#c9a84c]"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-16 border-t border-[#c9a84c]/15 pt-10">
          <h2 className="font-mono text-xs font-black uppercase tracking-[0.18em] text-[#c9a84c]">
            Other Reference Projects
          </h2>
          <div className="mt-6 space-y-4">
            {others.map((item) => (
              <Link
                key={item.slug}
                href={`/reference-projects/${item.slug}`}
                className="block border border-[#c9a84c]/15 bg-[#0c1422] p-5 transition hover:border-[#c9a84c]/40 hover:bg-[#0f1a28]"
              >
                <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#c9a84c]">
                  {item.sector}
                </span>
                <p className="mt-2 text-base font-black uppercase leading-tight">{item.title}</p>
              </Link>
            ))}
          </div>
        </div>

        <Link
          href="/#contact"
          className="mt-14 inline-flex items-center gap-2 bg-[#c9a84c] px-8 py-4 text-base font-black uppercase tracking-[0.1em] text-[#080d16] transition hover:bg-[#dbb85a]"
        >
          Talk to Enseigner →
        </Link>
      </div>
    </main>
  );
}
