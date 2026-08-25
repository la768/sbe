import React from 'react';
import './KintsugiCard.css'; // optional for any custom CSS

const KintsugiCard = () => {
  return (
    <div
  className="text-white font-sans min-h-[150vh] p-6"
  style={{
    backgroundImage: 'url(/new1.webp)',
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
  }}
>

      {/* Overlay to darken or tint the background if needed */}
      <div >

        {/* Navbar */}
        <nav className="flex justify-between items-center py-4">
          <div className="flex space-x-6 text-lg">
            <a href="#" className="text-white hover:text-gray-300">Home</a>
            <a href="#" className="text-white hover:text-gray-300">About</a>
            <a href="#" className="text-white hover:text-gray-300">Courses</a>
            <a href="#" className="text-white hover:text-gray-300">Contact</a>
          </div>
          <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200">Get Started</button>
        </nav>

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row mt-12 items-center animate-float space-y-10 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl font-extrabold leading-tight">EMPOWERING WOMEN THROUGH DESIGN</h1>
            <p className="mt-4 text-lg">Unlock your creative potential and achieve your personal and professional design goals.</p>
            <button className="bg-teal-500 px-6 py-3 mt-6 rounded-lg text-lg font-semibold hover:bg-teal-600">
              Start Your Design Journey Today
            </button>

            {/* Kintsugi Quote */}
            <div className="mt-8 bg-white/10 border border-yellow-300 text-yellow-200 p-6 rounded-xl animate-slideUp fade-in backdrop-blur-sm shadow-lg">
              <h2 className="text-2xl font-bold mb-2 text-yellow-300">Golden Growth</h2>
              <p className="italic text-md">
                Strength isn’t in perfection — it’s in healing beautifully. You are art in progress.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default KintsugiCard;
