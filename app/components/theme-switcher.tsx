"use client";

import { useEffect, useRef, useState } from "react";

type ThemeMode = "light" | "dark" | "system";

const STORAGE_KEY = "ozsford-theme-mode";

const options: Array<{ value: ThemeMode; label: string }> = [
  { value: "light", label: "Claro" },
  { value: "dark", label: "Oscuro" },
  { value: "system", label: "Auto" },
];

function applyTheme(mode: ThemeMode) {
  const root = document.documentElement;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = mode === "system" ? (prefersDark ? "dark" : "light") : mode;

  root.dataset.themeMode = mode;
  root.dataset.theme = theme;
}

export function ThemeSwitcher() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mode, setMode] = useState<ThemeMode>(() => {
    if (typeof window === "undefined") {
      return "system";
    }

    const saved = localStorage.getItem(STORAGE_KEY);

    return saved === "light" || saved === "dark" || saved === "system"
      ? saved
      : "system";
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    applyTheme(mode);
  }, [mode]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if ((localStorage.getItem(STORAGE_KEY) ?? "system") === "system") {
        applyTheme("system");
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function handleThemeChange(nextMode: ThemeMode) {
    setMode(nextMode);
    localStorage.setItem(STORAGE_KEY, nextMode);
    applyTheme(nextMode);
    setOpen(false);
  }

  return (
    <div className="theme-switcher" ref={containerRef}>
      <button
        aria-expanded={open}
        aria-haspopup="true"
        className="theme-trigger"
        onClick={() => setOpen((current) => !current)}
        type="button"
      >
        <span className="theme-switcher-label">
          <span className="theme-switcher-dot" />
          <span>Tema</span>
        </span>
        <span
          className={`theme-trigger-arrow ${open ? "theme-trigger-arrow-open" : ""}`}
        >
          v
        </span>
      </button>

      {open ? (
        <div className="theme-menu" role="group">
          {options.map((option) => (
            <button
              key={option.value}
              aria-pressed={mode === option.value}
              className={`theme-option ${
                mode === option.value ? "theme-option-active" : ""
              }`}
              onClick={() => handleThemeChange(option.value)}
              type="button"
            >
              {option.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
