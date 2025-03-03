"use client";
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  Button,
  Divider,
  CardBody,
  Avatar,
  CardFooter,
} from "@HeroUI/react";

import Map from "./map";
import { RedCrossWithNumber } from "./icons";

export default function ProductDetail() {
  const [isOpen, setIsOpen] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [startTouch, setStartTouch] = useState(0);
  const [currentTouch, setCurrentTouch] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>): void => {
    setStartTouch(e.touches[0].clientY);
    setDragging(true);
  };

  interface TouchMoveEvent extends React.TouchEvent<HTMLDivElement> {
    touches: React.TouchList;
  }

  const handleTouchMove = (e: TouchMoveEvent): void => {
    if (!dragging) return;
    const currentY = e.touches[0].clientY;

    setCurrentTouch(currentY);
    setOffset(currentY - startTouch);
  };

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
      <div className="w-full rounded-none">
        <Map />
      </div>

      <div
        className={`fixed bottom-0 left-0 w-full bg-black p-6 rounded-t-3xl shadow-lg transition-all duration-300 ease-in-out transform z-[100] ${
          isOpen
            ? "h-[461px] translate-y-0"
            : isCollapsed
              ? "h-[20vh] translate-y-[80%]"
              : "h-[200px]  translate-y-[50%]"
        }`}
        style={dragging ? { transform: `translateY(${offset}px)` } : {}}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        onTouchStart={handleTouchStart}
      >
        <Card className="w-full  rounded-none shadow-sm bg-black">
          <CardHeader className="justify-between">
            <div className="flex gap-5">
              <Avatar
                isBordered
                radius="full"
                size="md"
                src="https://i.pinimg.com/236x/7a/53/b6/7a53b6ae10173f474bf201c41e0feea3.jpg"
              />
              <div className="flex flex-col gap-1 items-start justify-center">
                <h4 className="text-large font-bold">Starbucks</h4>
                {!isCollapsed && (
                  <h5 className="text-small tracking-tight text-default-400">
                    Manhattan Avenue
                  </h5>
                )}
              </div>
            </div>
            <Button
              className="relative flex items-center justify-center gap-4 bg-black text-white"
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
              <CardBody className="space-y-4">
                <Card className="rounded-3xl shadow-sm bg-gray-900 text-white w-[384] h-[82px] mt-[10px]">
                  <CardHeader className="justify-between">
                    <div className="flex gap-5 justify-between w-full">
                      <div className="flex flex-col gap-1 items-start justify-center">
                        <h5 className="text-small tracking-tight text-gray-400">
                          Current max points
                        </h5>
                        <h4 className="text-large font-bold">16,000</h4>
                      </div>

                      {/* Replace Avatar with RedCrossWithNumber */}
                      <RedCrossWithNumber />
                    </div>
                  </CardHeader>
                </Card>
                <Card className="rounded-3xl shadow-sm bg-gray-900 text-white w-[386] h-[80px]">
                  <CardHeader className="justify-between">
                    <div className="flex gap-5">
                      <div className="flex flex-col gap-1 items-start justify-center">
                        <h5 className="text-small tracking-tight text-gray-400">
                          Connect time for max points
                        </h5>
                        <h4 className="text-large font-bold">6 mins</h4>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </CardBody>

              <CardFooter className="bg-black/40 p-4">
                <Button
                  className="w-[386] h-[80px] font-bold flex items-center bg-[#bffb4f] text-black pr-[147] mt-[20px]"
                  radius="full"
                  size="lg"
                >
                  <span className="absolute left-[0.3rem] bg-black text-white p-2 rounded-full transform rotate-[-45deg] flex items-center justify-center">
                    <svg
                      className="h-8 w-8"
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
