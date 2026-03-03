"use client"

import { useState, useEffect } from "react"

const sectionIds = ["hero", "about", "skills", "experience", "projects", "contact"]

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const scrollContainer = document.querySelector("main")
    if (!scrollContainer) return

    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id)
            }
          })
        },
        {
          root: scrollContainer,
          threshold: 0.5,
        }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => {
      observers.forEach((obs) => obs.disconnect())
    }
  }, [])

  return activeSection
}
