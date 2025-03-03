"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardHeader,
  Image,
  Button,
  Divider,
  CardBody,
  CardFooter,
} from "@HeroUI/react";

import Map from "./map";

export default function ProductDetail() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [startTouch, setStartTouch] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartTouch(e.touches[0].clientY);
    setDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setOffset(e.touches[0].clientY - startTouch);
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

      {/* Bottom Sheet Container */}
      <div
        className={`fixed bottom-0 left-0 w-full bg-black p-3 rounded-t-3xl shadow-lg transition-all duration-300 ease-in-out transform z-[100] ${
          isOpen
            ? "h-[524px] translate-y-0"
            : isCollapsed
              ? "h-[100px] translate-y-[80%]"
              : "h-[100px] translate-y-[92%]"
        }`}
        style={dragging ? { transform: `translateY(${offset}px)` } : {}}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        onTouchStart={handleTouchStart}
      >
        <Card className="w-full rounded-none shadow-sm bg-black h-full flex flex-col">
          {/* Header */}
          <CardHeader className="justify-between">
            <Button
              className="w-full sm:w-64 flex flex-col gap-1 items-start justify-center bg-black text-white"
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
              <span>Game Messages</span>
              <span className="absolute right-0 bg-gray-800 text-white p-2 rounded-full flex items-center justify-center">
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

          {/* Scrollable Content */}
          <CardBody className="flex-1 overflow-y-auto space-y-4">
            {[...Array(4)].map((_, index) => (
              <div key={index}>
                <Card className="w-full rounded-md shadow-sm bg-black border-white/20 text-white h-[89px]">
                  <CardHeader className="flex gap-3">
                    <Image
                      alt="heroui logo"
                      className="rounded-3xl"
                      height={62}
                      radius="lg"
                      src="https://i.pinimg.com/236x/7a/53/b6/7a53b6ae10173f474bf201c41e0feea3.jpg"
                      width={62}
                    />
                    <div className="flex justify-between items-center w-full">
                      <div>
                        <p className="text-small text-default-600">
                          Points Collected {index + 1}{" "}
                          {/* Display index dynamically */}
                        </p>
                        <p className="text-tiny text-default-400">
                          @TheSpot{index + 1}
                        </p>{" "}
                        {/* Change @TheSpot dynamically */}
                      </div>
                      <p className="text-small text-[#bffb4f]">
                        +{(index + 1) * 1000}
                      </p>{" "}
                      {/* Change points dynamically */}
                    </div>
                  </CardHeader>
                </Card>
                {/* Divider after each card */}
                <Divider className="border-t-2 border-white/40 my-2" />
              </div>
            ))}
          </CardBody>

          {/* Sticky Footer */}
          <CardFooter className="w-[440px] h-[110px] bg-black border-white/20 border-t p-4 flex flex-col justify-start">
            <div className="flex justify-between items-center w-full">
              <div>
                <p className="text-tiny text-default-400">Points</p>
                <p className="text-tiny text-[#bffb4f]">33,490</p>
              </div>
              <div>
                <p className="text-tiny text-default-400">Rank</p>
                <p className="text-tiny text-[#bffb4f]">3 of 32</p>
              </div>
              <Button
                className="font-bold text-black bg-white w-[132px] h-[38px] mr-4 rounded-3xl"
                color="default"
                radius="lg"
                size="sm"
                variant="flat"
                onPress={() => router.push("/myrewards")}
              >
                Leaderboard
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
