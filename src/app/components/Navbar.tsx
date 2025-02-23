"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Navigation items with section IDs
  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault(); // Prevent default link behavior
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false); // Close mobile menu on click
  };

  return (
    <nav className="navbar fixed w-full max-w-screen px-4 mx-auto shadow md:py-4 lg:px-8 bg-transparent backdrop-blur-md backdrop-saturate-150 z-[9999]">
      <div className="container flex flex-wrap items-center justify-between mx-auto text-white">
        <a href="#hero" className="mr-4 block cursor-pointer py-1.5 text-white font-bold text-2xl">
          ISHA K
        </a>

        <div className="lg:hidden">
          <button onClick={toggleMobileMenu} className="text-white text-2xl" aria-label="toggle menu">
            ☰
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6">
          {navItems.map(({ name, href }) => (
            <li key={href}>
              <a href={href} onClick={(e) => scrollToSection(e, href)} className="cursor-pointer hover:text-[#ea638c]">
                {name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed top-0 left-0 min-h-screen w-64 bg-blue-950 shadow-lg lg:hidden z-50">
            <div className="flex flex-row items-center border-b pb-4">
              <Link
                href="/"
                className="cursor-pointer text-[#ea638c] font-bold text-xl pt-4 ps-4"
              >
                ISHA K
              </Link>
              <button
                onClick={toggleMobileMenu}
                className="absolute top-4 right-4 text-white hover:text-[#ea638c]"
                aria-label="toggle menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <ul className="mt-4 space-y-4">
              {navItems.map(({ name, href }) => (
                <li key={href} className="px-4">
                  <a href={href} onClick={(e) => scrollToSection(e, href)} className="cursor-pointer text-lg hover:text-[#ea638c]">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
