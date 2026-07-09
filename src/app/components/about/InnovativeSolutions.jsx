import Image from 'next/image'
import React from 'react'

const InnovativeSolutions = () => {
  return (
     <section className="bg-white py-20 px-5 md:px-20">
      <div className="mx-auto flex flex-wrap md:flex-nowrap items-center gap-10 px-6">

        {/* Left Content */}

        <div>

          <h2 className=" font-baloo text-[24px] font-semibold leading-[1.3] text-[#111] lg:text-[35px]">
            We Deliver Reliable & Innovative Manufacturing Solutions
          </h2>

          <p className="mt-5 font-urbanist leading-6 text-[#3d3d3d]">
            Founded in 1982, <strong>Suraj Plastic Industries</strong> began as a manufacturer of blow moulded plastic products, earning the trust of leading brands through consistent quality and reliability.
          </p>

          <p className="mt-5 font-urbanist leading-6 text-[#3d3d3d]">
            In 1997, we entered the PET preform stretch blow moulding machine industry. Today, we are a trusted  
            <a href="/contact-us" className="font-semibold text-[#2563eb]">
             water bottle making machine manufacturer
            </a>{" "}
             with installations across India and exports worldwide.
          </p>

        </div>

        {/* Right Image */}

        <div className="flex justify-center lg:justify-end md:w-[60%]">
  <Image
    src="/about/innovative.jpg"
    alt="Suraj Plastic Industries Manufacturing"
    width={1200}
    height={520}
    className="w-full h-[320px] object-cover"
  />
</div>

        </div>

    </section>
  )
}

export default InnovativeSolutions