import React from "react";

const WorkExperience = () => {
  const experiences = [
    {
      company: "RoonStudio",
      location: "Freelance, Peshawar, Pakistan",
      period: "January 2019 - Present",
      roles: [
        {
          title: "Full Stack Developer",
          project: "Bracket Boss",
          description:
            "Built Bracket Boss, a league and tournament management platform for pickleball. Worked on scheduling systems, tournament brackets, payments, messaging, and real-time standings. Developed a comprehensive admin panel and deployed the application on AWS with a focus on scalability and performance.",
          techStack: [
            "Next.js",
            "Tailwind CSS",
            "NestJS",
            "GraphQL",
            "PostgreSQL",
            "AWS",
          ],
          achievements: [
            "Worked on scheduling systems and tournament brackets",
            "Integrated payments and real-time messaging",
            "Developed comprehensive admin panel",
            "Deployed on AWS with focus on scalability and performance",
          ],
        },
        {
          title: "Backend Developer",
          project: "LivelyPencil",
          description:
            "Worked on the backend of a real-time creative community platform. Developed REST APIs and a custom reels-style content system. Implemented real-time features such as live streaming and instant user interactions using Socket.io. Containerized services using Docker.",
          techStack: [
            "Node.js",
            "Express.js",
            "Socket.io",
            "MongoDB",
            "Docker",
          ],
          achievements: [
            "Developed REST APIs and custom reels-style content system",
            "Implemented live streaming and instant user interactions using Socket.io",
            "Containerized services using Docker",
          ],
        },
      ],
    },
    {
      company: "OneFlow",
      location: "Freelance",
      period: "Freelance Project",
      roles: [
        {
          title: "Full Stack Developer",
          project: "Business Automation Platform",
          description:
            "Developed a business automation platform supporting background jobs, email workflows, and document generation. Built APIs and frontend features using GraphQL and React Query. Deployed the system on AWS EC2 with Nginx and handled automated tasks using Agenda.js.",
          techStack: [
            "Next.js",
            "Node.js",
            "GraphQL",
            "MongoDB",
            "Tailwind CSS",
            "Agenda.js",
            "SendGrid",
          ],
          achievements: [
            "Built APIs and frontend features using GraphQL and React Query",
            "Implemented background jobs and email workflows using Agenda.js and SendGrid",
            "Deployed on AWS EC2 with Nginx",
            "Handled document generation workflows",
          ],
        },
      ],
    },
    {
      company: "FCE",
      location: "Freelance",
      period: "Freelance Project",
      roles: [
        {
          title: "Backend Developer",
          project: "IT, Automotive & Logistics Solutions",
          description:
            "Contributed to backend development for a company working in IT, automotive quality, and logistics solutions. Focused on API development, system performance, and data integration using TypeScript and MongoDB.",
          techStack: [
            "TypeScript",
            "Express.js",
            "Next.js",
            "MongoDB",
            "Docker",
          ],
          achievements: [
            "Focused on API development and system performance",
            "Implemented data integration solutions",
            "Built robust backend systems using TypeScript",
          ],
        },
      ],
    },
    {
      company: "BroodBox",
      location: "Freelance",
      period: "Freelance Project",
      roles: [
        {
          title: "Full Stack Developer",
          project: "Farm Management Web Application",
          description:
            "Developed a multi-tenant farm management web application. Implemented role-based access control, Google Maps integration, and features for pollination tracking and yield estimation.",
          techStack: [
            "JavaScript",
            "React",
            "Node.js",
            "Tailwind CSS",
            "MongoDB",
            "GraphQL",
            "Google Maps API",
          ],
          achievements: [
            "Implemented role-based access control",
            "Integrated Google Maps for location tracking",
            "Built pollination tracking and yield estimation features",
          ],
        },
      ],
    },
  ];

  const certifications = [
    {
      name: "Responsive Web Design",
      issuer: "FreeCodeCamp",
      date: "April 2023",
    },
    {
      name: "Learn Node.js From Scratch",
      issuer: "Codedamn",
      date: "May 2023",
    },
    { name: "Git Masterclass", issuer: "Codedamn", date: "April 2023" },
    {
      name: "Relational Databases including PostgreSQL, Bash, and Git",
      issuer: "FreeCodeCamp",
    },
    { name: "Back End Development and APIs", issuer: "FreeCodeCamp" },
  ];

  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Hindi", level: "Native" },
    { name: "Urdu", level: "Native" },
  ];

  return (
    <main className="py-20 px-4 bg-gradient-to-br from-slate-50 to-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className=" mb-10">
          <h1 className="text-4xl font-bold mb-8 text-gray-900">
            WORK EXPERIENCE
          </h1>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8 mb-20">
          {experiences.map((company, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Company Header */}
              <div className="bg-gradient-to-r from-gray-800 to-gray-700 text-white p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">
                      {company.company}
                    </h2>
                    <p className="text-gray-300 text-lg">
                      {company.location} • {company.period}
                    </p>
                  </div>
                </div>
              </div>

              {/* Roles */}
              <div className="p-6 space-y-8">
                {company.roles.map((role, roleIndex) => (
                  <div
                    key={roleIndex}
                    className="border-l-4 border-gray-800 pl-6"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {role.title}
                    </h3>
                    <p className="text-lg font-semibold text-gray-600 mb-3">
                      {role.project}
                    </p>
                    <p className="text-gray-700 mb-4">{role.description}</p>

                    {/* Tech Stack */}
                    <div className="mb-4">
                      <p className="font-bold text-gray-900 mb-2">
                        Tech Stack:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {role.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-800 rounded-full text-sm font-medium border border-blue-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <p className="font-bold text-gray-900 mb-2">
                        Key Achievements:
                      </p>
                      <ul className="space-y-2">
                        {role.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-blue-600 mr-3 font-bold">
                              ✓
                            </span>
                            <span className="text-gray-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Section */}

        {/* Certifications and Languages Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Certifications */}
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 pb-3 border-b-2 border-gray-800">
              CERTIFICATIONS
            </h2>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="pb-4 border-b border-gray-200 last:border-b-0"
                >
                  <p className="font-bold text-gray-900">{cert.name}</p>
                  <div className="flex justify-between mt-1">
                    <span className="text-gray-600">{cert.issuer}</span>
                    {cert.date && (
                      <span className="text-gray-600 text-sm">{cert.date}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 pb-3 border-b-2 border-gray-800">
              LANGUAGES
            </h2>
            <div className="space-y-4">
              {languages.map((lang, i) => (
                <div
                  key={i}
                  className="pb-4 border-b border-gray-200 last:border-b-0"
                >
                  <div className="flex justify-between items-center">
                    <p className="font-bold text-gray-900">{lang.name}</p>
                    <span className="px-3 py-1 bg-gradient-to-r from-green-100 to-green-50 text-green-800 rounded-full text-sm font-medium border border-green-200">
                      {lang.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkExperience;
