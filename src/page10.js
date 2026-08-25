import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import luxuryOffice from "./assets/luxury-office.png"; // ✅ Correct path

const addOns = [
  {
    title: "Canva AI Tools (Magic Design, Magic Write)",
    description:
      "Learn how to use Canva's AI tools to enhance designs and content creation.",
  },
  {
    title: "Canva for Teams (Collaborative workflows)",
    description:
      "Tips for working as a team on Canva and streamlining collaborative projects.",
  },
  {
    title: "Content Scheduling in Canva (Social Media Planner)",
    description:
      "Learn how to schedule and plan your content using Canva’s social media planning tools.",
  },
  {
    title: "Monetizing Canva Skills",
    description:
      "Strategies for turning your Canva design skills into a profitable business.",
  },
];

const AddOnsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div
      className="relative py-20 px-6 md:px-20 text-white overflow-hidden"
      style={{
        backgroundImage: `url(${luxuryOffice})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-0" />

      {/* Flex Layout for Title + Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Title Section */}
        <div className="w-full md:w-1/3 flex items-center justify-center">
          <h2
            className="text-4xl font-bold text-center md:text-left text-white"
            data-aos="fade-right"
          >
            Add-ons <br />
            <span className="text-pink-300">(Optional Topics)</span>
          </h2>
        </div>

        {/* Cards Section */}
        <div
          className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6"
          data-aos="fade-left"
        >
          {addOns.map((item, index) => (
            <div
              key={index}
              className={`bg-white bg-opacity-90 p-6 rounded-xl shadow-lg text-black transition-all duration-300 ease-in-out ${
                hoveredIndex === index ? "scale-105" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <h3 className="text-2xl font-semibold text-pink-700">
                {item.title}
              </h3>
              <p
                className={`mt-2 text-gray-700 transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0 h-0"
                }`}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddOnsSection;
