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
      className="relative w-full min-h-screen flex flex-col pt-24 md:pt-32 pb-16 text-white select-none"
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

      <div className="flex flex-col w-full px-6 md:px-10 lg:px-16 pointer-events-none">
        {/* ======================================================
            BIG TITLES — FULLY RESPONSIVE + ALIGNED
        ======================================================= */}
        <div className="flex flex-col gap-2 md:gap-4 w-full">
          <RandomLetterReveal
            word="FULL STACK"
            className="block font-extrabold tracking-[-0.02em] leading-[0.95]
                      text-[3rem] sm:text-[4rem]
                      md:text-[5rem]
                      lg:text-[6rem]
                      xl:text-[7rem] break-words whitespace-normal"
          />

          <div className="flex flex-row flex-wrap items-center">
            <RandomLetterReveal
              word="DEVELOPER"
              className="block font-extrabold tracking-[-0.02em] leading-[0.95]
                        text-[3rem] sm:text-[4rem]
                        md:text-[5rem]
                        lg:text-[6rem]
                        xl:text-[7rem] break-words whitespace-normal"
            />
            <span className="ml-2 md:ml-4 block font-extrabold tracking-[-0.02em] leading-[0.95] text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem]">|</span>
          </div>

          <RandomLetterReveal
            word="AI/ML ENTHUSIAST"
            className="block font-extrabold tracking-[-0.02em] leading-[0.95]
                      text-[2.7rem] sm:text-[3.5rem]
                      md:text-[4.5rem]
                      lg:text-[5.5rem]
                      xl:text-[6.5rem] break-words whitespace-normal"
          />

          <RandomLetterReveal
            word="BASED IN DELHI, INDIA"
            className="block font-extrabold tracking-[-0.02em] leading-[0.95]
                      text-[3rem] sm:text-[4rem]
                      md:text-[5rem]
                      lg:text-[6rem]
                      xl:text-[7rem] break-words whitespace-normal"
          />
        </div>

        {/* ======================================================
            SMALL PARAGRAPH — CLEAN, RESPONSIVE, ALIGNED
        ======================================================= */}
        <div className="w-full flex justify-end mt-8 md:mt-10">
          <div className="max-w-[420px] text-left md:text-right">
            <RandomLetterReveal
              word={`Full-stack and AI/ML developer passionate about building scalable real-world applications and intelligent systems.`}
              className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed uppercase font-medium whitespace-normal break-words"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
