import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-950 text-white px-6 md:px-20"  data-aos="fade-up">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-400 mb-4">Get in Touch</h2>
          <p className="text-gray-300">
            Feel free to reach out for collaborations or just a friendly hello!
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side - Contact Info & Socials */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-2">Contact Info</h3>
              <p className="text-gray-300">
                Phone: <span className="text-white">+8801768-590806</span>
              </p>
              <p className="text-gray-300">
                Email: <span className="text-white">ali.imamhref@email.com</span>
              </p>
            </div>

            {/* Socials */}
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-2">Socials</h3>
              <div className="space-y-3 mt-4">

                <a
                  href="https://linkedin.com/in/ali-imam-hridoy-544217271/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-blue-500"
                >
                  <FaLinkedinIn className="text-lg" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://github.com/hridoy667"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-blue-500"
                >
                  <FaGithub className="text-lg" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://facebook.com/aliimam.hridoy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-blue-500"
                >
                  <FaFacebookF className="text-lg" />
                  <span>Facebook</span>
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-blue-500"
                >
                  <FaTwitter className="text-lg" />
                  <span>Twitter</span>
                </a>

              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <form
            action="https://formspree.io/f/mwpldadn"
            method="POST"
            className="space-y-6"
          >
            <div>
              <label className="block text-gray-300">Name</label>
              <input
                type="text"
                name="name"
                className="w-full mt-2 p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-400 outline-none"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label className="block text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                className="w-full mt-2 p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-400 outline-none"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-gray-300">Message</label>
              <textarea
                name="message"
                rows="4"
                className="w-full mt-2 p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-400 outline-none"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
