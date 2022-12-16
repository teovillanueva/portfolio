import React, { ComponentProps } from "react";
import { IconButton } from "@modulz/design-system";
import { MoonIcon, SunIcon } from "@modulz/radix-icons";
import { useTheme } from "next-themes";

export function ThemeToggle(props: ComponentProps<typeof IconButton>) {
  const { theme, setTheme } = useTheme();

  return (
    <IconButton
      variant="ghost"
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
      {...props}
      aria-label="toggle a light and dark color scheme"
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </IconButton>
  );
}
