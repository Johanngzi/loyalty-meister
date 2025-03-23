"use client";

import { MapPinIcon } from "@heroicons/react/24/solid";
import { Card, CardHeader, CardBody } from "@HeroUI/react";

interface AreaProps {
  className?: string;
}

export default function Area({ className = "" }: AreaProps) {
  return (
    <Card className={`flex-1 py-4  ${className}`}>
      <CardBody className="overflow-visible py-2">
        <MapPinIcon
          className="object-cover rounded-xl text-[#bffb4f]"
          width={75}
        />
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-small lowerletter text-default-500">explore</p>
        <p className="text-small lowerletter text-default-500">your area &</p>
        <p className="text-small lowerletter text-default-500">earn points</p>
      </CardHeader>
    </Card>
  );
}
