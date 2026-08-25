import React, { useState, useEffect } from 'react';

const KintsugiCardContentCycle = () => {
  const contents = [
    {
      title: "FEATURED COURSE",
      items: [
        "• Transform your creativity into a career",
        "• Learn by doing, not just reading",
        "• Get mentored by industry experts"
      ]
    },
    {
      title: "Graphic Design Fundamentals",
      description:
        "Discover the art of visual storytelling. Master color, typography, and composition to create designs that captivate and inspire.",
      link: "Explore the Course"
    },
    {
      title: "WHY CHOOSE US",
      items: [
        "• Learn from passionate design professionals",
        "• Flexible schedules to fit your lifestyle",
        "• Join a vibrant, supportive creative community"
      ]
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % contents.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const content = contents[current];

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center flex items-start justify-start px-10 py-20"
      style={{
        backgroundImage: "url('/new3.webp')", // Make sure new3.webp is in public folder
      }}
    >
      <div className="text-white max-w-xl" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.7)' }}>
        <h2 className="text-3xl font-bold mb-4">{content.title}</h2>
        {content.items && (
          <ul className="space-y-2 text-lg">
            {content.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
        {content.description && <p className="text-lg mt-4">{content.description}</p>}
        {content.link && (
          <button
            className="mt-4 inline-block text-blue-300 font-semibold hover:underline bg-transparent border-none p-0"
            onClick={() => console.log("Explore the Course clicked")}
          >
            {content.link}
          </button>
        )}
      </div>
    </div>
  );
};

export default KintsugiCardContentCycle;
