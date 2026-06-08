
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="bg-[#030712] text-white overflow-hidden">

      <Navbar />

      <Hero />

      <Features />

      <HowItWorks />

      <Stats />

      <Testimonials />

      <CTA />

      <Footer />

    </div>
  );
}

export default Home;