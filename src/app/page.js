import Image from "next/image";
import Hero from "./components/Hero";
import Industry from "./components/Industry";
import FeaturedMachines from "./components/FeaturedMachines";
import Certified from "./components/Certified";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import Bannerinfo from "./components/Bannerinfo";
import Faq from "./components/Faq";

export default function Home() {
  return (
   <>
    <Hero/>
    <Industry/>
    <FeaturedMachines/>
    <Certified/>
    <Bannerinfo/>
    <Services/>
    <Reviews/>
    <Faq/>
   </>
  );
}
