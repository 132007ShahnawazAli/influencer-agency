import Hero from "./section/Hero";
import Navbar from "./components/Navbar";
import Brands from "./section/Brands";
import Services from "./section/Services";
import Framework from "./section/Framework";
import Revenue from "./section/Revenue";
import Assets from "./section/Assets";
import Testimonials from "./section/Testimonials";
import FAQ from "./section/FAQ";
import CTA from "./section/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-[#171819] overflow-x-hidden flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Hero />
        <Brands />
        <Services />
        <Framework />
        <Revenue />
        <Assets />
        <Testimonials />
        <FAQ />
        <CTA />
      </div>
      <Footer />
    </div>
  );
}
