import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full py-48 flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="container mx-auto px-4 lg:px-42 relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Empowering Businesses with Digital Solutions
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          We build high-performing websites and digital applications tailored to
          elevate your business.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="#services"
            className="px-6 py-3 bg-black text-white rounded-full"
          >
            Our Services
          </Link>
          <a
            href="https://wa.me/6285722153821"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border rounded-full hover:bg-black hover:text-white hover:border-gray-800 transition"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Background Blur */}
      <img
        src="/V.svg"
        alt="Background"
        className="absolute w-[500%] h-[500%] object-contain bg-center blur-3xl opacity-85"
      />
    </section>
  );
}
