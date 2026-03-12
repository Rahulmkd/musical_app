import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";
const instructors = [
  {
    id: 1,
    name: "James Wilson",
    designation: "Music Theory Instructor",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
  },
  {
    id: 2,
    name: "Emma Taylor",
    designation: "Violin Instructor",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  },
  {
    id: 3,
    name: "Liam Anderson",
    designation: "Bass Guitar Instructor",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
  },
  {
    id: 4,
    name: "Ava Thompson",
    designation: "Songwriting Coach",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
  },
];
const Instructors = () => {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full ">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">
          Meet Our Instructors
        </h2>
        <p className="text-base md:text-lg text-white text-center mb-4">
          Discover the telented professionals who will guide your musical
          journey
        </p>

        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={instructors} />
        </div>
      </WavyBackground>
    </div>
  );
};

export default Instructors;
