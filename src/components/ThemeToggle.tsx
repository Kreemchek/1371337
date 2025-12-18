import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="relative w-14 h-7 rounded-full bg-muted border border-border transition-colors duration-300 hover:border-primary/50"
      aria-label="Переключить тему"
    >
      <div
        className={`absolute top-0.5 w-6 h-6 rounded-full bg-primary flex items-center justify-center transition-all duration-300 ${
          isDark ? "left-0.5" : "left-[calc(100%-26px)]"
        }`}
      >
        {isDark ? (
          <Moon className="w-3.5 h-3.5 text-primary-foreground" />
        ) : (
          <Sun className="w-3.5 h-3.5 text-primary-foreground" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
