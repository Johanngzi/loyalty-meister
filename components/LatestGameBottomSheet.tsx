"use client";

import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Card, CardHeader, Button } from "@HeroUI/react";

const LatestGameBottomSheet = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [startTouch, setStartTouch] = useState(0);
  const [currentTouch, setCurrentTouch] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState(0);

  const pathname = usePathname();
  const router = useRouter();

  if (pathname !== "/") return null;

  // Handle touch start
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>): void => {
    setStartTouch(e.touches[0].clientY);
    setDragging(true);
  };

  // Handle touch move
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>): void => {
    if (!dragging) return;
    const currentY = e.touches[0].clientY;

    setCurrentTouch(currentY);
    setOffset(currentY - startTouch);
  };

  // Handle touch end
  const handleTouchEnd = () => {
    const distance = currentTouch - startTouch;

    if (distance < -100) {
      setIsOpen(true);
      setIsCollapsed(false);
    } else if (distance > 100 && isOpen) {
      setIsCollapsed(true);
    } else if (distance > 100 && isCollapsed) {
      setIsOpen(false);
    }

    setDragging(false);
    setOffset(0);
  };

  return (
    <div>
      {/* Bottom Sheet */}
      <div
        className={`fixed bottom-0 left-0 w-full bg-white p-6 rounded-t-3xl rounded-b-2xl shadow-lg transition-all duration-300 ease-in-out transform ${
          isOpen
            ? "h-[13vh] translate-y-0"
            : isCollapsed
              ? "h-[5vh] translate-y-[30%]"
              : "h-[20vh] translate-y-[32%]"
        }`}
        style={dragging ? { transform: `translateY(${offset}px)` } : {}}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        onTouchStart={handleTouchStart}
      >
        <Card className="w-full rounded-none shadow-sm bg-white">
          <CardHeader className="justify-between">
            <div className="flex gap-5">
              <div className="flex flex-col gap-1 items-start justify-center pb-4">
                <h5 className="text-2xl tracking-tight text-default-400">
                  latest game
                </h5>
                <h4 className="text-3xl text-black font-bold pb-3">Leaderboards</h4>
              </div>
            </div>
            <Button
              className="relative flex items-center ml-auto justify-center h-[54] w-[133] gap-4 bg-[#bffb4f] font-bold text-black pl-12"
              radius="full"
              size="lg"
              onPress={() => router.push("/myrewards")}
            >
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
              History
            </Button>
          </CardHeader>
        </Card>
      </div>

      {/* Open/Close Button */}
      <button
        className="fixed bottom-17 left-1/2 transform -translate-x-1/2 bg-black-500 text-white py-2 px-6 rounded-full shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "" : ""}
      </button>
    </div>
  );
};

export default LatestGameBottomSheet;
