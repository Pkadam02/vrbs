"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Navbar({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (isOpen: boolean) => void }) {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    setIsOpen(false);
    router.push(path);
  };

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-4 py-4 bg-yellow-300 text-[#1C1C57] border-b border-white">
      <div className="flex items-center space-x-2 lg:ml-20 cursor-pointer" onClick={() => handleNavigation("/")}>
        <img src="title.png" alt="VR Logo" className="h-10" />
      </div>

      {/* Desktop navigation */}
      <ul className="hidden md:flex space-x-6 lg:space-x-8 xl:space-x-10 font-medium">
        <li><button onClick={() => handleNavigation("/#about")} className="hover:text-gray-300 transition-colors duration-200">About</button></li>
        <li><button onClick={() => handleNavigation("/#services")} className="hover:text-gray-300 transition-colors duration-200">Services</button></li>
        <li><button onClick={() => handleNavigation("/#methodology")} className="hover:text-gray-300 transition-colors duration-200">Methodology</button></li>
        <li><button onClick={() => handleNavigation("/#casestudy")} className="hover:text-gray-300 transition-colors duration-200">Case Studies</button></li>
        <li><button onClick={() => handleNavigation("/contact")} className="hover:text-gray-300 transition-colors duration-200">Contact Us</button></li>
      </ul>

      <div className="hidden md:flex items-center gap-4 lg:mr-20">
        +91 7524963552 <br />
        +91 8585856595
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden flex items-center z-[100]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none p-2 rounded-md hover:bg-gray-700 transition-colors duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Sidebar for Mobile */}
      <div className={`fixed inset-y-0 right-0 w-full max-w-sm bg-yellow-300 z-[90] transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out md:hidden overflow-y-auto`}>
        <ul className="flex flex-col items-center space-y-6 font-medium py-6">
          <li><button onClick={() => handleNavigation("/#about")} className="text-[#1C1C57] text-lg hover:text-gray-300">About</button></li>
          <li><button onClick={() => handleNavigation("/#services")} className="text-[#1C1C57] text-lg hover:text-gray-300">Services</button></li>
          <li><button onClick={() => handleNavigation("/#methodology")} className="text-[#1C1C57] text-lg hover:text-gray-300">Methodology</button></li>
          <li><button onClick={() => handleNavigation("/#casestudy")} className="text-[#1C1C57] text-lg hover:text-gray-300">Case Studies</button></li>
          <li><button onClick={() => handleNavigation("/contact")} className="text-[#1C1C57] text-lg hover:text-gray-300">Contact Us</button></li>
        </ul>

        <div className="flex flex-col space-y-4 mt-8 items-center px-4">
          <div className="md:flex items-center gap-4 right-20">
            +91 7524963552 <br />
            +91 8585856595
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black bg-opacity-50 z-[80] md:hidden"></div>
      )}
    </nav>
  );
}
