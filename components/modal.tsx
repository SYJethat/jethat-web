"use client"

import { useEffect, ReactNode } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: ReactNode
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-background border border-primary/20 rounded-lg shadow-xl max-w-md w-full mx-4 p-6 animate-fade-in">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-primary">{title}</h3>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            ✕
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
}
