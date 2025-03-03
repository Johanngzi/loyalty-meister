import { CurrencyDollarIcon, UserPlusIcon } from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/24/solid";
import * as React from "react";

export default function GoogleMapsLink() {
  return (
    <a
      className="flex items-center gap-2 text-blue-600 hover:underline"
      href="https://www.google.com/maps"
      rel="noopener noreferrer"
      target="_blank"
    >
      <MapPinIcon className="h-6 w-6 text-red-500" />
      <span>Open in Maps</span>
    </a>
  );
}

export function JoinButton() {
  return (
    <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
      <UserPlusIcon className="h-2 w-2 object-cover rounded-xl text-[#bffb4f]" />
      <span>Join Now</span>
    </button>
  );
}

export function PriceTag() {
  return (
    <div className="flex items-center gap-2 text-green-600">
      <CurrencyDollarIcon className="h-3 w-3 " />
      <span>Price: $99.99</span>
    </div>
  );
}

export function RedCrossWithStipplesSVG() {
  return (
    <div className="relative flex items-center justify-center w-40 h-[100px]">
      {/* Stippled Line (Curved Effect) */}
      <div className="absolute flex gap-2 bottom-6">
        <div className="w-6 h-4 bg-blue-500 rotate-[20deg] translate-y-2" />
        <div className="w-6 h-4 bg-green-500 rotate-[10deg] translate-y-1" />
        <div className="w-6 h-4 bg-yellow-500 rotate-[-5deg]" />
      </div>

      {/* Red Cross (Aligned to the Right of the Curve) */}
      <div className="absolute bottom-8 left-[135px] flex items-center justify-center">
        <div className="relative w-8 h-8">
          {/* Horizontal Bar */}
          <div className="absolute w-8 h-3 bg-red-500 top-2" />
          {/* Vertical Bar */}
          <div className="absolute h-8 w-3 bg-red-500 left-2" />
        </div>
      </div>
    </div>
  );
}

// components/RedCrossWithNumber.js

export function RedCrossWithNumber() {
  return (
    <div className="flex justify-center items-center w-16 h-16 bg-gray-800 rounded-full">
      <div className="relative w-12 h-12 rotate-45">
        {/* Vertical part of the cross */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-red-500 w-4 h-full" />

        {/* Horizontal part of the cross */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-red-500 w-full h-4" />

        {/* Number "5" in the middle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-lg font-bold rotate-[-45deg]">
          5
        </div>
      </div>
    </div>
  );
}

export function PlusThreeBadge() {
  return (
    <div className="relative flex items-center justify-center w-10 h-10 bg-[#bffb4f] text-black font-light text-lg rounded-full shadow-lg">
      +3
    </div>
  );
}

export function CrossIcon() {
  return (
    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#bffb4f]">
      <svg
        fill="black"
        height="32"
        viewBox="0 0 24 24"
        width="32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7.5 2l4.5 4.5L16.5 2l4.5 4.5L16.5 11l4.5 4.5L16.5 20l-4.5-4.5L7.5 20l-4.5-4.5L7.5 11 3 6.5 7.5 2z" />
      </svg>
    </div>
  );
}
