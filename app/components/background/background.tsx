import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export default function Background() {
  return (
    <div className="z-0">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=1azFfRFQs2k?modestbranding=1&showinfo=0"
        playing
        loop
        muted
        width="100%"
        height="100%"
      />
    </div>
  );
}
