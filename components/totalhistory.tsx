"use client";
import { Card, CardHeader, CardFooter, Image, Button } from "@HeroUI/react";
import React from "react";
import { usePathname } from "next/navigation";

import { CrossIcon } from "./icons";

export default function Totalhistory() {
  const pathname = usePathname();

  return (
    <div>
      {/* Overflown card with number */}
      {pathname === "/prizes-and-cash" && (
        <div className="relative z-50 pb-1">
          <div className="absolute top-[-50px] left-[50%] transform -translate-x-[50%] flex flex-col items-center justify-center w-[383px] h-[134px] bg-white text-black rounded-3xl font-bold shadow-lg">
            <div className="text-6xl">$335.99</div>
            <h5 className="text-sm tracking-tight text-gray-400 mt-2">
              your account
            </h5>
          </div>
        </div>
      )}

      {/* Page Title */}
      <div className="mb-4 mt-[120]">
        <h1 className="font-bold text-3xl">Locations</h1>
      </div>

      {/* First Card */}
      <Card
        isFooterBlurred
        className="w-[383px] h-[193px] col-span-12 sm:col-span-7 flex flex-col justify-between mb-6" // Added mb-6 for margin-bottom
      >
        {/* Card Header */}
        <CardHeader className="flex items-center justify-between px-6 pb-2 pt-7 w-full">
          <div className="flex items-center gap-3">
            <Image
              alt="heroui logo"
              height={56}
              radius="sm"
              src="https://i.pinimg.com/236x/7a/53/b6/7a53b6ae10173f474bf201c41e0feea3.jpg"
              width={56}
            />
            <div className="flex flex-col leading-tight">
              <h1 className="text-large font-bold text-white">Starbucks</h1>
              <p className="text-small text-default-500">Brooklyn</p>
            </div>
          </div>

          {/* Points - Aligned to the right */}
          <p className="text-large text-[#bffb4f] font-bold">$200</p>
        </CardHeader>

        {/* Footer with Button */}
        <CardFooter className="absolute bottom-0 z-10 border-default-600 dark:border-default-100 pb-6">
          <Button
            className="w-full sm:w-64 relative flex items-center justify-start gap-4 font-bold bg-white text-black pl-12"
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
        <CardHeader className="flex items-center justify-between px-6 pb-2 pt-7 w-full">
          <div className="flex items-center gap-3">
            <CrossIcon />
            <div className="flex flex-col leading-tight">
              <h1 className="text-large font-bold text-white">All</h1>
              <p className="text-small text-default-500"> Brooklyn</p>
            </div>
          </div>

          {/* Points - Aligned to the right */}
          <p className="text-large text-[#bffb4f] font-bold">$100.99</p>
        </CardHeader>

        {/* Footer with Button */}
        <CardFooter className="absolute bottom-0 z-border-default-600 dark:border-default-100 pb-6">
          <Button
            className="w-full sm:w-64 relative flex items-center justify-start gap-4 font-bold bg-white text-black pl-12"
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
        <CardHeader className="flex items-center justify-between px-6 pb-2 pt-7 w-full">
          <div className="flex items-center gap-3">
            <Image
              alt="heroui logo"
              height={56}
              radius="sm"
              src="https://i.pinimg.com/236x/66/20/e4/6620e4966bd08771df0ecb3030514388.jpg"
              width={56}
            />
            <div className="flex flex-col leading-tight">
              <h1 className="text-large font-bold text-white">
                Mc&apos;Donalds
              </h1>
              <p className="text-small text-default-500"> Brooklyn</p>
            </div>
          </div>

          {/* Points - Aligned to the right */}
          <p className="text-large text-[#bffb4f] font-bold">$15</p>
        </CardHeader>

        {/* Footer with Button */}
        <CardFooter className="absolute bottom-0 z-10 border-default-600 dark:border-default-100 pb-6">
          <Button
            className="w-full sm:w-64 relative flex items-center justify-start gap-4 font-bold bg-white text-black pl-12"
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
