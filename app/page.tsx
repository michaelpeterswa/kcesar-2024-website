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
            <div className="grid grid-cols-3 gap-4 place-items-stretch">
              <div className="col-span-2 overflow-hidden">
                <Image
                  alt="Tailwind CSS Navbar component"
                  src="https://mptrswa.com/rescue.jpg"
                  width={1500}
                  height={400}
                  className="brightness-50 object-cover max-w-[1500px] max-h-[400px]"
                />
              </div>
              <div className="bg-orange-500">
                <Stats />
              </div>
              <div className=" bg-yellow-500">
                <Stats />
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
              <div className="bg-purple-500">
                <Stats />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
