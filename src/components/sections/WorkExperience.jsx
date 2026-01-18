import React from "react";

const WorkExperience = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      location: "Remote",
      description:
        "Lead frontend development for enterprise applications. Implemented modern React patterns and improved performance by 60%.",
      responsibilities: [
        "Architected scalable React applications",
        "Mentored junior developers",
        "Optimized application performance",
        "Implemented CI/CD pipelines",
      ],
    },
    {
      title: "Web Developer",
      company: "Digital Solutions Agency",
      period: "2020 - 2022",
      location: "New York, NY",
      description:
        "Developed responsive websites and web applications for various clients across different industries.",
      responsibilities: [
        "Built custom WordPress themes",
        "Implemented SEO best practices",
        "Collaborated with design teams",
        "Maintained client relationships",
      ],
    },
    {
      title: "Junior Developer",
      company: "Startup Studio",
      period: "2019 - 2020",
      location: "San Francisco, CA",
      description:
        "Started my career in web development, learning full-stack technologies and agile methodologies.",
      responsibilities: [
        "Assisted in full-stack development",
        "Participated in code reviews",
        "Learned testing methodologies",
        "Contributed to team projects",
      ],
    },
  ];

  return (
    <main className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            WORK EXPERIENCE
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey, roles, and contributions to various
            projects and companies.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gray-200"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-12 ${
                index % 2 === 0
                  ? "md:pr-8 md:ml-auto md:w-1/2"
                  : "md:pl-8 md:mr-auto md:w-1/2"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-black rounded-full border-4 border-white transform -translate-x-1/2"></div>

              {/* Experience Card */}
              <div className="ml-12 md:ml-0 bg-white border border-gray-200 p-6 rounded-lg hover:border-black transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <span className="px-3 py-1 bg-gray-100 text-sm font-medium mt-2 sm:mt-0">
                    {exp.period}
                  </span>
                </div>

                <div className="mb-4">
                  <p className="font-medium text-gray-800">{exp.company}</p>
                  <p className="text-gray-600 text-sm">{exp.location}</p>
                </div>

                <p className="text-gray-700 mb-4">{exp.description}</p>

                <div>
                  <h4 className="font-bold mb-2">Key Responsibilities:</h4>
                  <ul className="space-y-1">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-black mr-2">•</span>
                        <span className="text-gray-700">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Overview */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            TECHNICAL EXPERTISE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                category: "Frontend",
                skills:
                  "React, Vue.js, JavaScript, TypeScript, HTML5, CSS3, Tailwind",
              },
              {
                category: "Backend",
                skills: "Node.js, Express, MongoDB, PostgreSQL, REST APIs",
              },
              {
                category: "Tools",
                skills: "Git, Docker, AWS, Figma, Webpack, Jest",
              },
              {
                category: "Methodologies",
                skills: "Agile, Scrum, CI/CD, TDD, Responsive Design",
              },
            ].map((item, index) => (
              <div key={index} className="border border-gray-200 p-6">
                <h3 className="text-xl font-bold mb-4">{item.category}</h3>
                <p className="text-gray-700">{item.skills}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkExperience;
