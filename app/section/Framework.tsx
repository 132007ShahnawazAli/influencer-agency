"use client";
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
    { num: "01", title: "Brand Brief", img: "/frameworks/01.png" },
    { num: "02", title: "Creator Discovery", img: "/frameworks/02.png" },
    { num: "03", title: "Campaign Launch", img: "/frameworks/03.png" },
    { num: "04", title: "Optimization", img: "/frameworks/04.png" },
    { num: "05", title: "Partnerships", img: "/frameworks/05.png" },
    { num: "06", title: "Revenue", img: "/frameworks/06.png" },
];

export default function Framework() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // --- HEADER: fade up on scroll enter ---
        gsap.from(".fw-header > *", {
            y: 18,
            opacity: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".fw-header",
                start: "top 85%",
                toggleActions: "play none none none",
            },
        });

        // --- STEP ITEMS: staggered left-to-right reveal ---
        gsap.from(".fw-step-item", {
            x: -12,
            opacity: 0,
            duration: 0.75,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".fw-steps-grid",
                start: "top 60%",
                toggleActions: "play none none none",
            },
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="py-24 relative">
            <div className="max-w-7xl px-8 mx-auto relative">
                {/* Section Header */}
                <div className="fw-header flex flex-col items-center text-center gap-4 max-w-4xl mx-auto">
                    <p className="text-sm uppercase font-semibold text-[#FE5AE8] mb-4">
                        Our Framework
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight leading-[1.15]">
                        From Brief To Revenue,<br />
                        Every Stage Is Built To Compound Results.
                    </h2>
                    <p className="text-[#999999] text-lg leading-relaxed max-w-2xl mt-4">
                        Most campaigns stop at publishing content. We continue through<br className="hidden md:block" />
                        optimization, reporting and long-term creator partnerships.
                    </p>
                </div>

                {/* Steps Visual Grid */}
                <div className="relative mt-24">
                    {/* Background SVG Glows (Masked) */}
                    <div className="hidden lg:block absolute left-1/2 bottom-[5.5rem] -translate-x-1/2 translate-y-[0.5px] z-0 pointer-events-none">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                            <svg className="absolute" style={{ overflow: "visible" }} width="1530" height="710" viewBox="0 0 1530 710" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <mask id="glow-mask" maskUnits="userSpaceOnUse" x="-500" y="-500" width="2530" height="1710">
                                        <g filter="url(#mask-blur)">
                                            <ellipse cx="765" cy="355" rx="545" ry="135" fill="#D9D9D9" />
                                        </g>
                                    </mask>
                                    <filter id="mask-blur" x="-500" y="-500" width="2530" height="1710" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                        <feGaussianBlur stdDeviation="110" result="effect1_foregroundBlur_1952_30" />
                                    </filter>

                                    <filter id="glow-purple" x="-500" y="-500" width="2530" height="1710" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                        <feGaussianBlur stdDeviation="167" />
                                    </filter>
                                    <filter id="glow-pink" x="-500" y="-500" width="2530" height="1710" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                        <feGaussianBlur stdDeviation="240" />
                                    </filter>
                                    <filter id="glow-magenta" x="-500" y="-500" width="2530" height="1710" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                        <feGaussianBlur stdDeviation="167" />
                                    </filter>
                                </defs>

                                <g mask="url(#glow-mask)" style={{ mixBlendMode: "plus-lighter" }}>
                                    <g style={{ mixBlendMode: "plus-lighter" }}>
                                        <ellipse cx="350" cy="355" rx="531.5" ry="153.5" fill="#9350FF" filter="url(#glow-purple)" />
                                    </g>
                                    <g style={{ mixBlendMode: "plus-lighter" }}>
                                        <ellipse cx="857.5" cy="281" rx="375" ry="120.5" fill="#FEC0FF" filter="url(#glow-pink)" />
                                    </g>
                                    <g style={{ mixBlendMode: "plus-lighter" }}>
                                        <ellipse cx="1180" cy="355" rx="531.5" ry="153.5" fill="#FB1CFF" filter="url(#glow-magenta)" />
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>

                    {/* Horizontal gradient line — fully static */}
                    <div
                        className="hidden lg:block absolute left-0 right-0 bottom-[5.5rem] h-[1px]"
                        style={{
                            background: "linear-gradient(90deg, rgba(161,114,255,0) 0%, rgba(161,114,255,0.8) 20%, rgba(161,114,255,1) 50%, rgba(161,114,255,0.8) 80%, rgba(161,114,255,0) 100%)",
                            mixBlendMode: "plus-lighter",
                            zIndex: 2,
                        }}
                    />

                    {/* "Most campaigns end here" callout */}
                    <div className="hidden lg:block absolute left-1/2 bottom-[5.5rem] -translate-x-1/2 pointer-events-none" style={{ zIndex: 3 }}>
                        <div className="w-2.5 h-2.5 bg-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                        <svg className="absolute top-1/2 left-1/2 overflow-visible">
                            <path d="M 0 0 C 40 0, 40 75, 100 75" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="4 4" fill="none" opacity="0.5" />
                        </svg>
                        <div className="absolute top-[75px] left-[100px] bg-white rounded-full px-3.5 py-1.5 flex items-center gap-2 whitespace-nowrap -translate-y-1/2 pointer-events-auto shadow-lg">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1424_329)">
                                    <path d="M9.86732 3.07524L14.3347 10.5159C14.9767 11.5846 14.6613 12.9906 13.63 13.6559C13.284 13.8805 12.8804 14 12.468 13.9999H3.53265C2.31865 13.9999 1.33398 12.9799 1.33398 11.7206C1.33398 11.2946 1.44932 10.8779 1.66598 10.5159L6.13398 3.07524C6.77532 2.00657 8.13132 1.67924 9.16265 2.34457C9.44798 2.52857 9.68932 2.77857 9.86732 3.07524ZM8.00065 11.3332C8.17746 11.3332 8.34703 11.263 8.47206 11.138C8.59708 11.013 8.66732 10.8434 8.66732 10.6666C8.66732 10.4898 8.59708 10.3202 8.47206 10.1952C8.34703 10.0701 8.17746 9.99991 8.00065 9.99991C7.82384 9.99991 7.65427 10.0701 7.52925 10.1952C7.40422 10.3202 7.33398 10.4898 7.33398 10.6666C7.33398 10.8434 7.40422 11.013 7.52925 11.138C7.65427 11.263 7.82384 11.3332 8.00065 11.3332ZM8.00065 5.33324C7.82384 5.33324 7.65427 5.40348 7.52925 5.5285C7.40422 5.65353 7.33398 5.82309 7.33398 5.99991V8.66657C7.33398 8.84338 7.40422 9.01295 7.52925 9.13798C7.65427 9.263 7.82384 9.33324 8.00065 9.33324C8.17746 9.33324 8.34703 9.263 8.47206 9.13798C8.59708 9.01295 8.66732 8.84338 8.66732 8.66657V5.99991C8.66732 5.82309 8.59708 5.65353 8.47206 5.5285C8.34703 5.40348 8.17746 5.33324 8.00065 5.33324Z" fill="#606060" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1424_329">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span className="text-[#333] font-medium text-sm">Most campaigns end here</span>
                        </div>
                    </div>

                    {/* 6-step grid */}
                    <div className="fw-steps-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-4 relative" style={{ zIndex: 4 }}>
                        {steps.map((step, i) => (
                            <div key={i} className="fw-step-item flex flex-col items-center text-center h-full">
                                <span className="text-[#FF8AF5] text-[15px] font-medium mb-1">{step.num}</span>
                                <span className="text-white text-[17px] font-medium tracking-tight">{step.title}</span>
                                <div className="flex flex-col items-center mt-3 mb-2 flex-grow">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#FFB1F8]" style={{ mixBlendMode: "plus-lighter" }} />
                                    <div
                                        className="w-[1.5px] h-full min-h-[3rem] mt-1"
                                        style={{
                                            background: "linear-gradient(180deg, #FFB1F8 0%, rgba(214,157,255,0) 62%)",
                                            maskImage: "linear-gradient(to bottom, black 1.5px, transparent 1.5px)",
                                            WebkitMaskImage: "linear-gradient(to bottom, black 1.5px, transparent 1.5px)",
                                            maskSize: "100% 4px",
                                            WebkitMaskSize: "100% 4px",
                                            mixBlendMode: "plus-lighter"
                                        }}
                                    />
                                </div>
                                <div className="w-32 h-32 md:w-36 md:h-36 relative shrink-0">
                                    <img src={step.img} alt={step.title} className="absolute inset-0 w-full h-full object-contain pointer-events-none" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
