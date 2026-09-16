"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesAnimation() {
    useEffect(() => {
        const section = document.querySelector(".services-section");

        if (!section) return;

        const ctx = gsap.context(() => {
            const cards =
                gsap.utils.toArray<HTMLElement>("[data-service-card]");

            const cardGrids = cards
                .map((card) =>
                    card.querySelector<HTMLElement>(
                        ':scope > div[aria-hidden="true"]',
                    ),
                )
                .filter(Boolean) as HTMLElement[];

            cardGrids.forEach((grid) => {
                grid.style.backgroundImage =
                    "linear-gradient(to right, rgba(32,33,36,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(32,33,36,0.08) 1px, transparent 1px)";
            });

            /*
             * =====================================
             * INITIAL STATES
             * =====================================
             */

            gsap.set(".services-eyebrow", {
                opacity: 0,
                y: 20,
            });

            gsap.set(".services-eyebrow-dot", {
                scale: 0,
            });

            gsap.set(".services-title", {
                opacity: 0,
                y: 70,
            });

            gsap.set(".services-description", {
                opacity: 0,
                y: 30,
            });

            gsap.set(cards, {
                opacity: 0,
                y: 90,
                rotateX: 10,
                scale: 0.94,
            });

            gsap.set(cardGrids, {
                opacity: 0,
            });

            /*
             * =====================================
             * SCROLL ENTRANCE
             * =====================================
             */

            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top 70%",
                    once: true,
                },
            });

            timeline
                .to(".services-eyebrow", {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    ease: "power3.out",
                })
                .to(
                    ".services-eyebrow-dot",
                    {
                        scale: 1,
                        duration: 0.5,
                        ease: "back.out(3)",
                    },
                    "-=0.4"
                )
                .to(
                    ".services-title",
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power4.out",
                    },
                    "-=0.25"
                )
                .to(
                    ".services-description",
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.7,
                        ease: "power3.out",
                    },
                    "-=0.55"
                )
                .to(
                    cards,
                    {
                        opacity: 1,
                        y: 0,
                        rotateX: 0,
                        scale: 1,
                        duration: 0.9,
                        stagger: 0.12,
                        ease: "power4.out",
                    },
                    "-=0.35"
                )
                .to(
                    cardGrids,
                    {
                        opacity: 0.8,
                        duration: 0.7,
                        stagger: 0.08,
                        ease: "power2.out",
                    },
                    "-=0.65"
                );

            /*
             * =====================================
             * ALWAYS MOVING ROUTE
             * =====================================
             */

            gsap.utils
                .toArray<HTMLElement>(".services-route-dot")
                .forEach((dot, index) => {
                    gsap.to(dot, {
                        x: "100vw",
                        duration: 4 + index * 0.8,
                        repeat: -1,
                        ease: "none",
                        delay: index * 0.7,
                        scrollTrigger: {
                            trigger: section,
                            start: "top bottom",
                            end: "bottom top",
                            toggleActions: "play pause resume pause",
                        },
                    });
                });

            /*
             * =====================================
             * FLOATING AMBIENT LIGHT
             * =====================================
             */

            gsap.to(".services-ambient", {
                x: 40,
                y: -30,
                duration: 5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: 1.5,
                scrollTrigger: {
                    trigger: section,
                    start: "top bottom",
                    end: "bottom top",
                    toggleActions: "play pause resume pause",
                },
            });

            /*
             * =====================================
             * CARD INTERACTION
             * =====================================
             */

            cards.forEach((card) => {
                const glow =
                    card.querySelector<HTMLElement>(
                        ".service-cursor-glow"
                    );

                const arrow =
                    card.querySelector<HTMLElement>(
                        ".service-arrow"
                    );

                const arrowIcon =
                    card.querySelector<HTMLElement>(
                        ".service-arrow-icon"
                    );

                const accent =
                    card.querySelector<HTMLElement>(
                        ".service-accent"
                    );

                if (!glow || !arrow || !arrowIcon || !accent) {
                    return;
                }

                const handleMove = (event: MouseEvent) => {
                    const rect = card.getBoundingClientRect();

                    const x = event.clientX - rect.left;
                    const y = event.clientY - rect.top;

                    const rotateY =
                        ((x / rect.width) - 0.5) * 7;

                    const rotateX =
                        ((y / rect.height) - 0.5) * -7;

                    /*
                     * 3D tilt
                     */

                    gsap.to(card, {
                        rotateX,
                        rotateY,
                        scale: 1.015,
                        duration: 0.35,
                        ease: "power2.out",
                        overwrite: true,
                    });

                    /*
                     * Cursor glow
                     */

                    gsap.to(glow, {
                        x,
                        y,
                        opacity: 1,
                        duration: 0.25,
                        overwrite: true,
                    });

                    /*
                     * Arrow movement
                     */

                    gsap.to(arrow, {
                        scale: 1.1,
                        duration: 0.3,
                        ease: "back.out(2)",
                    });

                    gsap.to(arrowIcon, {
                        x: 2,
                        y: -2,
                        rotate: 45,
                        duration: 0.3,
                    });

                    /*
                     * Bottom line
                     */

                    gsap.to(accent, {
                        width: "80px",
                        duration: 0.4,
                        ease: "power3.out",
                    });
                };

                const handleLeave = () => {
                    gsap.to(card, {
                        rotateX: 0,
                        rotateY: 0,
                        scale: 1,
                        duration: 0.7,
                        ease: "elastic.out(1, 0.5)",
                    });

                    gsap.to(glow, {
                        opacity: 0,
                        duration: 0.3,
                    });

                    gsap.to(arrow, {
                        scale: 1,
                        duration: 0.4,
                    });

                    gsap.to(arrowIcon, {
                        x: 0,
                        y: 0,
                        rotate: 0,
                        duration: 0.4,
                    });

                    gsap.to(accent, {
                        width: 0,
                        duration: 0.35,
                    });
                };

                card.addEventListener(
                    "mousemove",
                    handleMove
                );

                card.addEventListener(
                    "mouseleave",
                    handleLeave
                );
            });

            /*
             * =====================================
             * CARD PARALLAX ON SCROLL
             * =====================================
             */

            cards.forEach((card, index) => {
                gsap.to(card, {
                    y: index % 2 === 0 ? -12 : 12,
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1.5,
                    },
                });
            });
        }, section);

        return () => {
            ctx.revert();
        };
    }, []);

    return null;
}