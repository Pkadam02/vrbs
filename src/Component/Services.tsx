"use client";
import gsap from "gsap";
import { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Services() {

    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);

      // Animate section title
      gsap.fromTo(
        "#services h2",
        { opacity: 0, y: 300 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out",
          scrollTrigger: {
            trigger: "#services h2",
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        }
      );

      // Animate service cards
      (gsap.utils.toArray(".service-card") as HTMLElement[]).forEach((card, index) => {
        const animationProps = index < 3 
          ? { opacity: 0, x: -700 } // First 3 cards from left
          : { opacity: 0, x: 700 };  // Last 3 cards from right

        gsap.fromTo(card, 
          animationProps,
          { 
            opacity: 1, 
            x: 0, 
            duration: 1.8, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 100%",
              toggleActions: "play none none reverse",
            },
            delay: index * 0.1 // Stagger the animation
          }
        );
      });

      // Animate "Know More" button
      gsap.fromTo(
        ".services-know-more-btn",
        { opacity: 0, y: 200 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power2.out",
          scrollTrigger: {
            trigger: ".services-know-more-btn",
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        }
      );
  
      // Smooth scroll for buttons with 'scroll-to-services' class (if any)
      const buttons = document.querySelectorAll(".scroll-to-services");
      buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
          const element = document.getElementById("services");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        });
      });
    }, []);
  
  return (
    <section id="services" className="relative overflow-hidden bg-white flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 py-16 md:py-20 min-h-[90vh]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Title */}
        <div className="text-center mb-10 md:mb-16">
          <p className="text-sm sm:text-base text-gray-500 font-medium uppercase tracking-wide">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--hcolor)] mt-1 sm:mt-2">
            We Provide Best Services
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-4 sm:p-6 text-center service-card">
            <div className="bg-yellow-200 rounded-2xl mb-4 sm:mb-5 flex items-center justify-center h-48 sm:h-60 overflow-hidden">
              <img
                src="/demand-generation.png"
                alt="Demand Generation"
                className="w-full h-full max-w-[180px] max-h-[180px] sm:max-w-[220px] sm:max-h-[220px] object-cover rounded-2xl"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-[var(--hcolor)] mb-2 sm:mb-3">
              Demand Generation
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Using the AIDA methodology (Attention, Interest, Desire, Action),
              we ensure every campaign captures attention, nurtures interest,
              builds desire, and drives measurable action.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-4 sm:p-6 text-center service-card">
            <div className="bg-yellow-200 rounded-2xl mb-4 sm:mb-5 flex items-center justify-center h-48 sm:h-60 overflow-hidden">
              <img
                src="/content-syndication.png"
                alt="Content Syndication"
                className="w-full h-full max-w-[180px] max-h-[180px] sm:max-w-[220px] sm:max-h-[220px] object-cover rounded-2xl"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-[var(--hcolor)] mb-2 sm:mb-3">
              Content Syndication
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              We amplify your content’s reach by distributing it across trusted
              industry platforms, networks, and targeted databases.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-4 sm:p-6 text-center service-card">
            <div className="bg-yellow-200 rounded-2xl mb-4 sm:mb-5 flex items-center justify-center h-48 sm:h-60 overflow-hidden">
              <img
                src="/buyer-intent.png"
                alt="Buyer Intent Leads"
                className="w-full h-full max-w-[220px] max-h-[180px] object-cover rounded-2xl"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-[var(--hcolor)] mb-2 sm:mb-3">
              Buyer Intent Leads
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Through our proprietary publishing network, we gather verified
              first-party intent data by tracking clicks, downloads, and other
              behavioral signals that indicate buying readiness.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-4 sm:p-6 text-center service-card">
            <div className="bg-yellow-200 rounded-2xl mb-4 sm:mb-5 flex items-center justify-center h-48 sm:h-60 overflow-hidden">
              <img
                src="webinar.png"
                alt="Event & Webinar Registrations"
                className="w-full h-full max-w-[200px] max-h-[200px] object-cover rounded-2xl"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-[var(--hcolor)] mb-2 sm:mb-3">
              Event & Webinar Registrations
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              We manage end-to-end attendee acquisition for your events and
              webinars, targeting professionals most likely to benefit from your
              solutions.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-4 sm:p-6 text-center service-card">
            <div className="bg-yellow-200 rounded-2xl mb-4 sm:mb-5 flex items-center justify-center h-48 sm:h-60 overflow-hidden">
              <img
                src="/abm.png"
                alt="Account-Based Marketing"
                className="w-full h-full max-w-[180px] max-h-[180px] object-cover"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-[var(--hcolor)] mb-2 sm:mb-3">
              Account-Based Marketing (ABM)
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              We develop personalized, high-touch campaigns aimed at your most
              valuable target accounts, aligning sales and marketing efforts for
              maximum impact.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-4 sm:p-6 text-center service-card">
            <div className="bg-yellow-200 rounded-2xl mb-4 sm:mb-5 flex items-center justify-center h-48 sm:h-60 overflow-hidden">
              <img
                src="software-dev.png"
                alt="Software Development"
                className="w-full h-full max-w-[200px] max-h-[150px] object-cover"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-[var(--hcolor)] mb-2 sm:mb-3">
              Software Development
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Our team delivers custom, scalable, and secure software solutions
              — from modern web apps to enterprise systems that optimize your
              workflows and enable digital transformation.
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <button
            className="relative overflow-hidden px-6 py-3 sm:px-8 sm:py-3.5 rounded-lg font-semibold text-white bg-[#1C1C57] w-full sm:w-auto group transition-all duration-500"
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
              Know More
            </span>
            <span className="absolute inset-0 bg-yellow-300 top-full group-hover:top-0 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] rounded-t-[100%]"></span>
          </button>
        </div>
      </div>
    </section>
  );
}
