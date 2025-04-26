import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full bg-white/10 py-4 absolute z-50 border-b border-b-gray-950/15">
      <div className="container mx-auto px-4 lg:px-42 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-gray-800">
          <Image
            src="/V.svg"
            alt="VTech Company Logo"
            width={40}
            height={40}
            priority
          />
          VTech
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="#services" className="hover:underline transition-colors">Layanan</Link>
          <Link href="#about" className="hover:underline transition-colors">Tentang Kami</Link>
          <Link href="#contact" className="hover:underline transition-colors">Kontak</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
