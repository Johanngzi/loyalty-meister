"use client";
import {
  Card,
  CardHeader,
  Tabs,
  Tab,
  Image,
  Button,
  CardFooter,
} from "@HeroUI/react";
import { useEffect } from "react";

import { PlusThreeBadge } from "./icons";

import { useNavbarHeight } from "@/app/contexts/NavbarHeightContext";
import { useNavbarName } from "@/app/contexts/NavbarNameContext";

export default function Myrewards() {
  const variants: Array<"light"> = ["light"];
  const { setNavbarHeight, } = useNavbarHeight(); // Destructure only setNavbarHeight
  const { setNavbarName, setNavbarNameClass } = useNavbarName(); // Destructure only setNavbarName

  useEffect(() => {
    setNavbarHeight("h-[100px]");
    setNavbarName("Leaderboards");
    setNavbarNameClass("text-center");

    return () => {
      setNavbarHeight("");
      setNavbarName("SOCIAL CHANGE");
      setNavbarNameClass(""); // Reset the class here
    };
  }, [setNavbarHeight, setNavbarName, setNavbarNameClass]);


  return (
    <div>
      {variants.map((variant) => (
        <Tabs
          key={variant}
          aria-label="Tabs variants"
          className="flex justify-center items-center mb-1  text-black text-red-500 tabActive:text-green-500 text-5xl"
          color={"primary"}
          radius="full"
          style={{
            marginBottom: "4px",
            marginTop: "-25px",
            fontSize: "3rem", // Increase font size directly
          }}
          variant={variant}
        >
          <Tab key="all" className="text-xl h-[45px] " title="all">
            <div className="mb-5``2`]">
              <h1 className="font-bold textAZ                                                                                                            ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''-3xl">active games</h1>
            </div>
            <Card className="bg-black">
              <Card
                isFooterBlurred
                className="w-full h-[185px] col-span-12 sm:col-span-7 flex flex-row mb-6 h-[185px]"
              >
                <CardHeader className="flex items-center justify-start w-full px-4 pt-0.5">
                  {/* Left side: Avatar group */}
                  <div className="relative w-16 h-16 mr-4">
                    <Image
                      removeWrapper
                      alt="Avatar 1"
                      className="absolute top-0 left-0 w-11 h-11 object-cover rounded-full border-2 border-white"
                      src="https://i.pinimg.com/236x/7a/53/b6/7a53b6ae10173f474bf201c41e0feea3.jpg"
                    />
                    <div className="absolute top-[-0px] left-8 border-white z-20">
                      <PlusThreeBadge />
                    </div>
                    <Image
                      removeWrapper
                      alt="Avatar 3"
                      className="absolute bottom-[-10px] left-2 w-11 h-11 object-cover rounded-full border-2 border-white"
                      src="https://i.pinimg.com/236x/66/20/e4/6620e4966bd08771df0ecb3030514388.jpg"
                    />
                  </div>

                  {/* Center: Text moved to the left */}
                  <div className="flex flex-col items-start">
                    <h4 className="text-white/90 font-medium text-xl">
                      Brooklyn
                    </h4>
                    <p className="text-tiny text-white/60 lowercase font-bold">
                      5 beacons
                    </p>
                  </div>

                  {/* Right side: Button */}
                  <div className="flex ml-auto">
                    <Button className="h-[80px] w-[80px] bg-transparent flex justify-center items-center text-white w-auto">
                      <span className="bg-black text-white p-2 rounded-full transform rotate-[-45deg] flex items-center justify-center">
                        <svg
                          className="h-[60px] w-[60px]"
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
                    </Button>
                  </div>
                </CardHeader>

                {/* Sticky Footer */}
                <CardFooter className="w-full p-4 absolute bottom-0 left-0">
                  <div className="flex justify-between items-center w-full">
                    <div>
                      <p className="text-tiny text-default-400">game time</p>
                      <p className="text-tiny text-white">5pm - 10pm</p>
                    </div>
                    <div>
                      <p className="text-tiny text-default-400">social cash</p>
                      <p className="text-tiny text-white">3 of 59</p>
                    </div>
                    <div>
                      <p className="text-tiny text-default-400">Rank</p>
                      <p className="text-tiny text-[#bffb4f]">$ +500</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>

              <Card
                isFooterBlurred
                className="w-full h-[210px] col-span-12 sm:col-span-7 flex flex-row h-[185px]"
              >
                <CardHeader className="flex items-center justify-start w-full px-4 pt-0.5">
                  {/* Left side: Avatar group */}
                  <div className="relative w-16 h-16 mr-4">
                    <Image
                      removeWrapper
                      alt="Avatar 1"
                      className="absolute top-0 left-0 w-11 h-11 object-cover rounded-full border-2 border-white"
                      src="https://i.pinimg.com/236x/7a/53/b6/7a53b6ae10173f474bf201c41e0feea3.jpg"
                    />
                    <div className="absolute top-[-0px] left-8 border-white z-20">
                      <PlusThreeBadge />
                    </div>
                    <Image
                      removeWrapper
                      alt="Avatar 3"
                      className="absolute bottom-[-10px] left-2 w-11 h-11 object-cover rounded-full border-2 border-white"
                      src="https://i.pinimg.com/236x/66/20/e4/6620e4966bd08771df0ecb3030514388.jpg"
                    />
                  </div>

                  {/* Center: Text moved to the left */}
                  <div className="flex flex-col items-start">
                    <h4 className="text-white/90 font-medium text-xl">
                      Brooklyn
                    </h4>
                    <p className="text-tiny text-white/60 lowercase font-bold">
                      5 beacons
                    </p>
                  </div>

                  {/* Right side: Button */}
                  <div className="flex ml-auto">
                    <Button
                      className="h-[80px] w-[80px] bg-transparent flex justify-center items-center text-white w-auto"
                      radius="full"
                    >
                      <span className="bg-black text-white p-2 rounded-full transform rotate-[-45deg] flex items-center justify-center">
                        <svg
                          className="h-[60px] w-[60px]"
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
                    </Button>
                  </div>
                </CardHeader>
                {/* Sticky Footer */}
                <CardFooter className="w-full p-4 absolute bottom-0 left-0">
                  <div className="flex justify-between items-center w-full">
                    <div>
                      <p className="text-tiny text-default-400">game time</p>
                      <p className="text-tiny text-white">5pm - 10pm</p>
                    </div>
                    <div>
                      <p className="text-tiny text-default-400">social cash</p>
                      <p className="text-tiny text-white">3 of 59</p>
                    </div>
                    <div>
                      <p className="text-tiny text-default-400">Rank</p>
                      <p className="text-tiny text-[#bffb4f]">$ +500</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>

              <div className="mt-8">
                <div className="mb-4">
                  <h1 className="font-bold text-3xl">past games</h1>
                </div>
              </div>

              <Card
                isFooterBlurred
                className="w-full h-[210px] col-span-12 sm:col-span-7 flex flex-row h-[185px]"
              >
                <CardHeader className="flex items-center justify-start w-full px-4 pt-0.5">
                  {/* Left side: Avatar group */}
                  <div className="relative w-16 h-16 mr-4">
                    <Image
                      removeWrapper
                      alt="Avatar 1"
                      className="absolute top-0 left-0 w-11 h-11 object-cover rounded-full border-2 border-white"
                      src="https://i.pinimg.com/236x/7a/53/b6/7a53b6ae10173f474bf201c41e0feea3.jpg"
                    />
                    <div className="absolute top-[-0px] left-8 border-white z-20">
                      <PlusThreeBadge />
                    </div>
                    <Image
                      removeWrapper
                      alt="Avatar 3"
                      className="absolute bottom-[-10px] left-2 w-11 h-11 object-cover rounded-full border-2 border-white"
                      src="https://i.pinimg.com/236x/66/20/e4/6620e4966bd08771df0ecb3030514388.jpg"
                    />
                  </div>

                  {/* Center: Text moved to the left */}
                  <div className="flex flex-col items-start">
                    <h4 className="text-white/90 font-medium text-xl">
                      Brooklyn
                    </h4>
                    <p className="text-tiny text-white/60 lowercase font-bold">
                      5 beacons
                    </p>
                  </div>

                  {/* Right side: Button */}
                  <div className="flex ml-auto">
                    <Button
                      className="h-[80px] w-[80px] bg-transparent flex justify-center items-center text-white w-auto"
                      radius="full"
                    >
                      <span className="bg-black text-white p-2 rounded-full transform rotate-[-45deg] flex items-center justify-center">
                        <svg
                          className="h-[60px] w-[60px]"
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
                    </Button>
                  </div>
                </CardHeader>
                {/* Sticky Footer */}
                <CardFooter className="w-full p-4 absolute bottom-0 left-0">
                  <div className="flex justify-between items-center w-full">
                    <div>
                      <p className="text-tiny text-default-400">game time</p>
                      <p className="text-tiny text-white">5pm - 10pm</p>
                    </div>
                    <div>
                      <p className="text-tiny text-default-400">social cash</p>
                      <p className="text-tiny text-white">59 of 59</p>
                    </div>
                    <div>
                      <p className="text-tiny text-default-400">Rank</p>
                      <p className="text-tiny text-[#bffb4f]">$ +1000</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </Card>
          </Tab>
          <Tab
            key="active games"
            className="text-xl h-[45px]"
            title="active games"
          >
            <div className="mb-4">
              <h1 className="font-bold text-3xl">active games</h1>
            </div>
            <Card className="bg-balck">
              <Card
                isFooterBlurred
                className="w-full h-[210px] col-span-12 sm:col-span-7 flex flex-row mb-6 h-[185px]"
              >
                <CardHeader className="flex items-center justify-start w-full px-4 pt-0.5">
                  {/* Left side: Avatar group */}
                  <div className="relative w-16 h-16 mr-4">
                    <Image
                      removeWrapper
                      alt="Avatar 1"
                      className="absolute top-0 left-0 w-11 h-11 object-cover rounded-full border-2 border-white"
                      src="https://i.pinimg.com/236x/7a/53/b6/7a53b6ae10173f474bf201c41e0feea3.jpg"
                    />
                    <div className="absolute top-[-0px] left-8 border-white z-20">
                      <PlusThreeBadge />
                    </div>
                    <Image
                      removeWrapper
                      alt="Avatar 3"
                      className="absolute bottom-[-10px] left-2 w-11 h-11 object-cover rounded-full border-2 border-white"
                      src="https://i.pinimg.com/236x/66/20/e4/6620e4966bd08771df0ecb3030514388.jpg"
                    />
                  </div>

                  {/* Center: Text moved to the left */}
                  <div className="flex flex-col items-start">
                    <h4 className="text-white/90 font-medium text-xl">
                      Brooklyn
                    </h4>
                    <p className="text-tiny text-white/60 lowercase font-bold">
                      5 beacons
                    </p>
                  </div>

                  {/* Right side: Button */}
                  <div className="flex ml-auto">
                    <Button
                      className="h-[80px] w-[80px] bg-transparent flex justify-center items-center text-white w-auto"
                      radius="full"
                    >
                      <span className="bg-black text-white p-2 rounded-full transform rotate-[-45deg] flex items-center justify-center">
                        <svg
                          className="h-[60px] w-[60px]"
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
                    </Button>
                  </div>
                </CardHeader>
                {/* Sticky Footer */}
                <CardFooter className="w-full p-4 absolute bottom-0 left-0">
                  <div className="flex justify-between items-center w-full">
                    <div>
                      <p className="text-tiny text-default-400">game time</p>
                      <p className="text-tiny text-white">5pm - 10pm</p>
                    </div>
                    <div>
                      <p className="text-tiny text-default-400">social cash</p>
                      <p className="text-tiny text-white">3 of 59</p>
                    </div>
                    <div>
                      <p className="text-tiny text-default-400">Rank</p>
                      <p className="text-tiny text-[#bffb4f]">$ +500</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>

              <Card
                isFooterBlurred
                className="w-full h-[210px] col-span-12 sm:col-span-7 flex flex-row h-[185px]"
              >
                <CardHeader className="flex items-center justify-start w-full px-4 pt-0.5">
                  {/* Left side: Avatar group */}
                  <div className="relative w-16 h-16 mr-4">
                    <Image
                      removeWrapper
                      alt="Avatar 1"
                      className="absolute top-0 left-0 w-11 h-11 object-cover rounded-full border-2 border-white"
                      src="https://i.pinimg.com/236x/7a/53/b6/7a53b6ae10173f474bf201c41e0feea3.jpg"
                    />
                    <div className="absolute top-[-0px] left-8 border-white z-20">
                      <PlusThreeBadge />
                    </div>
                    <Image
                      removeWrapper
                      alt="Avatar 3"
                      className="absolute bottom-[-10px] left-2 w-11 h-11 object-cover rounded-full border-2 border-white"
                      src="https://i.pinimg.com/236x/66/20/e4/6620e4966bd08771df0ecb3030514388.jpg"
                    />
                  </div>

                  {/* Center: Text moved to the left */}
                  <div className="flex flex-col items-start">
                    <h4 className="text-white/90 font-medium text-xl">
                      Brooklyn
                    </h4>
                    <p className="text-tiny text-white/60 lowercase font-bold">
                      5 beacons
                    </p>
                  </div>

                  {/* Right side: Button */}
                  <div className="flex ml-auto">
                    <Button
                      className="h-[80px] w-[80px] bg-transparent flex justify-center items-center text-white w-auto"
                      radius="full"
                    >
                      <span className="bg-black text-white p-2 rounded-full transform rotate-[-45deg] flex items-center justify-center">
                        <svg
                          className="h-[60px] w-[60px]"
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
                    </Button>
                  </div>
                </CardHeader>
                {/* Sticky Footer */}
                <CardFooter className="w-full p-4 absolute bottom-0 left-0">
                  <div className="flex justify-between items-center w-full">
                    <div>
                      <p className="text-tiny text-default-400">game time</p>
                      <p className="text-tiny text-white">5pm - 10pm</p>
                    </div>
                    <div>
                      <p className="text-tiny text-default-400">social cash</p>
                      <p className="text-tiny text-white">3 of 59</p>
                    </div>
                    <div>
                      <p className="text-tiny text-default-400">Rank</p>
                      <p className="text-tiny text-[#bffb4f]">$ +500</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </Card>
          </Tab>
          <Tab key="past games" className="text-xl h-[45px]" title="past games">
            <div className="mb-4">
              <h1 className="font-bold text-3xl">past games</h1>
            </div>

            <Card className="bg-balck">
              <Card
                isFooterBlurred
                className="w-full h-[210px] col-span-12 sm:col-span-7 flex flex-row h-[185px] "
              >
                <CardHeader className="flex items-center justify-start w-full px-4 pt-0.5">
                  {/* Left side: Avatar group */}
                  <div className="relative w-16 h-16 mr-4">
                    <Image
                      removeWrapper
                      alt="Avatar 1"
                      className="absolute top-0 left-0 w-11 h-11 object-cover rounded-full border-2 border-white"
                      src="https://i.pinimg.com/236x/7a/53/b6/7a53b6ae10173f474bf201c41e0feea3.jpg"
                    />
                    <div className="absolute top-[-0px] left-8 border-white z-20">
                      <PlusThreeBadge />
                    </div>
                    <Image
                      removeWrapper
                      alt="Avatar 3"
                      className="absolute bottom-[-10px] left-2 w-11 h-11 object-cover rounded-full border-2 border-white"
                      src="https://i.pinimg.com/236x/66/20/e4/6620e4966bd08771df0ecb3030514388.jpg"
                    />
                  </div>

                  {/* Center: Text moved to the left */}
                  <div className="flex flex-col items-start">
                    <h4 className="text-white/90 font-medium text-xl">
                      Brooklyn
                    </h4>
                    <p className="text-tiny text-white/60 lowercase font-bold">
                      5 beacons
                    </p>
                  </div>

                  {/* Right side: Button */}
                  <div className="flex ml-auto">
                    <Button
                      className="h-[80px] w-[80px] bg-transparent flex justify-center items-center text-white w-auto"
                      radius="full"
                    >
                      <span className="bg-black text-white p-2 rounded-full transform rotate-[-45deg] flex items-center justify-center">
                        <svg
                          className="h-[60px] w-[60px]"
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
                    </Button>
                  </div>
                </CardHeader>
                {/* Sticky Footer */}
                <CardFooter className="w-full p-4 absolute bottom-0 left-0">
                  <div className="flex justify-between items-center w-full">
                    <div>
                      <p className="text-tiny text-default-400">game time</p>
                      <p className="text-tiny text-white">5pm - 10pm</p>
                    </div>
                    <div>
                      <p className="text-tiny text-default-400">social cash</p>
                      <p className="text-tiny text-white">59 of 59</p>
                    </div>
                    <div>
                      <p className="text-tiny text-default-400">Rank</p>
                      <p className="text-tiny text-[#bffb4f]">$ +1000</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </Card>
          </Tab>
        </Tabs>
      ))}
    </div>
  );
}
// Removed conflicting local declaration of useEffect
