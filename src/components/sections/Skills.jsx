import React from "react";

const Skills = () => {
  // Array of skills with name and description
  const skills = [
    {
      name: "Typescript",
      description:
        "Enhance JavaScript with static types, making code more understandable and reliable.",
    },
    {
      name: "Javascript",
      description:
        "Create interactive and dynamic web experiences with the versatile scripting language.",
    },
    {
      name: "Next.js",
      description:
        "Effortlessly build dynamic apps with routing, layouts, loading UI, and API routes.",
    },
    {
      name: "Nest.js",
      description:
        "Create scalable and modular applications with a progressive Node.js framework.",
    },
    {
      name: "React",
      description:
        "Craft interactive user interfaces using components, state, props, and virtual DOM.",
    },
    {
      name: "Node.js",
      description:
        "Run JavaScript on the server side, enabling dynamic and responsive applications.",
    },
    {
      name: "Tailwind CSS",
      description:
        "Design beautiful, modern websites faster with a utility-first CSS framework.",
    },
    {
      name: "React Native",
      description:
        "Develop cross-platform mobile apps using React for consistent and engaging experiences.",
    },
    {
      name: "GraphQL",
      description:
        "Fetch data precisely with a powerful query language for APIs and runtime execution.",
    },
    {
      name: "express.js",
      description:
        "Build web applications and APIs quickly using a fast, unopinionated Node.js framework.",
    },
    {
      name: "MongoDB",
      description:
        "Store and retrieve data seamlessly with a flexible and scalable NoSQL database.",
    },
    {
      name: "PostgreSQL",
      description:
        "Manage and organize relational databases efficiently for data-driven applications.",
    },
    {
      name: "Redux",
      description:
        "Manage app state effectively using a predictable and centralized state container.",
    },
    {
      name: "Socket.io",
      description:
        "Enable real-time, bidirectional communication between clients and servers effortlessly.",
    },
    {
      name: "AWS",
      description:
        "Utilize Amazon Web Services to build and deploy scalable, reliable, and secure applications.",
    },
    {
      name: "HTML 5",
      description:
        "Structure web content beautifully with the latest version of HyperText Markup Language.",
    },
    {
      name: "CSS 3",
      description:
        "Style web pages creatively with the latest iteration of Cascading Style Sheets.",
    },
    {
      name: "Material UI",
      description:
        "Create stunning and responsive UIs with a popular React UI framework.",
    },
    {
      name: "Bootstrap",
      description:
        "Quickly create responsive and appealing web designs using a popular CSS framework.",
    },
    {
      name: "Netlify",
      description:
        "Deploy and host modern web projects with an intuitive, Git-based platform.",
    },
    // You can add or remove skills from this list
  ];

  return (
    <main className="min-h-screen pt-20 px-4">
      <div className="max-w-4xl mx-auto py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills
          </h1>
          <p className="text-lg text-gray-600">
            Key skills that define my professional identity.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {skill.name}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Skills;
