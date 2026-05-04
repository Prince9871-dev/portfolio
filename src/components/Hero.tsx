"use client";

import React, { FC, useEffect, useState } from "react";
import Dither from "./Dither";
import RandomLetterReveal from "./RandomLetterReveal";

const Hero: FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      id="index"
      className="relative w-full min-h-screen flex flex-col justify-center py-16 md:py-20 px-6 md:px-10 lg:px-16 text-white select-none"
    >
      {/* === Background === */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Dither
          waveColor={[1, 0, 0]}
          disableAnimation={false}
          enableMouseInteraction={!isMobile}
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>

      <div className="flex flex-col w-full max-w-[1400px] mx-auto pointer-events-none">
        {/* ======================================================
            BIG TITLES — FULLY RESPONSIVE + ALIGNED
        ======================================================= */}
        <div className="flex flex-col gap-2 md:gap-4 w-full">
          <RandomLetterReveal
            word="FULL STACK"
            className="block font-extrabold tracking-[-0.02em] leading-[0.9]
                      text-[2.8rem] sm:text-[3.5rem]
                      md:text-[4.5rem]
                      lg:text-[5.5rem]
                      xl:text-[6rem] break-words whitespace-normal"
          />

          <div className="flex flex-row flex-wrap items-center">
            <RandomLetterReveal
              word="DEVELOPER"
              className="block font-extrabold tracking-[-0.02em] leading-[0.9]
                        text-[2.8rem] sm:text-[3.5rem]
                        md:text-[4.5rem]
                        lg:text-[5.5rem]
                        xl:text-[6rem] break-words whitespace-normal"
            />
            <span className="ml-2 md:ml-4 block font-extrabold tracking-[-0.02em] leading-[0.9] text-[2.8rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6rem]">|</span>
          </div>

          <RandomLetterReveal
            word="AI/ML ENTHUSIAST"
            className="block font-extrabold tracking-[-0.02em] leading-[0.9]
                      text-[2.8rem] sm:text-[3.5rem]
                      md:text-[4.5rem]
                      lg:text-[5.5rem]
                      xl:text-[6rem] break-words whitespace-normal"
          />

          <RandomLetterReveal
            word="BASED IN DELHI,"
            className="block font-extrabold tracking-[-0.02em] leading-[0.9]
                      text-[2.8rem] sm:text-[3.5rem]
                      md:text-[4.5rem]
                      lg:text-[5.5rem]
                      xl:text-[6rem] break-words whitespace-normal"
          />

          <RandomLetterReveal
            word="INDIA"
            className="block font-extrabold tracking-[-0.02em] leading-[0.9]
                      text-[2.8rem] sm:text-[3.5rem]
                      md:text-[4.5rem]
                      lg:text-[5.5rem]
                      xl:text-[6rem] whitespace-nowrap"
          />
        </div>

        {/* ======================================================
            SMALL PARAGRAPH — CLEAN, RESPONSIVE, ALIGNED
        ======================================================= */}
        <div className="w-full flex justify-end mt-8 md:mt-12">
          <p className="max-w-[280px] md:max-w-[320px] text-right text-[10px] sm:text-xs md:text-sm leading-relaxed pr-14 md:pr-20 lg:pr-28 opacity-90 break-words">
            Building real-world AI + scalable full-stack systems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
