import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Page6 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const cards = [
    {
      img: "page6.1.png",
      alt: "Design Tips",
      title: "Tips for Women Wanting to Break into the Design World",
    },
    {
      img: "page62.png",
      alt: "Business Branding",
      title: "How to Use Design to Boost Your Business or Personal Brand",
    },
    {
      img: "page63.png",
      alt: "Interviews",
      title: "Interviews with Successful Female Designers and Entrepreneurs",
    },
    {
      img: "page64.png",
      alt: "Trends",
      title: "Design Trends and How to Stay Ahead of the Curve",
    },
  ];

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-10 text-white"
      style={{
        background: "linear-gradient(to bottom right, #000000, #1f1f1f, #e8dbc8)", // More black, subtle sandal
      }}
    >
      {/* Header Section */}
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold" data-aos="fade-down">
          Learn & Inspire
        </h1>
        <p className="text-lg mt-4" data-aos="fade-up" data-aos-delay="200">
          This blog offers valuable content that empowers women in the design industry.
        </p>
      </div>

      {/* Grid Section */}
      <div className="w-full px-4 md:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-12">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden text-black"
            data-aos="zoom-in-up"
            data-aos-delay={index * 200}
          >
            <img
              src={card.img}
              alt={card.alt}
              className="w-full h-60 object-cover"
              data-aos="bounce"
              data-aos-delay={index * 300}
            />
            <div className="p-5" data-aos="bounce" data-aos-delay={index * 300 + 100}>
              <h3 className="text-xl font-bold">{card.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page6;
