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
        className="fixed -z-20 w-screen h-screen object-cover top-0 left-0 brightness-75"
      >
        <source
          src="https://mptrswa.com/pendorielle1080.mp4"
          type="video/mp4"
        />
      </video>
      <div className="h-screen flex text-center items-center justify-center">
        {/* <div className="max-w-6xl p-10 backdrop-brightness-75 rounded-3xl backdrop-blur-sm"> */}
        <div className="max-w-6xl p-10">
          <Image
            alt="Tailwind CSS Navbar component"
            src="https://kcesar.org/assets/logo/logo_kcesar_300x300.png"
            width={200}
            height={200}
            className="drop-shadow pb-10 hidden md:inline-block"
          />
          <Image
            alt="Tailwind CSS Navbar component"
            src="https://kcesar.org/assets/logo/logo_kcesar_300x300.png"
            width={120}
            height={120}
            className="drop-shadow pb-10 inline-block md:hidden"
          />
          <h1 className="text-4xl md:text-7xl neuzeit-light text-slate-50 drop-shadow">
            King County Explorer Search and Rescue
          </h1>
          <br />
          <p className="py-6 text-slate-100">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link href="/join-us" className="btn">
            Join Us
          </Link>
        </div>
      </div>
    </div>
  );
}
