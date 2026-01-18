import React from "react";

const Resume = () => {
  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "University of Technology",
      year: "2018 - 2022",
      details: "Specialized in Web Development and Software Engineering",
    },
    {
      degree: "Full-Stack Development Bootcamp",
      institution: "Coding Academy",
      year: "2020",
      details: "Intensive 6-month program focusing on modern web technologies",
    },
  ];

  const certifications = [
    "AWS Certified Developer - Associate",
    "React Professional Certification",
    "Google Cloud Fundamentals",
    "Scrum Master Certified",
    "MongoDB for Developers",
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-featured online store with admin dashboard",
      tech: "React, Node.js, MongoDB, Stripe",
      link: "#",
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool",
      tech: "Next.js, Firebase, Tailwind",
      link: "#",
    },
    {
      title: "Portfolio Generator",
      description: "Tool for creating developer portfolios",
      tech: "React, Express, OpenAI API",
      link: "#",
    },
  ];

  return (
    <main className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">RESUME</h1>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            A comprehensive overview of my education, skills, and
            accomplishments.
          </p>
          <button className="px-8 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-colors">
            DOWNLOAD PDF RESUME
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            {/* Education */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-300">
                EDUCATION
              </h2>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-black pl-4">
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                    <p className="text-gray-800 font-medium mt-1">
                      {edu.institution}
                    </p>
                    <p className="text-gray-600 text-sm mt-1">{edu.year}</p>
                    <p className="text-gray-700 mt-2">{edu.details}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-300">
                CERTIFICATIONS
              </h2>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                    <span className="text-gray-800">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Skills */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-300">
                SKILLS
              </h2>
              <div className="space-y-4">
                {[
                  { skill: "React/Next.js", level: 95 },
                  { skill: "JavaScript/TypeScript", level: 90 },
                  { skill: "Node.js/Express", level: 85 },
                  { skill: "UI/UX Design", level: 80 },
                  { skill: "AWS/Cloud Services", level: 75 },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{item.skill}</span>
                      <span className="text-gray-600">{item.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-black rounded-full"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div>
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-300">
                FEATURED PROJECTS
              </h2>
              <div className="space-y-6">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 p-4 hover:border-black transition-colors"
                  >
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-700 mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tech.split(", ").map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-100 text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      className="text-sm font-medium hover:underline"
                    >
                      View Project →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-20 text-center">
          <div className="border-t border-b border-gray-200 py-12">
            <h2 className="text-2xl font-bold mb-4">
              INTERESTED IN WORKING TOGETHER?
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Feel free to reach out for collaborations or just a friendly hello
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 border-2 border-black text-black font-medium hover:bg-black hover:text-white transition-colors"
            >
              GET IN TOUCH
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Resume;
