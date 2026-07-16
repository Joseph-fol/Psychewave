import About from "./components/About";
import Services from "./components/Services";
import HeroSection from "./HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About/>
      <Services/>      
    </>
  );
}