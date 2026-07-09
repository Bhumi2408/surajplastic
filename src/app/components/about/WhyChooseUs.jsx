import Image from "next/image";
import {
  HiOutlineWrenchScrewdriver,
  HiOutlineLightBulb,
} from "react-icons/hi2";
import { PiFactory } from "react-icons/pi";

const features = [
  {
    icon: <HiOutlineWrenchScrewdriver size={50} />,
    title: "Advanced Material & Component Engineering",
    description:
      "We use premium-grade materials and precisely engineered parts to guarantee durability and performance stability across all production environments.",
  },
  {
    icon: <HiOutlineLightBulb size={50} />,
    title: "Innovative Moulding & Process Development",
    description:
      "Through dedicated R&D and years of manufacturing expertise, we continuously enhance moulding efficiency and product quality, setting new benchmarks in industrial engineering.",
  },
  {
    icon: <PiFactory size={50} />,
    title: "High-Capacity Manufacturing Solutions",
    description:
      "With 3000+ installations and production capabilities up to 9600 bottles per hour, our machines are built for consistent output and global reliability.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#CB6801]">
      <div className="grid lg:grid-cols-2">

        {/* Left Image */}

        <div className="relative h-[500px] lg:h-auto">

          <Image
            src="/about/about-innovation.png"
            alt="PET Blow Moulding Machine"
            fill
            className="object-cover"
          />

        </div>

        {/* Right */}

        <div className="px-8 py-16 lg:px-12 xl:px-10">

          <h2 className="max-w-4xl font-urbanist text-[28px] md:text-[30px] leading-tight font-semibold text-white">
            Professional & Legacy-Focused Driving Innovation in
            Manufacturing Since 1982
          </h2>

          <p className="mt-5 max-w-4xl font-urbanist text-white/95">
            With decades of experience and a commitment to excellence, we
            design and deliver reliable, high-capacity moulding solutions
            trusted across industries.
          </p>

          <div className="mt-10 space-y-5">

            {features.map((item, index) => (

              <div
                key={index}
                className="group rounded-[22px] border border-white/80 bg-[#86430154] p-5 transition-all duration-300 hover:bg-white/10"
              >

                <div className="flex gap-6">

                  <div className="mt-1 text-white">
                    {item.icon}
                  </div>

                  <div>

                    <h3 className="font-baloo text-[20px] font-semibold text-white underline underline-offset-4">
                      {item.title}
                    </h3>

                    <p className="mt-1 font-urbanist text-white/90">
                      {item.description}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}