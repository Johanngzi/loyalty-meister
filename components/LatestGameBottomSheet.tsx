"use client";

import React, { useState, useRef, TouchEvent } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Card, CardHeader, Button } from "@HeroUI/react";

const LatestGameBottomSheet = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [dragging, setDragging] = useState<boolean>(false);
  const [translateY, setTranslateY] = useState<number>(0); // Use translateY state
  const touchStartY = useRef<number>(0);

  const pathname = usePathname();
  const router = useRouter();

  if (pathname !== "/") return null;

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>): void => {
    touchStartY.current = e.touches[0].clientY;
    setDragging(true);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>): void => {
    if (dragging) {
      setTranslateY(e.touches[0].clientY - touchStartY.current);
    }
  };

  const handleTouchEnd = () => {
    if (dragging) {
      const distance = translateY;

      if (distance < -100) {
        setIsOpen(true);
        setIsCollapsed(false);
      } else if (distance > 100 && isOpen) {
        setIsCollapsed(true);
      } else if (distance > 100 && isCollapsed) {
        setIsOpen(false);
      }

      setDragging(false);
      setTranslateY(0);
    }
  };

  const getBottomSheetHeight = (): string => {
    if (isOpen) {
      return "h-[124px] translate-y-0";
    } else if (isCollapsed) {
      return "h-[20px] translate-y-[100%]";
    } else {
      return "h-[100px] translate-y-[0%]";
    }
  };

  return (
    <div>
      <div
        className={`fixed bottom-0 left-0 w-full bg-white p-3 rounded-t-3xl shadow-lg transition-transform duration-300 ease-in-out transform z-[100] ${getBottomSheetHeight()}`}
        style={{ transform: `translateY(${dragging ? translateY : 0}px)` }}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        onTouchStart={handleTouchStart}
      >
        <Card className="w-full shadow-sm bg-white h-[124px]">
          <CardHeader className="justify-between z">
            <div className="flex gap-5 justify-start">
              <div className="flex flex-col gap-1 items-start justify-center pb-4">
                <h5 className="text-2xl tracking-tight text-default-400">
                  latest game
                </h5>
                <h4 className="text-3xl text-black font-bold pb-3">
                  Leaderboards
                </h4>
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
    </div>
  );
};

export default LatestGameBottomSheet;
