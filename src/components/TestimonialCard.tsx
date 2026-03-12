"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from "@/utils/cn";
const testimonials = [
  {
    quote:
      "This platform made learning guitar incredibly easy for me. The lessons are structured and beginner friendly. I was able to play my first song within a few weeks.",
    name: "Rahul Sharma",
    title: "Guitar Student",
  },
  {
    quote:
      "I always wanted to learn piano but didn't know where to start. The step-by-step guidance helped me build confidence quickly. Now I practice every day.",
    name: "Ananya Gupta",
    title: "Piano Learner",
  },
  {
    quote:
      "The vocal training exercises are simple yet very effective. My pitch control and breathing improved a lot. I feel much more confident singing now.",
    name: "Vikram Singh",
    title: "Vocal Student",
  },
  {
    quote:
      "I love how the instructors explain rhythm and timing. The drum lessons are engaging and practical. It feels like having a personal teacher.",
    name: "Rohit Mehta",
    title: "Drum Course Student",
  },
  {
    quote:
      "Music theory used to feel complicated to me. This course simplified everything with clear examples. Now I finally understand chords and scales.",
    name: "Priya Nair",
    title: "Music Enthusiast",
  },
  {
    quote:
      "The songwriting lessons helped me turn my ideas into real songs. I learned how to structure lyrics and melodies properly. It was a great experience.",
    name: "Arjun Patel",
    title: "Songwriter",
  },
  {
    quote:
      "The platform design is clean and easy to use. I can access lessons anytime and practice at my own pace. It fits perfectly into my daily routine.",
    name: "Neha Kapoor",
    title: "Music Learner",
  },
  {
    quote:
      "I always wanted to understand music production. The tutorials explained everything from basics to advanced techniques. It helped me start creating my own tracks.",
    name: "Karan Verma",
    title: "Music Production Student",
  },
  {
    quote:
      "Every lesson feels very engaging and motivating. The instructors make learning music fun and interactive. I highly recommend it for beginners.",
    name: "Sneha Reddy",
    title: "Beginner Student",
  },
  {
    quote:
      "This is one of the best online music learning experiences I’ve had. The quality of content and teaching is excellent. It truly inspired my music journey.",
    name: "Amit Das",
    title: "Online Music Course User",
  },
];

const MusicalServiceTestimonial = () => {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />

      <h2 className="text-3xl font-bold text-center mb-8">
        Here our Harmony: Voices of success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default MusicalServiceTestimonial;
