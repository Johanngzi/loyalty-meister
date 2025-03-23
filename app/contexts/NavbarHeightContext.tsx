// NavbarHeightContext.tsx (Client Component)
"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

interface NavbarHeightContextType {
  navbarHeight: string;
  setNavbarHeight: React.Dispatch<React.SetStateAction<string>>;
}

const NavbarHeightContext = createContext<NavbarHeightContextType | undefined>(
  undefined,
);

export const NavbarHeightProvider = ({ children }: { children: ReactNode }) => {
  const [navbarHeight, setNavbarHeight] = useState<string>("");

  return (
    <NavbarHeightContext.Provider value={{ navbarHeight, setNavbarHeight }}>
      {children}
    </NavbarHeightContext.Provider>
  );
};

export const useNavbarHeight = () => {
  const context = useContext(NavbarHeightContext);

  if (!context) {
    throw new Error(
      "useNavbarHeight must be used within a NavbarHeightProvider",
    );
  }

  return context;
};
