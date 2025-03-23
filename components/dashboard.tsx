"use client";
import Link from "next/link";
import { useEffect } from "react";

import DashBoardTab from "./dashboardtab";
import LatestGameBottomSheet from "./LatestGameBottomSheet";

import LocalGame from "@/components/localGame";
import Area from "@/components/area";
import PrizesandCash from "@/components/prizesandCash";
import { useNavbarHeight } from "@/app/contexts/NavbarHeightContext";

export default function Dashboard() {
  // State to store navbar height based on screen width
  const { setNavbarHeight } = useNavbarHeight(); // Destructure only setNavbarHeight

  useEffect(() => {
    // Set the navbar height to 320px regardless of screen width
    setNavbarHeight("h-[100px]");

    // Clean up function to reset the height when the component unmounts
    return () => {
      setNavbarHeight("");
    };
  }, [setNavbarHeight]);

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-bold text-3xl">how to play</h1>
      </div>

      <div className="flex gap-4 mb-8 w-full">
        <Link className="flex-1" href="/local-game">
          <LocalGame className="w-full h-[184]" />
        </Link>
        <Link className="flex-1" href="/area-and-points">
          <Area className="w-full h-[184]" />
        </Link>
        <Link className="flex-1" href="/prizes-and-cash">
          <PrizesandCash className="w-full h-[184]" />
        </Link>
      </div>

      <div className="mb-4 flex justify-between items-center w-full">
        <DashBoardTab className="flex-end" />
      </div>
      <div className="pb-[300px]">
        <LatestGameBottomSheet />
      </div>
    </div>
  );
}
