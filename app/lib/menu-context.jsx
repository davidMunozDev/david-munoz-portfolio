"use client";

import { createContext, useContext, useState } from "react";
import { get as getFromStorage, save as saveInStorage } from "./localStorage";

const MenuContext = createContext({});

export function MenuContextProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const manageMenu = () => {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  };

  return (
    <MenuContext.Provider
      value={{
        isMenuOpen,
        manageMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export const useMenuContext = () => useContext(MenuContext);
