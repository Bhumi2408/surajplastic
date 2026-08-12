import AboutHero from "../components/about/AboutHero";
import CompanyOverview from "../components/about/CompanyOverview";
import ContactInfo from "../components/about/ContactInfo";
import InnovativeSolutions from "../components/about/InnovativeSolutions";
import SEOContent from "../components/about/SEOContent";
import WhyChooseUs from "../components/about/WhyChooseUs";
import Certified from "../components/Certified";


export const metadata = {
  title: "About - Suraj Plastic Industries",
  description:
    "We Deliver Reliable & Innovative Manufacturing Solutions. Founded in 1982, Suraj Plastic Industries began as a manufacturer of blow-moulded plastic products, earning the trust of leading brands through consistent quality and reliability.",
  keywords: ["About us", "Blow Moulding Machine Manufacturer and supplier"],
  alternates: {
    canonical: "/about-us",
  },
};

export default function AboutPage() {
  return (
    <>
    <AboutHero/>
    <CompanyOverview/>
    <Certified/>
    <WhyChooseUs/>
    <InnovativeSolutions/>
    <SEOContent/>
    <ContactInfo/>
    </>
  );
}