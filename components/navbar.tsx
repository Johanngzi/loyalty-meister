"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarBrand,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  AvatarIcon,
} from "@HeroUI/react";
import NextLink from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

import { useNavbarHeight } from "@/app/contexts/NavbarHeightContext"; // Import the context hook
import { useNavbarName } from "@/app/contexts/NavbarNameContext";
import { useNavbarVisibility } from "@/app/contexts/NavbarVisibilityContext";

export const Navbar = () => {
  const [user, setUser] = useState<{ name: string; avatarSrc: string } | null>(
    null,
  );
  const [isUserLoaded, setIsUserLoaded] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { navbarHeight } = useNavbarHeight(); // Correct usage here
  const { navbarName, navbarNameClass } = useNavbarName(); // Use the context hook
  const { isVisible } = useNavbarVisibility(); // Get the visibility state

  // Restore user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsUserLoaded(true);
  }, []);

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

  if (!isVisible) return null; // Conditionally render the navbar

  return (
    <HeroUINavbar
      className={`bg-[#bffb4f] text-black shadow-md flex justify-between relative overflow-visible rounded-b-3xl ${navbarHeight}`}
    >
      {/* Left Side - Brand */}
      <NavbarContent className="flex items-center">
        {pathname === "/" && (
          <div className="flex h-[62px] w-[126px] items-center justify-start">
            <Image
              alt="Logo"
              height={62}
              src="/Image 10.03.25 at 09.42 2.jpg"
              width={126}
            />
          </div>
        )}
        {pathname !== "/" && (
          <div className="flex items-center">
            <button
              className="h-[52px] w-[52px] flex items-center justify-center bg-white rounded-full hover:bg-gray-200 transition duration-200 ease-in-out z-50 top-4"
              onClick={() => router.back()}
            >
              <ArrowLeftIcon className="h-[22px] w-[22px] stroke-[3] text-black" />
            </button>
          </div>
        )}
      </NavbarContent>

      {/* Center Side - Navbar Name */}
      <NavbarContent className="flex items-center justify-center w-full">
        <NavbarBrand>
          {pathname !== "/" && (
            <div>
              <NextLink className="text-lg font-bold text-black" href="/">
                <span className={navbarNameClass}>{navbarName}</span>
              </NextLink>
            </div>
          )}
        </NavbarBrand>
      </NavbarContent>

      {/* Right Side - Theme Switch, Login, Avatar */}
      <NavbarContent className="flex items-center justify-end">
        {pathname === "/" && isUserLoaded && (
          <>
            <div className="flex gap-2">
              <div className="flex items-center justify-center w-[106px] h-[53px] bg-white text-black rounded-full font-bold text-2xl">
                $154
              </div>
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Avatar
                    showFallback
                    as="button"
                    classNames={{ base: "h-[53px] w-[53px]" }}
                    icon={<AvatarIcon />}
                    src="https://images.unsplash.com/broken"
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                  <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-semibold">Signed in as</p>
                    <p className="font-semibold">gazabon.johann@gmail.com</p>
                  </DropdownItem>
                  <DropdownItem
                    key="logout"
                    color={"primary"}
                    onPress={handleLogout}
                  >
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </>
        )}
      </NavbarContent>
    </HeroUINavbar>
  );
};
