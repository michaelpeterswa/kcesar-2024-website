import Button from "@mui/material/Button";
import React from "react";
import Navbar from "./components/navbar/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed -z-10 w-screen h-screen object-cover top-0 left-0"
      >
        <source
          src="https://mptrswa.com/pendorielle1080.mp4"
          type="video/mp4"
        />
      </video>
      <div className="h-screen flex text-center items-center justify-center">
        <div className="max-w-6xl p-10 mt-20 backdrop-brightness-75 rounded-3xl backdrop-blur-sm">
          <h1 className="text-7xl neuzeit-light text-slate-50">
            King County Explorer Search and Rescue
          </h1>
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
