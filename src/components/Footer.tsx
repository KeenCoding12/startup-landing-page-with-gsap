import {
  RiArrowRightUpLongLine,
  RiFacebookCircleFill,
  RiLinkedinFill,
  RiTwitterXFill,
} from "@remixicon/react";
import React from "react";
import { footerList } from "../data/data";

export default function Footer() {
  return (
    <footer className="pt-16 pb-4">
      <div className="container">
        {/* Footer top */}
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-32 pb-20">
          {/* content */}
          <div className="space-y-10">
            {/* wrapper */}
            <div className="flex items-center justify-between">
              <h2>
                Get <br /> Suppert?
              </h2>
              {/* Arrow */}
              <button className="size-24 bg-neutral-800 hover:bg-primary transition-colors text-white flex items-center justify-center rounded-full">
                <RiArrowRightUpLongLine size={35} />
              </button>
            </div>

            {/* wrapper */}
            <div className="grid gap-8 sm:grid-cols-2">
              {/* Address 1 */}
              <div>
                <p>Australia</p>
                <div>
                  <p>Travel World House, Level 7,</p>
                  <p>17 Jones St, NSW, 2060</p>
                </div>
              </div>
              {/* Address 2 */}
              <div>
                <p>Dubai</p>
                <div>
                  <p>Sheikh Mohammed bin salah,</p>
                  <p>#234 B – Downtown – Dubai</p>
                </div>
              </div>
            </div>
          </div>
          {/* list */}
          {footerList.map((list) => (
            <div className="space-y-2">
              <p className="text-xl font-semibold">{list.title}</p>
              <ul className="grid sm:grid-cols-2">
                {list.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:underline opacity-70">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Footer bottom */}
        <div className="flex items-center justify-between flex-wrap border-t border-neutral-600 py-5 space-y-5">
          {/* Social links */}
          <div className="text-white flex items-center gap-3">
            {[RiFacebookCircleFill, RiLinkedinFill, RiTwitterXFill].map(
              (Icon, idx) => (
                <a
                  href="#"
                  key={idx}
                  className="size-12 bg-neutral-800 hover:opacity-85 rounded-full flex items-center justify-center hover:bg-primary focus:bg-primary transition-all"
                >
                  <Icon size={26} />
                </a>
              ),
            )}
          </div>
          <p>
            Copyright &copy; {new Date().getFullYear()} Ditox. All Rights
            Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
