import React, { useRef } from "react";
import { projectItems } from "../data/data";
import { gsap, useGSAP, SplitText } from "../lib/gsap";

export default function Projects() {
  const projectsRef = useRef<HTMLElement | null>(null);
  useGSAP(
    () => {
     
    },
    { scope: projectsRef },
  );
  return (
    <section ref={projectsRef}>
     
    </section>
  );
}
