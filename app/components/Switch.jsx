"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import { UilSun, UilMoon } from "@iconscout/react-unicons/index";

export default function Toggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  
  return (
    
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
  );
}
