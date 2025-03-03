"use client";
import { UserPlusIcon } from "@heroicons/react/24/outline";
import { Card, CardHeader, CardBody } from "@HeroUI/react";

interface LocalGameProps {
  className?: string;
}

export default function LocalGame({ className = "" }: LocalGameProps) {
  return (
    <Card className={`flex-1 py-4 ${className}`}>
      <CardBody className="overflow-visible py-2">
        <UserPlusIcon className="text-[#bffb4f]" width={75} />
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny lowerletter text-default-500">join a</p>
        <p className="text-tiny lowerletter text-default-500">local game</p>
      </CardHeader>
    </Card>
  );
}
