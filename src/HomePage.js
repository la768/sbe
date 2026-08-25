import React from "react";
import Testimonials from "./page4"; // Import the component
import FAQ from "./FAQ";
import Page6 from "./page6";
import ContactUs from "./page7";
import CurriculumPage from './page9';
import AddOnsSection from './page10'; // adjust path if needed
import './App.css';
import KintsugiCard from './components/KintsugiCard';
import KintsugiCardContentCycle from './components/KintsugiCardContentCycle';
import AboutCardsSection from './components/new3';
import CoursePackages from "./components/new4";

import EnrollmentPage from "./page8";



const HomePage = () => {
  return (
    <>
    
      {/* Purple Background Section */}
      <KintsugiCard />
   
      
      {/* White Background Section */}
      <div
  className="text-black py-12 px-6 -mt-0 relative z-10"
  style={{ backgroundColor: '#f5e8d4' }}
>

       {/* Testimonials Section */}
        <div className="flex flex-col items-center">
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <div className="bg-white text-black p-6 rounded-xl shadow-lg md:w-1/4 text-left">
              <p className="text-lg font-semibold">❝ The courses were truly transformative. ❞</p>
              <p className="mt-2 text-gray-700 font-medium">— Sarah</p>
            </div>
            <div className="bg-white text-black p-6 rounded-xl shadow-lg md:w-1/4 text-left">
              <p className="text-lg font-semibold">❝ A fantastic experience from start to finish. ❞</p>
              <p className="mt-2 text-gray-700 font-medium">— Emily</p>
            </div>
            <div className="bg-white text-black p-6 rounded-xl shadow-lg md:w-1/4 text-left">
              <p className="text-lg font-semibold">❝ I gained confidence in my design skills. ❞</p>
              <p className="mt-2 text-gray-700 font-medium">— Michelle</p>
            </div>
            
          </div>
        </div>
        </div>

        <KintsugiCardContentCycle />


        <AboutCardsSection />
        
        <CoursePackages /> 
    
    <Testimonials />
    
    <FAQ /> 
    <Page6 />
    <ContactUs />
    <EnrollmentPage />
    <CurriculumPage />
    <AddOnsSection />



    </>
  );
};

export default HomePage;
