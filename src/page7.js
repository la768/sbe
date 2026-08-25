import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import bgImage from "./assets/black4.png"; // Adjust path if needed

const ContactUs = () => {
  return (
    <div
      className="h-screen w-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full h-full max-w-[1600px] flex flex-col md:flex-row p-10 border-4 border-gray-300 rounded-2xl shadow-2xl">
        {/* Left - Contact Form */}
        <div className="flex-1 p-6 flex flex-col justify-center">
          <h2 className="text-5xl font-bold text-white mb-6 border-b-4 border-gray-400 pb-3">
            Contact Us
          </h2>
          <p className="text-lg text-white mb-6">
            Have questions about our courses, pricing, or career advice? Reach out to us!
          </p>

          {/* Form */}
          <form className="space-y-6 flex flex-col flex-grow justify-between h-full">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 border-2 border-gray-400 rounded-lg text-lg bg-white bg-opacity-90"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 border-2 border-gray-400 rounded-lg text-lg bg-white bg-opacity-90"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-4 border-2 border-gray-400 rounded-lg text-lg h-40 bg-white bg-opacity-90"
            ></textarea>
            <button className="w-full bg-red-500 text-white p-4 rounded-lg text-lg font-bold hover:bg-red-600 transition">
              Send Message
            </button>
          </form>
        </div>

        {/* Right - Social Media Icons */}
        <div className="flex-1 flex items-center justify-center mt-10 md:mt-0">
          <div className="flex flex-col justify-center items-center space-y-12 h-full">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-[100px] text-blue-600 hover:text-blue-800 transition duration-300" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-[100px] text-blue-400 hover:text-blue-600 transition duration-300" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-[100px] text-pink-500 hover:text-pink-700 transition duration-300" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-[100px] text-blue-700 hover:text-blue-900 transition duration-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
