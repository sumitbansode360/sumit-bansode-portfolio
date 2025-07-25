import React from "react";

const experiences = [
  {
    company: "Digitea",
    description: "Contributing to production-level features using Django and Next.js. Also responsible for mentoring learners, reviewing code, and collaborating on real-world projects.",
    role: "Developer Intern",
    year: "Jul 2025 – Present",
  },
  {
    company: "RJ College",
    description: "Delivered hands-on training in basic computer literacy to 1st-year students from non-tech backgrounds. Simplified technical concepts, developed teaching confidence, and improved communication",
    role: "Computer Literacy Trainer",
    year: "Dec 2024 – Jan 2025",
  },
  // Add more experiences as needed
];

const Experience = () => (
  <section id="experience" className="py-16 px-4 md:px-8 bg-gray-100 overflow-x-hidden">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-slate-900 text-center mb-12 border-b-4 border-blue-600 pb-2 w-fit mx-auto">
        Experience
      </h2>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 w-1 bg-blue-200 h-full -translate-x-1/2 z-0 rounded"></div>
        <div className="flex flex-col gap-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="flex items-center w-full relative z-10">
              {/* Left: Work Details */}
              <div className="w-1/2 flex justify-end pr-8" data-aos="fade-right">
                <div className="bg-blue-50 p-6 rounded-xl shadow-md text-right max-w-md">
                  <p className="text-slate-700 text-md text-center">{exp.description}</p>
                </div>
              </div>
              {/* Center: Point */}
              <div className="flex flex-col items-center">
                <div className="w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
              </div>
              {/* Right: Role/Year */}
              <div className="w-1/2 flex justify-start pl-8" data-aos="fade-left">
                <div className="bg-white border border-blue-100 p-6 rounded-xl shadow text-left max-w-lg lg:w-1/2">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">{exp.company}</h3>
                  <div className="text-blue-600 font-bold text-md">{exp.role}</div>
                  <div className="text-slate-500 text-md">{exp.year}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;