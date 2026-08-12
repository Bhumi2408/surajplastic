import ContactForm from "../components/contact/ContactForm";

export const metadata = {
  title: "Contact us -  Suraj Plastic Industries",

  description:
    "We're Here to Solve Your Needs. From quick assistance to complete custom solutions, share your details and our experts will provide the right support for you.",

  keywords: ["surajplastic", "surajplasticindustries"],

  alternates: {
    canonical: "/contact-us",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
