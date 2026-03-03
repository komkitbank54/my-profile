import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { TikTok } from "@/components/icons/tiktok"
import { PopClicker } from "@/components/heart-button"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen snap-start snap-always flex-col items-start justify-center px-6"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
        {/* Left -- Text content */}
        <div className="flex-1">
          <p className="mb-4 text-sm font-mono tracking-wider text-primary uppercase">
            Full Stack Developer
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-7xl text-balance">
            John Doe
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I build accessible, performant, and modern web experiences. Specializing in JavaScript and the modern web stack from front to back.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              View work
              <ArrowDown className="size-4" />
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Github className="size-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Linkedin className="size-5" />
            </a>
            <a
              href="mailto:hello@johndoe.dev"
              aria-label="Email"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail className="size-5" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <TikTok className="size-5" />
            </a>
          </div>
        </div>

        {/* Right -- Pop Clicker playground */}
        <div className="flex-shrink-0">
          <PopClicker />
        </div>
      </div>
    </section>
  )
}
