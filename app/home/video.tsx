export default function Video() {
  return (
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
  );
}
