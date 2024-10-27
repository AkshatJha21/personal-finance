"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"

type Theme = "system" | "dark" | "light";

export function ModeToggle() {
  const [theme, setTheme] = React.useState<Theme>("system");

  React.useEffect(() => {
    // Retrieve the stored theme from localStorage or default to "system"
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      setTheme("system"); // Default to "system" if nothing is stored
    }
  }, []);

  React.useEffect(() => {
    const htmlElement = document.getElementsByTagName("html")[0];

    const updateTheme = (newTheme: Theme) => {
      if (newTheme === "system") {
        const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
        htmlElement.classList.remove("light", "dark");
        htmlElement.classList.add(prefersDarkMode ? "dark" : "light");
      } else {
        htmlElement.classList.remove("light", "dark");
        htmlElement.classList.add(newTheme);
      }
    };

    // Set the initial theme based on system settings
    updateTheme(theme);

    // Listen for changes to the prefers-color-scheme media query
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event: MediaQueryListEvent) => {
      if (theme === "system") {
        updateTheme(event.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Persist the theme in localStorage
  };
  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-indigo-600" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-indigo-500" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
