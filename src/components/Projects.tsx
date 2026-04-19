import React, { useRef } from "react";
import { projectItems } from "../data/data";
import { gsap, useGSAP, SplitText } from "../lib/gsap";

export default function Projects() {
  const projectsRef = useRef<HTMLElement | null>(null);
  useGSAP(
    () => {
      const titleSplit = SplitText.create(".projects-title", {
        type: "words,lines",
        linesClass: "text-line",
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top center",
          //   markers: true,
        },
      });

      tl.from(titleSplit.words, {
        yPercent: 100,
        duration: 0.7,
        stagger: 0.08,
        ease: "power2.inOut",
      });
    },
    { scope: projectsRef },
  );
  return (
    <section ref={projectsRef}>
      <div className="container">
        {/* title */}
        <div className="text-center">
          <p className="projects-title">POPULAR PROJECTS</p>
          <h2 className="projects-title">Featured Works</h2>
        </div>
        {/* wrapper */}
        <div className="mt-20 grid gap-12 md:gap-20">
          {projectItems.map((item) => (
            <a
              href="#"
              className="bg-neutral-900 p-8 md:p-20 lg:p-29.5 rounded-lg flex flex-col lg:flex-row lg:items-center lg:-space-x-20  max-w-max"
              key={item.id}
            >
              {/* Img */}
              <div className="max-w-max">
                <img src={item.img} alt={item.name} width={563} height={422} />
              </div>
              {/* content */}
              <div className="mt-5 space-y-3">
                <p className="border-b border-gray-400 max-w-52 text-end pb-1 uppercase text-lg">
                  {item.date}
                </p>
                <h3 className="text-6xl font-bold lg:text-[116px]">
                  {item.name}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
