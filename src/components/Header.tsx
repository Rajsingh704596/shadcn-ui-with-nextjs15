//! UseCase  of cn fun. that return return twMerge(clsx(inputs));

"use client"; // Add this at the top (b/c we use useState which work on react client component)
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { ModeToggle, ModeToggle2 } from "./ModeToggle";

const Header = () => {
  // State to toggle dark mode
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Apply dark mode to <html> when state changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <header className="max-w-7xl mx-auto ">
      <div
        className={cn(
          "p-4 ", // Always applied
          {
            "bg-neutral-800 text-white": isDarkMode, // Applied if isDarkMode is true
            "bg-neutral-300 text-black": !isDarkMode, // Applied if isDarkMode is false
          }
        )}
      >
        <h1>Welcome to the Dark Mode Example</h1>

        {/* 1.st e.g of dark mode toggle button */}
        <button
          onClick={() => setIsDarkMode(!isDarkMode)} // Toggle dark mode
          className={cn(
            "px-4 py-2 rounded", // Always applied to button
            {
              "bg-gray-700 text-white": isDarkMode, // Button style for dark mode
              "bg-gray-100 text-black": !isDarkMode, // Button style for light mode
            }
          )}
        >
          Toggle Dark Mode 👈
        </button>
      </div>
      {/*2nd Better way- using next-theme dark mode toggle in shadcn */}
      <div className="space-x-5">
        <span className="dark:text-test">
          Toggle Switch Mode using Next-themes 👉
        </span>
        <ModeToggle />

        <ModeToggle2 />
      </div>
    </header>
  );
};

export default Header;
