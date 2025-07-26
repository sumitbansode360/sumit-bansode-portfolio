import React from "react";
import { Chrono } from "react-chrono";

const educationItems = [
  {
    title: "2022 - 2025",
    cardTitle: (
      <span className="text-blue-600 text-xl font-bold">
        BSc in Information Technology
      </span>
    ),
    cardSubtitle: (
      <span className="text-lg font-semibold text-blue-600">
        Ramniranjan Jhunjhunwala College
      </span>
    ),
    cardDetailedText: (
      <p className="text-base text-slate-700">
        Gained hands-on experience with full-stack development, learning technologies like Django, React, Next.js, and Tailwind CSS.
      </p>
    ),
  },
  {
    title: "2020 - 2022",
    cardTitle: (
      <span className="text-blue-600 text-xl font-bold">HSC – Science</span>
    ),
    cardSubtitle: (
      <span className="text-lg font-semibold text-blue-600">
        SSS Multipurpose Technical College
      </span>
    ),
    cardDetailedText: (
      <p className="text-base text-slate-700">
        Focused on Physics, Chemistry, and Computer Science. Developed a strong interest in coding and logic building.
      </p>
    ),
  },
  {
    title: "2019 - 2020",
    cardTitle: (
      <span className="text-blue-600 text-xl font-bold">
        Secondary School Certificate (SSC)
      </span>
    ),
    cardSubtitle: (
      <span className="text-lg text-blue-600">
        Shishu Vikas Mandir High School
      </span>
    ),
    cardDetailedText: (
      <p className="text-base text-slate-700">
        Completed SSC board exams with a strong foundation in math and science subjects.
      </p>
    ),
  },
];


const Education = () => (
  <section id="education" className="py-16 px-4 md:px-8 bg-gray-100">
    <div className="max-w-6xl mx-auto" data-aos="fade-up">
      <h2 className="text-4xl font-bold text-slate-900 text-center mb-12 border-b-4 border-blue-600 pb-2 w-fit mx-auto">
        Education
      </h2>
      <div className="w-full mx-auto">
        <div data-aos="fade-up">
          <Chrono
            items={educationItems}
            mode="VERTICAL"
            disableToolbar
            theme={{
              primary: "#2563eb", // Tailwind blue-600
              secondary: "#e0f2fe", // Tailwind blue-100
              cardBgColor: "#ffffff",
              titleColor: "#1e293b", // Tailwind slate-800
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

export default Education;
