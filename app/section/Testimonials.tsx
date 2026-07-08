"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
    {
        name: "Courtney Henry",
        role: "CEO, Company",
        quote: "We've worked with multiple influencer agencies before, but none matched the level of communication, transparency, and campaign performance we experienced throughout this partnership.",
        avatar: "https://i.pravatar.cc/150?u=courtney"
    }
];

export default function Testimonials() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%",
                toggleActions: "play none none none",
            },
        });

        // 1. Header label → heading → subtext cascade
        tl.from(".tm-header > *", {
            y: 12,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
        });

        // 2. Back cards drift up — depth reveal
        tl.from(".tm-back-2", {
            y: 18,
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
        }, "-=0.2");

        tl.from(".tm-back-1", {
            y: 12,
            opacity: 0,
            duration: 0.35,
            ease: "power2.out",
        }, "-=0.3");

        // 3. Main card — the centrepiece
        tl.from(".tm-main-card", {
            y: 20,
            opacity: 0,
            duration: 0.5,
            ease: "power3.out",
        }, "-=0.25");

        // 4. Profile and quote stagger inside the card
        tl.from(".tm-profile", {
            y: 8,
            opacity: 0,
            duration: 0.35,
            ease: "power2.out",
        }, "-=0.3");

        tl.from(".tm-quote", {
            y: 8,
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
        }, "-=0.25");

        // 5. Nav arrows fade in last
        tl.from(".tm-arrow", {
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power1.out",
        }, "-=0.3");

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="py-24 px-6 relative w-full overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col items-center">

                {/* Header */}
                <div className="tm-header text-center mb-16 flex flex-col items-center">
                    <p className="text-sm uppercase font-semibold text-[#FE5AE8] mb-4">
                        TESTIMONIALS
                    </p>
                    <h2 className="text-4xl md:text-5xl font-medium text-[#F1F2F4] mb-6 leading-15 tracking-tight">
                        Trusted By Ambitious Creators
                    </h2>
                    <p className="text-[#F1F2F4]/80 text-base md:text-lg max-w-2xl leading-relaxed">
                        Real partnerships, authentic content, and measurable growth driven<br className="hidden md:block" /> by creator-led campaigns.
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative w-full max-w-3xl mx-auto flex items-center justify-center mt-12">

                    {/* Left Arrow */}
                    <button className="tm-arrow absolute left-0 md:-left-16 z-30 w-12 h-12 rounded-full bg-linear-to-br from-[#382643] to-[#171819] flex items-center justify-center border border-white/10 hover:scale-105 transition-transform shadow-xl">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 18L9 12L15 6" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    {/* Cards Stack */}
                    <div className="relative w-full max-w-[606px] mx-8 aspect-606/280 flex items-center justify-center">

                        {/* Back Card 2 */}
                        <div className="tm-back-2 absolute -left-8 -right-8 top-6 bottom-6 bg-[#171819] border border-white/5 rounded-3xl z-0 shadow-lg transition-all duration-500"></div>

                        {/* Back Card 1 */}
                        <div className="tm-back-1 absolute -left-4 -right-4 top-3 bottom-3 bg-[#1A1A1A] border border-white/10 rounded-3xl z-10 shadow-2xl transition-all duration-500"></div>

                        {/* Main Front Card */}
                        <div className="tm-main-card relative w-full h-full rounded-[14px] z-20 overflow-hidden shadow-2xl p-6 md:p-8 flex flex-col justify-center border border-white/10">
                            {/* Background Image */}
                            <div className="absolute inset-0 w-full h-full">
                                <Image
                                    src="/testimonial-bg.png"
                                    alt="Testimonial Background"
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 flex flex-col h-full">
                                {/* Profile */}
                                <div className="tm-profile flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 rounded-full overflow-hidden border border-white/20 relative">
                                        <Image src={testimonials[0].avatar} alt={testimonials[0].name} fill className="object-cover" unoptimized />
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="text-white text-lg font-medium tracking-tight leading-none mb-1.5">{testimonials[0].name}</h4>
                                        <span className="text-[#FFC4F9] text-[13px]">{testimonials[0].role}</span>
                                    </div>
                                </div>

                                {/* Quote */}
                                <p className="tm-quote text-[#F1F2F4]/80 text-xl leading-[1.6] font-medium tracking-tight">
                                    {testimonials[0].quote}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Arrow */}
                    <button className="tm-arrow absolute right-0 md:-right-16 z-30 w-12 h-12 rounded-full bg-linear-to-br from-[#382643] to-[#171819] flex items-center justify-center border border-white/10 hover:scale-105 transition-transform shadow-xl">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 18L15 12L9 6" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

            </div>
        </section>
    );
}
