export default function Footer() {
    return (
      <footer className="container mx-auto px-4 py-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
        <span>© {new Date().getFullYear()} VTech. All rights reserved.</span>
        <a href="#services" className="hover:underline">Services</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </footer>
    );
  }
  