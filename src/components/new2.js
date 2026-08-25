// KintsugiCardContentCycle.js
import React, { useState, useEffect } from "react";

const cardData = [
  {
    title: "FEATURED COURSE",
    content: ["• Empowering education", "• Flexible learning", "• Practical skills"],
    bgColor: "#D8BFAA",
  },
  {
    title: "Graphic Design Fundamentals",
    content: ["Build a strong foundation in graphic design principles and techniques."],
    bgColor: "#FFFFFF",
  },
  {
    title: "WHY CHOOSE US",
    content: ["• Empowering education", "• Flexible learning", "• Practical skills"],
    bgColor: "#C5B3E3",
  },
];

const KintsugiCardContentCycle = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
    }, 4000); // 4 seconds for each card
    return () => clearInterval(timer);
  }, []);

  const currentCard = cardData[currentIndex];

  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto items-center mt-12 px-6">
      {/* Left - Card */}
      <div
        className="p-6 rounded-lg shadow-lg w-full md:w-1/2 text-left transition-all duration-500"
        style={{ backgroundColor: currentCard.bgColor }}
      >
        <h2 className="text-2xl font-bold mb-4">{currentCard.title}</h2>
        {Array.isArray(currentCard.content) ? (
          <ul className="space-y-2">
            {currentCard.content.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        ) : (
          <p>{currentCard.content}</p>
        )}
      </div>

      {/* Right - Image */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img
          src="/new3.webp"
          alt="Woman Working"
          className="w-[90%] max-w-md rounded-xl shadow-xl"
        />
      </div>
    </div>
  );
};

export default KintsugiCardContentCycle;
