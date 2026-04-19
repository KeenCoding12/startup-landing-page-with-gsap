import { useRef } from "react";
import { gsap, useGSAP } from "../lib/gsap";

export default function Button({ label }: { label: string }) {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  useGSAP(() => {
    const btn = btnRef.current;
    if (!btn) return;
    const xTo = gsap.quickTo(btn, "x", {
      duration: 1,
      ease: "elastic.out(1,0.4)",
    });
    const yTo = gsap.quickTo(btn, "y", {
      duration: 1,
      ease: "elastic.out(1,0.4)",
    });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = btn.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      xTo(x);
      yTo(y);
    };
    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseleave", handleMouseLeave);
    };
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
