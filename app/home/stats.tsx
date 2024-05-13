"use client";

import CountUp from "react-countup";

export default function Stats({
  number,
  description,
}: {
  number: Number;
  description: string;
}) {
  return (
    <div className="flex justify-center items-center h-full">
      <div>
        <text className="text-center">
          <span className="font-komet text-6xl block pb-4">
            <CountUp delay={2} start={0} end={number.valueOf()} duration={4} />+
          </span>
          <span className="font-komet text-2xl block">{description}</span>
        </text>
      </div>
    </div>
  );
}
