import React, { useState, useEffect } from "react";
import { Check } from "lucide-react";
import backgroundImage from "./assets/new2.webp"; // Adjust path if necessary

const packages = [
  {
    title: "Starter Package",
    subtitle: "Canva Foundations",
    priceMonthly: "₹5,000/mo",
    priceYearly: "or ₹50,000 yearly",
    duration: "1 Week (5 Sessions)",
    modules: [
      "Introduction to Canva",
      "Logo Design Basics",
      "Basic Iconography",
      "Typography Essentials",
      "Simple Social Media Posts",
    ],
  },
  {
    title: "Growth Package",
    subtitle: "Visual Design Proficiency",
    priceMonthly: "₹15,000/mo",
    priceYearly: "or ₹1,50,000 yearly",
    duration: "2 Weeks (10 Sessions)",
    modules: [
      "Brand Kit Creation",
      "Advanced Logo and Icon Design",
      "Social Media Branding",
      "Photo Editing with Canva",
      "Business Collateral",
    ],
  },
  {
    title: "Professional Package",
    subtitle: "Video Editing & Animation",
    priceMonthly: "₹30,000/mo",
    priceYearly: "or ₹3,00,000 yearly",
    duration: "4 Weeks (20 Sessions)",
    modules: [
      "Canva for Video Editing",
      "Intro to Motion Graphics",
      "Interactive Social Media Content",
      "YouTube Branding",
      "Presentation Mastery",
    ],
  },
  {
    title: "Expert Package",
    subtitle: "Canva Website & Advanced Applications",
    priceMonthly: "₹50,000/mo",
    priceYearly: "or ₹5,00,000 yearly",
    duration: "6 Weeks (30 Sessions)",
    modules: [
      "Website Design in Canva",
      "Comprehensive Branding Package",
      "Advanced Video Editing",
      "Ebook and Portfolio Design",
      "Marketing Campaign Creation",
    ],
  },
];

const CurriculumPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % packages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const pkg = packages[currentIndex];

  return (
    <div
      className="min-h-screen bg-cover bg-center relative flex items-center justify-center px-6 py-16"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "20% center",
      }}
    >
      {/* Optional softer overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20 z-0"></div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center lg:justify-end w-full max-w-7xl gap-12 lg:pr-12">

       {/* Left Side: Centered heading */}
        <div className="text-center lg:text-left max-w-xl z-10"> {/* removed any bg styling */}
  <p className="text-sm uppercase tracking-widest text-gray-300 font-semibold">
    Tagline
  </p>
  <h2 className="text-5xl font-extrabold text-white mb-4">
    Pricing Plan
  </h2>
  <p className="text-gray-200 text-base">
    Choose the plan that fits your learning journey.
  </p>
</div>

        {/* Right Side: Pricing Card (doesn't affect animation) */}
        <div className="rounded-3xl shadow-2xl p-10 w-full max-w-md space-y-6">

          <h3 className="text-xl font-bold text-white">{pkg.title}</h3>
          <p className="text-md text-gray-300">{pkg.subtitle}</p>
          <p className="text-4xl font-extrabold text-white">{pkg.priceMonthly}</p>
          <p className="text-gray-300">{pkg.priceYearly}</p>
          <p className="text-gray-300 mb-4">{pkg.duration}</p>

          <ul className="space-y-2 text-left text-gray-200">
            {pkg.modules.map((mod, i) => (
              <li key={i} className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-400 mt-1" />
                <span>{mod}</span>
              </li>
            ))}
          </ul>

          <button className="mt-6 w-full bg-white text-[#131b2f] py-3 rounded-full font-bold hover:bg-gray-200 transition">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default CurriculumPage;
