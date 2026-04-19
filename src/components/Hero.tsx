import React, { useRef } from "react";
import { heroListItems, heroUsersImg } from "../data/data";
import { RiAddLine } from "@remixicon/react";
import { gsap, SplitText, useGSAP } from "../lib/gsap";

export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);
  useGSAP(
    () => {
      const titleSplit = SplitText.create(".hero-title", {
        type: "words, lines",
        linesClass: "text-line",
      });
      const textSplit = SplitText.create(".hero-text", {
        type: "words, lines",
        linesClass: "text-line",
      });

      const tl = gsap.timeline();

      tl.from(titleSplit.words, {
        yPercent: 100,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.inOut",
      })
        .from(".hero-icon", {
          opacity: 0,
          filter: "blur(5px)",
          scale: 0.4,
          ease: "power2.inOut",
        })
        .from(textSplit.words, {
          yPercent: 100,
          duration: 0.9,
          stagger: 0.04,
          ease: "power2.inOut",
        })
        .from(".avatar-wrapper", {
          opacity: 0,
          filter: "blur(5px)",
          ease: "power2.inOut",
        });
    },
    { scope: heroRef },
  );
  return (
    <section
      ref={heroRef}
      className="relative min-h-screen bg-[url(/images/hero-bg-img.png)] bg-cover bg-center bg-no-repeat pt-[25vh] pb-20 sm:pb-0"
    >
      <div className="container grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:gap-32">
        {/* Left column */}
        <div>
          <h1 className="text-7xl font-normal lg:text-[150px] hero-title">
            CREATIVE
          </h1>
          <h2 className="mb-4 grid lg:flex items-center gap-4 lg:pl-12 text-5xl font-bold sm:mb-7.5 lg:text-[150px]">
            <span className="shrink-0 hidden sm:block">
              <img
                src="/images/hero-title-icon.svg"
                alt="hero icon"
                width={150}
                height={150}
                className="hero-icon"
              />
            </span>
            <span className="text-7xl sm:text-7xl lg:text-[150px] hero-title">
              STUDIO
            </span>
          </h2>
          <p className="max-w-137.5 hero-text">
            Excellence projecting is devonshire dispatched remarkably on
            estimating. Side in so life past. Continue indulged speaking the was
            out horrible for domestic.
          </p>
        </div>
        {/* Right column */}
        <div className="flex h-full flex-col space-y-14 lg:space-y-0">
          {/* List */}
          <div className="grid max-w-75.5 gap-4 divide-y divide-gray-500">
            {heroListItems.map((text) => (
              <p className="hero-text" key={text}>
                {text}
              </p>
            ))}
          </div>
          {/* wrapper */}
          <div className="mt-auto space-y-6">
            {/* imgs wrapper */}
            <div className="flex items-center -space-x-6 avatar-wrapper">
              {heroUsersImg.map((img, idx) => (
                <img src={img} key={idx} alt="user" width={55} height={55} />
              ))}
              <button className="flex size-14 items-center justify-center rounded-full bg-white backdrop-blur-3xl transition-opacity hover:opacity-85">
                <RiAddLine />
              </button>
            </div>

            <div className="space-y-1 text-white">
              <p className="text-xl font-semibold hero-text">We have 40k+</p>
              <p className="hero-text">customers world-wide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
