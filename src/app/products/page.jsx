import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export const metadata = {
    title:
        "PET Stretch Blow Moulding Machines | Suraj Plastic Industries",
    description:
        "Explore our complete range of PET Stretch Blow Moulding Machines including Semi Automatic, High Speed, Automatic Hand Feed and Fully Automatic models.",
};

export const products = [
  {
    name: "Pet Perform Stretch Blow Moulding Machine",
    slug: "semi-automatic-stretch-blow-moulding-machine",
    image: "/product/product1.png",
  },
  {
    name: "High Speed Pet Perform Stretch Blow Moulding Machine",
    slug: "high-speed-pet-perform-stretch-blow-moulding-machine",
    image: "/product/product2.png",
  },
  {
    name: "Auto Drop Pet Perform Stretch Blow Moulding Machine",
    slug: "auto-drop-pet-perform-stretch-blow-moulding-machine",
    image: "/product/product3.png",
  },
  {
    name: "Automatic Hand Feed Pet Perform Stretch Blow Moulding Machine",
    slug: "automatic-hand-feed-pet-perform-stretch-blow-moulding-machine",
    image: "/product/product44.png",
  },
  {
    name: "Fully Automatic Pet Perform Stretch Blow Moulding Machine",
    slug: "fully-automatic-stretch-blow-moulding-machine",
    image: "/product/product5.png",
  },
];

export default function ProductsPage() {
    return (
        <>
            {/* HERO */}

            <section className="relative h-[420px] overflow-hidden">

                <Image
                    src="/home/hot-juice.jpg"
                    alt="Products"
                    fill
                    priority
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-[#000]/60" />

                <div className="absolute inset-0 bg-gradient-to-r from-[#102542]/80 via-[#102542]/30 to-transparent" />

                <div className="relative z-10 mx-auto flex h-full max-w-[1500px] items-center px-6">

                    <div>

                        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md">

                            <Home size={16} className="text-white" />

                            <span className="text-white/90">
                                Home
                            </span>

                            <ChevronRight
                                size={15}
                                className="text-white/70"
                            />

                            <span className="font-semibold text-white">
                                Products
                            </span>

                        </div>

                        <h1 className="mt-7 font-baloo text-4xl md:text-6xl font-semibold text-white">
                            Our Products
                        </h1>

                        <div className="mt-5 h-1 w-28 rounded-full bg-[#CB6801]" />

                        <p className="mt-7 max-w-2xl font-urbanist text-lg leading-9 text-white/90">
                            Explore our premium collection of PET Stretch Blow
                            Moulding Machines engineered for precision,
                            durability and high-performance bottle production.
                        </p>

                    </div>

                </div>

            </section>

            {/* PRODUCTS */}

            <section className="bg-[#F8FAFC] py-16">

                <div className="mx-auto max-w-[1500px] px-3 md:px-6">

                    <div className="mb-10 text-center">

                        <span className="font-urbanist font-semibold uppercase tracking-[5px] text-[#CB6801]">
                            OUR MACHINE RANGE
                        </span>

                        <h2 className="mt-2 font-baloo text-[30px] md:text-[42px] text-[#1A3E73]">
                            PET Stretch Blow Moulding Machines
                        </h2>

                        <div className="mx-auto mt-2 h-[4px] w-24 rounded-full bg-[#CB6801]" />

                    </div>

                    {/* 👇 Next response me yaha cards paste honge */}

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-5 lg:px-20">

                        {products.map((item) => (

                            <Link
                                key={item.slug}
                                href={`/${item.slug}`}
                                className="group"
                            >

                                <article className="overflow-hidden rounded-[24px] border border-[#E8E8E8] bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_18px_45px_rgba(0,0,0,.08)]">

                                    {/* Image */}

                                    <div className="relative overflow-hidden bg-[#F7F8FA] p-10">

                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            width={480}
                                            height={380}
                                            className="mx-auto h-[220px] w-auto object-contain transition duration-500 group-hover:scale-105"
                                        />

                                        {/* Shine */}

                                        <span className="pointer-events-none absolute inset-y-0 -right-28 w-16 rotate-[22deg] bg-gradient-to-b from-transparent via-white/70 to-transparent transition-all duration-700 group-hover:-translate-x-[500px]" />

                                    </div>

                                    {/* Content */}

                                    <div className="relative p-7">

                                        {/* Hover Line */}

                                        <span className="absolute left-0 top-0 h-[3px] w-0 bg-[#CB6801] transition-all duration-500 group-hover:w-full" />

                                        <h2 className="font-baloo text-[22px] leading-7 font-semibold text-[#1A3E73] transition duration-300 group-hover:text-[#CB6801]">
                                            {item.name}
                                        </h2>

                                        <div className="mt-2 flex items-center justify-between">

                                            <span className="font-urbanist text-[15px] font-semibold tracking-[2px] uppercase text-[#666]">
                                                Explore Machine
                                            </span>

                                            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#CB6801] text-[#CB6801] transition-all duration-300 group-hover:bg-[#CB6801] group-hover:text-white group-hover:translate-x-1">

                                                →

                                            </span>

                                        </div>

                                    </div>

                                </article>

                            </Link>

                        ))}

                    </div>

                </div>

            </section>

        </>
    );
}