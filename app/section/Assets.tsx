"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const data = [
    {
        icon: "/assets_icons/ugc_videos.svg",
        title: "UGC Videos",
        description: "Authentic creator videos that connect, engage, and convert."
    },
    {
        icon: "/assets_icons/product_shots.svg",
        title: "Product Shots",
        description: "High-quality visuals that highlight value and build trust."
    },
    {
        icon: "/assets_icons/creator_ads.svg",
        title: "Creator Ads",
        description: "Paid ad creatives built with performance and scale in mind."
    },
    {
        icon: "/assets_icons/thumbnails.svg",
        title: "Thumbnails",
        description: "Eye-catching frames designed to stop the scroll and drive clicks."
    },
    {
        icon: "/assets_icons/custom_scripts.svg",
        title: "Custom Scripts",
        description: "Structured narratives that guide viewers from curiosity to action."
    },
    {
        icon: "/assets_icons/creative_direction.svg",
        title: "Creative Direction",
        description: "Strategic concepts designed for attention and conversion."
    }
];

export default function Assets() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Set initial states
        gsap.set(".assets-glow", { opacity: 0 });
        gsap.set(".assets-header > *", { y: 20, opacity: 0 });
        gsap.set(".assets-item", { y: 30, opacity: 0 });

        // Single pinned timeline — section locks while everything animates in on scroll
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "+=100%",
                pin: true,
                scrub: 1.2,
            },
        });

        // 1. Background glow fades in
        tl.to(".assets-glow", {
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
        });

        // 2. Header cascades in: label → heading → description
        tl.to(".assets-header > *", {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.2,
            ease: "power2.out",
        }, "-=0.2");

        // 3. Row 1: all 3 items stagger in
        tl.to(".assets-row-1 .assets-item", {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.18,
            ease: "power3.out",
        }, "-=0.1");

        // 4. Row 2: all 3 items stagger in after a beat
        tl.to(".assets-row-2 .assets-item", {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.18,
            ease: "power3.out",
        }, "-=0.1");

        // 5. Hold at the end before unpinning
        tl.to({}, { duration: 0.5 });

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="py-24 px-6 relative w-full overflow-hidden">
            {/* Background Glow — fades in on scroll, stays static */}
            <div className="assets-glow absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
                <svg width="1440" height="1210" viewBox="0 0 1440 1210" fill="none" xmlns="http://www.w3.org/2000/svg" className="min-w-[1440px]">
                    <g filter="url(#filter0_f_1969_714)">
                        <ellipse cx="720" cy="605" rx="314.5" ry="161" fill="#57134A" />
                    </g>
                    <defs>
                        <filter id="filter0_f_1969_714" x="-38.5" y="0" width="1517" height="1210" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="222" result="effect1_foregroundBlur_1969_714" />
                        </filter>
                    </defs>
                </svg>
            </div>

            <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">

                {/* Header */}
                <div className="assets-header text-center mb-20 flex flex-col items-center">
                    <p className="text-sm uppercase font-semibold text-[#FE5AE8] mb-5">
                        WHAT WE ACTUALLY DELIVER
                    </p>
                    <h2 className="text-4xl md:text-5xl font-medium text-[#F1F2F4] mb-6 leading-15 tracking-tight">
                        The Assets Behind<br className="hidden md:block" />
                        Every High-Performing Campaign.
                    </h2>
                    <p className="text-[#F1F2F4]/80 text-base md:text-[17px] max-w-2xl leading-relaxed">
                        The videos, creatives, and content systems that transform creator<br className="hidden md:block" /> partnerships into measurable growth.
                    </p>
                </div>

                {/* Grid — split into two logical rows for separate scroll triggers */}
                <div className="w-full max-w-4xl flex flex-col gap-y-20">
                    {/* Row 1 */}
                    <div className="assets-row-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-20">
                        {data.slice(0, 3).map((item, index) => (
                            <div
                                key={index}
                                className="assets-item group flex flex-col items-start text-left cursor-default"
                            >
                                <div className="mb-8 h-12 flex items-end transition-transform duration-300 ease-out group-hover:translate-y-[-3px]">
                                    <Image
                                        src={item.icon}
                                        alt={item.title}
                                        width={38}
                                        height={38}
                                        className="object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                                        style={{
                                            filter: "drop-shadow(0 0 0px rgba(254,90,232,0))",
                                            transition: "filter 0.3s ease, opacity 0.3s ease",
                                        }}
                                        onMouseEnter={(e) => {
                                            (e.currentTarget as HTMLImageElement).style.filter = "drop-shadow(0 0 8px rgba(254,90,232,0.6))";
                                        }}
                                        onMouseLeave={(e) => {
                                            (e.currentTarget as HTMLImageElement).style.filter = "drop-shadow(0 0 0px rgba(254,90,232,0))";
                                        }}
                                    />
                                </div>
                                <h3 className="text-white/85 text-xl font-semibold mb-3 tracking-tight transition-colors duration-300 group-hover:text-white">{item.title}</h3>
                                <p className="text-[#F1F2F4]/70 text-base leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Row 2 */}
                    <div className="assets-row-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-20">
                        {data.slice(3).map((item, index) => (
                            <div
                                key={index}
                                className="assets-item group flex flex-col items-start text-left cursor-default"
                            >
                                <div className="mb-8 h-12 flex items-end transition-transform duration-300 ease-out group-hover:translate-y-[-3px]">
                                    <Image
                                        src={item.icon}
                                        alt={item.title}
                                        width={38}
                                        height={38}
                                        className="object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                                        style={{
                                            filter: "drop-shadow(0 0 0px rgba(254,90,232,0))",
                                            transition: "filter 0.3s ease, opacity 0.3s ease",
                                        }}
                                        onMouseEnter={(e) => {
                                            (e.currentTarget as HTMLImageElement).style.filter = "drop-shadow(0 0 8px rgba(254,90,232,0.6))";
                                        }}
                                        onMouseLeave={(e) => {
                                            (e.currentTarget as HTMLImageElement).style.filter = "drop-shadow(0 0 0px rgba(254,90,232,0))";
                                        }}
                                    />
                                </div>
                                <h3 className="text-white/85 text-xl font-semibold mb-3 tracking-tight transition-colors duration-300 group-hover:text-white">{item.title}</h3>
                                <p className="text-[#F1F2F4]/70 text-base leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
