import React from "react";
import Image from "next/image";
import Stats from "./home/stats";
import Video from "./home/video";
import Hero from "./home/hero";

export default function Home() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="min-h-screen">
          <Video />
          <Hero />
        </div>
      </div>
      <div className=" border-t-black border-t-4">
        <div className="flex min-w-full bg-white py-10">
          <div className="container mx-auto text-black">
            <div className="md:grid grid-cols-3 gap-4 place-items-stretch hidden">
              <div className="col-span-2 overflow-hidden">
                <Image
                  alt="Tailwind CSS Navbar component"
                  src="https://mptrswa.com/rescue.jpg"
                  width={1500}
                  height={400}
                  className="brightness-50 object-cover max-w-[1500px] max-h-[400px]"
                />
              </div>
              <div className="">
                <Stats number="150+" description="Searches per Year" />
              </div>
              <div className=" ">
                <Stats number="10000+" description="Hours" />
              </div>
              <div className="col-span-2 overflow-hidden">
                <Image
                  alt="Tailwind CSS Navbar component"
                  src="https://mptrswa.com/rescue.jpg"
                  width={1500}
                  height={400}
                  className="brightness-50 object-cover max-w-[1500px] max-h-[400px]"
                />
              </div>
              <div className="col-span-2 overflow-hidden">
                <Image
                  alt="Tailwind CSS Navbar component"
                  src="https://mptrswa.com/rescue.jpg"
                  width={1500}
                  height={400}
                  className="brightness-50 object-cover max-w-[1500px] max-h-[400px]"
                />
              </div>
              <div className="">
                <Stats number="500+" description="Volunteers" />
              </div>
            </div>
            <div className="md:hidden grid-cols-1 place-items-stretch grid ">
              <Stats number="150+" description="Searches per Year" />
              <div className="divider"></div>
              <Stats number="10000+" description="Hours" />
              <div className="divider"></div>
              <Stats number="500+" description="Volunteers" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
