"use client";
import React, { useState, useRef, TouchEvent, useEffect } from "react";
import {
  Card,
  CardHeader,
  Button,
  Divider,
  CardBody,
  Avatar,
  CardFooter,
} from "@HeroUI/react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

import Map from "./map";
import { RedCrossWithNumber } from "./icons";

import { useNavbarVisibility } from "@/app/contexts/NavbarVisibilityContext";

export default function ProductDetail() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [dragging, setDragging] = useState<boolean>(false);
  const [translateY, setTranslateY] = useState<number>(0); // Use translateY state
  const touchStartY = useRef<number>(0);
  const { setIsVisible } = useNavbarVisibility();
  const { isVisible } = useNavbarVisibility(); // Get isVisible
  const router = useRouter(); // Get the router instance

  useEffect(() => {
    setIsVisible(false);

    return () => setIsVisible(true);
  }, []);

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
      return "h-[461px] translate-y-0";
    } else if (isCollapsed) {
      return "h-[100px] translate-y-[100%]";
    } else {
      return "h-[100px] translate-y-[0%]";
    }
  };

  return (
    <div>
      <div className="w-full rounded-none">
        <Map />
      </div>

      {/* Conditionally render the back button in a separate div */}
      {!isVisible && (
        <div
          style={{
            position: "absolute",
            top: "80px",
            left: "20px",
            zIndex: 102,
          }}
        >
          {" "}
          {/* Adjust top, left as needed */}
          <button
            className="h-[52px] w-[52px] flex items-center justify-center bg-white rounded-full hover:bg-gray-200 transition duration-200 ease-in-out"
            onClick={() => router.back()}
          >
            <ArrowLeftIcon className="h-[22px] w-[22px] stroke-[3] text-black" />
          </button>
        </div>
      )}

      <div
        className={`fixed bottom-0 left-0 w-full bg-black p-3 rounded-t-3xl shadow-lg transition-transform duration-300 ease-in-out transform z-[100] ${getBottomSheetHeight()}`}
        style={{ transform: `translateY(${dragging ? translateY : 0}px)` }}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        onTouchStart={handleTouchStart}
      >
        <Card className="w-full rounded-none shadow-sm bg-black">
          <CardHeader className="justify-between">
            <div className="flex gap-5">
              <Avatar
                isBordered
                className="h-[62px] w-[62px] rounded-3xl"
                radius="full"
                size="md"
                src="https://i.pinimg.com/236x/7a/53/b6/7a53b6ae10173f474bf201c41e0feea3.jpg"
              />
              <div className="flex flex-col items-start justify-center">
                <h4 className="text-3xl font-bold leading-[1.1]">Starbucks</h4>
                {!isCollapsed && (
                  <h5 className="text-small tracking-tight text-default-400">
                    Manhattan Avenue
                  </h5>
                )}
              </div>
            </div>
            <Button
              className="relative flex items-center justify-center bg-transparent text-white"
              radius="full"
              size="lg"
              onPress={() => {
                if (isOpen) {
                  setIsCollapsed(true);
                  setTimeout(() => setIsOpen(false), 300);
                } else {
                  setIsOpen(true);
                  setIsCollapsed(false);
                }
              }}
            >
              <span className="absolute right-[0.2rem] bg-gray-800 text-white p-2 rounded-full flex items-center justify-center">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 9l-7 7-7-7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Button>
          </CardHeader>

          <Divider />

          {isOpen && (
            <>
              <CardBody className="space-y-6">
                <Card className="rounded-3xl shadow-sm bg-gray-900 text-white w-[386] h-[84px] mt-[10px]">
                  <CardHeader className="justify-between">
                    <div className="flex gap-5 justify-between w-full">
                      <div className="flex flex-col items-start justify-center">
                        <h5 className="text-small tracking-tight text-default-400">
                          Current max points
                        </h5>
                        <h4 className="text-large font-bold ">16,000</h4>
                      </div>
                      <RedCrossWithNumber />
                    </div>
                  </CardHeader>
                </Card>
                <Card className="rounded-3xl shadow-sm bg-gray-900 text-white w-[386] h-[84px]">
                  <CardHeader className="justify-between">
                    <div className="flex gap-5">
                      <div className="flex flex-col items-start justify-center">
                        <h5 className="text-small tracking-tight text-default-400">
                          Connect time for max points
                        </h5>
                        <h4 className="text-large font-bold">6 mins</h4>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </CardBody>

              <CardFooter className="bg-black/40 p-4 w-full">
                <Button
                  className="w-[384px] h-[80px] font-bold flex items-center bg-[#bffb4f] text-xl text-black pr-[90]"
                  radius="full"
                  size="lg"
                >
                  <span className="absolute left-[0.5rem] bg-black text-white p-2 rounded-full transform rotate-[-45deg] flex items-center justify-center">
                    <svg
                      className="h-12 w-12"
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
                  Initiate Pairing
                </Button>
              </CardFooter>
            </>
          )}
        </Card>
      </div>
    </div>
  );
}
