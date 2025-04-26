import About from "./Components/About/About";
import CallToAction from "./Components/CallToAction/CallToAction";
import FAQ from "./Components/FAQ/FAQ";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Headers/Header";
import Hero from "./Components/Hero/Hero";
import Projects from "./Components/Projects/Projects";
import Services from "./Components/Services/Services";
import Technologies from "./Components/Tecnologies/Tecnologies";
import Testimonials from "./Components/Testimonials/Testimonials";


export default function Home() {
  return (
    <div className="w-full min-h-screen font-sans">
      <Header />
      <main className="w-full">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Technologies />
        <Testimonials />
        <CallToAction />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
