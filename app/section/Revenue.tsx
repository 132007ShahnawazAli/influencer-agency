"use client";
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Revenue() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Pinned entrance — section stays put for ~1.2x viewport while content animates in
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 20%",
                end: "+=120%",
                pin: true,
                scrub: 1.2,
            },
        });

        // 1. The "3x" block fades in, moving up slightly
        tl.from(".rev-hero", {
            y: 24,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
        });

        // 2. Headline follows with the same soft upward motion
        tl.from(".rev-headline", {
            y: 18,
            opacity: 0,
            duration: 0.9,
            ease: "power2.out",
        }, "-=0.4");

        // 3. Hold at the end so it doesn't unpin immediately
        tl.to({}, { duration: 0.6 });

        // 4. Subtle ambient breathing on the background glow (independent of scroll)
        gsap.to(".rev-glow", {
            opacity: 0.75,
            scale: 1.06,
            duration: 3.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 1,
        });

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="py-24 relative flex flex-col items-center justify-center">
            {/* 3x Text with SVG Mask */}
            <div className="rev-hero relative flex justify-center items-center h-[240px] md:h-[300px] w-full max-w-lg mx-auto -mb-6 md:-mb-10">

                {/* Background Glow Behind 3x Text */}
                <div className="rev-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
                    <svg width="731" height="588" viewBox="0 0 731 588" fill="none" xmlns="http://www.w3.org/2000/svg" className="scale-[1.5] md:scale-100">
                        <g filter="url(#filter0_f_1439_371)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M357.007 264.088C386.805 264.841 402.874 272.606 422.932 278.236C441.32 283.398 465.15 287.992 466.87 294.929C468.663 302.162 451.604 308.636 431.763 313.858C411.457 319.203 386.213 323.289 357.007 323.846C325.526 324.446 287.965 323.527 270.082 316.939C252.94 310.625 277.356 302.586 278.51 294.929C279.574 287.866 261.347 280.479 276.47 274.537C293.457 267.863 325.804 263.3 357.007 264.088Z" fill="#E662FD" />
                        </g>
                        <defs>
                            <filter id="filter0_f_1439_371" x="0" y="0" width="731" height="588" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="132" result="effect1_foregroundBlur_1439_371" />
                            </filter>
                        </defs>
                    </svg>
                </div>

                <svg width="100%" height="100%" viewBox="-100 -150 350 350" className="overflow-visible relative z-10">
                    <defs>
                        {/* The Text Mask */}
                        <mask id="text-mask" x="-300" y="-300" width="1000" height="1000" maskUnits="userSpaceOnUse">
                            <text x="67" y="33.5" textAnchor="middle" dominantBaseline="middle" fontSize="180" fontWeight="400" fill="white" letterSpacing="-0.02em" style={{ fontFamily: "inherit" }}>
                                3x
                            </text>
                        </mask>

                        {/* Outer glow blur for the shadow behind the text */}
                        <filter id="glow-3x" x="-300" y="-300" width="1000" height="1000">
                            <feGaussianBlur stdDeviation="16" />
                        </filter>

                        {/* Third ellipse filter */}
                        <filter id="filter0_f_1439_368" x="-300" y="-300" width="1000" height="1000" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="27" result="effect1_foregroundBlur_1439_368" />
                        </filter>
                    </defs>

                    {/* Glowing shadow behind the text */}
                    <text x="67" y="33.5" textAnchor="middle" dominantBaseline="middle" fontSize="180" fontWeight="400" fill="#FEC0FF" opacity="0.3" filter="url(#glow-3x)" letterSpacing="-0.02em" style={{ fontFamily: "inherit" }}>
                        3x
                    </text>

                    {/* The masked ellipses forming the gradient */}
                    <g mask="url(#text-mask)">
                        {/* Ellipse 1 (Magenta) */}
                        <path filter="url(#filter0_f_1439_368)" d="M101.5 159C157.557 159 203 123.407 203 79.5C203 35.5934 157.557 0 101.5 0C45.4431 0 0 35.5934 0 79.5C0 123.407 45.4431 159 101.5 159Z" fill="#BF43C8" />

                        {/* Ellipse 2 (Purple) */}
                        <path filter="url(#filter0_f_1439_368)" d="M26.2578 79C79.001 79 121.758 40.7203 121.758 -6.5C121.758 -53.7203 79.001 -92 26.2578 -92C-26.4854 -92 -69.2422 -53.7203 -69.2422 -6.5C-69.2422 40.7203 -26.4854 79 26.2578 79Z" fill="#D582FC" />

                        {/* Ellipse 3 (Pink Glow) */}
                        <g filter="url(#filter0_f_1439_368)" style={{ mixBlendMode: "plus-lighter" }}>
                            <ellipse cx="107" cy="74" rx="53" ry="47" fill="#E09DE4" />
                        </g>
                    </g>
                </svg>
            </div>

            {/* Subtitle */}
            <h2
                className="rev-headline text-3xl md:text-4xl lg:text-[44px] leading-[1.15] font-medium text-center tracking-tight text-transparent bg-clip-text"
                style={{
                    backgroundImage: "linear-gradient(180deg, #D072FF 0%, #F5F0FF 49%, #B895FF 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                }}
            >
                More revenue through better<br className="hidden md:block" />
                creator systems
            </h2>
        </section>
    );
}
