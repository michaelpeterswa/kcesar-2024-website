import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="https://mptrswa.com/marckworth1080frame1.png"
        className="fixed -z-20 w-screen h-screen object-cover top-0 left-0 brightness-75"
      >
        <source src="https://mptrswa.com/marckworth1080.mp4" type="video/mp4" />
      </video>
      <div className="h-screen flex text-center items-center justify-center">
        {/* <div className="max-w-6xl p-10 backdrop-brightness-75 rounded-3xl backdrop-blur-sm"> */}
        <div className="max-w-6xl p-10">
          <Image
            alt="Tailwind CSS Navbar component"
            src="/kcesar/logo_kcesar_300x300.png"
            width={200}
            height={200}
            className="drop-shadow inline-block pb-10"
          />
          <h1 className="text-7xl neuzeit-light text-white drop-shadow">
            King County ESAR
          </h1>
          <br />
          <h1 className="text-2xl neuzeit-light text-white drop-shadow">
            King County, Washington
          </h1>
          <br />
          <p className="text-white">
            Founded in 1954, King County Explorer Search & Rescue is one of the
            earliest Search & Rescue organizations established in the United
            States and the largest of eight member-units of the King County
            Search & Rescue Association.
          </p>
          <Link href="/join-us" className="btn">
            Join Us
          </Link>
        </div>
      </div>
    </div>
  );
}
