import Image from "next/image";

const certificates = [
  {
    image: "/home/fieo.png",
    alt: "FIEO",
  },
  {
    image: "/home/msme.png",
    alt: "MSME",
  },
  {
    image: "/home/uk.png",
    alt: "UK Cert",
  },
  {
    image: "/home/iso.png",
    alt: "ISO 9001:2015",
  },
];

export default function Certified() {
  return (
   <>
     <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="font-baloo text-[35px] font-bold text-center">
          Certified By
        </h2>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-12 items-center">

          {certificates.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center group"
            >
              <Image
                src={item.image}
                alt={item.alt}
                width={260}
                height={180}
                className="h-[170px] w-auto object-contain transition-all duration-500 group-hover:scale-105"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
     
   </>
  );
}