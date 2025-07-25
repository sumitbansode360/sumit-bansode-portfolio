import React from "react";

function About() {
  return (
    <>
      <section
        id="about"
        className="bg-gray-100 py-16 px-4 md:px-8 text-center"
      >
        <h2 className="text-4xl font-bold text-slate-900 text-center mb-12 border-b-4 border-blue-600 pb-2 w-fit mx-auto" data-aos="fade-up">
          About Me
        </h2>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8" data-aos="fade-up">
          <div className="md:w-1/2 lg:w-1/3 w-full h-auto">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-auto object-cover"
            >
              <source src="about-vid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="lg:w-1/2 w-full mt-6">
            <div className="max-w-3xl mx-auto" data-aos="fade-up">
              <p className="text-slate-800 leading-relaxed mb-6 text-xl text-justify">
                I'm{" "}
                <span className="font-semibold text-blue-600">
                  Sumit Bansode
                </span>
                , a full-stack web developer who loves building modern,
                scalable, and backend-heavy web applications. My core stack
                includes{" "}
                <span className="font-medium text-blue-500">
                  Django, DRF, React, Next.js, and Tailwind CSS
                </span>
                , with solid experience in API development, authentication,
                database design, and real-time features.
                <br />
                <br />
                I focus on writing clean, production-ready code and building
                apps that not only work well — but also look polished and
                perform smoothly across devices. I enjoy solving real-world
                problems and constantly leveling up my development skills.
                <br />
                <br />
                Currently, I’m working as a Developer Intern at{" "}
                <span className="font-medium text-blue-500">Digitea</span>,
                contributing to core features, reviewing code, supporting
                learners, and shipping production-ready solutions.
                <br />
                <br />
                I'm always open to new challenges and collaboration
                opportunities. Whether it’s crafting beautiful UIs or building
                robust APIs — I’m here to solve problems, learn fast, and keep
                shipping impactful work.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
