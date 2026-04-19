import React, { useRef } from "react";
import { heroListItems, heroUsersImg } from "../data/data";
import { RiAddLine } from "@remixicon/react";
import { gsap, SplitText, useGSAP } from "../lib/gsap";

export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);
  useGSAP(
    () => {
      
    },
    { scope: heroRef },
  );
  return (
    <section
      ref={heroRef}
      className="relative min-h-screen bg-[url(/images/hero-bg-img.png)] bg-cover bg-center bg-no-repeat pt-[25vh] pb-20 sm:pb-0"
    >
      
    </section>
  );
}
