import React from "react";
import { awardsItems } from "../data/data";

export default function Awards() {
  return (
    <section>
      <div className="container grid gap-5 lg:grid-cols-2">
        {/* title */}
        <div>
          <p>OUR AWARD</p>
          <h2>Award we achive</h2>
        </div>
        {/* wrapper */}
        {awardsItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-neutral-900 px-6 py-5 rounded-xl"
          >
            {/* left */}
            <div className="flex items-center gap-3">
              <div>
                <img src={item.icon} alt={item.text} width={55} height={55} />
              </div>
              <p className="text-2xl font-semibold">{item.text}</p>
            </div>

            {/* right */}
            <h3 className="font-semibold text-3xl opacity-60">{item.year}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
