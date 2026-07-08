"use client"
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
    const container = useRef(null);

    useGSAP(() => {
        // 1. Title fades in normally when it enters the viewport
        gsap.from(".service-title", {
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            clearProps: "all"
        });

        // Row 1 cards animate when Row 1 enters the viewport
        gsap.from(".services-row-1 .service-card", {
            scrollTrigger: {
                trigger: ".services-row-1",
                start: "top 70%",
                toggleActions: "play none none none",
            },
            y: 50,
            opacity: 0,
            duration: 0.9,
            stagger: 0.15,
            ease: "power3.out",
            clearProps: "all"
        });

        // Row 2 cards animate separately when Row 2 enters the viewport
        gsap.from(".services-row-2 .service-card", {
            scrollTrigger: {
                trigger: ".services-row-2",
                start: "top 60%",
                toggleActions: "play none none none",
            },
            y: 50,
            opacity: 0,
            duration: 0.9,
            stagger: 0.15,
            ease: "power3.out",
            clearProps: "all"
        });

    }, { scope: container });

    return (
        <section ref={container} className="py-24">
            <div className="max-w-7xl px-8 mx-auto">
                <div className="flex flex-col items-start gap-4 ">
                    <p className="service-title text-sm uppercase font-semibold text-[#FE5AE8]">
                        How We Drive Growth
                    </p>
                    <h2 className="service-title text-3xl md:text-4xl lg:text-5xl font-medium text-[#F1F2F4] tracking-tight leading-15">
                        A Proven System For Building <br /> Influencer Campaigns That Convert.
                    </h2>
                </div>

                {/* ── Services Grid ── */}
                <div className="services-grid flex flex-col gap-4 mt-16">
                    {/* Row 1 */}
                    <div className="services-row-1 flex flex-col md:flex-row gap-4">
                        <div className="service-card bg-[#131416] rounded-[10px] w-full relative overflow-hidden aspect-656/400 md:flex-656">
                            <img src="/bento/card1.png" alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
                            <div className="absolute bottom-6 left-8 right-8 text-lg">
                                <span className="text-white font-medium tracking-tight">Influencer Discovery. </span>
                                <span className="text-[#999999]">Finding the perfect creator<br />among thousands.</span>
                            </div>
                        </div>
                        <div className="service-card bg-[#131416] rounded-[10px] w-full relative overflow-hidden aspect-443/400 md:flex-443">
                            <img src="/bento/card2.png" alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
                            <div className="absolute bottom-6 left-8 right-8 text-lg">
                                <span className="text-white font-medium tracking-tight">Campaign Management. </span>
                                <span className="text-[#999999]">Managing multiple<br />creators and deliverables.</span>
                            </div>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="services-row-2 flex flex-col md:flex-row gap-4">
                        {/* Left large box: 564x402 */}
                        <div className="service-card bg-[#131416] rounded-[10px] w-full relative overflow-hidden aspect-564/402 md:flex-564">
                            <img src="/bento/card3.png" alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
                            <div className="absolute bottom-6 left-8 right-8 text-lg">
                                <span className="text-white font-medium tracking-tight">UGC Content Creation. </span>
                                <span className="text-[#999999]">Creators producing content<br />for brands.</span>
                            </div>
                        </div>

                        {/* Right stacked column: remaining width (~535px) */}
                        <div className="flex flex-col gap-4 w-full md:flex-[0_0_535px]">
                            {/* Top right box (535x193 on mobile, fluid flex on desktop) */}
                            <div className="service-card bg-[#131416] rounded-[10px] flex-1 w-full relative overflow-hidden aspect-535/193 md:aspect-auto">
                                <img src="/bento/card4.png" alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
                                <div className="absolute inset-0 flex flex-col justify-center px-8">
                                    <div className="flex items-center gap-3 mb-3">
                                        <svg width="28" height="28" viewBox="22 18 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M37.0352 20.4837C36.8812 20.1755 36.5607 19.9864 36.2166 20.0008C35.8725 20.0151 35.5689 20.2301 35.4409 20.55C34.9072 21.885 33.7077 23.6612 32.0082 24.5919C31.175 25.0481 30.2246 25.301 29.1533 25.212C28.0783 25.1227 26.8229 24.684 25.3939 23.663C25.1326 23.4763 24.7901 23.4478 24.5017 23.5888C24.2132 23.7299 24.0251 24.0177 24.0118 24.3386C23.8577 28.0372 25.2286 33.0057 27.3927 37.0389C28.4792 39.0638 29.7917 40.9031 31.262 42.2474C32.7267 43.5869 34.4224 44.5 36.253 44.5C38.0861 44.5 39.7654 43.5846 41.2092 42.2427C42.6573 40.8966 43.942 39.0565 45.0095 37.0335C47.1378 32.9993 48.4998 28.0471 48.5 24.3751C48.5 24.0473 48.317 23.747 48.0256 23.597C47.7344 23.447 47.3837 23.4725 47.117 23.663C45.6725 24.6954 44.4412 25.1695 43.4045 25.2976C42.3785 25.4245 41.4914 25.2192 40.7087 24.8048C39.0994 23.9528 37.8894 22.1926 37.0352 20.4837ZM41.2141 30.4723C41.3271 30.5506 41.4136 30.6612 41.4617 30.7894C41.5096 30.918 41.5166 31.0582 41.4818 31.1909C41.447 31.3236 41.3719 31.4425 41.2667 31.5315L38.927 33.4553C38.8921 33.4841 38.8668 33.5226 38.8544 33.5659C38.8419 33.6092 38.8429 33.6552 38.8573 33.6979L39.8384 36.6177C39.8837 36.7526 39.8846 36.8985 39.841 37.0342C39.7973 37.1696 39.7111 37.2879 39.595 37.3717C39.479 37.4554 39.3391 37.5004 39.1956 37.5C39.0521 37.4997 38.9125 37.454 38.7969 37.3696L36.3897 35.6186C36.3511 35.5906 36.3045 35.5754 36.2566 35.5754C36.2087 35.5754 36.1621 35.5906 36.1235 35.6186L33.7154 37.37C33.5998 37.4542 33.4602 37.4995 33.3168 37.4997C33.1734 37.5 33.0337 37.4549 32.9179 37.371C32.802 37.2872 32.716 37.1691 32.6723 37.0336C32.6287 36.8982 32.6296 36.7526 32.6749 36.6177L33.656 33.6997C33.6703 33.657 33.6713 33.611 33.6589 33.5677C33.6464 33.5244 33.6211 33.4859 33.5861 33.4571L31.251 31.536C31.1445 31.4477 31.068 31.329 31.0319 31.196C30.9958 31.0631 31.0018 30.9223 31.0493 30.7929C31.0966 30.6635 31.1831 30.5517 31.2968 30.4727C31.4105 30.3938 31.546 30.3515 31.6848 30.3516H34.4276C34.4742 30.3515 34.5196 30.3371 34.5576 30.3104C34.5956 30.2837 34.6243 30.2459 34.6397 30.2024L35.6217 27.4426L35.624 27.4355C35.6722 27.3076 35.7586 27.1973 35.8717 27.1195C35.9848 27.0417 36.1192 27 36.2568 27C36.3945 27 36.5289 27.0417 36.642 27.1195C36.7551 27.1973 36.8415 27.3076 36.8897 27.4355L37.874 30.2024C37.8894 30.246 37.9182 30.2838 37.9563 30.3105C37.9943 30.3373 38.0399 30.3516 38.0865 30.3516H40.8284C40.9664 30.352 41.1008 30.3941 41.2141 30.4723Z" fill="url(#paint0_linear_1050_7782)" />
                                            </g>
                                            <defs>
                                                <linearGradient id="paint0_linear_1050_7782" x1="36.25" y1="20" x2="36.25" y2="44.5" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#FF9AE4" />
                                                    <stop offset="1" stopColor="#F818E5" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <span className="text-white font-medium tracking-tight text-lg">Brand Ambassador Programs</span>
                                    </div>
                                    <p className="text-[#999999] text-lg leading-relaxed max-w-[90%]">
                                        Turning creators into authentic brand advocates<br className="hidden md:block" />
                                        through strategic, lasting partnerships and<br className="hidden md:block" />
                                        collaborations.
                                    </p>
                                </div>
                            </div>
                            {/* Bottom right box (535x193 on mobile, fluid flex on desktop) */}
                            <div className="service-card bg-[#131416] rounded-[10px] flex-1 w-full relative overflow-hidden aspect-535/193 md:aspect-auto">
                                <div className="absolute inset-0 flex flex-col justify-center px-8">
                                    <div className="flex items-center gap-3 mb-3">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M18.8441 14.3645L19.125 14.5469L20.5548 15.5329C21.6915 16.3168 22.4009 17.5756 22.4904 18.9429L22.5 19.2375V19.6872C22.5 21.1666 21.3577 22.3794 19.9071 22.4916L19.6872 22.5H11.8128C10.3333 22.5 9.1206 21.3577 9.00846 19.9071L9 19.6872V19.2375C9 17.8566 9.63354 16.5579 10.7083 15.708L10.9453 15.5329L12.375 14.5469C14.3145 13.2094 16.8503 13.1486 18.8441 14.3645ZM11.344 11.3645L11.625 11.5469L13.0087 12.499C12.5299 12.6871 12.0659 12.9264 11.625 13.2168L9.52484 14.6C8.26085 15.4324 7.5 16.8446 7.5 18.358V19.2168C7.5 19.312 7.50407 19.4065 7.51203 19.4997L4.31279 19.5C2.83331 19.5 1.6206 18.3577 1.50846 16.9071L1.5 16.6872V16.2375C1.5 14.8565 2.13354 13.558 3.20827 12.708L3.44526 12.5329L4.875 11.5469C6.81449 10.2094 9.3503 10.1486 11.344 11.3645ZM15.75 4.5C17.8211 4.5 19.5 6.17894 19.5 8.25C19.5 10.3211 17.8211 12 15.75 12C13.6789 12 12 10.3211 12 8.25C12 6.17894 13.6789 4.5 15.75 4.5ZM8.25 1.5C10.3211 1.5 12 3.17894 12 5.25C12 7.32106 10.3211 9 8.25 9C6.17894 9 4.5 7.32106 4.5 5.25C4.5 3.17894 6.17894 1.5 8.25 1.5Z" fill="url(#paint0_linear_1050_7788)" />
                                            <defs>
                                                <linearGradient id="paint0_linear_1050_7788" x1="12" y1="1.5" x2="12" y2="22.5" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#FF9AE4" />
                                                    <stop offset="1" stopColor="#F818E5" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <span className="text-white font-medium tracking-tight text-lg">24/7 Dedicated Support</span>
                                    </div>
                                    <p className="text-[#999999] text-lg leading-relaxed max-w-[90%]">
                                        Our wonderful and supportive customer help team is<br className="hidden md:block" />
                                        here for you 24/7, ready to assist with any trading<br className="hidden md:block" />
                                        questions or concerns you may have!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
