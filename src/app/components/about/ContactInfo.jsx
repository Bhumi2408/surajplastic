import {
  FaLocationDot,
  FaEnvelope,
  FaPhoneVolume,
} from "react-icons/fa6";

const contactInfo = [
  {
    icon: <FaLocationDot />,
    title: "Company Address",
    value:
      "D-18, Naresh Park Extension, Nangloi, New Delhi – 110041",
  },
  {
    icon: <FaEnvelope />,
    title: "E-mail",
    value: "info@surajplasticindustries.com",
  },
  {
    icon: <FaPhoneVolume />,
    title: "Phone Numbers",
    value: "+91 9871494249",
  },
];

export default function ContactInfo() {
  return (
    <section className="bg-[#CB6801] py-10">
      <div className="mx-auto grid max-w-[1400px] gap-8 px-6 md:grid-cols-2 xl:grid-cols-3">
        {contactInfo.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
          >
            {/* Top Line */}
            <span className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-[#14345D] transition-transform duration-500 group-hover:scale-x-100"></span>

            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#CB6801]/10 text-3xl text-[#CB6801] transition-all duration-500 group-hover:bg-[#14345D] group-hover:text-white">
                {item.icon}
              </div>

              <div>
                <h3 className="font-baloo text-[20px] font-semibold text-[#14345D]">
                  {item.title}
                </h3>

                <p className="mt-2 font-urbanist text-[#4F5D75]">
                  {item.value}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}