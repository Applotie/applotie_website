"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesAnimation() {
    useEffect(() => {
        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        const isDesktop = window.matchMedia(
            "(min-width: 1024px)"
        ).matches;

        if (reduceMotion) return;

        const section = document.querySelector(
            ".services-section"
        ) as HTMLElement | null;

        if (!section) return;

        const ctx = gsap.context(() => {
            const header = section.querySelector(".services-header");
            const eyebrow = section.querySelector(".services-eyebrow");
            const title = section.querySelector(".services-title");
            const description = section.querySelector(
                ".services-description"
            );

            const cards = section.querySelectorAll(
                "[data-service-card]"
            );

            const numbers = section.querySelectorAll(
                ".service-number"
            );

            const arrows = section.querySelectorAll(
                ".service-arrow"
            );

            const ambient = section.querySelectorAll(
                ".services-ambient"
            );

            /* =====================================================
               INITIAL STATES
            ====================================================== */

            gsap.set(header, {
                opacity: 0,
                y: 35,
            });

            gsap.set(eyebrow, {
                opacity: 0,
                y: 15,
            });

            gsap.set(title, {
                opacity: 0,
                y: 45,
            });

            gsap.set(description, {
                opacity: 0,
                y: 25,
            });

            gsap.set(cards, {
                opacity: 0,
                y: 55,
                scale: 0.97,
            });

            gsap.set(numbers, {
                scale: 0.7,
                opacity: 0,
            });

            /* =====================================================
               HEADER REVEAL
            ====================================================== */

            const headerTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top 78%",
                    once: true,
                },
            });

            headerTimeline
                .to(header, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                })
                .to(
                    eyebrow,
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        ease: "power2.out",
                    },
                    "-=0.55"
                )
                .to(
                    title,
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power3.out",
                    },
                    "-=0.35"
                )
                .to(
                    description,
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        ease: "power2.out",
                    },
                    "-=0.45"
                );

            /* =====================================================
               CARD REVEAL
            ====================================================== */

            gsap.to(cards, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.75,
                stagger: 0.12,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: section.querySelector(".services-grid"),
                    start: "top 82%",
                    once: true,
                },
            });

            /* =====================================================
               NUMBER REVEAL
            ====================================================== */

            gsap.to(numbers, {
                scale: 1,
                opacity: 1,
                duration: 0.55,
                stagger: 0.1,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: section.querySelector(".services-grid"),
                    start: "top 78%",
                    once: true,
                },
            });

            /* =====================================================
               AMBIENT MOTION
            ====================================================== */

            ambient.forEach((element, index) => {
                gsap.to(element, {
                    x: index === 0 ? 80 : -70,
                    y: index === 0 ? -35 : 40,
                    duration: 8 + index * 2,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                });
            });

            /* =====================================================
               DESKTOP HOVER INTERACTION
            ====================================================== */

            if (isDesktop) {
                cards.forEach((card) => {
                    const title = card.querySelector(
                        ".service-title"
                    );

                    const copy = card.querySelector(
                        ".service-copy"
                    );

                    const arrow = card.querySelector(
                        ".service-arrow"
                    );

                    const number = card.querySelector(
                        ".service-number"
                    );

                    const glow = card.querySelector(
                        ".service-glow"
                    );

                    const backgroundNumber = card.querySelector(
                        ".service-background-number"
                    );

                    const onEnter = () => {
                        gsap.to(card, {
                            y: -6,
                            duration: 0.4,
                            ease: "power3.out",
                        });

                        gsap.to(title, {
                            x: 4,
                            duration: 0.35,
                            ease: "power2.out",
                        });

                        gsap.to(copy, {
                            x: 3,
                            duration: 0.35,
                            ease: "power2.out",
                        });

                        gsap.to(number, {
                            scale: 1.08,
                            duration: 0.35,
                            ease: "power2.out",
                        });

                        gsap.to(arrow, {
                            scale: 1.08,
                            rotation: 4,
                            duration: 0.35,
                            ease: "power2.out",
                        });

                        gsap.to(glow, {
                            opacity: 1,
                            duration: 0.45,
                            ease: "power2.out",
                        });

                        gsap.to(backgroundNumber, {
                            x: 5,
                            y: -5,
                            duration: 0.5,
                            ease: "power3.out",
                        });
                    };

                    const onLeave = () => {
                        gsap.to(card, {
                            y: 0,
                            duration: 0.5,
                            ease: "power3.out",
                        });

                        gsap.to(title, {
                            x: 0,
                            duration: 0.4,
                            ease: "power2.out",
                        });

                        gsap.to(copy, {
                            x: 0,
                            duration: 0.4,
                            ease: "power2.out",
                        });

                        gsap.to(number, {
                            scale: 1,
                            duration: 0.4,
                            ease: "power2.out",
                        });

                        gsap.to(arrow, {
                            scale: 1,
                            rotation: 0,
                            duration: 0.4,
                            ease: "power2.out",
                        });

                        gsap.to(glow, {
                            opacity: 0,
                            duration: 0.4,
                            ease: "power2.out",
                        });

                        gsap.to(backgroundNumber, {
                            x: 0,
                            y: 0,
                            duration: 0.5,
                            ease: "power3.out",
                        });
                    };

                    card.addEventListener("mouseenter", onEnter);
                    card.addEventListener("mouseleave", onLeave);

                    (
                        card as HTMLElement & {
                            __servicesEnter?: () => void;
                            __servicesLeave?: () => void;
                        }
                    ).__servicesEnter = onEnter;

                    (
                        card as HTMLElement & {
                            __servicesEnter?: () => void;
                            __servicesLeave?: () => void;
                        }
                    ).__servicesLeave = onLeave;
                });
            }

            /* =====================================================
               REFRESH SCROLLTRIGGER
            ====================================================== */

            requestAnimationFrame(() => {
                ScrollTrigger.refresh();
            });
        }, section);

        /* =========================================================
           CLEANUP
        ========================================================== */

        return () => {
            const cards = section.querySelectorAll(
                "[data-service-card]"
            );

            cards.forEach((card) => {
                const typedCard = card as HTMLElement & {
                    __servicesEnter?: () => void;
                    __servicesLeave?: () => void;
                };

                if (typedCard.__servicesEnter) {
                    card.removeEventListener(
                        "mouseenter",
                        typedCard.__servicesEnter
                    );
                }

                if (typedCard.__servicesLeave) {
                    card.removeEventListener(
                        "mouseleave",
                        typedCard.__servicesLeave
                    );
                }
            });

            ctx.revert();
        };
    }, []);

    return null;
}