// NavbarNameContext.tsx (Client Component)
"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

interface NavbarNameContextType {
  navbarName: string | React.ReactNode;
  setNavbarName: React.Dispatch<React.SetStateAction<string | React.ReactNode>>;
  navbarNameClass: string;
  setNavbarNameClass: React.Dispatch<React.SetStateAction<string>>;
}

const NavbarNameContext = createContext<NavbarNameContextType | undefined>(
  undefined,
);

export const NavbarNameProvider = ({ children }: { children: ReactNode }) => {
  const [navbarName, setNavbarName] = useState<string | React.ReactNode>(
    "SOCIAL CHANGE",
  );
  const [navbarNameClass, setNavbarNameClass] = useState<string>("");

  return (
    <NavbarNameContext.Provider
      value={{ navbarName, setNavbarName, navbarNameClass, setNavbarNameClass }}
    >
      {children}
    </NavbarNameContext.Provider>
  );
};

export const useNavbarName = () => {
  const context = useContext(NavbarNameContext);

  if (!context) {
    throw new Error("useNavbarName must be used within a NavbarNameProvider");
  }

  return context;
};
