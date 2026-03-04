export function AboutSection() {
  return (
    <section id="about" className="min-h-screen snap-start snap-always scroll-mt-16 px-6 py-24 lg:py-32 flex flex-col justify-center">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm font-mono tracking-wider text-primary uppercase mb-10">
          About
        </h2>

        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3 flex flex-col gap-6">
            <p className="text-lg leading-relaxed text-foreground">
              I&apos;m a Software developer who enjoys building things that work.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Currently working as a Software Developer with 1+ year of experience in the JavaScript ecosystem. I focus on building clean web applications while actively expanding my skills into backend technologies to become a stronger developer.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Beyond work, I am constantly upskilling in new technologies and personal project. I value continuous improvement and I am eager to contribute to a team that challenges me to grow.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="text-sm font-medium text-foreground mb-4">Quick Facts</h3>
              <dl className="flex flex-col gap-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Location</dt>
                  <dd className="text-foreground">Bangkok</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Experience</dt>
                  <dd className="text-foreground">{"1+ years"}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Focus</dt>
                  <dd className="text-foreground">Full Stack</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Open to</dt>
                  <dd className="text-primary">Opportunities</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
