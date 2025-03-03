"use client";
import Link from "next/link";

import DashBoardTab from "./dashboardtab";
import LatestGameBottomSheet from "./LatestGameBottomSheet";

import LocalGame from "@/components/localGame";
import Area from "@/components/area";
import PrizesandCash from "@/components/prizesandCash";

export default function Dashboard() {
  return (
    <div>
      <div className="mb-9">
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
