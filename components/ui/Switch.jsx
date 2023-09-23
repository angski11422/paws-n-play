"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import { Sun, Moon } from "@phosphor-icons/react";

export default function Toggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Switch
      onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      thumbIcon={({ isSelected }) =>
        isSelected ? (
          <Moon className="text-slate-950" />
        ) : (
          <Sun className="text-slate-950" />
        )
      }
    />
  );
}
