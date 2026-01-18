import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

// ✅ ADD THIS:
export default Footer;
