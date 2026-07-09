import Image from "next/image";

export default function CompanyOverview() {
  return (
    <section className="py-10 bg-white">
      <div className="mx-auto px-5 md:px-14">

        <div className="grid lg:grid-cols-2 items-center">

          {/* Left */}

          <div>

            <h2 className="font-montserrat text-[45px] leading-[1.15] font-medium text-black">

              A Legacy of Trust{" "}

              <span className="font-serif italic font-semibold text-[#CB6801]">
                Since
              </span>{" "}

              <span className="font-serif font-semibold text-[#CB6801]">
                1982
              </span>

            </h2>

            <p className="mt-8 font-urbanist leading-[1.5] text-[#4A5C76]">
              When businesses across India look for a reliable{" "}
              <a href="/contact-us" className="font-semibold text-[#2D6BFF]">
                mineral water bottle making machine manufacturer
              </a>
              , one name comes up again and again —{" "}
              <span className="font-bold text-[#334D6E]">
                Suraj Plastic Industries.
              </span>
            </p>

            <p className="mt-5 font-urbanist leading-[1.5] text-[#4A5C76]">
              We are a New Delhi-based manufacturer of PET preform stretch blow
              moulding machines — the machines that produce mineral water
              bottles, packaged drinking water containers, juice bottles, and a
              wide range of PET packaging. With over 40 years in plastics
              manufacturing and nearly 30 years specifically in water bottle
              making machines, we have built a reputation that speaks for
              itself.
            </p>

            <p className="mt-5 font-urbanist font-bold leading-[1.5] text-[#334D6E]">
              1480+ successful installations. 3000+ machines delivered. One
              consistent promise — machines that work.
            </p>

          </div>

          {/* Right */}

          <div className="flex justify-center lg:justify-end">

            <Image
              src="/about/about.jpg"
              alt="Mineral Water Bottle Manufacturing"
              width={450}
              height={450}
              priority
              className="w-full max-w-[650px] max-h-[450px] object-contain"
            />

          </div>

        </div>

      </div>
    </section>
  );
}