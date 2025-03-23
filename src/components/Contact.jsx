import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-950 text-white px-6 md:px-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-400 mb-6">Get in Touch</h2>
        <p className="text-gray-300 mb-10">
          Feel free to reach out for collaborations or just a friendly hello! 
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <form className="space-y-6">
          <div>
            <label className="block text-gray-300">Name</label>
            <input
              type="text"
              className="w-full mt-2 p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-400 outline-none"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-gray-300">Email</label>
            <input
              type="email"
              className="w-full mt-2 p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-400 outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-300">Message</label>
            <textarea
              rows="4"
              className="w-full mt-2 p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-400 outline-none"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </form>

        <div className="flex justify-center mt-8 space-x-6">
          <a href="#" className="text-blue-400 text-xl hover:text-blue-600">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-blue-400 text-xl hover:text-blue-600">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-blue-400 text-xl hover:text-blue-600">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="text-blue-400 text-xl hover:text-blue-600">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
