"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function AboutUsPage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = sectionRef.current;
    if (!el) return;

    gsap.fromTo(
      ".about-text-content",
      { opacity: 0, x: -900 },
      {
        opacity: 1,
        x: 0,
        duration: 1.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-text-content",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".about-image-container",
      { opacity: 0, x: 800 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.6,
        scrollTrigger: {
          trigger: ".about-image-container",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      id="aboutus"
      className="relative overflow-hidden bg-white flex flex-col md:flex-row items-center justify-between px-0 sm:px-8 md:px-12 lg:px-20 py-35 w-full min-h-[90vh] md:py-50 lg:py-20 bg-white"
      data-scroll-section
    >
      <div className="container mx-auto px-4 sm:px-10 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="space-y-2 lg:pl-16 about-text-content">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">About Us</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Welcome to <br />
              <span className="text-gray-900">VR Business Solution</span>
            </h2>
            <p className="text-base leading-relaxed text-gray-600">
              At VR Business Solution, we are pioneers in customer acquisition and targeted outreach,
              helping businesses connect with the right audience both online and offline.
            </p>
            <ul className="space-y-2 text-gray-700 text-base">
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 text-xl">✔</span>
                <span>Lead generation across industries</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 text-xl">✔</span>
                <span>Appointment setting and event marketing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 text-xl">✔</span>
                <span>Digital and email marketing expertise</span>
              </li>
            </ul>
          </div>

          <div className="relative w-[300px] h-[350px] sm:w-[600px] sm:h-[600px] md:w-[560px] md:h-[420px] lg:w-[450px] lg:h-[490px] lg:left-20 z-10 left-10">
                <Image
                    src="/about2.jpg"
                    alt="Main illustration"
                    fill
                    className="object-cover"
                    priority
                    />
                 </div>

            {/* Globe overlay image */}
            <div className="absolute w-[420px] h-[1800px] sm:w-[3100px] sm:h-[150px] md:w-[1200px] md:h-[2500px] lg:w-[1100px] lg:h-[1000px] -bottom-10 right-3 sm:-bottom-10 sm:-right-14 md:-bottom-12 md:-right-[-260] lg:-bottom-1 lg:-right-[-90] animate-spin-slow">
                <Image
                src="/globe.png"
                alt="Globe overlay"
                fill
                className="opacity-90 object-contain"
                priority
                />
            </div>
        
            <div className="lg:col-span-2 mt-10 text-center lg:text-left">
        <p className="text-base leading-relaxed text-gray-600 mb-4">
          At VR Business Solution, we are pioneers in customer acquisition and targeted outreach, helping businesses connect with the right audience—both online and offline. Our expertise spans lead generation, appointment setting, event registrations, email marketing, digital marketing, and a range of services designed to engage and convert your ideal prospects.
        </p>
        <p className="text-base leading-relaxed text-gray-600 mb-4">
          We specialize in identifying and narrowing down your customer base, ensuring you focus only on high-quality prospects who are most likely to buy, return, and advocate for your brand.
        </p>
        <p className="text-base leading-relaxed text-gray-600 mb-4">
          Our approach is smart, data-driven, and results-focused, enabling you to see measurable growth and profitability in a short span. With a proven and efficient delivery model, we ensure consistent, high-quality outcomes that exceed expectations.
        </p>
        <p className="text-base leading-relaxed text-gray-600">
          At VR Business Solution, we are more than a service provider—we are your growth partner. Committed to delivering end-to-end solutions, we focus on building long-term partnerships where your success fuels our own. Together, we aim for sustainable growth
        </p>
      </div>
        </div>
      </div>
      {/* New Text Content */}
      
    </section>
  );
}
