import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="default"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="bg-purple-600 hover:bg-purple-700 text-white border-none"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] text-white rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] text-white rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
