'use client'

import { useEffect, useState } from 'react'

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      setScrollProgress(Math.round(scrollPercent))
    }

    window.addEventListener('scroll', updateScrollProgress)
    updateScrollProgress() // Initial calculation

    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-background/80 backdrop-blur-sm border border-border rounded-full px-3 py-1 text-sm font-medium shadow-lg">
      {scrollProgress}%
    </div>
  )
}
