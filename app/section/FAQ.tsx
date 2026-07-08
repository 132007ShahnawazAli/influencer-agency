"use client";
import React, { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
    {
        question: "What is Focuslabs?",
        answer: "Focuslabs is a premier influencer marketing agency dedicated to building authentic creator-led campaigns that drive measurable growth for your brand."
    },
    {
        question: "How do you select creators for a campaign?",
        answer: "We use a data-driven approach to identify creators whose audience demographics, engagement rates, and content style perfectly align with your brand's unique goals and values."
    },
    {
        question: "Do you work with micro and macro influencers?",
        answer: "Yes, we work across all tiers of creators. From micro-influencers who drive niche engagement to macro-influencers who provide massive scale, we build the right mix for your campaign."
    },
    {
        question: "Do you support long-term creator partnerships?",
        answer: "Absolutely. We believe that long-term ambassadorships often yield the highest ROI by building genuine trust and repeated exposure with the creator's audience over time."
    },
    {
        question: "How long does it take to launch a campaign?",
        answer: "Depending on the scope, most campaigns launch within 2 to 4 weeks. This includes creator outreach, negotiation, content ideation, production, and final approvals."
    },
    {
        question: "Can we work with you if we've never done influencer marketing before?",
        answer: "Of course! We handle the entire process end-to-end, making it completely seamless for brands taking their first steps into the creator economy."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 50%",
                toggleActions: "play none none none",
            },
        });

        // 1. Left column: label → heading → subtext stagger in
        tl.from(".faq-left > *", {
            y: 16,
            opacity: 0,
            duration: 0.8,
            stagger: 0.14,
            ease: "power2.out",
        });

        // 2. FAQ rows stagger in from the top, one after another
        tl.from(".faq-row", {
            y: 14,
            opacity: 0,
            duration: 0.6,
            stagger: 0.09,
            ease: "power2.out",
        }, "-=0.4");

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="py-24 md:py-32 px-50 relative w-full">
            <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                {/* Left Side: Title */}
                <div className="faq-left flex flex-col pt-2">
                    <p className="text-sm uppercase font-semibold text-[#FE5AE8] mb-5">
                        YOUR QUESTIONS
                    </p>
                    <h2 className="text-4xl md:text-5xl lg:text-[52px] font-medium text-[#F1F2F4] mb-6 leading-15 tracking-tight">
                        Frequently Asked<br />
                        Questions
                    </h2>
                    <p className="text-[#F1F2F4]/80 text-[15px]">
                        Need help? Find what you need.
                    </p>
                </div>

                {/* Right Side: Accordion */}
                <div className="flex flex-col">
                    <div className="flex flex-col w-full border-t border-white/5">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div key={index} className="faq-row flex flex-col border-b border-white/5">
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full py-7 flex items-center justify-between text-left focus:outline-none group"
                                    >
                                        <span className={`text-lg md:text-[19px] pr-8 tracking-tight transition-colors duration-300 ${isOpen ? 'text-white font-medium' : 'text-[#E0E0E0] font-normal group-hover:text-white'}`}>
                                            {faq.question}
                                        </span>
                                        <div className="relative w-4 h-4 flex items-center justify-center shrink-0">
                                            {/* Horizontal line */}
                                            <span className={`absolute w-[14px] h-[1.5px] bg-[#666] transition-colors duration-300 ${isOpen ? 'bg-white' : 'group-hover:bg-white/70'}`}></span>
                                            {/* Vertical line */}
                                            <span className={`absolute w-[1.5px] h-[14px] bg-[#666] transition-all duration-300 ${isOpen ? 'rotate-90 scale-y-0 bg-white' : 'group-hover:bg-white/70'}`}></span>
                                        </div>
                                    </button>

                                    {/* Answer Dropdown */}
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 pb-7 opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <p className="text-[#999] text-[15.5px] leading-relaxed pr-8 md:pr-12">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}
