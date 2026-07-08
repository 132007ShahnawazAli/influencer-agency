"use client";
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Logo from './Logo';

gsap.registerPlugin(ScrollTrigger);

const footerLinks = {
    References: [
        { name: "Home", href: "#" },
        { name: "About us", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "Customer stories", href: "#" },
        { name: "Contact us", href: "#" }
    ],
    Resources: [
        { name: "Blog", href: "#" },
        { name: "Documentation", href: "#" },
        { name: "Free mentorship", href: "#" },
        { name: "Community", href: "#" },
        { name: "Designer", href: "#" }
    ],
    Legal: [
        { name: "Terms of service", href: "#" },
        { name: "Privacy policy", href: "#" },
        { name: "Designer Agreement", href: "#" }
    ]
};

const SocialIcons = () => (
    <div className="footer-bottom-left flex items-center gap-6 text-[#999]">
        {/* YouTube */}
        <a href="#" className="hover:text-white transition-colors duration-300">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.896 0-7.605-.476c-.941-.262-1.684-1.037-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.104 4 12 4 12 4s5.896 0 7.605.476c.941.262 1.684 1.037 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z" />
            </svg>
        </a>
        {/* GitHub */}
        <a href="#" className="hover:text-white transition-colors duration-300">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
        </a>
        {/* X (Twitter) */}
        <a href="#" className="hover:text-white transition-colors duration-300">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
            </svg>
        </a>
        {/* Instagram */}
        <a href="#" className="hover:text-white transition-colors duration-300">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
        </a>
    </div>
);

export default function Footer() {
    const footerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: footerRef.current,
                start: "top 70%",
                toggleActions: "play none none none",
            },
        });

        // 1. Logo fades in from left
        tl.from(".footer-logo", {
            x: -16,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
        });

        // 2. Each link column staggers in from right
        tl.from(".footer-col", {
            x: 16,
            opacity: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power2.out",
        }, "-=0.5");

        // 3. Each link inside columns fades in with a tight stagger
        tl.from(".footer-link", {
            y: 8,
            opacity: 0,
            duration: 0.5,
            stagger: 0.04,
            ease: "power2.out",
        }, "-=0.4");

        // 4. Bottom divider line draws in from left
        tl.from(".footer-divider", {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 0.8,
            ease: "power3.out",
        }, "-=0.2");

        // 5. Social icons and copyright fade up together
        tl.from(".footer-bottom-left", {
            y: 10,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
        }, "-=0.3");

        tl.from(".footer-copyright", {
            y: 10,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
        }, "-=0.5");

    }, { scope: footerRef });

    return (
        <footer ref={footerRef} className="w-full bg-[#131415] border-t border-white/5 py-16 px-6 relative z-10">
            <div className="max-w-[1140px] mx-auto flex flex-col">

                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-16 md:gap-8">

                    {/* Logo */}
                    <div className="footer-logo flex flex-col">
                        <a href="#" className="flex items-center gap-3">
                            <Logo />
                            <span className="text-white text-[21px] font-medium tracking-tight">FocusLab</span>
                        </a>
                    </div>

                    {/* Links Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 lg:gap-32">
                        {Object.entries(footerLinks).map(([category, links]) => (
                            <div key={category} className="footer-col flex flex-col">
                                <h3 className="text-white font-medium mb-6 text-[15px]">{category}</h3>
                                <ul className="flex flex-col gap-4">
                                    {links.map((link) => (
                                        <li key={link.name}>
                                            <a
                                                href={link.href}
                                                className="footer-link text-[#999] hover:text-white transition-colors duration-300 text-[14px]"
                                            >
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Divider */}
                <div className="footer-divider w-full h-px bg-white/10 mb-10" />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <SocialIcons />
                    <p className="footer-copyright text-[#666] text-[13px]">
                        Copyright © FocusLab 2026 | FocusLab is created and owned by Average
                    </p>
                </div>

            </div>
        </footer>
    );
}
