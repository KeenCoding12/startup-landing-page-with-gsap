import React from "react";
import { blogItems } from "../data/data";
import { RiArrowRightLongLine } from "@remixicon/react";

export default function Blog() {
  return (
    <section className="py-24 bg-neutral-900">
      <div className="container">
        {/* title */}
        <div className="text-center">
          <p>NEWS & EVENTS</p>
          <h2>Latest blog posts</h2>
        </div>
        {/* wrapper */}
        <div className="grid gap-11 md:grid-cols-2 mt-20">
          {blogItems.map((item) => (
            <div key={item.id}>
              {/* img */}
              <div className="overflow-hidden rounded-xl">
                <img
                  src={item.img}
                  alt={item.title}
                  width={618}
                  height={464}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* wrapper */}
              <div className="flex flex-col lg:flex-row items-start gap-x-10 space-y-5 -mt-11 px-7">
                {/* wrapper */}
                <div className="bg-white  flex flex-col font-bold size-20  items-center justify-center p-2 rounded-lg shrink-0">
                  <p className="text-neutral-900 text-2xl">28</p>
                  <p className="text-neutral-900 uppercase text-sm">jul</p>
                </div>
                {/* wrapper */}
                <div className="bg-neutral-800 p-6 rounded-lg space-y-1.5">
                  <div className="flex items-center gap-5">
                    <p>Ditox</p>
                    <p>0 comment</p>
                  </div>
                  <h3 className="text-4xl font-semibold">{item.title}</h3>
                  <a
                    href="#"
                    className="flex items-center gap-1.5 hover:underline mt-5"
                  >
                    Continue Reading
                    <RiArrowRightLongLine size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
