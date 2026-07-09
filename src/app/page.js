import Image from "next/image";
import Hero from "./components/Hero";
import Industry from "./components/Industry";
import FeaturedMachines from "./components/FeaturedMachines";
import Certified from "./components/Certified";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import Bannerinfo from "./components/Bannerinfo";

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
   </>
  );
}
