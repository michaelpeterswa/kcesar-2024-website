import Button from "@mui/material/Button";
import React from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        playing={true}
        loop={true}
        muted={true}
        width="100%"
        height="100%"
      />
      <div className="text-center">
        {/* <Background/> */}
        <div className="max-w-xl z-10">
          <h1 className="text-7xl neuzeit font-light">
            King County Explorer Search and Rescue
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Button variant="contained">Hello world</Button>
        </div>
      </div>
    </div>
  );
}
