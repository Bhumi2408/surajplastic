import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Thank You | Suraj Plastic Industries",
  description: "Thank you for contacting Suraj Plastic Industries.",
};

export default function ThankYouPage() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#fbfcff] px-5 py-20 lg:px-28">
      <div className="mx-auto max-w-[700px] text-center">
        {/* Success Icon */}
        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-[#dbe5f4] bg-white">
          <svg
            className="h-11 w-11 text-[#CB6801]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h2 className="font-baloo text-[35px] font-bold text-[#0d2e5c] md:text-[50px]">
          Thank <span className="text-[#CB6801]">You!</span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl font-urbanist text-[17px] font-medium leading-7 text-[#38506f]">
          Your inquiry has been received. Our team will review your request and get back to you shortly.
        </p>

        <div className="mt-10 border-t-2 border-[#6f8eb8] bg-white p-8 shadow-lg">
          <p className="font-urbanist text-[16px] font-medium text-[#38506f]">
            Need urgent help? Reach us directly at
          </p>

          <p className="mt-2 font-baloo text-[22px] font-semibold text-[#0d2e5c]">
            +91 9871494249 / +91 9999886068
          </p>

          <p className="mt-1 font-urbanist text-[16px] font-medium text-[#38506f]">
            info@surajplasticindustries.com
          </p>
        </div>

        <Link
          href="/"
          className="mt-10 inline-flex h-12 items-center justify-center rounded-2xl bg-[#0d2e5c] px-10 font-urbanist text-[18px] font-semibold text-white transition-all duration-300 hover:bg-[#CB6801]"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}