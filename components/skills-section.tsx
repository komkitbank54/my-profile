import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "Redux"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "NestJS", "REST APIs", "GraphQL", "Prisma"],
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Firebase"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "Docker", "CI/CD", "Vercel", "AWS", "Linux"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen snap-start snap-always scroll-mt-16 px-6 py-24 lg:py-32 flex flex-col justify-center">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm font-mono tracking-wider text-primary uppercase mb-10">
          Skills & Tech Stack
        </h2>

        <div className="grid gap-8 sm:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-lg border border-border bg-card p-6"
            >
              <h3 className="text-sm font-medium text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-xs font-normal"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
