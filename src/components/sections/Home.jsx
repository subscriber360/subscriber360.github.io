import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="block">HI, I'M</span>
                <span className="block">WEB DEVELOPER</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                I build exceptional digital experiences that are fast,
                accessible, visually appealing, and responsive.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-colors"
                >
                  CONTACT ME
                </Link>
                <Link
                  to="/resume"
                  className="px-8 py-3 border-2 border-black text-black font-medium hover:bg-gray-50 transition-colors"
                >
                  VIEW RESUME
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-gray-100 to-gray-300 mx-auto overflow-hidden">
                  {/* Profile Image Placeholder */}
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-8xl">👨‍💻</div>
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-32 h-32 border-4 border-white rounded-full bg-gray-100"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 border-4 border-white rounded-full bg-gray-200"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            TECHNICAL SKILLS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "React",
              "JavaScript",
              "Tailwind CSS",
              "Node.js",
              "Git",
              "Figma",
              "MongoDB",
              "AWS",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-white p-6 text-center border border-gray-200 hover:border-black transition-colors"
              >
                <div className="text-2xl mb-2">⚡</div>
                <h3 className="font-bold">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/experience" className="group">
              <div className="border-2 border-black p-8 hover:bg-black hover:text-white transition-all">
                <h3 className="text-2xl font-bold mb-4">WORK EXPERIENCE</h3>
                <p className="text-gray-600 group-hover:text-gray-300">
                  View my professional journey and projects
                </p>
                <div className="mt-4 text-sm font-medium">VIEW →</div>
              </div>
            </Link>
            <Link to="/resume" className="group">
              <div className="border-2 border-black p-8 hover:bg-black hover:text-white transition-all">
                <h3 className="text-2xl font-bold mb-4">RESUME</h3>
                <p className="text-gray-600 group-hover:text-gray-300">
                  Download my complete CV and qualifications
                </p>
                <div className="mt-4 text-sm font-medium">VIEW →</div>
              </div>
            </Link>
            <Link to="/contact" className="group">
              <div className="border-2 border-black p-8 hover:bg-black hover:text-white transition-all">
                <h3 className="text-2xl font-bold mb-4">CONTACT</h3>
                <p className="text-gray-600 group-hover:text-gray-300">
                  Get in touch for collaboration or opportunities
                </p>
                <div className="mt-4 text-sm font-medium">VIEW →</div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
