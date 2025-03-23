"use client";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { Card, CardHeader, CardBody } from "@HeroUI/react";

interface PrizesandcashProps {
  className?: string;
}

export default function Prizesandcash({ className = "" }: PrizesandcashProps) {
  return (
    <Card className={`flex-1 py-4 ${className}`}>
      <CardBody className="overflow-visible py-2">
        <CurrencyDollarIcon
          className="object-cover rounded-xl text-[#bffb4f]"
          width={75}
        />
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-small lowerletter text-default-500">win prizes &</p>
        <p className="text-small lowerletter text-default-500">social cash</p>
      </CardHeader>
    </Card>
  );
}
