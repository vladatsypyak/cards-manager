import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
    const toggleTheme = () => {
        const isDark = document.documentElement.classList.toggle("dark")
        localStorage.setItem("theme", isDark ? "dark" : "light")
    }

    return (
        <Button variant="outline" size="icon" onClick={toggleTheme}>
            <Sun className="h-5 w-5 dark:hidden" />
            <Moon className="h-5 w-5 hidden dark:block" />
        </Button>
    )
}
