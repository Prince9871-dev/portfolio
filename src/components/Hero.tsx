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
      className="relative w-full min-h-screen flex items-center justify-center text-white pb-16 md:pb-24 select-none"
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

      <div className="flex flex-col px-4 md:px-6 w-full max-w-screen-xl mx-auto pointer-events-none">
        {/* ======================================================
            BIG TITLES — FULLY RESPONSIVE + ALIGNED
        ======================================================= */}
        <div className="mt-24 md:mt-32 w-full">
          <RandomLetterReveal
            word="FULL STACK"
            className="block font-extrabold tracking-tight leading-[1.1]
                      text-[2.5rem] sm:text-[3.5rem]
                      md:text-[4.5rem]
                      lg:text-[5.5rem]
                      xl:text-[6.5rem]
                      2xl:text-[8rem] mb-2 md:mb-4 break-words whitespace-normal"
          />

          <RandomLetterReveal
            word="DEVELOPER |"
            className="block font-extrabold tracking-tight leading-[1.1]
                      text-[2.5rem] sm:text-[3.5rem]
                      md:text-[4.5rem]
                      lg:text-[5.5rem]
                      xl:text-[6.5rem]
                      2xl:text-[8rem] mb-2 md:mb-4 break-words whitespace-normal"
          />

          <RandomLetterReveal
            word="AI/ML ENTHUSIAST"
            className="block font-extrabold tracking-tight leading-[1.1]
                      text-[2.5rem] sm:text-[3.5rem]
                      md:text-[4.5rem]
                      lg:text-[5.5rem]
                      xl:text-[6.5rem]
                      2xl:text-[8rem] mb-2 md:mb-4 break-words whitespace-normal"
          />

          <RandomLetterReveal
            word="BASED IN DELHI,"
            className="block font-extrabold tracking-tight leading-[1.1]
                      text-[2.5rem] sm:text-[3.5rem]
                      md:text-[4.5rem]
                      lg:text-[5.5rem]
                      xl:text-[6.5rem]
                      2xl:text-[8rem] mb-2 md:mb-4 break-words whitespace-normal"
          />

          <RandomLetterReveal
            word="INDIA"
            className="block font-extrabold tracking-tight leading-[1.1]
                      text-[2.5rem] sm:text-[3.5rem]
                      md:text-[4.5rem]
                      lg:text-[5.5rem]
                      xl:text-[6.5rem]
                      2xl:text-[8rem] break-words whitespace-normal"
          />
        </div>

        {/* ======================================================
            SMALL PARAGRAPH — CLEAN, RESPONSIVE, ALIGNED
        ======================================================= */}
        <div className="mt-8 md:mt-12 w-full flex justify-start md:justify-end pb-10">
          <div className="max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl text-left md:text-right">
            <RandomLetterReveal
              word={`Full-stack and AI/ML developer passionate about building scalable real-world applications and intelligent systems.`}
              className="text-sm sm:text-base md:text-lg opacity-90 leading-relaxed uppercase font-medium text-left md:text-right whitespace-normal break-words"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
