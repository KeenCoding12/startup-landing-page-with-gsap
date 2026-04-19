import React, { useRef } from "react";
import { servicesIcons } from "../data/data";
import { gsap, SplitText, useGSAP } from "../lib/gsap";

export default function Services() {
  const servicesRef = useRef<HTMLElement | null>(null);
  useGSAP(
    () => {
      
    },
    { scope: servicesRef },
  );
  return (
    <section ref={servicesRef} className="py-24 lg:py-32">
      
    </section>
  );
}
