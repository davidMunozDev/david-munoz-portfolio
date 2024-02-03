"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { get as getFromStorage, save as saveInStorage } from "./localStorage";

const ThemeContext = createContext({});

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    getTheme();
  }, []);

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
      }}
    >
      <div className={theme === "dark" ? "theme--dark" : "theme--light"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);
