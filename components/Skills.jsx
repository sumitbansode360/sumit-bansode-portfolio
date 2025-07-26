import React, { useState } from "react";
import {
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaUsers,
  FaUserTie,
  FaComments,
  FaBrain,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiDjango,
  SiPostgresql,
  SiSqlite,
  SiRedis,
} from "react-icons/si";

const skillsData = {
  Frontend: [
    { name: "React JS", icon: <FaReact className="text-sky-500" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  ],
  Backend: [
    { name: "Python", icon: <FaPython className="text-yellow-400" /> },
    { name: "Django", icon: <SiDjango className="text-green-800" /> },
    {
      name: "Django REST Framework",
      icon: <SiDjango className="text-red-500" />, // No icon for DRF
    },
    {
      name: "Django Channels",
      icon: <SiDjango className="text-blue-600" />, // Reusing with diff color
    },
  ],
  Database: [
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
    { name: "SQLite", icon: <SiSqlite className="text-gray-500" /> },
    { name: "Redis", icon: <SiRedis className="text-red-600" /> },
  ],
  "Soft Skills": [
    { name: "Teamwork", icon: <FaUsers className="text-blue-500" /> },
    { name: "Mentorship", icon: <FaUserTie className="text-green-600" /> },
    { name: "Communication", icon: <FaComments className="text-purple-500" /> },
    { name: "Problem Solving", icon: <FaBrain className="text-pink-500" /> },
  ],
};

const categories = Object.keys(skillsData);

const Skills = () => {
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <section id="skills" className="py-20 px-4 md:px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-slate-900 text-center mb-12 border-b-4 border-blue-600 pb-2 w-fit mx-auto">
          Skills
        </h2>

        {/* Tabs */}
        <div className="flex justify-center flex-wrap gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition border-2 text-sm md:text-base cursor-pointer ${
                activeTab === cat
                  ? "bg-blue-600 text-white border-blue-600 shadow-md"
                  : "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="flex flex-wrap justify-center gap-12 items-center">
          {skillsData[activeTab].map((skill) => (
            <div
              key={skill.name}
              className="bg-white border border-blue-100 rounded-xl p-6 w-28 h-28 flex flex-col items-center justify-center shadow hover:scale-105 transition duration-300"
              data-aos="flip-left"
            >
              <div className="text-3xl mb-2">{skill.icon}</div>
              <div className="text-sm font-semibold text-blue-700 text-center">
                {skill.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
