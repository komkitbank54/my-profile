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
              I&apos;m a full stack developer passionate about crafting polished, pixel-perfect user interfaces that blend thoughtful design with robust engineering.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              With deep expertise in the JavaScript ecosystem, I build everything from interactive front-end experiences with React and Next.js to scalable backend services with Node.js and Express. I care deeply about performance, accessibility, and clean code architecture.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              When I&apos;m not coding, you&apos;ll find me contributing to open-source projects, writing technical articles, or exploring new web technologies. I believe great software comes from empathy for users and attention to detail.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="text-sm font-medium text-foreground mb-4">Quick Facts</h3>
              <dl className="flex flex-col gap-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Location</dt>
                  <dd className="text-foreground">Bangkok Test</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Experience</dt>
                  <dd className="text-foreground">{"5+ years"}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Focus</dt>
                  <dd className="text-foreground">Full Stack JS</dd>
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
