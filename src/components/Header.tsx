import React, { useRef, useState } from "react";
import { navItems } from "../data/data";
import Button from "./Button";
import { RiCloseLine, RiMenuLine } from "@remixicon/react";
import { gsap, useGSAP } from "../lib/gsap";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  useGSAP(
    () => {
      const links = gsap.utils.toArray<HTMLLinkElement>(
        ".link",
        headerRef.current,
      );
      const onMouseEnter = (e: MouseEvent) => {
        gsap.to(links, {
          opacity: 0.2,
          overwrite: true,
        });
        gsap.to(e.currentTarget, {
          opacity: 1,
          overwrite: true,
        });
      };
      const onMouseLeave = () => {
        gsap.to(links, {
          opacity: 1,
          overwrite: true,
        });
      };

      links.forEach((link) => {
        link.addEventListener("mouseenter", onMouseEnter);
        link.addEventListener("mouseleave", onMouseLeave);
      });

      //   clean up
      return () => {
        links.forEach((link) => {
          link.removeEventListener("mouseenter", onMouseEnter);
          link.removeEventListener("mouseleave", onMouseLeave);
        });
      };
    },
    { scope: headerRef },
  );
  return (
    <header
      ref={headerRef}
      className="fixed top-0  left-0 w-full py-4 z-50 bg-linear-to-b from-neutral-950"
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="link">
          <img src="/images/logo.svg" alt="logo" width={170} height={40} />
        </a>

        {/* Mobile Menu */}
        <nav
          className={`w-full lg:hidden bg-neutral-900 absolute top-0 left-0 pt-18 pb-8 -translate-y-[120%] transition-transform ${isOpen && "translate-y-0 space-y-8"}`}
        >
          {/* list */}
          <ul className="text-white mx-auto grid text-center space-y-3">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href="#" className="link px-7 text-xl py-2 uppercase">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <Button label="Get in touch" />
        </nav>
        {/* menu btn */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white lg:hidden z-60"
        >
          {isOpen ? <RiCloseLine /> : <RiMenuLine />}
        </button>
        {/* Lg menu */}
        <nav className="w-full items-center justify-between hidden lg:flex">
          {/* list */}
          <ul className="text-white flex items-center  mx-auto">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href="#" className="link px-7 2xl:text-xl py-2 uppercase">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <Button label="Get in touch" />
        </nav>
      </div>
    </header>
  );
}
