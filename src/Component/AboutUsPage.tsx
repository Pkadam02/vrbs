"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link"; // Import Link component

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = sectionRef.current;
    if (!el) return;

    // Animate all children with class "about-fade"
    // const fadeEls = el.querySelectorAll(".about-fade");

    // gsap.fromTo(
    //   fadeEls,
    //   { opacity: 0, y: 500 },
    //   {
    //     opacity: 1,
    //     y: 0,
    //     duration: 1,
    //     stagger: 0.3,
    //     ease: "power3.out",
    //     scrollTrigger: {
    //       trigger: el,
    //       start: "top 80%", // starts when top of section hits 80% of viewport
    //       toggleActions: "play none none reverse",
    //       markers: false, // set true for debugging
    //     },
    //   }
    // );

    gsap.fromTo(
      ".about-text-content",
      { opacity: 0, x: -900 },
      { opacity: 1, x: 0, duration: 1.9, ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-text-content",
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      }
    );

    gsap.fromTo(
      ".about-image-container",
      { opacity: 90, x:800 },
      { opacity: 1, x: 0, duration:1, ease: "power3.out", delay: 0.6,
        scrollTrigger: {
          trigger: ".about-image-container",
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-white
        flex flex-col md:flex-row items-center justify-between
        px-0 sm:px-8 md:px-12 lg:px-3 py-25
        w-full min-h-[90vh] md:py-20 bg-white"
      data-scroll-section
    >
      <div className="container mx-auto px-4 sm:px-10 lg:px-5">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Text Content */}
          <div className="relative lg:top-[-80] space-y-2 lg:pl-16 about-text-content">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              About
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-7xl font-bold text-gray-900 leading-tight">
              About VR <br />
              <span className="text-gray-900">Business Solution</span>
            </h2>
            <p className="text-lg text-gray-700">Inform your customers about your features</p>
            <p className="text-base leading-relaxed text-gray-600">
              At VR Business Solution, we are pioneers in customer acquisition
              and targeted outreach, helping businesses connect with the right
              audience both online and offline. Our expertise:
            </p>

            <ul className="space-y-2 text-gray-700 text-base">
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 text-xl">✔</span>
                <span>Spans lead generation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 text-xl">✔</span>
                <span>Appointment setting, event registrations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 text-xl">✔</span>
                <span>Email marketing, digital marketing</span>
              </li>
            </ul>
          </div>

          {/* Right Image/Dashboard */}
          <div className="w-full flex flex-col items-center">
          <div style={{width: "60%", maxWidth: "250%" , marginLeft: "110px", marginRight: "auto"}}>
              <Image
                src="/about2.jpg"
                alt="Globe illustration"
                width={1510}
                height={705}
                layout="responsive"
                objectFit="cover"
                style={{position:"relative", bottom:"1px", zIndex:99}}
              />
            </div>
            <div style={{width: "150%", maxWidth: "150%" , marginLeft: "250px", marginRight: "auto" }}>
              <Image
                src="/globe.png"
                alt="Globe illustration"
                width={1510}
                height={705}
                layout="responsive"
                objectFit="cover"
                style={{position:"relative", bottom:"100px", left:"-500px"}}
              />
            </div>
          </div>
        </div>

        {/* Provided Content - About VR Business Solution */}
        <div className="mt-20 py-10 px-8 bg-white rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About VR Business Solution</h2>
          <p className="text-lg text-gray-700 mb-4">
            At VR Business Solution, we are pioneers in customer acquisition and targeted outreach, helping businesses connect with the right audience&mdash;both online and offline. Our expertise spans lead generation, appointment setting, event registrations, email marketing, digital marketing, and a range of services designed to engage and convert your ideal prospects.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            We specialize in identifying and narrowing down your customer base, ensuring you focus only on high-quality prospects who are most likely to buy, return, and advocate for your brand.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Our approach is smart, data-driven, and results-focused, enabling you to see measurable growth and profitability in a short span. With a proven and efficient delivery model, we ensure consistent, high-quality outcomes that exceed expectations.
          </p>
          <p className="text-lg text-gray-700">
            At VR Business Solution, we are more than a service provider&mdash;we are your growth partner. Committed to delivering end-to-end solutions, we focus on building long-term partnerships where your success fuels our own. Together, we aim for sustainable growth and shared achievements.
          </p>
        </div>
      </div>
    </section>
  );
}
