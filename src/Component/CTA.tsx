"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

export default function CTA() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate the main heading
    gsap.fromTo(
      "#cta h2",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out",
        scrollTrigger: {
          trigger: "#cta h2",
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      }
    );

    // Animate the button
    gsap.fromTo(
      "#cta button",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.2,
        scrollTrigger: {
          trigger: "#cta button",
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      }
    );

    // Animate the main image
    gsap.fromTo(
      "#cta img",
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out", delay: 0.4,
        scrollTrigger: {
          trigger: "#cta img",
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      }
    );

  }, []);

  return (
    <section id="cta" className="relative py-16 md:py-[1] bg-yellow-300 overflow-hidden min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
      {/* Blue curved background */}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-[600px]">
          {/* Left Content */}
          <div className="py-10 md:py-0">
            <h1 className="text-4xl sm:text-2xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Ready To <br />
              Accelerate Growth <br /> & Modernize Your
              <br />Tech?
            </h1>
            <button className="bg-[#FF4D6A] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#E0445D] transition-colors w-full sm:w-auto max-w-sm">
              Book Appointment
            </button>
          </div>
          
          {/* Right Illustration */}
          <div className="relative flex justify-center items-center h-full">
            {/* Main person image */}
            <img src="/cta.png" alt="Person with Tablet" className="absolute bottom-[-70px] lg:bottom-[-450px] right-[-16px] md:right-[-35px] h-auto max-h-[1200px] md:max-h-[1400px] lg:h-[1250px] object-contain w-[180%] md:w-[130%] lg:w-[100%]" />

            {/* Floating Card 1 */}
            
          </div>
        </div>
      </div>
    </section>
  );
}

