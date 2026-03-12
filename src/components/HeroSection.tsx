import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />

      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent">
          Master the art of music.....
        </h1>

        <p className="mt-8 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Mastering the art of music requires passion, patience, and constant
          practice. Through dedication, music becomes a powerful way to express
          emotions and creativity. 🎶
        </p>

        <div className="mt-8">
          <Link href="/services">
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black font-semibold dark:text-white border-neutral-200 dark:border-slate-800 cursor-pointer hover:bg-slate-700 hover:text-slate-200 transition duration-200"
            >
              Explore More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
