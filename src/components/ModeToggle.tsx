"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

//@ 1st way- using next-themes (Better)
export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

//@ 2nd way - using next-themes toggle button without dropdown button

export const ModeToggle2 = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    switch (theme) {
      case "light":
        setTheme("dark");
        break;
      case "dark":
        setTheme("light");
        break;
      case "system":
        // Optional: default toggle when theme is system
        setTheme("dark"); // or "light", based on  preference
        break;
    }
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title="Toggle Dark/Light Mode"
      className="relative flex items-center justify-center rounded-full border border-neutral-200 p-4 dark:border-neutral-800"
    >
      <Sun className="absolute inset-0 m-auto size-4 shrink-0 scale-100 text-neutral-500 transition-all duration-300 ease-in-out dark:scale-0 dark:rotate-45" />
      <Moon className="absolute inset-0 m-auto size-4 shrink-0 scale-0 rotate-45 transition-all duration-300 dark:scale-100 dark:rotate-0 ease-in-out dark:text-neutral-200" />
    </button>
  );
};
