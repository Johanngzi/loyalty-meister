"use client";
import {
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

interface NavbarVisibilityContextType {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const NavbarVisibilityContext = createContext<
  NavbarVisibilityContextType | undefined
>(undefined);

export const NavbarVisibilityProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  return (
    <NavbarVisibilityContext.Provider value={{ isVisible, setIsVisible }}>
      {children}
    </NavbarVisibilityContext.Provider>
  );
};

export const useNavbarVisibility = () => {
  const context = useContext(NavbarVisibilityContext);

  if (context === undefined) {
    throw new Error(
      "useNavbarVisibility must be used within a NavbarVisibilityProvider",
    );
  }

  return context;
};
