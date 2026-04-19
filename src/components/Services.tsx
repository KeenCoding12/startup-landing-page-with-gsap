import React, { useRef } from "react";
import { servicesIcons } from "../data/data";
import { gsap, SplitText, useGSAP } from "../lib/gsap";

export default function Services() {
  const servicesRef = useRef<HTMLElement | null>(null);
  useGSAP(
    () => {
      const titleSplit = SplitText.create(".services-title", {
        type: "words,lines",
        linesClass: "text-line",
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top center",
          // markers: true,
        },
      });

      tl.from(titleSplit.words, {
        yPercent: 100,
        duration: 0.7,
        stagger: 0.08,
        ease: "power2.inOut",
      })
        .from(".services-card", {
          y: 150,
          opacity: 0,
          filter: "blur(5px)",
          duration: 0.8,
          stagger: 0.3,
          ease: "power3",
        })
        .from(".services-sec-img", {
          scale: 0.2,
          opacity: 0,
          duration: 1,
          ease: "power2",
        });
    },
    { scope: servicesRef },
  );
  return (
    <section ref={servicesRef} className="py-24 lg:py-32">
      <div className="container">
        {/* title */}
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between lg:items-center">
          <h2 className="max-w-2xl w-full services-title leading-tight">
            Turn Information Into Actionable Insights
          </h2>
          <a
            href="#"
            className="text-gray-100 hover:text-primary focus:text-primary transition-colors"
          >
            All Services
          </a>
        </div>
        {/* wrapper */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-[0.7fr_1fr_0.7fr] gap-7 mt-16">
          {servicesIcons.map((item) => (
            // Card
            <div
              className="border border-gray-800 rounded-lg px-7.5 py-10 min-h-127 flex flex-col space-y-5 nth-[2]:bg-gray-900 services-card"
              key={item.id}
            >
              {/* Icon */}
              <div>
                <img src={item.icon} alt={item.title} width={70} height={70} />
              </div>
              {/* content */}
              <div>
                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                <p>{item.text}</p>
              </div>
              <span className="inline-block text-5xl text-white font-semibold mt-auto">
                0{item.id}
              </span>
            </div>
          ))}
        </div>
        {/* wrapper */}
        <div className="mt-20 grid gap-11 lg:grid-cols-2">
          {/* img */}
          <div>
            <img
              src="/images/services-section-img.png"
              alt="section img"
              width={521}
              height={595}
              className="services-sec-img"
            />
          </div>
          {/* content */}
          <div className="space-y-14">
            <h2>Boost the growth development agency your branding!</h2>
            {/* wrapper */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <p>About Us</p>
              {/* Line */}
              <div className="hidden lg:block max-w-24 w-full bg-white/75 h-0.5 mt-3" />
              <div className="space-y-20">
                <p className="max-w-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quaerat deleniti ducimus, mollitia repellat adipisci culpa
                  doloremque officia ipsa sed necessitatibus?
                </p>

                <a
                  href="#"
                  className="text-white/90 hover:text-primary focus:text-primary transition-colors"
                >
                  Know More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
