"use client";
import React, { useState, useRef, TouchEvent, useEffect } from "react";
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
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

import Map from "./map";

import { useNavbarVisibility } from "@/app/contexts/NavbarVisibilityContext";

export default function ProductDetail() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [dragging, setDragging] = useState<boolean>(false);
  const [translateY, setTranslateY] = useState<number>(0); // Use translateY state
  const touchStartY = useRef<number>(0);
  const { setIsVisible } = useNavbarVisibility();
  const { isVisible } = useNavbarVisibility(); // Get isVisible

  useEffect(() => {
    setIsVisible(false);

    return () => setIsVisible(true);
  }, []);

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartY.current = e.touches[0].clientY;
    setDragging(true);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
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
      return "h-[527px] translate-y-0";
    } else if (isCollapsed) {
      return "h-[80px] translate-y-[100%]";
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
            left: "30px",
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
        className={`fixed bottom-0 left-0 w-full bg-black p-1 rounded-3xl rounded-b-none shadow-lg transition-transform duration-300 ease-in-out transform z-[100] ${getBottomSheetHeight()}`}
        style={{ transform: `translateY(${dragging ? translateY : 0}px)` }}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        onTouchStart={handleTouchStart}
      >
        <Card className="w-full shadow-sm bg-black h-full flex flex-col">
          <CardHeader className="justify-between h-[80px] relative">
            <Button
              className="w-full sm:w-64 flex flex-col gap-1 items-start justify-center bg-black text-white absolute left-0"
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
              <span className=" absolute right-6 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full flex items-center justify-center">
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

          <CardBody className="flex-1 overflow-y-auto max-h-[calc(100%-200px)">
            {/* Keeping your CardBody content as it is */}
            {[
              {
                name: "Points Collected",
                username: "@JohnD",
                points: 5000,
                imageSrc: "IMG_3951.jpeg",
              },
              {
                name: "Double Coins",
                username: "@JaneS",
                text: "6:10 - 6:20",
                imageSrc: "IMG_3952.jpeg",
              },
              {
                name: "Points Collected",
                username: "@AlexB",
                points: 5000,
                imageSrc: "IMG_3951.jpeg",
              },
              {
                name: "Points Collected",
                username: "@ChrisB",
                points: 5000,
                imageSrc: "IMG_3951.jpeg",
              },
            ].map((card, index) => (
              <div key={index} className="m-0 p-0">
                <Card className="w-full rounded-md shadow-sm bg-black border-white/20 text-white !h-[90px] flex items-center pt-[0] pb-0">
                  <CardHeader className="flex gap-3 h-full">
                    <Image
                      alt="heroui logo"
                      className="rounded-3xl h-[62px] w-[78px] object-cover"
                      src={`${card.imageSrc}`}
                    />
                    <div className="flex justify-between items-center w-full">
                      <div>
                        <p className="text-small text-default-600">
                          {card.name}
                        </p>
                        <p className="text-tiny text-default-400">
                          {card.username}
                        </p>
                      </div>
                      <p
                        className={`text-small ${card.points ? "text-[#bffb4f]" : "text-white"}`}
                      >
                        {card.points
                          ? `+${card.points.toLocaleString()}`
                          : card.text}
                      </p>
                    </div>
                  </CardHeader>
                </Card>
                <Divider className="border-t-2 border-white/40 my-1" />
              </div>
            ))}
          </CardBody>

          <CardFooter className="w-full h-[109px] bg-black border-white/20 border-t rounded-t-3xl flex flex-col justify-start">
            {/* Keeping your CardFooter content as it is */}
            <div className="flex justify-between items-start w-full px-3">
              <div className="flex flex-col items-start">
                <p className="text-tiny text-default-400">Points</p>
                <p className="text-tiny text-[#bffb4f]">33,490</p>
              </div>
              <div className="flex flex-col items-start">
                <p className="text-tiny text-default-400">Rank</p>
                <p className="text-tiny text-[#bffb4f]">3 of 32</p>
              </div>
              <Button
                className="font-bold text-black bg-white w-[132px] h-[38px] rounded-3xl"
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
