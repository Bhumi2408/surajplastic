import Image from 'next/image'
import React from 'react'

const Bannerinfo = () => {
  return (
    <section className="relative h-[450px] overflow-hidden mt-10">
      {/* Background Image */}

      <Image
        src="/home/bg1.jpg"
        alt="About Suraj Plastic"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-[1400px] px-6">

          <div className="max-w-[760px]">

            <h2 className="font-urbanist text-[35px] md:text-[45px] leading-[1.2] font-semibold text-white">
              Since 1982, Suraj Plastic has been at the forefront of Blow &
              Injection Moulding innovation.
            </h2>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Bannerinfo