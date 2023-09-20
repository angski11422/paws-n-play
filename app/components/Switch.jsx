"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import { UilSun, UilMoon } from "@iconscout/react-unicons/index";

export function Switcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme('dark');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  
  return (
    <div>
      <Switch
        onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        thumbIcon={({ isSelected, className }) =>
          isSelected ? (
            <UilMoon className={className} />
          ) : (
            <UilSun className={className} />
          )
        }
      />
    </div>
  );
}
