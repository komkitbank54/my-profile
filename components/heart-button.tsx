"use client"

import { useState, useCallback, useRef, useEffect } from "react"
import { MousePointerClick } from "lucide-react"

interface Particle {
  id: number
  x: number
  y: number
  symbol: string
  size: number
  color: string
}

const SYMBOLS = [">_", "{ }", "//", "&&", "=>", "++", "**", "!=", "??", "</>", "npm", "git", "0x", "[ ]", "::"]
const COLORS = [
  "oklch(0.75 0.12 175)",
  "oklch(0.8 0.1 140)",
  "oklch(0.7 0.13 200)",
  "oklch(0.85 0.08 90)",
  "oklch(0.65 0.15 280)",
]

let particleId = 0

function useClickSound() {
  const audioCtxRef = useRef<AudioContext | null>(null)

  const play = useCallback(() => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new AudioContext()
    }
    const ctx = audioCtxRef.current
    const now = ctx.currentTime

    // Quick pop oscillator
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.connect(gain)
    gain.connect(ctx.destination)

    osc.type = "sine"
    osc.frequency.setValueAtTime(800 + Math.random() * 400, now)
    osc.frequency.exponentialRampToValueAtTime(300, now + 0.08)

    gain.gain.setValueAtTime(0.15, now)
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1)

    osc.start(now)
    osc.stop(now + 0.1)
  }, [])

  return play
}

export function PopClicker() {
  const [count, setCount] = useState(0)
  const [particles, setParticles] = useState<Particle[]>([])
  const [pressed, setPressed] = useState(false)
  const [cps, setCps] = useState(0)
  const clickTimestamps = useRef<number[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const playClick = useClickSound()

  // Track CPS
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now()
      clickTimestamps.current = clickTimestamps.current.filter((t) => now - t < 1000)
      setCps(clickTimestamps.current.length)
    }, 200)
    return () => clearInterval(interval)
  }, [])

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      playClick()
      clickTimestamps.current.push(Date.now())
      setCount((prev) => prev + 1)

      setPressed(true)
      setTimeout(() => setPressed(false), 120)

      const rect = containerRef.current?.getBoundingClientRect()
      if (!rect) return

      const clickX = e.clientX - rect.left
      const clickY = e.clientY - rect.top

      const burstCount = 3 + Math.floor(Math.random() * 4)
      const newParticles: Particle[] = Array.from({ length: burstCount }, () => ({
        id: particleId++,
        x: clickX + (Math.random() * 80 - 40),
        y: clickY + (Math.random() * 60 - 30),
        symbol: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
        size: 14 + Math.random() * 12,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      }))

      setParticles((prev) => [...prev, ...newParticles])

      setTimeout(() => {
        const ids = new Set(newParticles.map((p) => p.id))
        setParticles((prev) => prev.filter((p) => !ids.has(p.id)))
      }, 900)
    },
    [playClick]
  )

  const face = pressed ? "( O_O )" : count === 0 ? "( -_- )" : "( ^_^ )"

  const milestone =
    count >= 1000
      ? "YOU ARE A MACHINE"
      : count >= 500
        ? "UNSTOPPABLE"
        : count >= 200
          ? "ON FIRE"
          : count >= 100
            ? "LEGENDARY"
            : count >= 50
              ? "COMBO MASTER"
              : count >= 20
                ? "GETTING WARMED UP"
                : count >= 5
                  ? "NICE START"
                  : null

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Main clicker area */}
      <div
        ref={containerRef}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        aria-label={`Click counter, ${count} clicks`}
        className={`relative flex h-52 w-56 cursor-pointer select-none flex-col items-center justify-center overflow-hidden rounded-3xl border-2 border-border bg-card transition-all sm:h-60 sm:w-64 ${
          pressed ? "scale-[0.93] border-primary/60" : "scale-100 hover:border-primary/30"
        }`}
        style={{
          transition: "transform 0.12s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.2s",
        }}
      >
        {/* Particles */}
        {particles.map((p) => (
          <span
            key={p.id}
            className="pointer-events-none absolute animate-float-heart font-mono font-bold"
            style={{
              left: p.x,
              top: p.y,
              fontSize: p.size,
              color: p.color,
              "--float-x": `${Math.random() * 100 - 50}px`,
              "--float-y": `${Math.random() * -50 - 25}px`,
            } as React.CSSProperties}
          >
            {p.symbol}
          </span>
        ))}

        {/* Face */}
        <span className="font-mono text-4xl font-bold text-foreground transition-all duration-100 sm:text-5xl">
          {face}
        </span>

        {/* Big counter */}
        <span className="mt-3 font-mono text-3xl font-bold tabular-nums text-primary sm:text-4xl">
          {count.toLocaleString()}
        </span>
      </div>

      {/* Stats bar */}
      <div className="flex flex-col items-center gap-2">
        {count === 0 ? (
          <span className="flex items-center gap-2 text-sm text-muted-foreground animate-pulse">
            <MousePointerClick className="size-4" />
            click me!
          </span>
        ) : (
          <>
            <span className="font-mono text-sm tabular-nums text-muted-foreground">
              {cps} clicks/s
            </span>
            {milestone && (
              <span className="rounded-full bg-primary/15 px-3 py-1 font-mono text-xs font-semibold tracking-wider text-primary">
                {milestone}
              </span>
            )}
          </>
        )}
      </div>
    </div>
  )
}
