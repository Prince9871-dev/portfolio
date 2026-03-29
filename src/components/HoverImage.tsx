"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { createPortal } from "react-dom";

interface HoverImageRevealProps {
  label: string;
  image: string;
}

export default function HoverImageReveal({
  label,
  image,
}: HoverImageRevealProps) {
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const el = wrapperRef.current;
    const img = imgRef.current;
    if (!el || !img) return;

    gsap.set(img, { autoAlpha: 0 });

    const show = () =>
      gsap.to(img, { autoAlpha: 1, duration: 0.25, ease: "power3.out" });
    const hide = () => gsap.to(img, { autoAlpha: 0, duration: 0.25 });

    const move = (e: MouseEvent) => {
      gsap.to(img, {
        x: e.clientX + 20,
        y: e.clientY + 20,
        duration: 0.15,
        ease: "power3.out",
      });
    };

    el.addEventListener("mouseenter", show);
    el.addEventListener("mouseleave", hide);
    el.addEventListener("mousemove", move);

    return () => {
      el.removeEventListener("mouseenter", show);
      el.removeEventListener("mouseleave", hide);
      el.removeEventListener("mousemove", move);
    };
  }, [mounted]);

  return (
    <>
      <span
        ref={wrapperRef}
        className="relative inline-block underline z-[10] cursor-pointer font-semibold uppercase select-none text-white transition-colors duration-200"
      >
        {label}
      </span>
      {mounted &&
        createPortal(
          <div className="pointer-events-none fixed top-0 left-0 z-[9999] w-0 h-0 overflow-visible">
            <Image
              ref={imgRef}
              src={image}
              alt=""
              width={380}
              height={380}
              className="pointer-events-none absolute top-0 left-0 opacity-0 object-cover rounded max-w-[280px] sm:max-w-[380px] max-h-[380px]"
            />
          </div>,
          document.body,
        )}
    </>
  );
}
