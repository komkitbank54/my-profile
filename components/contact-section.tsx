import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { TikTok } from "@/components/icons/tiktok"

const socialLinks = [
  {
    label: "Email",
    href: "mailto:hello@johndoe.dev",
    value: "hello@johndoe.dev",
    icon: Mail,
  },
  {
    label: "GitHub",
    href: "https://github.com",
    value: "github.com/johndoe",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    value: "linkedin.com/in/johndoe",
    icon: Linkedin,
  },
  {
    label: "Twitter",
    href: "https://twitter.com",
    value: "@johndoe",
    icon: Twitter,
  },
  {
    label: "TikTok",
    href: "https://tiktok.com",
    value: "@johndoe",
    icon: TikTok,
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="min-h-screen snap-start snap-always scroll-mt-16 px-6 flex flex-col justify-between">
      <div className="mx-auto max-w-5xl w-full flex-1 flex flex-col justify-center py-24 lg:py-32">
        <h2 className="text-sm font-mono tracking-wider text-primary uppercase mb-10">
          Contact
        </h2>

        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <p className="text-2xl font-semibold tracking-tight text-foreground text-balance sm:text-3xl">
              If you would like to discuss a project or just say hi, I&apos;m always down to chat.
            </p>
            <a
              href="mailto:hello@johndoe.dev"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Mail className="size-4" />
              Say hello
            </a>
          </div>

          <div className="lg:col-span-2">
            <div className="flex flex-col gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={
                      link.href.startsWith("mailto")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="group flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/30"
                  >
                    <Icon className="size-5 text-muted-foreground transition-colors group-hover:text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">{link.label}</p>
                      <p className="text-sm text-foreground">{link.value}</p>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <footer className="border-t border-border py-8 w-full">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            {"Designed & built by John Doe"}
          </p>
          <p className="text-xs text-muted-foreground">
            {"\u00A9 2026. All rights reserved."}
          </p>
        </div>
      </footer>
    </section>
  )
}
