import Image from "next/image";
import { FaLaptopCode, FaGlobeAsia } from "react-icons/fa";

const stats = [
  {
    icon: "/home/machine.svg",
    number: "4000+",
    title: "MACHINE SOLD",
  },
  {
    icon: "/home/globe.svg",
    number: "12+",
    title: "EXPORT TO COUNTRIES",
  },
];

const services = [
  {
    icon: "/home/svg1.svg",
    title: "Custom Blow Moulding Machines",
    desc: "We offer tailored manufacturing solutions to meet diverse industry needs, specializing in PET Preform Stretch Blow Moulding Machines with capacities up to 25 litres.",
  },
  {
    icon: "/home/svg2.svg",
    title: "Installation & Commissioning",
    desc: "Our team ensures smooth installation and commissioning of machines across India and globally, enabling you to start production efficiently and without delay.",
  },
  {
    icon: "/home/svg3.svg",
    title: "Maintenance & Upgrades",
    desc: "We provide periodic maintenance services and machine upgrades to help you keep up with industry trends and extend the life of your equipment.",
  },
  {
    icon: "/home/svg4.svg",
    title: "After-Sales Services & Support",
    desc: "At Suraj Plastic, customer service is not a department — it’s an attitude. We provide reliable after-sales service, technical support, and easy access to spare parts.",
  },
  {
    icon: "/home/svg5.svg",
    title: "Consultation & Customization",
    desc: "Our experts assist clients in selecting the right machine models and customizing them as per production needs — ensuring the highest efficiency and output.",
  },
  {
    icon: "/home/svg6.svg",
    title: "Complete Project Setup",
    desc: "From planning to execution, we help industries set up complete production lines with maximum efficiency and minimal downtime.",
  },
];

export default function Services() {
  return (
    <>
      <section className="py-10 bg-[#fbfcff]">
        <div className="max-w-[1500px] mx-auto px-5 lg:px-28">
          <h2 className="text-center font-baloo text-[35px] font-bold ">
            Our services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 mt-7">
            {services.map((item, index) => (
              <div
                key={index}
                className="group border-t-2 border-[#6f8eb8] bg-white p-10 transition-all duration-500 hover:bg-[#4C6896]"
              >
                <div className="flex h-[70px] w-[70px] items-center justify-center rounded-2xl border border-[#dbe5f4] bg-white">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={35}
                    height={35}
                    className="object-contain"
                  />
                </div>

                <h3 className="mt-6 font-lato uppercase text-[20px] leading-7 font-semibold text-[#0d2e5c] transition-colors duration-500 group-hover:text-white">
                  {item.title}
                </h3>

                <p className="mt-2 font-urbanist text-[16px] leading-7 font-medium text-[#38506f] transition-colors duration-500 group-hover:text-white">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative py-12 px-10 overflow-hidden">
        {/* Background */}

        <Image src="/home/bg2.jpg" alt="Stats" fill className="object-cover" />

        {/* Overlay */}

        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-3 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}

            <div>
              <h2 className="font-baloo text-white text-[35px] md:text-[50px] leading-[1.15] font-semibold">
                Shaping Quality for Tomorrow's Production Needs
              </h2>
            </div>

            {/* Right */}

            <div className="grid md:grid-cols-2 gap-4">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl border border-white/50"
                >
                  {/* Hover Background */}

                  <span className="absolute inset-x-0 bottom-0 h-0 bg-[#CB6801] transition-all duration-500 ease-out group-hover:h-full"></span>

                  {/* Content */}

                  <div className="relative z-10 flex h-[250px] flex-col items-center justify-center text-white">
                    <div className="mb-4">
                      <Image src={item.icon} width={70} height={70} />
                    </div>

                    <h3 className="font-baloo text-[50px] font-semibold">
                      {item.number}
                    </h3>

                    <p className=" font-urbanist text-[25px] font-bold text-center">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="pt-7 md:pt-14">
        <h2 className="text-center font-baloo text-[35px] font-bold">
          Countries we Serve
        </h2>
        <div className="">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          >
            <source src="/home/map.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    </>
  );
}
