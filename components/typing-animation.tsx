"use client"

import { useState, useEffect } from 'react'

interface TypingAnimationProps {
  text: string
  speed?: number
  delay?: number
  className?: string
}

export function TypingAnimation({ text, speed = 100, delay = 0, className = "" }: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (delay > 0) {
      const delayTimer = setTimeout(() => {
        startTyping()
      }, delay)
      return () => clearTimeout(delayTimer)
    } else {
      startTyping()
    }
  }, [delay])

  const startTyping = () => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)
      return () => clearTimeout(timer)
    } else {
      setIsComplete(true)
    }
  }

  useEffect(() => {
    if (currentIndex < text.length && delay === 0) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)
      return () => clearTimeout(timer)
    } else if (currentIndex >= text.length) {
      setIsComplete(true)
    }
  }, [currentIndex, text, speed, delay])

  return (
    <span className={className}>
      {displayText}
      {!isComplete && <span className="animate-blink">|</span>}
    </span>
  )
}
