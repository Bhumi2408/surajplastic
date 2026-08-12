import CareerForm from "../components/career/CareerForm";

export const metadata = {
    title: "Career | Suraj Plastic Industries",

    description:
        "At Suraj Plastic, we believe that excellence begins with exceptional people, and as a leading name in plastic manufacturing, we are committed to fostering an environment that encourages innovation, technical growth, and continuous improvement",

    keywords: ["surajplastic", "surajplasticindustries"],

    alternates: {
        canonical: "/career",
    },
};

export default function CareerPage() {
    return <CareerForm />;
}
