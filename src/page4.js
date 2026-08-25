import React from "react";
import { motion } from "framer-motion";

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const testimonials = [
  {
    title: "Intro",
    content:
      "How these testimonials reflect your journey and learning experiences.",
  },
  {
    title: "Student Stories",
    content:
      "Real-world success stories of students who started businesses, landed dream jobs, and built creative careers.",
  },
  {
    title: "Video Testimonials",
    content:
      "Watch testimonials from real students sharing their learning experiences.",
  },
  {
    title: "Industry Impact",
    content:
      "Our courses have helped thousands of women gain confidence in their skills and enter competitive job markets.",
  },
  {
    title: "Community Support",
    content:
      "Join a network of like-minded individuals who uplift and support each other.",
  },
];

const Testimonials = () => {
  return (
    <div className="w-full">
      {/* Top Sand Background with Heading */}
      <div className="bg-[#f7ecd9] py-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#131b2f]">
          Testimonials: Hear from Women Like You
        </h2>
      </div>

      {/* Bottom Black Background with Light Black Overlay */}
      <div className="relative">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0" />

        {/* Content */}
        <div className="relative z-10 bg-black px-10 pt-10 pb-0 flex flex-col md:flex-row items-start justify-between">
          <div className="w-full md:w-1/2 space-y-6 text-white">
            {testimonials.map((item, i) => (
              <motion.p
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={slideInLeft}
                className="text-lg"
              >
                <strong>{item.title}:</strong> {item.content}
              </motion.p>
            ))}
          </div>

          {/* Right Content (Video Section) */}
          <div className="w-full md:w-1/2 flex flex-col items-center mt-10 md:mt-0">
            <div className="w-full h-64 bg-gray-700 flex items-center justify-center text-white rounded-md">
              Video Placeholder
            </div>
            <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition">
              Home UX Story
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
