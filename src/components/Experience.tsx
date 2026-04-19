import React from "react";
import { heroUsersImg, logos } from "../data/data";
import { RiAddLine } from "@remixicon/react";

export default function Experience() {
  return (
    <section className="mt-20 py-20 lg:py-32 bg-neutral-900">
      <div className="container grid gap-12 lg:grid-cols-12 lg:gap-20 lg:items-center">
        {/* content */}
        <div className="lg:col-span-5 space-y-4">
          <div>
            <p>CLIENTS</p>
            <h2>Worked with Largest Brands</h2>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
            dicta similique?
          </p>

          {/* imgs wrapper */}
          <div className="flex items-center -space-x-6 avatar-wrapper">
            {heroUsersImg.map((img, idx) => (
              <img src={img} key={idx} alt="user" width={55} height={55} />
            ))}
            <button className="flex size-14 items-center justify-center rounded-full bg-white backdrop-blur-3xl transition-opacity hover:opacity-85">
              <RiAddLine />
            </button>
          </div>
        </div>
        {/* Wrapper */}
        <div className="lg:col-span-7">
          <div className="grid lg:grid-cols-3">
            {/* box */}
            <div className="flex flex-col items-center justify-center text-center mb-10">
              <h3 className="font-bold text-5xl lg:text-7xl">45+</h3>
              <p>Active Clients</p>
            </div>
            {/* logos */}
            {logos.map((logo) => (
              <div className="border border-gray-600 px-10 py-14">
                <img src={logo} alt="logo" />
              </div>
            ))}
            {/* link box */}
            <div className="flex items-center justify-center text-lg flex-col mt-11">
              <a
                href="#"
                className="text-white/90 hover:text-primary focus:text-primary transition-colors"
              >
                view all
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
