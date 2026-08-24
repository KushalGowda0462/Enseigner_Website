import type { Metadata } from "next";
import Link from "next/link";
import { referenceProjects } from "@/data/reference-projects";

export const metadata: Metadata = {
  title: "Reference Projects — Enseigner",
  description:
    "Enterprise delivery track record across banking, government, ports and logistics, and retail — the India delivery backbone behind Enseigner's GCC practice.",
};

export default function ReferenceProjectsPage() {
  return (
    <main className="min-h-screen bg-[#080d16] text-[#dce8f5]">
      <div className="mx-auto max-w-5xl px-5 py-24 sm:px-8">
        <Link
          href="/"
          className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#c9a84c] transition hover:text-[#dbb85a]"
        >
          ← Enseigner
        </Link>

        <h1 className="mt-8 text-[clamp(2.5rem,5vw,4rem)] font-black uppercase leading-none">
          Reference <span className="text-[#c9a84c]">Projects</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-[#7a90a8]">
          Twelve years of enterprise delivery across banking, government, ports and logistics,
          healthcare, retail, and industrial environments. Each engagement below is the execution
          record that underwrites Enseigner&apos;s work for GCC enterprises today.
        </p>

        <div className="mt-16 space-y-px bg-[rgba(243,210,113,0.5)]">
          {referenceProjects.map((project) => (
            <article key={project.slug} className="bg-[#0c1422] p-8 transition hover:bg-[#0f1a28] md:p-10">
              <div className="flex flex-wrap items-center gap-4">
                <span className="bg-[#c9a84c] px-3 py-1 font-mono text-xs font-black uppercase tracking-[0.12em] text-[#080d16]">
                  {project.sector}
                </span>
                <span className="text-sm font-black uppercase tracking-[0.06em] text-[#7a90a8]">
                  {project.sectorLabel}
                </span>
              </div>

              <h2 className="mt-5 text-2xl font-black uppercase leading-tight">
                <Link href={`/reference-projects/${project.slug}`} className="transition hover:text-[#c9a84c]">
                  {project.title}
                </Link>
              </h2>

              <p className="mt-4 max-w-3xl text-base leading-7 text-[#7a90a8]">{project.summary}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.scope.map((item) => (
                  <span
                    key={item}
                    className="border border-[#c9a84c]/25 px-2.5 py-1 font-mono text-xs uppercase tracking-[0.08em] text-[#c9a84c]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <Link
                href={`/reference-projects/${project.slug}`}
                className="mt-7 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.1em] text-[#c9a84c] transition hover:text-[#dbb85a]"
              >
                Read the project →
              </Link>
            </article>
          ))}
        </div>

        <p className="mt-12 text-sm leading-6 text-[#7a90a8]">
          More reference projects are added as write-ups are completed.
        </p>
      </div>
    </main>
  );
}
