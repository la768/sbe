import React, { useState } from "react";
import bgImage from "./assets/bowl.avif"; // Background image

const faqs = [
  {
    question: "What if I have no design experience?",
    answer:
      "Our courses are designed for absolute beginners, so no prior experience is necessary.",
  },
  {
    question: "How long will it take to complete the course?",
    answer:
      "The duration varies by course. Please check the specific course details for more information.",
  },
  {
    question: "Can I learn at my own pace?",
    answer:
      "Yes, all our courses are self-paced, allowing you to learn according to your own schedule.",
  },
  {
    question: "What tools do I need to get started?",
    answer:
      "A computer and an internet connection are all you need to begin your design journey.",
  },
  {
    question:
      "What if I can't afford the course right now? Do you offer payment plans?",
    answer:
      "Yes, we offer payment plans to make our courses accessible to everyone. Contact us to learn more.",
  },
  {
    question: "Can I access the course material after I finish?",
    answer: "Absolutely! You will have lifetime access to the course material.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="relative min-h-screen w-full flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* 🖤 Black overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* 📦 Dark Gray content box */}
      <div
        className="relative z-10 w-full max-w-7xl mx-auto p-10 shadow-lg rounded-lg"
        style={{ backgroundColor: "#1e1e1e" }} // changed to darker gray
      >
        {/* 🟠 Sandal header */}
        <div className="text-center p-10 rounded-lg" style={{ backgroundColor: "#f4e7d4" }}>
          <h2 className="text-5xl font-bold text-gray-900">FAQ</h2>
          <p className="text-xl text-gray-700">All You Need to Know</p>
        </div>

        {/* FAQ Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 text-white">
          {faqs.map((faq, index) => (
            <div key={index} className="space-y-2">
              <button
                className="w-full text-left text-2xl font-semibold focus:outline-none"
                onClick={() => toggleIndex(index)}
              >
                {faq.question}
                <span className="float-right">
                  {openIndex === index ? "▲" : "▼"}
                </span>
              </button>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-lg mt-2 pr-2 text-white">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
