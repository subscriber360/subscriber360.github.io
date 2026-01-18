import React from "react";

const Resume = () => {
  const resumeLink =
    "https://drive.google.com/file/d/1_DQ4TjSRfUB6WWEPS9iNKl0kHTwOrMFl/view?usp=sharing";
  const resumeDownloadLink =
    "https://drive.google.com/uc?export=download&id=1_DQ4TjSRfUB6WWEPS9iNKl0kHTwOrMFl";
  const resumePreviewLink =
    "https://drive.google.com/file/d/1_DQ4TjSRfUB6WWEPS9iNKl0kHTwOrMFl/preview";

  return (
    <main className="py-20 px-4 bg-gradient-to-br from-slate-50 to-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="max-w-6xl mx-auto">
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between mb-6">
            <h2 className="text-4xl font-bold  text-gray-900">RESUME</h2>
            <a
              href={resumeDownloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-4 bg-blue-600 text-white 
              font-semibold hover:bg-blue-700 transition-colors 
              rounded-lg flex items-center justify-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              DOWNLOAD RESUME
            </a>
          </div>
        </div>

        {/* Resume Preview Section */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 text-white p-6">
            <h2 className="text-2xl font-bold">Resume Preview</h2>
          </div>

          {/* Preview Container */}
          <div className="p-6">
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden border border-gray-300 hover:shadow-lg transition-shadow">
              <iframe
                src={resumePreviewLink}
                title="Resume Preview"
                className="w-full h-full"
                style={{ minHeight: "600px" }}
              />
            </div>

            {/* Preview Info */}
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-blue-900 text-sm">
                <span className="font-semibold">💡 Tip:</span> You can scroll
                through the preview above or download the PDF for offline
                viewing.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Highlight Section */}
      </div>
    </main>
  );
};

export default Resume;
