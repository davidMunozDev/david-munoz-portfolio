"use client";

import { createContext, useContext, useEffect, useState, useRef } from "react";
import {
  get as getFromStorage,
  save as saveInStorage,
} from "./localStorage.util";
import { applyStyles } from "./styleHelpers.util";
import { usePathname } from "next/navigation";

const ThemeContext = createContext({});
const getTheme = () => getFromStorage("theme");

export function ThemeContextProvider({ children }) {
  const path = usePathname();
  const [theme, setTheme] = useState(getTheme() || "dark");
  const [status, setStatus] = useState("rendered");
  const isRendered = useRef(false);

  useEffect(() => {
    if (path && isRendered.current) {
      setStatus("rendered");
    }
    isRendered.current = true;
  }, [path]);

  const changeTheme = () => {
    saveInStorage("theme", theme === "dark" ? "light" : "dark");
    setTheme(getTheme());
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
