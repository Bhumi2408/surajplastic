import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="hidden lg:block bg-[#1A3E73] text-white text-sm">
      <div className=" mx-auto px-10 h-10 flex items-center justify-between">

        <div className="flex items-center gap-6">

          <div>
           <a href="tel:919871494249" className="flex items-center gap-2"> <FaPhoneAlt className="text-[#FF4B2B]" />
            <span>Call: +91 9871494249</span></a>
          </div>

          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-[#FF4B2B]" />
            <span>D-18, Naresh Park Extension, Nangloi, New Delhi</span>
          </div>

          <div>
            <a href="mailto:info@surajplasticindustries.com" className="flex items-center gap-2">
            <FaEnvelope className="text-[#FF4B2B]" />
            <span>info@surajplasticindustries.com</span>
            </a>
          </div>

        </div>

        <div className="flex gap-4 text-lg">

          <FaFacebookF className="cursor-pointer hover:text-[#FF4B2B]" />

          <FaInstagram className="cursor-pointer hover:text-[#FF4B2B]" />

          <FaYoutube className="cursor-pointer hover:text-[#FF4B2B]" />

        </div>

      </div>
    </div>
  );
}