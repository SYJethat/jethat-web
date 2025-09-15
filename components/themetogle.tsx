

'use client'

import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="fixed bottom-14 left-4 z-50">
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="bg-background/80 backdrop-blur-sm border border-border rounded-md p-2 hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 shadow-lg"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </button>
    </div>
  )
}
