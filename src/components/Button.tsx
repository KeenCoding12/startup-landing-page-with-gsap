import { useRef } from "react";
import { gsap, useGSAP } from "../lib/gsap";

export default function Button({ label }: { label: string }) {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  useGSAP(() => {
    
  });
  return (
    <button
      ref={btnRef}
      className="bg-primary hover:bg-white transition-colors py-4 px-7.5 rounded-full mx-auto flex"
    >
      {label}
    </button>
  );
}
