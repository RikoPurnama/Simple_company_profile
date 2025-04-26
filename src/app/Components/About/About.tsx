import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background Gradient + Blur */}

      <div className="absolute inset-0">
        <div className="absolute bottom-0 -right-40 transform -translate-x-1/2 w-[40%] h-[300px] bg-gradient-to-r from-gray-900 via-gray-500 to-slate-900 opacity-40 blur-3xl rounded-full" />
      </div>

      <div className="relative container mx-auto px-4 lg:px-42 flex flex-col md:flex-row items-center gap-16">
        {/* Kiri: Text */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-semibold mb-6">About Us</h2>
          <p className="text-gray-700 text-lg mb-8">
            DevHouse is a technology partner specializing in website
            development, web applications, and digital solutions. Our mission is
            to deliver scalable, secure, and impactful digital experiences for
            businesses of all sizes.
          </p>
          {/* Tombol Contact */}
          <Link
            href="https://wa.me/6285722153821"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition font-semibold text-lg"
          >
            Contact Us via WhatsApp
          </Link>
        </div>

        {/* Kanan: Gambar */}
        <div className="flex-1 flex justify-center">
          <img
            src="/about.png"
            alt="About Us"
            className="max-w-md w-full rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
