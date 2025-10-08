"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Footer() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate the logo and contact info section
    gsap.fromTo(
      ".footer-logo-contact",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out",
        scrollTrigger: {
          trigger: ".footer-logo-contact",
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      }
    );

    // Animate each footer column
    (gsap.utils.toArray(".footer-column") as HTMLElement[]).forEach((column, index) => {
      gsap.fromTo(column,
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: column,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.15 // Stagger the animation
        }
      );
    });

  }, []);

  return (
    <footer className="bg-[#27344D] text-white py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Logo and Contact Info Section */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left col-span-1 sm:col-span-2 lg:col-span-1 mb-8 sm:mb-0 footer-logo-contact">
            <img src="title2.png" alt="VR Business Solutions" className="h-12 mb-4" />
            
          </div>

          {/* Hawaii Main Office */}
          <div className="text-center sm:text-left footer-column">
            <h3 className="text-lg font-bold mb-4">Hawaii Main Office</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>66 West Flagler Street -</li>
              <li>Suite 900 Miami, FL 33130,</li>
              <li>USA.</li>
              <p className="text-gray-400 text-sm leading-relaxed">
              66 West Flagler Street - Suite 900 Miami, FL 33130, USA.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              +1 786 406 6061
            </p>
            <p className="text-gray-400 text-sm">
              E: contact@vr-bs.com
            </p>
            </ul>
          </div>

          {/* World Offices */}
          <div className="text-center sm:text-left footer-column">
            <h3 className="text-lg font-bold mb-4">World Offices</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Pune</li>
              <li>USA - San Francisco</li>
            </ul>
          </div>

          {/* Expertise */}
          <div className="text-center sm:text-left footer-column">
            <h3 className="text-lg font-bold mb-4">Expertise</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-white transition-colors cursor-pointer">Home</li>
              <li className="hover:text-white transition-colors cursor-pointer">About</li>
              <li className="hover:text-white transition-colors cursor-pointer">Services</li>
              <li className="hover:text-white transition-colors cursor-pointer">Blogs</li>
              <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left footer-column">
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-white transition-colors cursor-pointer">Software Development</li>
              <li className="hover:text-white transition-colors cursor-pointer">Demand Generation</li>
              <li className="hover:text-white transition-colors cursor-pointer">Appointment Generation</li>
              <li className="hover:text-white transition-colors cursor-pointer">Content Syndication</li>
              <li className="hover:text-white transition-colors cursor-pointer">Event & Webinar Registration</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

