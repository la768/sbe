import React from "react";
import { motion } from "framer-motion";
import bgImage from "./assets/Wha.jpg"; // adjust the path if needed

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const EnrollmentPage = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-8 space-y-10"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Intro Section */}
      <motion.div
  className="text-center"
  variants={fadeInUp}
  initial="hidden"
  animate="visible"
  custom={1}
>
  <div className="inline-block bg-[#f8f4eb] px-6 py-4 rounded-lg shadow-md">
    <h2 className="text-5xl font-bold text-[#16124a]">Join the Movement</h2>
  </div>
  <p className="text-lg text-gray-300 mt-6 max-w-2xl mx-auto">
    Now is the time to take the leap and transform your career and creativity. 
    Enroll today and start your journey toward mastering digital design.
  </p>
</motion.div>


      {/* Packages Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        custom={2}
      >
        {[
          {
            title: "Starter Package",
            desc: "Perfect for beginners, this package covers the basics to get you started.",
          },
          {
            title: "Growth Package",
            desc: "Expand your digital presence and build a solid brand foundation.",
          },
          {
            title: "Professional Package",
            desc: "Elevate your content creation with videos, animations, and more.",
          },
          {
            title: "Expert Package",
            desc: "Learn advanced skills to prepare for success in digital design.",
          },
        ].map((pkg, index) => (
          <motion.div
            key={index}
            className="bg-[#f8f4eb] p-6 rounded-lg shadow-lg transition duration-300 hover:bg-blue-500 hover:text-white"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={3 + index}
          >
            <h3 className="text-2xl font-semibold text-[#16124a] hover:text-white">{pkg.title}</h3>
            <p className="mt-2 text-gray-700 hover:text-white">{pkg.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Payment & Start Date */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        custom={7}
      >
        <motion.div
          className="bg-[#f8f4eb] p-6 rounded-lg shadow-lg transition duration-300 hover:bg-blue-500 hover:text-white"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={8}
        >
          <h3 className="text-2xl font-semibold text-[#16124a] hover:text-white">Payment Plans</h3>
          <p className="mt-2 text-gray-700 hover:text-white">Flexible options available</p>
        </motion.div>

        <motion.div
          className="bg-[#f8f4eb] p-6 rounded-lg shadow-lg transition duration-300 hover:bg-blue-500 hover:text-white"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={9}
        >
          <h3 className="text-2xl font-semibold text-[#16124a] hover:text-white">Start Date</h3>
          <p className="mt-2 text-gray-700 hover:text-white">The next cohort begins soon.</p>
        </motion.div>
      </motion.div>

      {/* Sign Up Button */}
      <motion.div
        className="text-center"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        custom={10}
      >
        <button className="bg-[#1c7c69] text-white px-8 py-3 rounded-lg text-xl font-semibold hover:bg-[#165c50] transition duration-300">
          Sign Up Now
        </button>
      </motion.div>
    </div>
  );
};

export default EnrollmentPage;
