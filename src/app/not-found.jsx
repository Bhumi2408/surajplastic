import Link from "next/link";

export const metadata = {
  title: "Page Not Found | Suraj Plastic Industries",
  description: "The page you are looking for could not be found.",
};

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-white px-6 text-center">
      <h1 className="font-baloo text-6xl font-semibold text-[#13233B]">404</h1>

      <h2 className="mt-4 font-baloo text-2xl font-semibold text-[#13233B]">
        Page Not Found
      </h2>

      <p className="mt-3 max-w-md text-gray-600">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-[#CB6801] px-8 py-3 font-semibold text-white transition hover:bg-[#b85d00]"
      >
        Back to Home
      </Link>
    </section>
  );
}
