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
                <span className="block">Hi, my name is </span>
                <span className="block">
                  Imran Khan I'm the Fullstack Developer.
                </span>
              </h1>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/experience"
                  className="px-8 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-colors"
                >
                  Work Experience
                </Link>
                <Link
                  to="/skills"
                  className="px-8 py-3 border-2 border-black text-black font-medium hover:bg-gray-50 transition-colors"
                >
                  SKILLS
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}

      {/* Quick Links */}
      {/* <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/experience" className="group">
              <div className="border-2 rounded-lg border-black p-8 hover:bg-black hover:text-white transition-all">
                <h3 className="text-2xl font-bold mb-4">EXPERIENCE</h3>
                <p className="text-gray-600 group-hover:text-gray-300">
                  View my professional journey and projects
                </p>
                <div className="mt-4 text-sm font-medium">VIEW →</div>
              </div>
            </Link>
            <Link to="/resume" className="group">
              <div className="border-2 rounded-lg border-black p-8 hover:bg-black hover:text-white transition-all">
                <h3 className="text-2xl font-bold mb-4">RESUME</h3>
                <p className="text-gray-600 group-hover:text-gray-300">
                  Download my complete CV and qualifications
                </p>
                <div className="mt-4 text-sm font-medium">VIEW →</div>
              </div>
            </Link>
            <Link to="/skills" className="group">
              <div className="border-2 rounded-lg border-black p-8 hover:bg-black hover:text-white transition-all">
                <h3 className="text-2xl font-bold mb-4">SKILLS</h3>
                <p className="text-gray-600 group-hover:text-gray-300">
                  Explore my technical expertise
                </p>
                <div className="mt-4 text-sm font-medium">VIEW →</div>
              </div>
            </Link>
          </div>
        </div>
      </section> */}
    </main>
  );
};

export default Home;
