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

      <div className="flex flex-col px-6 md:px-16 w-full max-w-6xl pointer-events-none">
        {/* ======================================================
            BIG TITLES — FULLY RESPONSIVE + 1240–1350 FIX
        ======================================================= */}
        <div className="mt-24 md:mt-32 ml-0 lg:ml-0 xl:ml-[-10rem]">
          <RandomLetterReveal
            word="FULL STACK"
            className="block font-extrabold tracking-tight leading-[0.9]
                      text-[2.8rem] sm:text-[3.5rem]
                      md:text-[5rem]
                      lg:text-[6rem]
                      xl:text-[7rem]
                      2xl:text-[9rem] mb-2 md:mb-4"
          />

          <RandomLetterReveal
            word="DEVELOPER |"
            className="block font-extrabold tracking-tight leading-[0.9]
                      text-[2.8rem] sm:text-[3.5rem]
                      md:text-[5rem]
                      lg:text-[6rem]
                      xl:text-[7rem]
                      2xl:text-[9rem] mb-2 md:mb-4"
          />

          <RandomLetterReveal
            word="AI/ML ENTHUSIAST"
            className="block font-extrabold tracking-tight leading-[0.9]
                      text-[2.8rem] sm:text-[3.5rem]
                      md:text-[5rem]
                      lg:text-[6rem]
                      xl:text-[7rem]
                      2xl:text-[9rem] mb-2 md:mb-4"
          />

          <RandomLetterReveal
            word="BASED IN DELHI,"
            className="block font-extrabold tracking-tight leading-[0.9]
                      text-[2.8rem] sm:text-[3.5rem]
                      md:text-[5rem]
                      lg:text-[6rem]
                      xl:text-[7rem]
                      2xl:text-[9rem] mb-2 md:mb-4"
          />

          <RandomLetterReveal
            word="INDIA"
            className="block font-extrabold tracking-tight leading-[0.9]
                      text-[2.8rem] sm:text-[3.5rem]
                      md:text-[5rem]
                      lg:text-[6rem]
                      xl:text-[7rem]
                      2xl:text-[9rem]"
          />
        </div>

        {/* ======================================================
            SMALL PARAGRAPH — CLEAN, RESPONSIVE, AWWARDS STYLE
        ======================================================= */}
        <div className="mt-6 md:mt-10 w-full flex justify-start md:justify-end px-4 md:px-6 pb-10">
          <div className="max-w-full sm:max-w-[85%] md:max-w-lg lg:max-w-xl text-left md:text-right">
            <RandomLetterReveal
              word={`Full-stack and AI/ML developer passionate about building scalable real-world applications and intelligent systems.`}
              className="text-[0.7rem] sm:text-sm md:text-base lg:text-lg opacity-90 leading-relaxed uppercase font-medium text-left md:text-right whitespace-normal break-words"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
