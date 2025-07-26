import React, { useState } from "react";

import { FaGithub, FaVideo, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

function Projects() {
  const [modalProject, setModalProject] = useState(null);
  const projects = [
    {
      title: "RjMaitriCircle",
      description:
        "A full-stack alumni-student social platform built using Django with real-time features.",
      iframe: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7325943242649190401?compact=1",
      link: "https://github.com/sumitbansode360/RjMaitriCircle",
      live: "",
      tech: ["Django", "Redis", "Django Channels", " CI/CD"],
      breif_description: <ul className="text-slate-600 list-disc list-inside"  >
        <li>Built a social platform for alumni-student interaction with user authentication and profile management.</li>
        <li>Integrated real-time messaging using Django Channels and Redis.</li>
        <li>Implemented post features: like, comment, save, and in-app user notifications.</li>
        <li>Deployed full-stack app using GitHub Actions and Render for CI/CD.</li>
      </ul>,
    },
    {
      title: "SnapBid",
      description:
        "Built a real-time online auction platform where users can bid live.",
      iframe: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7326247076051218432?compact=1",
      link: "https://github.com/sumitbansode360/SnapBid",
      live: "",
      video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      tech: ["Django", ,"Django Channels", "WebSockets", "Bootstrap"],
      breif_description: <ul className="text-slate-600 list-disc list-inside"  >
        <li>Developed a real-time bidding app with WebSocket-based live auction flow.</li>
        <li>Implemented bid timers, auto-refresh logic, and real-time status updates.</li>
        <li>Designed responsive frontend using Bootstrap for cross-device usability.</li>
        <li>Enabled live user notifications for auction events and price changes.</li>
      </ul>,
    },
    {
      title: "Editly",
      description:
        "Google Docs-like collaborative editor for teams to work in real time.",
      iframe: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7326283407221522434?compact=1",
      link: "https://github.com/sumitbansode360/Editly",
      live: "",
      video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      tech: ["Django", "Django Channels", "WebSockets", "Rich Text Sync"],
      breif_description: <ul className="text-slate-600 list-disc list-inside"  >
      <li>Built a collaborative editor allowing multiple users to edit the same document in real-time.</li>
      <li>Integrated structured formatting tools (bold, headings, lists, etc.).</li>
      <li>Engineered low-latency, socket-based sync logic using Django Channels.</li>
      <li>Handled concurrent editing scenarios for a seamless user experience.</li>
      </ul>,
    },
  ];

  return (
    <>
      <section id="projects" className="py-16 px-4 md:px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12 border-b-4 border-blue-600 pb-2 w-fit mx-auto">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:scale-105 transition-all duration-300" data-aos="zoom-in">
                {/* iframe */}
                <iframe src={project.iframe} height="299" width="100%" frameBorder="0" allowFullScreen="" title="Embedded post"></iframe>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-700 mb-4 text-justify">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="text-sm bg-blue-600 px-2 py-1 rounded text-white">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-end text-sm">
                    <button
                      onClick={() => setModalProject(project)}
                      className="text-blue-700 hover:underline focus:outline-none hover:cursor-pointer"
                    >
                      See More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50 backdrop-blur-sm">
          <div className="relative max-w-lg w-full p-0">
            <div className="backdrop-blur-lg bg-blue-50 border border-blue-100 rounded-3xl shadow-2xl p-8 md:p-10 transition-all duration-300">
              <button
                className="absolute top-5 right-5 text-gray-200 hover:text-white text-2xl bg-slate-900/60 rounded-full p-2 focus:outline-none border cursor-pointer border-white/10 shadow"
                onClick={() => setModalProject(null)}
                aria-label="Close"
              >
                <FaTimes />
              </button>
              <h3 className="text-2xl font-extrabold mb-3 text-slate-900 text-center drop-shadow-lg">
                {modalProject.title}
              </h3>
              <p className="text-lg text-slate-700  mb-6 text-center drop-shadow">
                {modalProject.description}
              </p>
              <p className="text-lg text-slate-600 mb-6">
                {modalProject.breif_description}
              </p>
              <div className="flex justify-center gap-10 mb-4">
                <a
                  href={modalProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-slate-700 hover:text-blue-400 transition"
                  title="GitHub Code"
                >
                  <FaGithub size={32} />
                  <span className="text-xs mt-1">Code</span>
                </a>
                <a
                  href={modalProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-slate-700 hover:text-blue-400 transition"
                  title="Live Site"
                >
                  <FaExternalLinkAlt size={32} />
                  <span className="text-xs mt-1">Live</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;
