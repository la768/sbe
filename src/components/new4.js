import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import luxuryOffice from "../assets/luxury-office.png"; // ✅ Add this

const CoursesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div
      className="py-20 px-6 md:px-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${luxuryOffice})` }}
    >
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold" data-aos="fade-up">
            COURSES: EXPLORE OUR PACKAGES
          </h1>
          <p className="mt-4 text-lg" data-aos="fade-up" data-aos-delay="200">
            In today’s digital world, design skills are more important than ever,
            especially for women. Explore our tailored packages to find the
            perfect fit for your creative journey.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
          {[
            {
              title: "Starter Package",
              description: "Perfect for beginners learning the basics!",
              learn: ["Basic design principles", "Creating simple graphics"],
              for: "Beginners new to design",
              bg: "#A58DB2",
            },
            {
              title: "Growth Package",
              description: "Expand your digital presence with a solid brand",
              learn: ["Branding essentials", "Social media graphics"],
              for: "Content creators",
              bg: "#E8D9B9",
            },
            {
              title: "Professional Package",
              description: "Elevate your content creation with videos and animations",
              learn: ["Video editing", "Basic animations"],
              for: "Content creators & small business owners",
              bg: "#E8D9B9",
            },
            {
              title: "Expert Package",
              description: "Advanced skills for success in digital design and beyond",
              learn: ["Advanced design tools", "Complex projects"],
              for: "Aspiring professional designers",
              bg: "#A58DB2",
            },
          ].map((pkg, i) => (
            <div
              key={i}
              className="rounded-2xl shadow-xl p-8 text-black"
              style={{ backgroundColor: pkg.bg }}
              data-aos="fade-up"
              data-aos-delay={i * 200}
            >
              <h2 className="text-2xl font-bold">{pkg.title}</h2>
              <p className="mt-2 text-lg">{pkg.description}</p>
              <div className="mt-4 border-t border-gray-300 pt-4">
                <h3 className="font-bold">What You’ll Learn</h3>
                <ul className="list-disc list-inside mt-2 text-lg">
                  {pkg.learn.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <h3 className="font-bold">Who’s It For</h3>
                <p className="text-lg">{pkg.for}</p>
              </div>
              <button className="mt-6 w-full bg-[#251A3C] text-white py-3 rounded-full font-semibold hover:bg-[#3c2c57] transition">
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;
