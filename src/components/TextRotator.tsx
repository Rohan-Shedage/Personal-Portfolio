import React from "react";
import { portfolioConfig } from "@/config/portfolio.config";

function TextRotator() {
  return (
    <div className="py-4 rounded-md flex flex-col justify-center items-start overflow-hidden">
      {/* CHANGED gap-x-2 TO gap-x-1 
         This reduces the horizontal space between "&" and the rotating word.
      */}
      <div className="font-poppins text-base sm:text-2xl [text-wrap:balance] text-gray-700 flex flex-wrap justify-start items-center gap-x-1 gap-y-0">
        
        {/* Static Text */}
        <span className="whitespace-nowrap">
          I am a {portfolioConfig.title} &
        </span>

        {/* Rotating Text Container */}
        <div className="relative h-8 sm:h-14 overflow-hidden w-fit">
          <ul className="block text-left font-rubik text-lg sm:text-3xl animate-text-slide">
            {portfolioConfig.skills.roles.map((role, index) => (
              <li 
                key={index} 
                className="text-[#2f7df4] h-8 sm:h-14 leading-[2rem] sm:leading-[3.5rem] block whitespace-nowrap"
              >
                {role}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}

export default TextRotator;