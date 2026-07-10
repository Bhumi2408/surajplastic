import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[calc(100vh-128px)] min-h-[650px] overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/home/Sequence-03.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center text-center md:text-left">
        <div className="max-w-3xl md:pl-10 lg:pl-0">
          <h1 className="font-montserrat text-2xl font-semibold leading-10 text-white md:text-5xl lg:text-[45px] lg:leading-[52px]">
            Engineering Excellence in PET
            <br />
            Stretch Blow Moulding
          </h1>

          <p className="mt-5 max-w-3xl font-lato text-base md:text-lg leading-7 text-white/95 px-2 lg:px-0">
            Our PET Stretch Blow Moulding machines are engineered to deliver
            superior performance, precision, and production efficiency. Designed
            with advanced heating, controlled stretching, and high-pressure
            blowing technology, these machines ensure uniform wall thickness,
            crystal-clear transparency, and consistent bottle strength across
            every production cycle. Whether producing small volume containers
            for beverages and daily-use products or large industrial bottles,
            the machine guarantees stable moulding results with minimal energy
            consumption.
          </p>

          <Link
            href="/about"
            className="group relative mt-6 inline-flex h-14 items-center justify-center overflow-hidden rounded-full border-2 border-transparent bg-white px-8 font-urbanist font-bold text-black transition-all duration-500 hover:border-white"
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
              KNOW MORE
            </span>

            <span
              className="
      absolute
      left-1/2
      top-1/2
      h-0
      w-0
      -translate-x-1/2
      -translate-y-1/2
      bg-black
      transition-all
      duration-500
      ease-out
      group-hover:h-[220px]
      group-hover:w-[220px]
    "
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
