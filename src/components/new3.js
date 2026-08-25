import React from "react";

const AboutCardsSection = () => {
  return (
    <div
      className="relative bg-fixed bg-center bg-cover bg-no-repeat text-white py-20 px-6"
      style={{
        backgroundImage: "url('/new5.webp')",
      }}
    >
      <div className="bg-black bg-opacity-60 absolute inset-0 z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-6">
          About Us: Your Story, Your Mission
        </h2>
        <p className="text-lg max-w-2xl mx-auto">
          Our journey began with a passion for empowering women through design.
          We believe in helping women step into their creative power and learn
          marketable design skills that open doors to new opportunities.
        </p>
      </div>

      {/* About Content Cards */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
        {/* Card 1 */}
        <div className="bg-[#0F1C2E] rounded-xl shadow-lg p-8 flex flex-col justify-between">
          <h3 className="text-2xl font-semibold mb-4">Your Story</h3>
          <p className="text-gray-300 mb-6">
            Learn about our background, our commitment to creativity, and why we
            started this journey.
          </p>
          <button className="bg-[#DFC77A] text-black px-6 py-2 rounded-full font-semibold hover:bg-[#cbb25d] transition mx-auto">
            Discover More
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-[#0F1C2E] rounded-xl shadow-lg p-8 flex flex-col justify-between">
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="text-gray-300 mb-6">
            We aim to create accessible design education that fosters empowerment,
            community, and professionalism.
          </p>
          <button className="bg-[#DFC77A] text-black px-6 py-2 rounded-full font-semibold hover:bg-[#cbb25d] transition mx-auto">
            Explore Now
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-[#0F1C2E] rounded-xl shadow-lg p-8 flex flex-col justify-between">
          <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
          <ul className="text-gray-300 mb-6 space-y-1 text-left">
            <li>• Empowerment</li>
            <li>• Creativity</li>
            <li>• Accessibility</li>
            <li>• Community</li>
            <li>• Professionalism</li>
          </ul>
          <button className="bg-[#DFC77A] text-black px-6 py-2 rounded-full font-semibold hover:bg-[#cbb25d] transition mx-auto">
            Join the Future
          </button>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative z-10 text-center mt-16">
        <button className="bg-teal-500 px-8 py-3 rounded-full text-lg font-semibold hover:bg-teal-600 transition">
          Join Our Community
        </button>
      </div>
    </div>
  );
};

export default AboutCardsSection;
