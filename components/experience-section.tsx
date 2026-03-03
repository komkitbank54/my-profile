import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

const experiences = [
  {
    period: "2023 — Present",
    title: "Senior Full Stack Engineer",
    company: "Acme Corp",
    url: "https://example.com",
    description:
      "Lead development of the core product platform, building performant React frontends and scalable Node.js microservices. Architected a real-time collaboration system serving 50k+ users.",
    tech: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "Redis"],
  },
  {
    period: "2021 — 2023",
    title: "Full Stack Developer",
    company: "StartupXYZ",
    url: "https://example.com",
    description:
      "Built and maintained multiple client-facing web applications from the ground up. Implemented CI/CD pipelines, automated testing, and reduced page load times by 40%.",
    tech: ["React", "Express", "MongoDB", "Docker", "AWS"],
  },
  {
    period: "2020 — 2021",
    title: "Frontend Developer",
    company: "Digital Agency Co",
    url: "https://example.com",
    description:
      "Developed responsive, accessible websites and web applications for diverse clients. Collaborated closely with designers to deliver pixel-perfect interfaces.",
    tech: ["JavaScript", "React", "Tailwind CSS", "GraphQL", "Figma"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="min-h-screen snap-start snap-always scroll-mt-16 px-6 py-24 lg:py-32 flex flex-col justify-center">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm font-mono tracking-wider text-primary uppercase mb-10">
          Experience
        </h2>

        <div className="flex flex-col gap-0">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="group grid gap-4 rounded-lg p-6 transition-colors hover:bg-card lg:grid-cols-[180px_1fr]"
            >
              <p className="text-sm text-muted-foreground pt-1 whitespace-nowrap">
                {exp.period}
              </p>

              <div>
                <h3 className="text-base font-medium text-foreground">
                  {exp.title}{" "}
                  <span className="text-muted-foreground">{"·"}</span>{" "}
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-foreground transition-colors hover:text-primary"
                  >
                    {exp.company}
                    <ExternalLink className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <Badge
                      key={t}
                      variant="secondary"
                      className="text-xs font-normal"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
