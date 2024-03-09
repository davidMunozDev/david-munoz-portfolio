"use client";

import { createContext, useContext, useEffect, useState, useRef } from "react";
import {
  get as getFromStorage,
  save as saveInStorage,
} from "./localStorage.util";
import { applyStyles } from "./styleHelpers.util";
import { usePathname } from "next/navigation";

const ThemeContext = createContext({});

export function ThemeContextProvider({ children }) {
  const path = usePathname();
  const [theme, setTheme] = useState("dark");
  const [status, setStatus] = useState("firstRender");
  const isRendered = useRef(false);

  useEffect(() => {
    getTheme();
  }, []);

  useEffect(() => {
    if (path && isRendered.current) {
      setStatus("rendered");
    }
    isRendered.current = true;
  }, [path]);

  const getTheme = () => {
    const selectedTheme = getFromStorage("theme");

    selectedTheme && setTheme(selectedTheme);
  };

  const changeTheme = () => {
    saveInStorage("theme", theme === "dark" ? "light" : "dark");
    getTheme();
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
        isRendered: status === "rendered",
      }}
    >
      <div
        className={applyStyles([
          theme === "dark" ? "theme--dark" : "theme--light",
          status,
        ])}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);
