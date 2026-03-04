"use client"

import { useState, useCallback } from "react"
import { Heart, Eye } from "lucide-react"

// --- Types ---
interface FloatingHeart {
  id: number
  x: number
  y: number
}

interface EngagementBarProps {
  viewCount: number
  initialLikeCount?: number
}

let heartIdCounter = 0

export function EngagementBar({ viewCount, initialLikeCount = 0 }: EngagementBarProps) {
  const [likeCount, setLikeCount] = useState(initialLikeCount)
  const [liked, setLiked] = useState(false)
  const [floatingHearts, setFloatingHearts] = useState<FloatingHeart[]>([])

  const handleLike = useCallback(() => {
    setLikeCount((prev) => prev + 1)
    setLiked(true)

    const newHeart: FloatingHeart = {
      id: heartIdCounter++,
      x: Math.random() * 40 - 20,
      y: Math.random() * -20 - 10,
    }
    setFloatingHearts((prev) => [...prev, newHeart])

    setTimeout(() => {
      setFloatingHearts((prev) => prev.filter((h) => h.id !== newHeart.id))
    }, 800)
  }, [])

  return (
    <div className="inline-flex items-center rounded-full border border-border bg-card p-1 shadow-sm">
      
      <div 
        className="flex items-center gap-2 px-3 py-1.5 text-muted-foreground select-none"
        aria-label={`${viewCount} views`}
      >
        <Eye className="size-4" />
        <span className="font-mono text-xs tabular-nums">
          {viewCount.toLocaleString()}
        </span>
      </div>

      <div className="h-4 w-px bg-border" />

      <button
        onClick={handleLike}
        className="group relative flex items-center gap-2 rounded-full px-3 py-1.5 transition-colors hover:bg-accent/50 active:scale-95"
        aria-label={`Like, ${likeCount} likes`}
      >
        {floatingHearts.map((heart) => (
          <span
            key={heart.id}
            className="pointer-events-none absolute animate-float-heart text-primary"
            style={{
              "--float-x": `${heart.x}px`,
              "--float-y": `${heart.y}px`,
            } as React.CSSProperties}
          >
            <Heart className="size-3.5 fill-current" />
          </span>
        ))}

        {/* ไอคอนหัวใจหลัก */}
        <Heart
          className={`size-4 transition-all duration-200 ${
            liked
              ? "fill-primary text-primary scale-110"
              : "text-muted-foreground group-hover:text-primary"
          }`}
        />
        <span className={`font-mono text-xs tabular-nums transition-colors ${
          liked ? "text-primary" : "text-muted-foreground"
        }`}>
          {likeCount.toLocaleString()}
        </span>
      </button>
    </div>
  )
}