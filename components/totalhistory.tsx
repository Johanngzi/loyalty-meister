"use client";
import { Card, CardHeader, CardFooter, Image, Button } from "@HeroUI/react";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

import { useNavbarHeight } from "@/app/contexts/NavbarHeightContext";
import { useNavbarName } from "@/app/contexts/NavbarNameContext";

export default function Totalhistory() {
  const pathname = usePathname();
  // State to store navbar height based on screen width
  const { setNavbarHeight } = useNavbarHeight(); // Destructure only setNavbarHeight
  const { setNavbarName, setNavbarNameClass } = useNavbarName(); // Destructure only setNavbarName

  useEffect(() => {
    setNavbarHeight("h-[172px]");
    setNavbarName("Social Cash");
    setNavbarNameClass("text-center");

    return () => {
      setNavbarHeight("");
      setNavbarName("SOCIAL CHANGE");
      setNavbarNameClass(""); // Reset the class here
    };
  }, [setNavbarHeight, setNavbarName, setNavbarNameClass]);

  return (
    <div>
      {/* Overflown card with number */}
      {pathname === "/prizes-and-cash" && (
        <div className="relative z-50 pb-1">
          <div className="fixed top-[135px] left-[49%] transform -translate-x-[50%] flex flex-col items-center justify-center w-[383px] h-[134px] bg-white text-black rounded-3xl font-bold shadow-lg">
            <div className="text-6xl">$335.99</div>
            <h5 className="text-sm tracking-tight text-gray-400 mt-2">
              your account
            </h5>
          </div>
        </div>
      )}

      {/* Page Title */}
      <div className="mb-5 mt-[146]">
        <h1 className="font-bold text-3xl">Locations</h1>
      </div>
      {/* First Card */}
      <Card
        isFooterBlurred
        className="w-[383px] h-[193px] col-span-12 sm:col-span-7 flex flex-col justify-between mb-6" // Added mb-6 for margin-bottom
      >
        {/* Card Header */}
        <CardHeader className="flex items-center justify-between px-4 pb-2 pt-3 w-full">
          <div className="flex items-center gap-3 p-3">
            <Image
              alt="heroui logo"
              className="rounded-3xl"
              height={60}
              radius="sm"
              src="https://i.pinimg.com/236x/7a/53/b6/7a53b6ae10173f474bf201c41e0feea3.jpg"
              width={60}
            />
            <div className="flex flex-col leading-tight">
              <h1 className="text-large font-bold text-white">Starbucks</h1>
              <p className="text-small text-default-500">Brooklyn</p>
            </div>
          </div>

          {/* Points - Aligned to the right */}
          <p className="text-4xl text-[#bffb4f] p-2 font-bold">$200</p>
        </CardHeader>

        {/* Footer with Button */}
        <CardFooter className="flex justify-center items-center w-full pb-6">
          <Button
            className="w-[328px] sm:w-64 flex justify-start gap-4 font-bold bg-white text-black pl-12"
            radius="full"
            size="lg"
          >
            {/* Left-aligned arrow */}
            <span className="absolute left-[0.2rem] bg-black text-white p-2 rounded-full transform rotate-[-45deg] flex items-center justify-center">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Use Social Cash Now
          </Button>
        </CardFooter>
      </Card>

      {/* Second Card */}
      <Card
        isFooterBlurred
        className="w-[383px] h-[193px] col-span-12 sm:col-span-7 flex flex-col justify-between mb-6" // Added mb-6 for margin-bottom
      >
        {/* Card Header */}
        <CardHeader className="flex items-center justify-between px-6 pb-2 pt-6 w-full">
          <div className="flex items-center gap-3 p-1">
            <Image
              alt="heroui logo"
              className="rounded-3xl"
              height={60}
              radius="sm"
              src="IMG_3953.jpeg"
              width={60}
            />
            <div className="flex flex-col leading-tight">
              <h1 className="text-large font-bold text-white">All</h1>
              <p className="text-small text-default-500"> Brooklyn</p>
            </div>
          </div>

          {/* Points - Aligned to the right */}
          <p className="text-4xl text-[#bffb4f] font-bold p-0">$100.99</p>
        </CardHeader>

        {/* Footer with Button */}
        <CardFooter className="flex justify-center items-center w-full pb-6">
          <Button
            className="w-[328px] sm:w-64 flex justify-start gap-4 font-bold bg-white text-black pl-12"
            radius="full"
            size="lg"
          >
            {/* Left-aligned arrow */}
            <span className="absolute left-[0.2rem] bg-black text-white p-2 rounded-full transform rotate-[-45deg] flex items-center justify-center">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Use Social Cash Now
          </Button>
        </CardFooter>
      </Card>

      {/* Third Card */}
      <Card
        isFooterBlurred
        className="w-[383px] h-[193px] col-span-12 sm:col-span-7 flex flex-col justify-between mb-6" // Added mb-6 for margin-bottom
      >
        {/* Card Header */}
        <CardHeader className="flex items-center justify-between px-6 p-3 pt-2 w-full">
          <div className="flex items-center gap-3 p-4">
            <Image
              alt="heroui logo"
              className="rounded-3xl"
              height={60}
              radius="sm"
              src="https://i.pinimg.com/236x/66/20/e4/6620e4966bd08771df0ecb3030514388.jpg"
              width={60}
            />
            <div className="flex flex-col leading-tight">
              <h1 className="text-large font-bold text-white">
                Mc&apos;Donalds
              </h1>
              <p className="text-small text-default-500"> Brooklyn</p>
            </div>
          </div>

          {/* Points - Aligned to the right */}
          <p className="text-4xl text-[#bffb4f] font-bold p-3">$15</p>
        </CardHeader>

        {/* Footer with Button */}
        <CardFooter className="flex justify-center items-center w-full pb-6">
          <Button
            className="w-[328px] sm:w-64 flex justify-start gap-4 font-bold bg-white text-black pl-12"
            radius="full"
            size="lg"
          >
            {/* Left-aligned arrow */}
            <span className="absolute left-[0.2rem] bg-black text-white p-2 rounded-full transform rotate-[-45deg] flex items-center justify-center">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Use Social Cash Now
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
