import React from "react";

const educationData = [
  {
    school: "Shishu Vikas Mandir High School",
    degree: "Secondary School Certificate (SSC)",
    years: "2019 - 2020",
    description: "Completed my SSC boards.",
  },
  {
    school: "SSS Multipurpose Technical College",
    degree: "Higher Secondary Certificate (HSC) – Science",
    years: "2020 - 2022",
    description: "completed my HSC boards",
  },
  {
    school: "Ramniranjan Jhunjhunwala College",
    degree: "Bachelor's in Information Technology",
    years: "2022 - 2025",
    description: "Learned modern web design principles, UI/UX, and responsive development.",
  },
  // Add more entries as needed
];

const Education = () => (
  <section id="education" className="py-16 px-4 md:px-8 bg-gray-100">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-slate-900 text-center mb-12 border-b-4 border-blue-600 pb-2 w-fit mx-auto">
        Education
      </h2>
      {/* Timeline Row */}
      <div className="relative flex items-center justify-between mb-8 px-2">
        {/* Horizontal line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-blue-200 -translate-y-1/2 z-0 rounded"></div>
        {educationData.map((edu, idx) => (
          <div key={idx} className="relative z-10 flex flex-col items-center w-1/4 min-w-[80px]">
            {/* Timeline point */}
            <div className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg mb-2"></div>
            {/* School name below point (optional) */}
            <div className="text-xs text-blue-700 mt-1 text-center">{edu.school}</div>
          </div>
        ))}
      </div>
      {/* Cards Row */}
      <div className="flex flex-col md:flex-row md:justify-between gap-8" data-aos="fade-up">
        {educationData.map((edu, idx) => (
          <div
            key={idx}
            className="bg-gray-50 border border-blue-100 rounded-xl shadow p-6 flex-1 min-w-[220px] max-w-md mx-auto md:mx-0"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-1">{edu.school}</h3>
            <div className="text-blue-600 font-bold text-md mb-1">{edu.degree}</div>
            <div className="text-slate-500 text-md mb-2">{edu.years}</div>
            {/* <div className="text-slate-700 text-base">{edu.description}</div> */}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education; 