"use client";
import React, { useEffect } from "react";
import { ArrowDown } from "lucide-react";
import gsap from "gsap";

export default function HeroSection() {
  useEffect(() => {
    // GSAP Animation on mount
    gsap.fromTo(
      ".hero-text",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );

    gsap.fromTo(
      ".hero-image",
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1.5, ease: "power3.out", delay: 0.3 }
    );

    gsap.fromTo(
      ".hero-buttons",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.6 }
    );
  }, []);

  return (
    <section
      className="
        relative overflow-hidden bg-[#FFD700]
        flex flex-col md:flex-row items-center justify-between
        px-4 sm:px-8 md:px-12 lg:px-20 py-20
        w-full min-h-[90vh]
      "
    >
      {/* ===== Left Text Section ===== */}
      <div className=" w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left z-10">
        <h1
          className="
            hero-text
            font-poppins font-bold 
            text-[3.5rem] sm:text-5xl md:text-6xl lg:text-7xl 
            leading-[1.1]
            text-[#1C1C57]
          "
        >
          We generate <br /> leads <br /> through true <br /> intent
        </h1>

        <p className="text-base sm:text-lg text-gray-700 mt-6 mb-8 max-w-md mx-auto md:mx-0">
          Your Go To Performance Marketing Agency
        </p>

        {/* ===== CTA Buttons ===== */}
        <div className="hero-buttons flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start w-full sm:w-auto">
          <button className="bg-[#1C1C57] text-white px-8 py-3 font-semibold hover:opacity-90 transition border-2 border-[#1C1C57] w-full sm:w-auto rounded-md">
            Book a Free Growth Call
          </button>
          <button className="border-2 border-[#1C1C57] text-[#1C1C57] px-8 py-3 font-semibold hover:bg-[#1C1C57] hover:text-white transition w-full sm:w-auto rounded-md">
            Get a call 📞
          </button>
        </div>
      </div>

      {/* ===== Right Image Section ===== */}
      <div className="w-full md:w-1/2 flex justify-center items-center mt-12 md:mt-0 relative">
        <img
          src="/image.png"
          alt="Hero Illustration"
          className="
            hero-image
            w-[90%] sm:w-[80%] md:w-[100%] lg:w-[90%] 
            max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl 
            object-contain
          "
        />
      </div>

      {/* ===== Bottom Scroll Arrow ===== */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-[#1C1C57] hover:text-gray-800">
          <ArrowDown className="h-8 w-8" />
          <span className="sr-only">Scroll down</span>
        </a>
      </div>
    </section>
  );
}
