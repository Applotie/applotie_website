import Link from "next/link";
import ServicesAnimation from "./animations/ServicesAnimation";

const services = [
    {
        id: 1,
        title: "Web Development",
        description:
            "We build fast, scalable and modern websites for businesses looking for a reliable digital marketing agency in Patna.",
        color: "red",
    },
    {
        id: 2,
        title: "Performance Marketing",
        description:
            "Data-driven digital marketing campaigns that help businesses in Patna reach the right audience and generate measurable growth.",
        color: "yellow",
    },
    {
        id: 3,
        title: "App Development",
        description:
            "From idea to launch, we create powerful mobile experiences that help businesses build a stronger digital presence.",
        color: "yellow",
    },
    {
        id: 4,
        title: "SEO & Growth",
        description:
            "We improve your search visibility, rankings and organic traffic with SEO strategies built for sustainable business growth in Patna.",
        color: "red",
    },
 {
    id: 5,
    title: "Branding",
    description:
        "We build memorable brand identities with strategic positioning, distinctive visuals and consistent brand experiences that help businesses stand out.",
    color: "red",
},
{
    id: 6,
    title: "Reputation Management",
    description:
        "We build and protect your online reputation by strengthening your digital presence, managing reviews and promoting a trustworthy brand image.",
    color: "red",
},
];

