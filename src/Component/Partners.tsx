"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Partners() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = sectionRef.current;
    if (!el) return;

    // Animate when the section enters viewport
    const fadeEls = el.querySelectorAll(".partners-fade");

    gsap.fromTo(
      fadeEls,
      { opacity: 0, y: 200 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,                 // trigger this section
          start: "top 80%",            // when top of section hits 80% of viewport
          toggleActions: "play none none reverse",
          markers: false,              // set to true to debug scroll trigger
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      id="partners"
      ref={sectionRef}
      className="py-8 md:py-12 bg-white"
      data-scroll-section
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Brand Group */}
        <div className="partners-fade flex justify-center mb-6 md:mb-8">
          <img
            src="Group427320563.png"
            alt="Brands"
            className="w-full h-auto max-w-md object-contain"
          />
        </div>

        {/* Bottom Brand Logos */}
        <div className="partners-fade flex justify-center">
          <img
            src="Brand.png"
            alt="Brand"
            width={1100}
            height={48}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
