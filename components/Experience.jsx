"use client";
import React from "react";
import { Chrono } from "react-chrono";

const experienceItems = [
  {
    title: "Jul 2025 – Present",
    cardTitle: (<span className="text-blue-600 text-xl font-bold">Developer Intern</span>),
    cardSubtitle: (<span className="text-lg font-semibold text-blue-600">Digitea</span>),
    cardDetailedText:
    (
      <p className="text-base">Contributing to production-level features using Django and Next.js. Mentoring learners, reviewing code, and collaborating on real-world projects.</p>
    ),  
  },
  {
    title: "Dec 2024 – Jan 2025",
    cardTitle: (<span className="text-blue-600 text-xl font-bold">Computer Literacy Trainer</span>),
    cardSubtitle: (<span className="text-lg font-semibold text-blue-600">RJ College</span>),
    cardDetailedText:
    (
      <p className="text-base">Delivered hands-on training in basic computer literacy to 1st-year non-tech students. Simplified technical concepts, improved teaching confidence, and communication.</p>
    ),  
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 px-4 md:px-8 bg-gray-100 overflow-x-hidden"
    >
      <div className="max-w-6xl mx-auto" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-slate-900 text-center mb-12 border-b-4 border-blue-600 pb-2 w-fit mx-auto">
          Experience
        </h2>
        <div className="w-full mx-auto">
          <div data-aos="fade-up">
            <Chrono
              items={experienceItems}
              mode="VERTICAL_ALTERNATING"
              disableToolbar
              theme={{
                primary: "#2563eb"  ,         // Tailwind blue-600
                secondary: "#e0f2fe",       // Tailwind blue-100
                cardBgColor: "#ffffff",
                titleColor: "#1e293b",      // Tailwind slate-800
                titleColorActive: "#2563eb",
              }}
              cardHeight={200}
              slideShow={false}
              allowDynamicUpdate
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
