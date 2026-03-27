"use client";

import dynamic from "next/dynamic";

const ThemeSwitcherDynamic = dynamic(
  () => import("./theme-switcher").then((mod) => mod.ThemeSwitcher),
  { ssr: false },
);

export function ThemeSwitcherHost() {
  return <ThemeSwitcherDynamic />;
}
