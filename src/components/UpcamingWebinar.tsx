"use client";

import Link from "next/link";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
const upcomingWebinars = [
  {
    title: "Mastering Guitar Chords for Beginners",
    description:
      "Learn essential guitar chords and smooth transitions. Perfect for beginners who want to start playing songs quickly.",
    slug: "mastering-guitar-chords",
    isFeature: true,
  },
  {
    title: "Introduction to Piano Scales",
    description:
      "Understand the basics of piano scales and finger placement. Build a strong foundation for playing melodies and songs.",
    slug: "introduction-to-piano-scales",
    isFeature: false,
  },
  {
    title: "Vocal Training: Improve Your Singing Voice",
    description:
      "Discover breathing techniques, pitch control, and vocal warmups that help improve your singing performance.",
    slug: "vocal-training-improve-voice",
    isFeature: false,
  },
  {
    title: "Music Theory Simplified",
    description:
      "Learn the core concepts of music theory including notes, chords, and rhythm in a simple and practical way.",
    slug: "music-theory-simplified",
    isFeature: false,
  },
  {
    title: "Drumming Basics for Beginners",
    description:
      "Explore drum kit fundamentals, rhythm patterns, and coordination exercises for aspiring drummers.",
    slug: "drumming-basics-beginners",
    isFeature: false,
  },
  {
    title: "Songwriting: From Idea to Song",
    description:
      "Learn how to turn your musical ideas into structured songs with effective lyric writing and melody creation.",
    slug: "songwriting-from-idea-to-song",
    isFeature: true,
  },
  {
    title: "Electronic Music Production Workshop",
    description:
      "Get introduced to digital audio workstations and learn how to produce electronic music tracks.",
    slug: "electronic-music-production-workshop",
    isFeature: false,
  },
  {
    title: "Bass Guitar Groove Essentials",
    description:
      "Understand groove, timing, and bassline techniques used in modern music styles.",
    slug: "bass-guitar-groove-essentials",
    isFeature: false,
  },
  {
    title: "Live DJ Mixing and Beatmatching",
    description:
      "Learn professional DJ techniques including beatmatching and smooth transitions between tracks.",
    slug: "live-dj-mixing-beatmatching",
    isFeature: true,
  },
  {
    title: "Violin Techniques for Beginners",
    description:
      "Master violin posture, bow control, and simple melodies to begin your violin journey.",
    slug: "violin-techniques-beginners",
    isFeature: false,
  },
];
const UpcamingWebinar = () => {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            Featured Webinars
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect
            items={upcomingWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: `/webinars/${webinar.slug}`,
            }))}
          />
        </div>
        <div className="mt-10 text-center">
          <Link
            href={"/"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpcamingWebinar;
