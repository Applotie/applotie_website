
import ServicesAnimation from "./animations/ServicesAnimation";

export default function Services() {
    const services = [
        {
            id: 1,
            title: "Web Development",
            description:
                "We build fast, scalable and modern websites designed to turn visitors into customers.",
            size: "large",
            color: "red",
        },
        {
            id: 2,
            title: "Performance Marketing",
            description:
                "Data-driven campaigns that help your business reach the right audience and generate measurable growth.",
            size: "small",
            color: "yellow",
        },
        {
            id: 3,
            title: "App Development",
            description:
                "From idea to launch, we create powerful mobile experiences that are built around your users.",
            size: "small",
            color: "yellow",
        },
        {
            id: 4,
            title: "SEO & Growth",
            description:
                "We improve your visibility, rankings and organic traffic with strategies built for sustainable growth.",
            size: "large",
            color: "red",
        },
    ];

    return (
        <>
            <section
                id="services"
                className="
                    services-section
                    relative
                    overflow-hidden
                    bg-[#111318]
                    px-5
                    py-20
                    sm:px-8
                    sm:py-24
                    lg:px-12
                    lg:py-28
                    xl:py-32
                "
            >
                {/* =====================================================
                    AMBIENT BACKGROUND
                ====================================================== */}

                {/* Red glow */}
                <div
                    aria-hidden="true"
                    className="
                        services-ambient
                        pointer-events-none
                        absolute
                        -left-40
                        top-1/4
                        h-80
                        w-80
                        rounded-full
                        bg-[#E52B2B]/[0.06]
                        blur-3xl
                    "
                />

                {/* Yellow glow */}
                <div
                    aria-hidden="true"
                    className="
                        services-ambient
                        pointer-events-none
                        absolute
                        -right-40
                        bottom-10
                        h-80
                        w-80
                        rounded-full
                        bg-[#F5C518]/[0.08]
                        blur-3xl
                    "
                />

                {/* =====================================================
                    HEADER
                ====================================================== */}

                <div
                    className="
                        services-header
                        relative
                        z-10
                        mx-auto
                        mb-10
                        w-full
                        max-w-7xl
                        sm:mb-14
                        lg:mb-16
                    "
                >
                    {/* Eyebrow */}
                    <div
                        className="
                            services-eyebrow
                            mb-4
                            flex
                            items-center
                            gap-2
                            text-[11px]
                            font-bold
                            uppercase
                            tracking-[0.25em]
                            text-[#E52B2B]
                            sm:text-xs
                        "
                    >
                        <span
                            className="
                                services-eyebrow-dot
                                h-1.5
                                w-1.5
                                rounded-full
                                bg-[#E52B2B]
                            "
                        />

                        <span>What we do</span>
                    </div>

                    {/* Heading */}
                    <h2
                        className="
                            services-title
                            max-w-3xl
                            text-4xl
                            font-semibold
                            leading-[0.95]
                            tracking-[-0.055em]
                            text-black/85
                            sm:text-5xl
                            md:text-6xl
                            lg:text-7xl
                        "
                    >
                        See how Applotie
                        <br />
                        can help
                        <span className="text-[#E52B2B]">.</span>
                    </h2>

                    {/* Description */}
                    <p
                        className="
                            services-description
                            mt-5
                            max-w-xl
                            text-sm
                            leading-6
                            text-black/85
                            sm:text-base
                            sm:leading-7
                            lg:text-lg
                        "
                    >
                        Digital solutions designed to help ambitious
                        businesses{" "}
                            <span className="font-medium text-black/85">
                            build
                        </span>
                        ,{" "}
                        <span className="font-medium text-[#F0B900]">
                            grow
                        </span>{" "}
                        and{" "}
                        <span className="font-medium text-[#E52B2B]">
                            scale
                        </span>
                        .
                    </p>
                </div>

                {/* =====================================================
                    BENTO GRID
                ====================================================== */}

                <div
                    className="
                        services-grid
                        relative
                        z-10
                        mx-auto
                        grid
                        w-full
                        max-w-7xl
                        grid-cols-1
                        gap-4
                        sm:gap-5
                        md:grid-cols-2
                        lg:grid-cols-3
                        lg:grid-rows-2
                    "
                >
                    {services.map((service) => (
                        <div
                            key={service.id}
                            data-service-card
                            className={`
                                group
                                relative
                                min-h-[300px]
                                cursor-pointer
                                overflow-hidden
                                rounded-[1.5rem]
                                border
                                border-[#111318]/[0.08]
                                bg-[#1a1c22]
                                p-6
                                shadow-[0_8px_30px_rgba(17,19,24,0.035)]
                                transition-all
                                duration-500
                                hover:-translate-y-1
                                hover:shadow-[0_20px_50px_rgba(17,19,24,0.08)]
                                sm:min-h-[330px]
                                sm:p-7
                                lg:min-h-[360px]
                                lg:p-8

                                ${
                                    service.size === "large"
                                        ? "md:col-span-2 lg:col-span-2"
                                        : "md:col-span-1 lg:col-span-1"
                                }
                            `}
                        >
                            {/* =================================================
                                SUBTLE GRID
                            ================================================== */}

                            <div
                                aria-hidden="true"
                                className="
                                    pointer-events-none
                                    absolute
                                    inset-0
                                    opacity-60
                                    [background-image:linear-gradient(to_right,rgba(17,19,24,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,19,24,0.035)_1px,transparent_1px)]
                                    [background-size:40px_40px]
                                    [mask-image:linear-gradient(to_bottom,black,transparent)]
                                "
                            />

                            {/* =================================================
                                CARD GLOW
                            ================================================== */}

                            <div
                                aria-hidden="true"
                                className={`
                                    service-glow
                                    pointer-events-none
                                    absolute
                                    -right-20
                                    -top-20
                                    h-64
                                    w-64
                                    rounded-full
                                    blur-3xl
                                    opacity-0
                                    transition-opacity
                                    duration-700
                                    group-hover:opacity-100
                                    ${
                                        service.color === "red"
                                            ? "bg-[#E52B2B]/10"
                                            : "bg-[#F5C518]/15"
                                    }
                                `}
                            />

                            {/* =================================================
                                CONTENT
                            ================================================== */}

                            <div
                                className="
                                    relative
                                    z-10
                                    flex
                                    h-full
                                    flex-col
                                    justify-between
                                "
                            >
                                <div>
                                    {/* Number */}
                                    <div
                                        className={`
                                            service-number
                                            mb-7
                                            flex
                                            h-10
                                            w-10
                                            items-center
                                            justify-center
                                            rounded-full
                                            border
                                            text-[11px]
                                            font-bold
                                            ${
                                                service.color === "red"
                                                    ? "border-[#E52B2B]/20 bg-[#E52B2B]/[0.07] text-[#E52B2B]"
                                                    : "border-[#F5C518]/30 bg-[#F5C518]/[0.12] text-[#B48A00]"
                                            }
                                        `}
                                    >
                                        0{service.id}
                                    </div>

                                    {/* Title */}
                                    <h3
                                        className="
                                            service-title
                                            max-w-xl
                                            text-2xl
                                            font-semibold
                                            tracking-[-0.035em]
                                            text-black/85
                                            sm:text-3xl
                                        "
                                    >
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p
                                        className="
                                            service-copy
                                            mt-3
                                            max-w-lg
                                            text-sm
                                            leading-6
                                            text-black/70
                                            sm:mt-4
                                            sm:text-base
                                            sm:leading-7
                                        "
                                    >
                                        {service.description}
                                    </p>
                                </div>

                                {/* =================================================
                                    BOTTOM
                                ================================================== */}

                                <div
                                    className="
                                        mt-8
                                        flex
                                        items-center
                                        justify-between
                                        sm:mt-10
                                    "
                                >
                                    {/* Explore */}
                                    <span
                                        className="
                                            text-[10px]
                                            font-bold
                                            uppercase
                                            tracking-[0.16em]
                                            text-black/95
                                            transition-colors
                                            duration-300
                                            group-hover:text-black/70
                                            sm:text-xs
                                        "
                                    >
                                        Explore service
                                    </span>

                                    {/* Arrow */}
                                    <div
                                        className={`
                                            service-arrow
                                            flex
                                            h-10
                                            w-10
                                            items-center
                                            justify-center
                                            rounded-full
                                            border
                                            border-[#111318]/10
                                            bg-[#1a1c22]
                                            text-black/85
                                            transition-all
                                            duration-300
                                            group-hover:text-black

                                            ${
                                                service.color === "red"
                                                    ? "group-hover:border-[#E52B2B] group-hover:bg-[#E52B2B]"
                                                    : "group-hover:border-[#F5C518] group-hover:bg-[#F5C518] group-hover:text-[#111318]"
                                            }
                                        `}
                                    >
                                        <span
                                            className="
                                                service-arrow-icon
                                                text-base
                                                transition-transform
                                                duration-300
                                                group-hover:translate-x-0.5
                                                group-hover:-translate-y-0.5
                                            "
                                        >
                                            ↗
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* =================================================
                                BOTTOM ACCENT
                            ================================================== */}

                            <div
                                className={`
                                    service-accent
                                    absolute
                                    bottom-0
                                    left-0
                                    h-[3px]
                                    w-0
                                    transition-all
                                    duration-500
                                    group-hover:w-full
                                    ${
                                        service.color === "red"
                                            ? "bg-[#E52B2B]"
                                            : "bg-[#F5C518]"
                                    }
                                `}
                            />
                        </div>
                    ))}
                </div>

                {/* =====================================================
                    BOTTOM ACCENT
                ====================================================== */}

                <div
                    className="
                        pointer-events-none
                        relative
                        z-10
                        mx-auto
                        mt-12
                        h-px
                        w-full
                        max-w-7xl
                        bg-gradient-to-r
                        from-transparent
                        via-[#111318]/10
                        to-transparent
                        sm:mt-16
                    "
                />
            </section>

            {/* Animation stays completely separate */}
            <ServicesAnimation />
        </>
    );
}

