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
      
    },
    { scope: headerRef },
  );
  return (
    <header
      ref={headerRef}
      className="fixed top-0  left-0 w-full py-4 z-50 bg-linear-to-b from-neutral-950"
    >
     
    </header>
  );
}
