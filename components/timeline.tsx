import ProcessAnimation from "./animations/ProcessAnimation";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Understand your business, users and goals.",
  },
  {
    number: "02",
    title: "Strategize",
    description: "Create the technical and growth roadmap.",
  },
  {
    number: "03",
    title: "Build",
    description: "Design and develop the product.",
  },
  {
    number: "04",
    title: "Launch",
    description: "Test, optimize and deploy.",
  },
  {
    number: "05",
    title: "Grow",
    description:
      "SEO, marketing, analytics and continuous optimization.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="
        relative
        overflow-hidden
        bg-[#111318]
        py-24
        text-black/85
        sm:py-28
        lg:py-36
        xl:py-44
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1600px]
          px-5
          sm:px-8
          lg:px-12
          xl:px-16
          2xl:px-20
        "
      >
        {/* Heading */}
        <div
          className="
            mx-auto
            mb-16
            max-w-3xl
            text-center
            sm:mb-20
            lg:mb-28
          "
        >
          <p
            className="
              mb-4
              text-xs
              font-semibold
              uppercase
              tracking-[0.28em]
              text-[#E52B2B]
              sm:text-sm
            "
          >
            Our Process
          </p>

          <h2
            className="
              text-4xl
              font-semibold
              leading-[1.05]
              tracking-[-0.04em]
              sm:text-5xl
              lg:text-6xl
              xl:text-7xl
            "
          >
            From Idea{" "}
            <span className="text-black/70">→</span>{" "}
            <span>Impact</span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-sm
              leading-6
              text-black/85
              sm:text-base
              sm:leading-7
              lg:text-lg
              lg:leading-8
            "
          >
            A clear, collaborative process designed to turn ambitious ideas
            into digital products that perform.
          </p>
        </div>

        <ProcessAnimation steps={steps} />
      </div>
    </section>
  );
}