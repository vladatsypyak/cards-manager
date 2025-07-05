import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle(): JSX.Element {
    const toggleTheme = (): void => {
        const isDark = document.documentElement.classList.toggle("dark")
        localStorage.setItem("theme", isDark ? "dark" : "light")
    }

    return (
        <Button size="icon" variant="outline" onClick={toggleTheme}>
            <Sun className="h-5 w-5 dark:hidden" />
            <Moon className="h-5 w-5 hidden dark:block" />
        </Button>
    )
}
