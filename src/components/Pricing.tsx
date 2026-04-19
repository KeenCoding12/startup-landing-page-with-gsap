import React from "react";
import { pricingItems } from "../data/data";

export default function Pricing() {
  return (
    <section className="py-26">
      <div className="container">
        {/* Title */}
        <div className="max-w-2xl text-center mx-auto">
          <p>BEST PRICINC</p>
          <h2>The best pricing plans to get your best rate</h2>
        </div>
        {/* wrapper */}
        <div className="grid gap-8 lg:grid-cols-2 mt-20">
          {pricingItems.map((item) => (
            // Card
            <div
              className="grid sm:grid-cols-2 border border-primary nth-[2]:border-none nth-[2]:bg-neutral-900 rounded-xl px-9 py-12 gap-6 lg:gap-10 sm:divide-x divide-neutral-700"
              key={item.id}
            >
              {/* col 1 */}
              <div className="space-y-6 pr-7">
                {/* content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p>15 Days Free Trial</p>
                </div>
                {/* price */}
                <h4 className="text-5xl font-bold">${item.price}</h4>
                {/* Btn */}
                <button className="bg-primary hover:bg-white focus:bg-white transition-colors w-full py-4 rounded-full text-lg font-semibold">
                  Order now
                </button>
              </div>
              {/* col 2 */}
              <div className="space-y-4">
                <p className="text-xl font-semibold">Suitable for beginners</p>
                {/* list */}
                <ul className="space-y-2">
                  {item.list.map((label) => (
                    <li key={label} className="flex items-center gap-2">
                      <span className="shrink-0">
                        <img
                          src="/images/check-icon.svg"
                          alt="check icon"
                          width={24}
                          height={24}
                        />
                      </span>
                      <p>{label}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
