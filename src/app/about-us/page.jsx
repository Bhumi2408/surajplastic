import AboutHero from "../components/about/AboutHero";
import CompanyOverview from "../components/about/CompanyOverview";
import ContactInfo from "../components/about/ContactInfo";
import InnovativeSolutions from "../components/about/InnovativeSolutions";
import SEOContent from "../components/about/SEOContent";
import WhyChooseUs from "../components/about/WhyChooseUs";
import Certified from "../components/Certified";


export const metadata = {
  title:
    "Best Mineral Water Bottle Making Machine Manufacturer - Suraj Plastic Industries",
  description:
    "Suraj Plastic Industries — trusted Mineral Water Bottle Making Machine Manufacturer in Delhi since 1997. ISO certified, 1480+ installations, NSIC award winner. Get a quote today.",
  keywords: [
    "Mineral Water Bottle Making Machine Manufacturer",
    "Water Bottle Making Machine Manufacturer",
    "Mineral Water Bottle Making Machine Manufacturer in Delhi",
  ],
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