export default function Services() {
    return (
        <section
            id="services"
            className="
                services-section
                relative
                overflow-hidden
                bg-text-dark-primary
                px-4
                py-16
                sm:px-6
                sm:py-20
                md:px-8
                md:py-24
                lg:px-10
                lg:py-28
                xl:px-16
                2xl:px-24
            "
        >
            {/* =====================================================
                AMBIENT BACKGROUND
            ====================================================== */}

            <div
                aria-hidden="true"
                className="
                    services-ambient
                    pointer-events-none
                    absolute
                    -left-32
                    top-[18%]
                    h-56
                    w-56
                    rounded-full
                    bg-signal-red/[0.055]
                    blur-3xl
                    sm:h-72
                    sm:w-72
                    lg:h-96
                    lg:w-96
                "
            />

            <div
                aria-hidden="true"
                className="
                    services-ambient
                    pointer-events-none
                    absolute
                    -right-32
                    bottom-[8%]
                    h-56
                    w-56
                    rounded-full
                    bg-muted-gold/[0.07]
                    blur-3xl
                    sm:h-72
                    sm:w-72
                    lg:h-96
                    lg:w-96
                "
            />

            {/* =====================================================
                CONTENT WRAPPER
            ====================================================== */}

            <div
                className="
                    relative
                    z-10
                    mx-auto
                    w-full
                    max-w-[1600px]
                "
            >
                {/* =================================================
                    HEADER
                ================================================== */}

                <div
                    className="
                        services-header
                        mb-10
                        grid
                        grid-cols-1
                        gap-8
                        sm:mb-12
                        md:mb-14
                        lg:grid-cols-[minmax(0,1fr)_280px]
                        lg:items-end
                        lg:gap-12
                        xl:grid-cols-[minmax(0,1fr)_340px]
                    "
                >
                    <div>
                        {/* Eyebrow */}

                        <div
                            className="
                                services-eyebrow
                                mb-5
                                flex
                                items-center
                                gap-2
                                text-[10px]
                                font-bold
                                uppercase
                                tracking-[0.25em]
                                text-signal-red
                                sm:mb-6
                                sm:text-[11px]
                            "
                        >
                            <span
                                className="
                                    services-eyebrow-dot
                                    h-1.5
                                    w-1.5
                                    shrink-0
                                    rounded-full
                                    bg-signal-red
                                "
                            />

                            <span>What we do</span>
                        </div>

                        {/* Heading */}

                        <h2
                            className="
                                services-title
                                max-w-4xl
                                text-[clamp(2.6rem,8vw,6rem)]
                                font-semibold
                                leading-[0.9]
                                tracking-[-0.06em]
                                text-ink
                            "
                        >
                            See how Applotie
                            <br className="hidden sm:block" />
                            <span className="sm:hidden"> </span>
                            can help
                            <span className="text-signal-red">.</span>
                        </h2>

                        {/* Description */}

                        <p
                            className="
                                services-description
                                mt-5
                                max-w-2xl
                                text-sm
                                leading-6
                                text-ink/65
                                sm:mt-6
                                sm:text-base
                                sm:leading-7
                                lg:text-lg
                                lg:leading-8
                            "
                        >
                            Digital marketing and technology solutions for
                            businesses in Patna designed to help ambitious
                            businesses{" "}
                            <span className="font-semibold text-ink">
                                build
                            </span>
                            ,{" "}
                            <span className="font-semibold text-burgundy">
                                grow
                            </span>{" "}
                            and{" "}
                            <span className="font-semibold text-signal-red">
                                scale
                            </span>
                            .
                        </p>
                    </div>

                    {/* Desktop side statement */}

                    <div
                        className="
                            services-side-note
                            hidden
                            border-l
                            border-ink/10
                            pl-6
                            lg:block
                            xl:pl-8
                        "
                    >
                        <p
                            className="
                                text-xs
                                font-bold
                                uppercase
                                tracking-[0.18em]
                                text-ink/35
                            "
                        >
                            Strategy
                        </p>

                        <p
                            className="
                                mt-2
                                text-sm
                                leading-6
                                text-ink/65
                            "
                        >
                            Technology and marketing working together to
                            create measurable digital growth.
                        </p>

                        <div className="mt-5 flex gap-2">
                            <span className="h-1 w-8 bg-signal-red" />
                            <span className="h-1 w-8 bg-muted-gold" />
                            <span className="h-1 w-8 bg-ink/15" />
                        </div>
                    </div>
                </div>

                {/* =================================================
                    SERVICES GRID
                ================================================== */}

                <div
                    className="
                        services-grid
                        grid
                        grid-cols-1
                        gap-3
                        sm:gap-4
                        md:grid-cols-2
                        lg:grid-cols-4
                        lg:auto-rows-[minmax(340px,1fr)]
                        xl:auto-rows-[minmax(380px,1fr)]
                    "
                >
                    {services.map((service, index) => {
                        const isRed = service.color === "red";

                        return (
                            <Link
                                key={service.id}
                                href="/services"
                                data-service-card
                                data-service-index={index}
                                className={`
                                    group
                                    service-card
                                    relative
                                    flex
                                    min-h-[310px]
                                    min-w-0
                                    cursor-pointer
                                    flex-col
                                    overflow-hidden
                                    rounded-[1.25rem]
                                    border
                                    border-ink/[0.08]
                                    bg-white
                                    p-5
                                    shadow-[0_10px_40px_rgba(17,18,20,0.035)]
                                    transition-shadow
                                    duration-500

                                    sm:min-h-[330px]
                                    sm:rounded-[1.5rem]
                                    sm:p-6

                                    md:min-h-[350px]

                                    lg:min-h-0
                                    lg:p-7

                                    xl:p-8

                                    ${
                                        index === 0
                                            ? "lg:col-span-2 lg:row-span-1"
                                            : ""
                                    }

                                    ${
                                        index === 3
                                            ? "lg:col-span-2 lg:row-span-1"
                                            : ""
                                    }

                                    hover:shadow-[0_25px_70px_rgba(17,18,20,0.10)]
                                `}
                            >
                                {/* Card glow */}

                                <div
                                    aria-hidden="true"
                                    className={`
                                        service-glow
                                        pointer-events-none
                                        absolute
                                        -right-24
                                        -top-24
                                        h-64
                                        w-64
                                        rounded-full
                                        blur-3xl
                                        opacity-0
                                        transition-opacity
                                        duration-700
                                        group-hover:opacity-100

                                        ${
                                            isRed
                                                ? "bg-signal-red/10"
                                                : "bg-muted-gold/15"
                                        }
                                    `}
                                />

                                {/* Large background number */}

                                <span
                                    aria-hidden="true"
                                    className="
                                        service-background-number
                                        pointer-events-none
                                        absolute
                                        -right-3
                                        -top-8
                                        select-none
                                        text-[9rem]
                                        font-bold
                                        leading-none
                                        tracking-[-0.08em]
                                        text-ink/[0.025]
                                        transition-transform
                                        duration-700
                                        group-hover:-translate-y-2
                                        group-hover:translate-x-1
                                        sm:text-[11rem]
                                    "
                                >
                                    0{service.id}
                                </span>

                                {/* Content */}

                                <div
                                    className="
                                        relative
                                        z-10
                                        flex
                                        h-full
                                        min-w-0
                                        flex-col
                                        justify-between
                                    "
                                >
                                    <div>
                                        {/* Number */}

                                        <div
                                            className={`
                                                service-number
                                                mb-8
                                                flex
                                                h-9
                                                w-9
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-full
                                                border
                                                text-[10px]
                                                font-bold

                                                sm:h-10
                                                sm:w-10
                                                sm:text-[11px]

                                                ${
                                                    isRed
                                                        ? "border-signal-red/20 bg-signal-red/[0.07] text-signal-red"
                                                        : "border-muted-gold/30 bg-muted-gold/[0.12] text-burgundy"
                                                }
                                            `}
                                        >
                                            0{service.id}
                                        </div>

                                        {/* Title */}

                                        <h3
                                            className="
                                                service-title
                                                max-w-2xl
                                                break-words
                                                text-[1.65rem]
                                                font-semibold
                                                leading-[1.05]
                                                tracking-[-0.045em]
                                                text-ink

                                                sm:text-3xl

                                                lg:text-[2rem]

                                                xl:text-[2.25rem]
                                            "
                                        >
                                            {service.title}
                                        </h3>

                                        {/* Description */}

                                        <p
                                            className="
                                                service-copy
                                                mt-3
                                                max-w-xl
                                                text-[13px]
                                                leading-6
                                                text-ink/60

                                                sm:mt-4
                                                sm:text-sm
                                                sm:leading-6

                                                lg:max-w-2xl
                                                lg:text-[15px]
                                            "
                                        >
                                            {service.description}
                                        </p>
                                    </div>

                                    {/* Bottom */}

                                    <div
                                        className="
                                            mt-8
                                            flex
                                            items-center
                                            justify-between
                                            gap-4

                                            sm:mt-10
                                        "
                                    >
                                        <span
                                            className="
                                                text-[9px]
                                                font-bold
                                                uppercase
                                                tracking-[0.16em]
                                                text-ink/70

                                                sm:text-[10px]
                                                sm:text-ink/85
                                            "
                                        >
                                            Explore service
                                        </span>

                                        <div
                                            className={`
                                                service-arrow
                                                flex
                                                h-9
                                                w-9
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-full
                                                border
                                                border-ink/10
                                                bg-ivory
                                                text-ink
                                                transition-all
                                                duration-300

                                                sm:h-10
                                                sm:w-10

                                                ${
                                                    isRed
                                                        ? "group-hover:border-signal-red group-hover:bg-signal-red group-hover:text-white"
                                                        : "group-hover:border-muted-gold group-hover:bg-muted-gold group-hover:text-ink"
                                                }
                                            `}
                                        >
                                            <span
                                                className="
                                                    service-arrow-icon
                                                    text-base
                                                    transition-transform
                                                    duration-300
                                                    group-hover:-translate-y-0.5
                                                    group-hover:translate-x-0.5
                                                "
                                            >
                                                ↗
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom accent */}

                                <div
                                    className={`
                                        service-accent
                                        absolute
                                        bottom-0
                                        left-0
                                        h-[3px]
                                        w-full
                                        origin-left
                                        scale-x-0
                                        transition-transform
                                        duration-500
                                        group-hover:scale-x-100

                                        ${
                                            isRed
                                                ? "bg-signal-red"
                                                : "bg-muted-gold"
                                        }
                                    `}
                                />
                            </Link>
                        );
                    })}
                </div>

                {/* =================================================
                    BOTTOM LINE
                ================================================== */}

                <div
                    className="
                        services-bottom-line
                        relative
                        mt-10
                        h-px
                        w-full
                        bg-gradient-to-r
                        from-transparent
                        via-ink/10
                        to-transparent

                        sm:mt-14

                        lg:mt-16
                    "
                />
            </div>

            {/* =====================================================
                CLIENT-SIDE ANIMATION
            ====================================================== */}

            <ServicesAnimation />
        </section>
    );
}