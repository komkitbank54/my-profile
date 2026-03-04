import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { TikTok } from "@/components/icons/tiktok"
import { EngagementBar } from "./view-button"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen snap-start snap-always flex-col items-start justify-center px-6"
    >
      <div className="mx-auto w-full max-w-5xl">
        <p className="mb-4 text-sm font-mono tracking-wider text-primary uppercase">
          Full Stack Developer
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-7xl text-balance">
          Komkit
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          I build accessible, performant, and modern web experiences. Specializing in JavaScript and the modern web stack from front to back.
        </p>

        <div className="mt-10 flex items-center gap-5">
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
          <EngagementBar viewCount={5000} initialLikeCount={99} />
        </div>

        <div className="mt-12 flex items-center gap-5">
          <a
            href="https://github.com/komkitbank54"
            target="_blank"
            rel="komkitbank54"
            aria-label="GitHub"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Github className="size-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/komkit-nit/"
            target="_blank"
            rel="komkit"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Linkedin className="size-5" />
          </a>
          <a
            href="komkit16211@gmail.com"
            aria-label="Email"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail className="size-5" />
          </a>
          <a
            href="https://www.tiktok.com/@ikk1st"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <TikTok className="size-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
