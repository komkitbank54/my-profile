import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "DevBoard",
    description:
      "A real-time project management dashboard for development teams with drag-and-drop kanban boards, sprint tracking, and GitHub integration.",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "CodeNote",
    description:
      "A markdown-powered note-taking app built for developers. Features syntax highlighting, code snippets, and full-text search across all notes.",
    tech: ["React", "Node.js", "PostgreSQL", "Redis"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "ShopFlow",
    description:
      "An e-commerce storefront with a headless CMS, Stripe integration, and optimized performance scoring 98+ on Lighthouse.",
    tech: ["Next.js", "Stripe", "Prisma", "Vercel"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "WeatherSync",
    description:
      "A weather application with geolocation, interactive maps, 7-day forecasts, and severe weather alerts powered by real-time APIs.",
    tech: ["React", "TypeScript", "Mapbox", "OpenWeather API"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen snap-start snap-always scroll-mt-16 px-6 py-24 lg:py-32 flex flex-col justify-center">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm font-mono tracking-wider text-primary uppercase mb-10">
          Projects
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/30"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-base font-medium text-foreground">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub repository for ${project.title}`}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Github className="size-4" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Live demo for ${project.title}`}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    <ExternalLink className="size-4" />
                  </a>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground flex-1">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Badge
                    key={t}
                    variant="secondary"
                    className="text-xs font-normal"
                  >
                    {t}
                  </Badge>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
