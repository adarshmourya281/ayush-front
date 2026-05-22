import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Features from "../components/Features";
import Dashboard from "../components/Dashboard";
import CoreValues from "../components/CoreValues";
import Testimonial from "../components/Testimonial";
import ContactSection from "../components/Contact";

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <Dashboard />
      <CoreValues />
      <Testimonial />
      <ContactSection />
    </>
  );
}

export default Home;