import React from "react";
import heroImg from "../assets/book.png"; // Adjust path if needed

export default function Hero() {
  return (
    <>
    <section className="w-full bg-white ">
      {/* Outer container - Full width but padded */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 sm:px-12 lg:px-24 max-w-[2200px] mx-auto gap-12">
        
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="mt-40 text-xl font-bold leading-tight md:text-7xl">
            Hello, welcome here to learn something{" "}
            <span className="text-pink-500">new everyday!!!</span>
          </h1>
          <p className="max-w-xl mt-5 text-xl leading-relaxed text-gray-600">
           Knowledge grows when shared, and every little step adds to our journey of success. With curiosity and consistency, we can explore fresh ideas, sharpen our skills, and stay motivated. Let’s embrace learning daily and unlock endless opportunities for growth.
          </p>

          {/* Input & Button */}
        </div>

        {/* Right Image */}
        <div className="flex justify-center flex-1 mt-32">
          <img
            src={heroImg}
            alt="Books illustration"
            className="object-contain w-full max-w-md md:max-w-xl"
          />
        </div>
      </div>
      </section>
    </>
  );
}
