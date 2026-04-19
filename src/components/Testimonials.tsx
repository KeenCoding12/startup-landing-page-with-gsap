import { RiStarFill } from "@remixicon/react";
import React from "react";
import { testimonialsItems } from "../data/data";

export default function Testimonials() {
  return (
    <section className="py-32">
      <div className="container text-white">
        {/* Title */}
        <div className="flex items-center gap-x-8 flex-wrap lg:justify-between space-y-8">
          <h2 className="uppercase">Testimonials</h2>
          <div className="flex items-center gap-4">
            <span className="border size-37.5 flex items-center justify-center rounded-full text-5xl font-bold shrink-0">
              4.9
            </span>
            {/* reviews */}
            <div className="space-y-2">
              {/* stars */}
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <RiStarFill key={star} />
                ))}
              </div>
              <p>145 (Review)</p>
            </div>
          </div>
        </div>

        {/* Wrapper */}
        <div className="grid gap-10 sm:grid-cols-2 mt-11 lg:mt-16">
          {testimonialsItems.map((item) => (
            // Card
            <div
              key={item.id}
              className="p-12 rounded-md bg-neutral-900 space-y-5"
            >
              {/* star */}
              <div className="flex items-center gap-3">
                <p>{item.rate}</p>
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <RiStarFill key={star} />
                  ))}
                </div>
              </div>
              {/* Text */}
              <p>{item.text}</p>
              {/* wrapper */}
              <div className="flex items-center gap-3">
                {/* avatar */}
                <div>
                  <img
                    src={item.img}
                    alt={item.author}
                    width={80}
                    height={80}
                  />
                </div>

                {/* author info */}
                <div>
                  <p className="font-semibold text-lg">{item.author}</p>
                  <p className="text-sm">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
