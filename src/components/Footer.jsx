import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-10 px-6 md:px-20 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0">
        {/* Left Side - Logo / Name */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-blue-400">Ali Imam Hridoy</h2>
          <p className="text-sm mt-1 text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
