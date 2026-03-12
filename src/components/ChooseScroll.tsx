"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicInstitute = [
  {
    title: "Guitar Basics",
    description:
      "Learn the fundamental chords, strumming patterns, and techniques to start playing guitar.",
  },
  {
    title: "Piano for Beginners",
    description:
      "Understand piano keys, basic scales, and simple melodies for beginners.",
  },
  {
    title: "Vocal Training",
    description:
      "Improve your singing voice with breathing techniques and vocal exercises.",
  },
  {
    title: "Music Theory Essentials",
    description:
      "Learn notes, scales, chords, and rhythm to understand how music works.",
  },
  {
    title: "Drumming Fundamentals",
    description:
      "Master basic drum beats, rhythm patterns, and coordination skills.",
  },
  {
    title: "Bass Guitar Groove",
    description:
      "Learn bass lines, finger techniques, and groove patterns used in modern music.",
  },
  {
    title: "Songwriting Basics",
    description:
      "Discover how to write lyrics, melodies, and structure a complete song.",
  },
  {
    title: "DJ Mixing Skills",
    description:
      "Learn beatmatching, transitions, and mixing techniques for DJ performances.",
  },
  {
    title: "Electronic Music Production",
    description:
      "Create electronic music using digital audio workstations and synthesizers.",
  },
  {
    title: "Violin Beginner Course",
    description:
      "Start learning violin with basic posture, bowing, and simple songs.",
  },
];
const ChooseScroll = () => {
  return (
    <div className="w-full ">
      <StickyScroll content={musicInstitute} />
    </div>
  );
};

export default ChooseScroll;
