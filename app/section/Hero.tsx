"use client"
import React, { useRef } from "react"
import Button from "../components/Button"
import VideoCard from "../components/VideoCard"

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

// Card data for the 3×3 grid
const videoCards = [
    { image: "/hero/1.png", avatar: "/madam.jpg", name: "Emma Rose", followers: "2.4M followers" },
    { image: "/hero/2.png", avatar: "/madam.jpg", name: "Jake Carter", followers: "1.1M followers" },
    { image: "/hero/3.png", avatar: "/madam.jpg", name: "Mia Chen", followers: "890K followers" },
    { image: "/hero/4.png", avatar: "/madam.jpg", name: "Liam Brooks", followers: "3.2M followers" },
    { image: "/hero/5.png", avatar: "/madam.jpg", name: "Sophia Lena", followers: "750K followers" },
    { image: "/hero/6.png", avatar: "/madam.jpg", name: "Noah Adams", followers: "1.8M followers" },
    { image: "/hero/7.png", avatar: "/madam.jpg", name: "Ava Turner", followers: "4.1M followers" },
    { image: "/hero/8.png", avatar: "/madam.jpg", name: "Ethan Hunt", followers: "560K followers" },
    { image: "/hero/9.png", avatar: "/madam.jpg", name: "Zoe Parker", followers: "2.0M followers" },
]

