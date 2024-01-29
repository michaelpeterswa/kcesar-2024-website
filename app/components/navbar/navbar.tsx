"use client";

import Dropdown from "./dropdown";
import Links from "./links";
import EndButtons from "./end-buttons";
import Logo from "./logo";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [navbarTransparent, setNavbarTransparent] = useState(true);

  // determine current page
  const pathname = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setNavbarTransparent(false);
      } else {
        setNavbarTransparent(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  let transparentCss = "navbar sticky top-0 z-50 text-slate-50";
  let solidCss =
    "navbar sticky top-0 z-50 text-slate-50 bg-esar-green bg-opacity-90 backdrop-blur-sm";

  return (
    <div className={navbarTransparent ? transparentCss : solidCss}>
      <div className="navbar-start">
        <Dropdown />
        <Logo />
      </div>
      <Links />
      <div className="navbar-end">
        <EndButtons />
      </div>
    </div>
  );
}
