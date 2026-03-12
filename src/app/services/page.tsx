"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import musicalData from "@/data/musical_service.json";

const page = () => {
  return (
    <div className="min-h-screen bg-black py-16 pt-36 px-4">
      <h1
        className="text-center font-sans font-bold mb-12 text-white
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
      >
        All Services {musicalData.service.length}
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {musicalData.service.map((services) => (
          <CardContainer key={services.id} className="inter-var">
            <CardBody
              className="relative group/card 
              bg-white/5 backdrop-blur-sm
              border border-white/10
              rounded-xl p-6
              hover:border-emerald-400/40
              transition duration-300
              shadow-lg"
            >
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-white"
              >
                {services.title}
              </CardItem>

              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-400 text-sm mt-2"
              >
                {services.description}
              </CardItem>

              <CardItem translateZ="100" className="w-full mt-6">
                <img
                  src={services.image}
                  className="h-56 w-full object-cover rounded-lg 
                  group-hover/card:scale-105 transition duration-300"
                  alt={services.title}
                />
              </CardItem>

              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="a"
                  href="#"
                  className="px-4 py-2 rounded-lg text-xs font-medium
                  text-neutral-300 border border-white/20
                  hover:bg-white hover:text-black transition"
                >
                  View Details →
                </CardItem>

                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-lg text-xs font-semibold
                  bg-emerald-500 text-white
                  hover:bg-emerald-600 transition"
                >
                  Enroll Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default page;
