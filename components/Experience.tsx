"use client";

import React from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20 w-full" id="Experience">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 px-4">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem * 0.96)`,
            }}
            className="text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-4">
              <img
                src={card.thumbnail}
                alt={card.title}
                className="w-full h-auto max-h-48 mx-auto"
              />
              <div className="lg:ms-5">
                <h2 className="text-start text-xl md:text-2xl font-bold flex flex-wrap items-baseline gap-2">
                  {card.title}
                  <span className="text-sm text-gray-400 font-medium">{card.timeline}</span>
                </h2>

                {/* ✅ If desc is an array, render bullets */}
                {Array.isArray(card.desc) ? (
                  <ul className="list-disc ml-5 mt-3 space-y-1 text-white-100 font-semibold text-start">
                    {card.desc.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-start text-white-100 mt-3 font-semibold whitespace-pre-line">
                    {card.desc}
                  </p>
                )}
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
