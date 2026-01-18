import React from "react";

const Skills = () => {
  const skills = {
    Frontend: ["React", "Next.js", "TypeScript", "JavaScript", "TailwindCSS"],
    Backend: [
      "Node.js",
      "Express.js",
      "NestJS",
      "GraphQL",
      "REST APIs",
      "Socket.io",
    ],
    Mobile: ["React Native"],
    Databases: ["PostgreSQL", "MongoDB", "TypeORM", "Mongoose", "Redis"],
    "Cloud & DevOps": [
      "AWS (EC2, S3, RDS)",
      "Docker",
      "Nginx",
      "GitHub Actions",
    ],
    Integrations: [
      "Stripe",
      "SendGrid",
      "Webhooks",
      "API Integrations",
      "PDF & CSV Generation",
    ],
    Testing: ["Jest (Unit Testing)"],
  };
  return (
    <main className="py-20 px-4 bg-gradient-to-br from-slate-50 to-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-gray-900">SKILLS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, skillList]) => (
            <div
              key={category}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-gray-800">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-2 bg-gray-100 text-gray-800 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Skills;
