import React from "react";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      target: "_blank",
      href: "https://github.com/code-simple",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      target: "_blank",
      href: "https://www.linkedin.com/in/imrandeveloper",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
        </svg>
      ),
    },
    {
      name: "X",
      target: "_blank",
      href: "https://x.com/Imran_Khan_Dev",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.207-6.807-5.974 6.807H2.882l7.432-8.49H1.227l5.51-6.169h6.507zm-1.158 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      target: "_blank",
      href: "https://wa.me/+923001523232",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g fill="none">
            <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
            <path
              fill="currentColor"
              d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.96 9.96 0 0 1-4.863-1.26l-.305-.178l-3.032.892a1.01 1.01 0 0 1-1.28-1.145l.026-.109l.892-3.032A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2m0 2a8 8 0 0 0-6.759 12.282c.198.312.283.696.216 1.077l-.039.163l-.441 1.501l1.501-.441c.433-.128.883-.05 1.24.177A8 8 0 1 0 12 4M9.793 9.793a1 1 0 0 1 1.32-.083l.094.083l2.293 2.293l2.293-2.293a1 1 0 0 1 1.497 1.32l-.083.094l-3 3a1 1 0 0 1-1.32.083l-.094-.083l-2.293-2.293l-2.293 2.293a1 1 0 0 1-1.497-1.32l.083-.094z"
            />
          </g>
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-end pt-8 pr-4">
          {/* Social Media Icons */}
          <div className="flex gap-6">
            {socialLinks.map((link) => {
              let hoverClass = "";
              switch (link.name) {
                case "GitHub":
                  hoverClass =
                    "hover:bg-gradient-to-br hover:from-gray-600 hover:to-gray-700";
                  break;
                case "LinkedIn":
                  hoverClass =
                    "hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-700";
                  break;
                case "X":
                  hoverClass =
                    "hover:bg-gradient-to-br hover:from-gray-600 hover:to-gray-700";
                  break;
                case "WhatsApp":
                  hoverClass =
                    "hover:bg-gradient-to-br hover:from-green-500 hover:to-green-600";
                  break;
                default:
                  hoverClass = "hover:bg-gray-700";
              }

              return (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.target}
                  rel="noopener noreferrer"
                  className={` bg-gray-800 ${hoverClass} rounded-full transition-all duration-300 transform hover:scale-110 text-white`}
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              );
            })}
          </div>

          {/* Footer Text */}
          <div className="text-center   w-full">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Imran Khan Porfolio. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
