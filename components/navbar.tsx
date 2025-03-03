"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarBrand,
} from "@HeroUI/react";
import { ButtonGroup } from "@heroui/button";
import NextLink from "next/link";
import { User } from "@heroui/user";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export const Navbar = () => {
  const [user, setUser] = useState<{ name: string; avatarSrc: string } | null>(
    null,
  );
  const [isUserLoaded, setIsUserLoaded] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Restore user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsUserLoaded(true);
  }, []);

  // Define the pages where the navbar should be hidden completely
  const hideNavbarOn = ["/local-game/", "/login"];

  // Listen for storage changes
  useEffect(() => {
    const handleStorageChange = () => {
      const updatedUser = localStorage.getItem("user");

      setUser(updatedUser ? JSON.parse(updatedUser) : null);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    router.push("/login");
  };

  const getNavbarName = () => {
    switch (pathname) {
      case "/":
        return (
          <div className="flex items-start flex-col text-left pt-20">
            <span className="text-lg font-bold text-black">SOCIAL</span>
            <span className="text-lg font-bold text-black">CHANGE</span>
          </div>
        );
      case "/prizes-and-cash":
        return "Social Cash";
      case "/myrewards":
        return "Leaderboards";
      case "/totalhistory":
        return "Social Cash";
      default:
        return "SOCIAL CHANGE";
    }
  };

  // If the current page is in hideNavbarOn, do not render the navbar
  if (hideNavbarOn.includes(pathname)) return null;

  // Special case: Show only the back arrow on /area-and-points
  if (pathname === "/area-and-points" || pathname === "/local-game") {
    return (
      <div className="relative">
        <button
          className="flex items-center justify-center bg-white rounded-full p-2 hover:bg-gray-200 transition duration-200 ease-in-out shadow-md z-50 absolute top-4 left-4"
          onClick={() => router.back()}
        >
          <ArrowLeftIcon className="h-6 w-6 text-black" />
        </button>
      </div>
    );
  }

  return (
    <HeroUINavbar
      className={`bg-[#bffb4f] ${
        pathname === "/"
          ? "h-[17vh]"
          : pathname === "/prizes-and-cash"
            ? "h-[232px]"
            : pathname === "/myrewards"
              ? "h-[152px] flex-grow-0"
              : "h-[30px] flex-grow-0"
      } text-black px-4 py-3 shadow-md flex justify-between items-center relative overflow-visible rounded-2xl`}
    >
      {/* Left Side - Brand */}
      <NavbarContent className="flex items-center ">
        {/* Back Arrow - Show only when not on the homepage */}
        {pathname !== "/" && (
          <button
            className="flex items-center justify-center bg-white rounded-full p-2 hover:bg-gray-200 transition duration-200 ease-in-out z-50 absolute top-4 left-4"
            onClick={() => router.back()}
          >
            <ArrowLeftIcon className="h-6 w-6 mr-2" />
          </button>
        )}
        <NavbarBrand>
          <div
            className={`absolute ${
              pathname === "/"
                ? "justify-center"
                : pathname === "/prizes-and-cash" || pathname === "/myrewards"
                  ? "left-[50%] transform -translate-x-[50%]"
                  : "left-1/2 transform -translate-x-1/2"
            }`}
          >
            <NextLink className="text-lg font-bold text-black" href="/">
              <span>{getNavbarName()}</span>
            </NextLink>
          </div>
        </NavbarBrand>
      </NavbarContent>

      {/* Right Side - Theme Switch, Login, Avatar */}
      <NavbarContent className="flex items-center gap-3 w-full justify-end pt-20">
        {pathname === "/" &&
          isUserLoaded && ( // Ensure user state is loaded before rendering UI
            <>
              {/* Right side: $154 + Avatar */}
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-[106px] h-[53px] bg-white text-black rounded-full font-bold text-sm">
                  $154
                </div>

                {user ? (
                  <User
                    avatarProps={{
                      src: user.avatarSrc,
                      className: "h-[53px] w-[53px] object-cover",
                    }}
                    className="h-[53px] w-[53px]"
                    name={user.name}
                    onClick={handleLogout}
                  />
                ) : (
                  <ButtonGroup
                    className="bg-blue-500 text-white px-3 py-2 rounded-lg text-sm"
                    onClick={() => router.push("/login")}
                  >
                    Login
                  </ButtonGroup>
                )}
              </div>
            </>
          )}
      </NavbarContent>
    </HeroUINavbar>
  );
};
