import { Card, CardHeader, CardBody } from "@HeroUI/react";

import { RedCrossWithStipplesSVG } from "./icons";

export default function Findagame() {
  return (
    <div className="w-full flex justify-center">
      <Card className="w-full h-[209px] py-6 relative flex flex-col justify-center items-center">
        <CardBody className="overflow-visible flex justify-center items-center">
          <RedCrossWithStipplesSVG />
        </CardBody>
        <CardHeader className="px-6 flex flex-col items-center text-center">
          <p className="text-lg font-bold">No Games Available</p>
          <p className="text-sm text-gray-500">Please check back later</p>
        </CardHeader>
      </Card>
    </div>
  );
}