function Hero() {
    const container = useRef<HTMLDivElement>(null);
    const col1 = useRef<HTMLDivElement>(null);
    const col2 = useRef<HTMLDivElement>(null);
    const col3 = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // 1. Initial Entry Animations
        const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1.2 } });

        // Set initial offset percentages so columns have room to scroll
        gsap.set(col1.current, { yPercent: 0 });
        gsap.set(col2.current, { yPercent: -15 });
        gsap.set(col3.current, { yPercent: -5 });

        // Minimal small entry animation for columns
        tl.from(col1.current, { y: 100, opacity: 0 }, 0)
            .from(col2.current, { y: -100, opacity: 0 }, 0.1)
            .from(col3.current, { y: 80, opacity: 0 }, 0.2);

        // Hero content text entry
        tl.from(".hero-anim-item", {
            y: 30,
            opacity: 0,
            stagger: 0.1,
            duration: 1,
        }, 0.2);

        // 2. Scroll-triggered animation and pinning
        const scrollTl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top top",
                end: "+=150%", // Pin for 1.5x viewport height
                pin: true,
                scrub: 1, // Smooth scrub
            }
        });

        // Animate columns in correlation with scroll
        scrollTl.to(col1.current, { yPercent: -25, ease: "none" }, 0)
            .to(col2.current, { yPercent: 0, ease: "none" }, 0)
            .to(col3.current, { yPercent: -30, ease: "none" }, 0);

    }, { scope: container });

    return (
        /* overflow-hidden here is the single source of truth – kills horizontal scroll */
        <div ref={container} className="w-screen min-h-screen h-fit mb-20 bg-[#171819] relative overflow-x-clip">

            {/* ── Decorative SVG glows (pointer-events-none so they never block clicks) ── */}
            <svg className="overflow-visible absolute top-0 left-0 z-10 pointer-events-none" style={{ mixBlendMode: "plus-lighter" }} width="1152" height="602" viewBox="0 0 1152 602" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_148_54)">
                    <ellipse cx="286.5" cy="114.5" rx="531.5" ry="153.5" fill="#7B6EF3" />
                </g>
                <defs>
                    <filter id="filter0_f_148_54" x="-200%" y="-200%" width="500%" height="500%" filterUnits="objectBoundingBox" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="140" result="effect1_foregroundBlur_148_54" />
                    </filter>
                </defs>
            </svg>

            <svg className="overflow-visible absolute top-0 -right-4 z-10 pointer-events-none" style={{ mixBlendMode: "plus-lighter" }} width="1189" height="602" viewBox="0 0 1189 602" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_1329_1378)">
                    <ellipse cx="865.5" cy="114.5" rx="531.5" ry="153.5" fill="#F446EE" />
                </g>
                <defs>
                    <filter id="filter0_f_1329_1378" x="-200%" y="-200%" width="500%" height="500%" filterUnits="objectBoundingBox" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="140" result="effect1_foregroundBlur_1329_1378" />
                    </filter>
                </defs>
            </svg>

            <svg className="overflow-visible absolute z-0 top-0 left-1/2 -translate-x-1/2 pointer-events-none" style={{ mixBlendMode: "plus-lighter" }} width="1232" height="311" viewBox="0 0 1232 311" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_148_53)">
                    <ellipse cx="616" cy="36.5" rx="462" ry="120.5" fill="#AC97AC" />
                </g>
                <defs>
                    <filter id="filter0_f_148_53" x="-200%" y="-200%" width="500%" height="500%" filterUnits="objectBoundingBox" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="70" result="effect1_foregroundBlur_148_53" />
                    </filter>
                </defs>
            </svg>

            {/* ── Text content – flows normally, never touched by the grid ── */}
            <div className="relative z-30 container px-6 md:px-18  flex flex-col justify-center pt-50 pb-20 pointer-events-auto">
                <div className="hero-content max-w-5xl flex flex-col items-start gap-8">

                    {/* Badge */}
                    <div className="hero-anim-item inline-flex rounded-full p-px bg-[linear-gradient(90deg,#D69DFF_0%,#F4D0FF_55%,#D69DFF_100%)]">
                        <div className="flex items-center gap-2 rounded-full px-6 py-2 bg-[#5B53A5] shadow-[inset_0_0_13px_3px_rgba(226,160,255,0.47)]">
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g className="mix-blend-plus-lighter">
                                    <path d="M3.79502 10.9917C4.27995 9.78829 5.26758 8.86377 6.50025 8.86377C7.73291 8.86377 8.72058 9.78829 9.20549 10.9917C9.36002 11.3751 9.32858 11.7803 9.17737 12.0977C9.03135 12.404 8.72685 12.7049 8.29736 12.7049H4.70312C4.27368 12.7049 3.96916 12.404 3.82316 12.0977C3.67193 11.7803 3.64051 11.3751 3.79502 10.9917Z" fill="#E097FF" fillOpacity="0.8" />
                                    <path d="M11.8168 2.83879C11.6666 2.8179 11.4248 2.80688 11.0522 2.80688H10.3418C10.0154 2.80688 9.75084 2.54231 9.75084 2.21594C9.75084 1.88958 10.0154 1.625 10.3418 1.625H11.0887C11.4119 1.62496 11.7132 1.62491 11.955 1.6585C12.2187 1.69517 12.5272 1.78546 12.7564 2.0615C12.9892 2.34195 13.016 2.66401 12.995 2.93141C12.9762 3.17099 12.9014 3.49588 12.8318 3.79851L12.6009 4.80258C12.1962 6.56234 10.7217 7.85365 8.95197 8.11881C8.62921 8.16715 8.32837 7.94472 8.28004 7.62195C8.2317 7.29918 8.45412 6.99833 8.77688 6.94999C10.0929 6.7528 11.1593 5.79826 11.4491 4.53771L11.68 3.53364C11.7612 3.1803 11.8057 2.97995 11.8168 2.83879Z" fill="#E097FF" fillOpacity="0.8" />
                                    <path d="M1.184 2.83879C1.33429 2.8179 1.57602 2.80688 1.94867 2.80688H2.65909C2.98544 2.80688 3.25001 2.54231 3.25001 2.21594C3.25001 1.88958 2.98544 1.625 2.65909 1.625H1.91213C1.58896 1.62496 1.28757 1.62491 1.04586 1.6585C0.782134 1.69517 0.473589 1.78546 0.244459 2.0615C0.0116584 2.34195 -0.0152292 2.66401 0.00579049 2.93141C0.0246232 3.17099 0.0909012 3.45897 0.160553 3.76161L0.399936 4.80258C0.804601 6.56234 2.27918 7.85365 4.04883 8.11881C4.37159 8.16715 4.67244 7.94472 4.7208 7.62195C4.76915 7.29918 4.54671 6.99833 4.22395 6.94999C2.90794 6.7528 1.84159 5.79826 1.55172 4.53771L1.32083 3.53364C1.23958 3.1803 1.19509 2.97995 1.184 2.83879Z" fill="#E097FF" fillOpacity="0.8" />
                                    <path d="M4.80302 1.34851e-06H4.83845H8.19888C8.70306 -2.81984e-05 9.13419 -5.18631e-05 9.47841 0.0558981C9.85335 0.11683 10.1839 0.252284 10.4397 0.562379C10.6866 0.861688 10.7713 1.19754 10.7835 1.56998C10.7948 1.91365 10.7445 2.33117 10.6853 2.82169C10.4547 4.73591 9.94931 6.45617 9.25675 7.67929C8.57666 8.88031 7.6388 9.75047 6.50098 9.75047C5.3631 9.75047 4.42525 8.88031 3.74518 7.67929C3.05259 6.45617 2.54722 4.73591 2.31659 2.82169C2.25746 2.33117 2.20713 1.91365 2.21838 1.56998C2.23058 1.19754 2.31532 0.861688 2.56225 0.562379C2.81807 0.252284 3.14854 0.11683 3.52348 0.0558981C3.86775 -5.18631e-05 4.29889 -2.81984e-05 4.80302 1.34851e-06Z" fill="#E097FF" fillOpacity="0.8" />
                                </g>
                            </svg>
                            <p className="text-sm text-[#E097FF] mix-blend-plus-lighter">
                                Trusted by the World's Fastest-Growing Brands
                            </p>
                        </div>
                    </div>

                    {/* Main Heading */}
                    <h1 className="flex flex-col gap-4 text-5xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight">
                        <span className="hero-anim-item">We Build Brands Through</span>
                        <span className="hero-anim-item flex items-center gap-3">
                            the Power of
                            <span className="relative inline-flex items-center px-4 py-2 mix-blend-color-dodge rotate-2">
                                <span className="absolute inset-0 bg-[#7B6EF3]/45" />
                                <span className="absolute inset-0 border-2 border-[#D69DFF]" />
                                <span className="absolute -top-[3px] -left-[3px] w-[8px] h-[8px] rounded-full bg-[#D69DFF]" />
                                <span className="absolute -top-[3px] -right-[3px] w-[8px] h-[8px] rounded-full bg-[#D69DFF]" />
                                <span className="absolute -bottom-[3px] -left-[3px] w-[8px] h-[8px] rounded-full bg-[#D69DFF]" />
                                <span className="absolute -bottom-[3px] -right-[3px] w-[8px] h-[8px] rounded-full bg-[#D69DFF]" />
                                <span className="relative mix-blend-screen text-transparent bg-clip-text bg-[linear-gradient(90deg,#D59AFF_0%,#FFFFFF_54%,#D59AFF_100%)]">Influence.</span>
                            </span>
                        </span>
                    </h1>

                    {/* Subheading */}
                    <p className="hero-anim-item text-sm md:text-base text-gray-400 max-w-xl leading-relaxed">
                        We connect forward-thinking companies with the right creators to drive awareness, trust, and revenue at scale.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4 items-center pt-2">
                        <div className="hero-anim-item">
                            <Button
                            icon={
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.68667 1.41986L0 5.16653H3.68667V1.41986ZM3.952 1.41986V5.16653H9.024V7.59986L12.6707 4.6332C12.6613 3.81986 12.6913 3.1332 12.654 2.32653C12.5553 1.59986 11.796 1.34653 11.1633 1.41986H3.952ZM15.4 2.87986C14.8653 3.07653 14.4947 3.5432 14.0353 3.8732C12.3647 5.23986 10.714 6.61986 9.05667 7.99986C11.0733 9.72653 13.0833 11.4532 15.1 13.1732C15.912 13.6205 16.052 12.6305 15.9853 12.0799V3.4132C15.9852 3.33804 15.9697 3.26371 15.9398 3.19475C15.9099 3.12579 15.8663 3.06366 15.8116 3.01217C15.7568 2.96067 15.6921 2.9209 15.6215 2.89528C15.5508 2.86967 15.4757 2.85875 15.4007 2.8632L15.4 2.87986ZM0.0253333 5.4332V10.5665H3.712V5.4332H0.0253333ZM9.07667 10.8332H4.00533V14.5799C6.58133 14.5759 9.16333 14.5872 11.7253 14.5739C12.4053 14.5272 12.804 13.8272 12.704 13.1939V11.5205L9.05733 8.40053V10.8339L9.07667 10.8332ZM0.0253333 10.8332C0.0386667 11.7932 -0.002 12.7532 0.0473333 13.7065C0.155333 14.3385 0.819333 14.6599 1.412 14.5799H3.72133V10.8332H0.0253333Z" fill="currentColor" />
                                </svg>
                            }
                        >
                            Book a Call
                            </Button>
                        </div>
                        <div className="hero-anim-item">
                            <Button
                                variant="secondary"
                            iconPosition="right"
                            icon={
                                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.5313 0.530273L6.53125 6.53027L0.53125 12.5303" stroke="black" strokeWidth="1.5" strokeMiterlimit="16" />
                                </svg>
                            }
                        >
                            View Our Work
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Stats – bottom left of hero ── */}
            <div className="absolute bottom-10 left-0 z-30 container px-6 md:px-18 pointer-events-none">
                <div className="flex items-start gap-12">
                    {[
                        { value: "500M+", label: "Total Audience Reach" },
                        { value: "80+", label: "Brands Partnered" },
                        { value: "200+", label: "Campaigns Delivered" },
                    ].map((stat, i) => (
                        <div key={i} className="hero-anim-item flex flex-col gap-1">
                            <span className="text-4xl font-semibold text-white tracking-tight">{stat.value}</span>
                            <span className="text-sm font-medium text-gray-500">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── SVG mask definition – ellipse with gaussian blur ── */}
            <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                style={{ position: "absolute", width: 0, height: 0, overflow: "hidden", pointerEvents: "none" }}
            >
                <defs>
                    {/* Gaussian blur filter for soft ellipse edges */}
                    <filter id="hero-ellipse-blur" x="-15%" y="-15%" width="130%" height="130%">
                        <feGaussianBlur stdDeviation="50 0" />
                    </filter>
                    {/* Ellipse mask using the exact SVG provided, with blur applied */}
                    <mask id="hero-grid-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="760" height="960">
                        <ellipse
                            cx="380" cy="480"
                            rx="380" ry="480"
                            fill="white"
                            filter="url(#hero-ellipse-blur)"
                        />
                    </mask>
                </defs>
            </svg>

            {/* ── 3-column flex grid – top-0 right-0, masked by blurred ellipse ── */}
            <div
                className="hidden lg:block absolute top-0 right-0 z-20 pointer-events-none overflow-hidden"
                style={{
                    width: "760px",
                    height: "960px",
                    mask: "url(#hero-grid-mask)",
                    WebkitMask: "url(#hero-grid-mask)",
                }}
            >
                <div className="flex gap-3 pt-6 pr-4 justify-end">
                    {[0, 1, 2].map((colIndex) => {
                        const colRef = colIndex === 0 ? col1 : colIndex === 1 ? col2 : col3;
                        return (
                            <div
                                key={colIndex}
                                ref={colRef}
                                className="flex flex-col gap-3"
                            >
                                {[...videoCards.filter((_, i) => i % 3 === colIndex), ...videoCards.filter((_, i) => i % 3 === colIndex), ...videoCards.filter((_, i) => i % 3 === colIndex)]
                                    .map((card, i) => (
                                        <VideoCard
                                            key={i}
                                            image={card.image}
                                            avatar={card.avatar}
                                            name={card.name}
                                            followers={card.followers}
                                            style={{ pointerEvents: "auto" }}
                                        />
                                    ))}
                            </div>
                        );
                    })}
                </div>
            </div>

        </div>
    )
}

export default Hero
