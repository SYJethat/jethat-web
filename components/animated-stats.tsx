"use client"

import { useEffect, useState } from "react"

interface StatItem {
  value: number
  label: string
  suffix?: string
}

export function AnimatedStats() {
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0])

  const stats: StatItem[] = [
    { value: 2018, label: "Founded" },
    { value: 22, label: "Languages Supported", suffix: "+" },
    { value: 24, label: "Live Support", suffix: "/7" },
    { value: 500, label: "Projects Completed", suffix: "+" },
  ]

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const increment = duration / steps

    const timer = setInterval(() => {
      setCounts(prevCounts =>
        prevCounts.map((count, index) => {
          const target = stats[index].value
          const step = target / steps
          return count + step >= target ? target : count + step
        })
      )
    }, increment)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-primary animate-pulse">
            {Math.floor(counts[index])}
            {stat.suffix}
          </div>
          <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
