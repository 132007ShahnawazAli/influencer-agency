"use client";
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../components/Button';

gsap.registerPlugin(ScrollTrigger);

const BookIcon = (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.68667 1.41986L0 5.16653H3.68667V1.41986ZM3.952 1.41986V5.16653H9.024V7.59986L12.6707 4.6332C12.6613 3.81986 12.6913 3.1332 12.654 2.32653C12.5553 1.59986 11.796 1.34653 11.1633 1.41986H3.952ZM15.4 2.87986C14.8653 3.07653 14.4947 3.5432 14.0353 3.8732C12.3647 5.23986 10.714 6.61986 9.05667 7.99986C11.0733 9.72653 13.0833 11.4532 15.1 13.1732C15.912 13.6205 16.052 12.6305 15.9853 12.0799V3.4132C15.9852 3.33804 15.9697 3.26371 15.9398 3.19475C15.9099 3.12579 15.8663 3.06366 15.8116 3.01217C15.7568 2.96067 15.6921 2.9209 15.6215 2.89528C15.5508 2.86967 15.4757 2.85875 15.4007 2.8632L15.4 2.87986ZM0.0253333 5.4332V10.5665H3.712V5.4332H0.0253333ZM9.07667 10.8332H4.00533V14.5799C6.58133 14.5759 9.16333 14.5872 11.7253 14.5739C12.4053 14.5272 12.804 13.8272 12.704 13.1939V11.5205L9.05733 8.40053V10.8339L9.07667 10.8332ZM0.0253333 10.8332C0.0386667 11.7932 -0.002 12.7532 0.0473333 13.7065C0.155333 14.3385 0.819333 14.6599 1.412 14.5799H3.72133V10.8332H0.0253333Z" fill="currentColor" />
    </svg>
);

export default function CTA() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 50%",
                toggleActions: "play none none none",
            },
        });

        // 1. Background glow softly fades in
        tl.from(".cta-glow", {
            opacity: 0,
            duration: 1.2,
            ease: "power2.out",
        });

        // 2. Heading fades up
        tl.from(".cta-heading", {
            y: 14,
            opacity: 0,
            duration: 0.85,
            ease: "power2.out",
        }, "-=0.8");

        // 3. Subtext follows
        tl.from(".cta-sub", {
            y: 12,
            opacity: 0,
            duration: 0.75,
            ease: "power2.out",
        }, "-=0.5");

        // 4. Both buttons reveal together as one unit
        tl.from(".cta-actions", {
            y: 10,
            opacity: 0,
            duration: 0.7,
            ease: "power2.out",
        }, "-=0.45");

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="relative w-full py-32 md:py-48 flex flex-col items-center justify-center bg-transparent">

            {/* Massive Bottom Glows from SVGs */}
            <div className="cta-glow absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[400px] pointer-events-none z-0">
                {/* Left SVG */}
                <svg className="absolute bottom-0 left-1/2 -translate-x-1/2 min-w-[1131px] overflow-visible" width="1131" height="396" viewBox="0 0 1131 396" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_1582_137)" style={{ mixBlendMode: "plus-lighter" }}>
                        <ellipse cx="305.5" cy="393" rx="531.5" ry="99" fill="#7B6EF3" />
                    </g>
                    <defs>
                        <filter id="filter0_f_1582_137" x="-1000" y="-1000" width="3000" height="2000" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="120" result="effect1_foregroundBlur_1582_137" />
                        </filter>
                    </defs>
                </svg>

                {/* Right SVG */}
                <svg className="absolute bottom-0 left-1/2 -translate-x-1/2 min-w-[1130px] overflow-visible" width="1130" height="396" viewBox="0 0 1130 396" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_1582_138)" style={{ mixBlendMode: "plus-lighter" }}>
                        <ellipse cx="825.5" cy="393" rx="531.5" ry="99" fill="#F446EE" />
                    </g>
                    <defs>
                        <filter id="filter0_f_1582_138" x="-1000" y="-1000" width="3000" height="2000" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="120" result="effect1_foregroundBlur_1582_138" />
                        </filter>
                    </defs>
                </svg>

                {/* Middle SVG */}
                <svg className="absolute bottom-0 left-1/2 -translate-x-1/2 min-w-[1232px] overflow-visible" width="1232" height="239" viewBox="0 0 1232 239" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_1582_140)" style={{ mixBlendMode: "plus-lighter" }}>
                        <ellipse cx="616" cy="256.5" rx="462" ry="102.5" fill="#ffff" />
                    </g>
                    <defs>
                        <filter id="filter0_f_1582_140" x="-1000" y="-1000" width="3000" height="2000" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="90" result="effect1_foregroundBlur_1582_140" />
                        </filter>
                    </defs>
                </svg>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center max-w-3xl px-6">
                <h2 className="cta-heading text-4xl md:text-5xl lg:text-[56px] font-medium text-[#F1F2F4] mb-6 leading-[1.15] tracking-tight">
                    A Better Way To Build<br />
                    Brands Through Creators.
                </h2>
                <p className="cta-sub text-[#F1F2F4]/80 text-[17px] mb-10">
                    Let's see what we can do for your brand.
                </p>

                <div className="cta-actions flex flex-row items-center gap-8">
                    {/* Primary Button */}
                    <div className="transition-transform duration-300 ease-out hover:translate-y-[-3px]">
                        <Button icon={BookIcon}>
                            Book a Call
                        </Button>
                    </div>

                    {/* Secondary Link — arrow nudges right on hover */}
                    <a
                        href="#"
                        className="group text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-2 font-medium text-[15px]"
                    >
                        See Projects
                        <svg
                            width="16" height="16" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="transition-transform duration-300 ease-out group-hover:translate-x-[4px]"
                        >
                            <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>

        </section>
    );
}
