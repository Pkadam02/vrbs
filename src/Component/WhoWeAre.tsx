"use client";
import gsap from "gsap";
import { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function WhoWeAre() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate section title
    gsap.fromTo(
      ".whoweare-title",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out",
        scrollTrigger: {
          trigger: ".whoweare-title",
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      }
    );

    // Animate image
    gsap.fromTo(
      ".whoweare-image",
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out",
        scrollTrigger: {
          trigger: ".whoweare-image",
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      }
    );

    // Animate text content (paragraphs and list)
    gsap.utils.toArray(".whoweare-text-content > *:not(h2)").forEach((element: any, index) => {
      gsap.fromTo(element, 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.15 // Stagger the animation
        }
      );
    });

    // Animate button
    gsap.fromTo(
      ".whoweare-btn",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
        scrollTrigger: {
          trigger: ".whoweare-btn",
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      }
    );

  }, []);

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-y-8 md:gap-x-12 items-start">
          
          {/* Left Image Section */}
          <div className="flex justify-center relative">
            <div
              className="rounded-xl overflow-hidden w-full max-w-sm sm:max-w-md lg:max-w-none h-auto"
            >
              <img
                src="/WeARE.png"
                alt="Who We Are Graphic"
                className="w-full h-full object-cover whoweare-image"
              />
            </div>
          </div>

          {/* Right Text Section */}
          <div>
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
              Get Started
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 whoweare-title">
              Who We Are
            </h2>
            <div className="space-y-3 sm:space-y-4 text-gray-600 text-base sm:text-lg whoweare-text-content">
              <p>
                We are a team of passionate professionals dedicated to helping
                businesses achieve their growth goals through innovative lead
                generation strategies.
              </p>
              <p>
                With over 10 years of experience in the industry, we have
                developed proven methodologies that deliver exceptional results
                for our clients.
              </p>
              <ul className="space-y-1.5 sm:space-y-2">
                <li>• Expert team with 10+ years experience</li>
                <li>• Proven track record with 500+ successful projects</li>
                <li>• Cutting-edge technology and tools</li>
                <li>• Dedicated support and consultation</li>
              </ul>
            </div>
            <div className="mt-8 sm:mt-10">
          <button className="bg-[#1C1C57] text-white px-6 py-3 sm:px-8 sm:py-3.5 font-semibold hover:bg-blue-700 transition-colors w-full sm:w-auto whoweare-btn">
          Book Free Growth Call
          </button>
        </div>
  
          </div>
        </div>
      </div>
    </section>
  );
}
