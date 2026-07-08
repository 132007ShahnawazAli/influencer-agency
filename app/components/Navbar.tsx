"use client";

import React, { useState, useRef, useEffect } from 'react';
import Logo from './Logo';
import Button from './Button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const navRef = useRef(null);
  const pillRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 20);
      // Hero pins for "+=150%" so the bottom nav should show after scrolling past that
      setIsScrolledPastHero(currentY > window.innerHeight * 1.5);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useGSAP(() => {
    gsap.from(pillRef.current, {
      y: -80,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      delay: 0.1,
      clearProps: "all",
      onComplete: () => setIsLoaded(true)
    });
  }, { scope: navRef });

  return (
    <div ref={navRef}>
      {/* Top Navbar */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 z-[9999] w-max">
        <nav
          ref={pillRef}
          className={`w-fit bg-[#F4F5F7] rounded-full pl-7 pr-2 py-2 flex items-center gap-20 shadow-sm ${
            isLoaded ? 'transition-all duration-500 ease-out' : ''
          } ${
            isScrolled ? '-translate-y-32 opacity-0' : 'translate-y-8 opacity-100'
          }`}
        >
          {/* Left side: Logo & Brand */}
          <div className="flex items-center gap-2">
            <Logo />
            <span className="text-[#0B1B3D] font-bold text-xl tracking-tighter ">FocusLab</span>
          </div>

          {/* Middle: Navigation Links */}
          <div className="hidden md:flex items-center gap-6 text-[#54627A] font-medium text-base tracking-tight">
            <a href="#" className="text-[#0B1B3D] font-semibold">Home</a>
            <a href="#" className="hover:text-[#0B1B3D] transition-colors">Projects</a>
            <a href="#" className="hover:text-[#0B1B3D] transition-colors">Pricing</a>
            <a href="#" className="hover:text-[#0B1B3D] transition-colors">Careers</a>
          </div>

          {/* Right side: CTA Button */}
          <Button className='text-base py-3 px-8 font-semibold'
            icon={
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.68667 1.41986L0 5.16653H3.68667V1.41986ZM3.952 1.41986V5.16653H9.024V7.59986L12.6707 4.6332C12.6613 3.81986 12.6913 3.1332 12.654 2.32653C12.5553 1.59986 11.796 1.34653 11.1633 1.41986H3.952ZM15.4 2.87986C14.8653 3.07653 14.4947 3.5432 14.0353 3.8732C12.3647 5.23986 10.714 6.61986 9.05667 7.99986C11.0733 9.72653 13.0833 11.4532 15.1 13.1732C15.912 13.6205 16.052 12.6305 15.9853 12.0799V3.4132C15.9852 3.33804 15.9697 3.26371 15.9398 3.19475C15.9099 3.12579 15.8663 3.06366 15.8116 3.01217C15.7568 2.96067 15.6921 2.9209 15.6215 2.89528C15.5508 2.86967 15.4757 2.85875 15.4007 2.8632L15.4 2.87986ZM0.0253333 5.4332V10.5665H3.712V5.4332H0.0253333ZM9.07667 10.8332H4.00533V14.5799C6.58133 14.5759 9.16333 14.5872 11.7253 14.5739C12.4053 14.5272 12.804 13.8272 12.704 13.1939V11.5205L9.05733 8.40053V10.8339L9.07667 10.8332ZM0.0253333 10.8332C0.0386667 11.7932 -0.002 12.7532 0.0473333 13.7065C0.155333 14.3385 0.819333 14.6599 1.412 14.5799H3.72133V10.8332H0.0253333Z" fill="currentColor" />
              </svg>
            }
          >
            Book a Call
          </Button>
        </nav>
      </div>

      {/* Bottom PC Navbar (Shows after Hero) */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[9999] pointer-events-none w-max">
        <div
          className={`hidden md:flex w-fit transition-all duration-500 ease-out`}
          style={{
            transform: isScrolledPastHero ? 'translateY(0)' : 'translateY(150px)',
            opacity: isScrolledPastHero ? 1 : 0,
            pointerEvents: isScrolledPastHero ? 'auto' : 'none',
          }}
        >
          <div className="flex items-center gap-10 bg-white/95 backdrop-blur-md pl-5 pr-2 py-2 rounded-full shadow-2xl border border-gray-100">
            {/* Logo */}
            <div className='flex items-center gap-2 pl-2'>
              <Logo />
              <span className='text-[#0B1B3D] font-bold text-xl tracking-tighter'>FocusLab</span>
            </div>

            {/* CTA */}
            <Button className='py-3.5 px-8 text-base tracking-tight font-semibold shadow-md'
              icon={
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.68667 1.41986L0 5.16653H3.68667V1.41986ZM3.952 1.41986V5.16653H9.024V7.59986L12.6707 4.6332C12.6613 3.81986 12.6913 3.1332 12.654 2.32653C12.5553 1.59986 11.796 1.34653 11.1633 1.41986H3.952ZM15.4 2.87986C14.8653 3.07653 14.4947 3.5432 14.0353 3.8732C12.3647 5.23986 10.714 6.61986 9.05667 7.99986C11.0733 9.72653 13.0833 11.4532 15.1 13.1732C15.912 13.6205 16.052 12.6305 15.9853 12.0799V3.4132C15.9852 3.33804 15.9697 3.26371 15.9398 3.19475C15.9099 3.12579 15.8663 3.06366 15.8116 3.01217C15.7568 2.96067 15.6921 2.9209 15.6215 2.89528C15.5508 2.86967 15.4757 2.85875 15.4007 2.8632L15.4 2.87986ZM0.0253333 5.4332V10.5665H3.712V5.4332H0.0253333ZM9.07667 10.8332H4.00533V14.5799C6.58133 14.5759 9.16333 14.5872 11.7253 14.5739C12.4053 14.5272 12.804 13.8272 12.704 13.1939V11.5205L9.05733 8.40053V10.8339L9.07667 10.8332ZM0.0253333 10.8332C0.0386667 11.7932 -0.002 12.7532 0.0473333 13.7065C0.155333 14.3385 0.819333 14.6599 1.412 14.5799H3.72133V10.8332H0.0253333Z" fill="currentColor" />
                </svg>
              }
            >
              Book a Call
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
