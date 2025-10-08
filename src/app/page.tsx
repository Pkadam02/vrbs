import Navbar from "@/Component/Navbar";
import Hero from "@/Component/Hero";
import Partners from "@/Component/Partners";
import About from "@/Component/About";
import Services from "@/Component/Services";
import WhoWeAre from "@/Component/WhoWeAre";
import Methodology from "@/Component/Methodology";
import Testimonials from "@/Component/Testimonials";
import CTA from "@/Component/CTA";
import Footer from "@/Component/Footer";
import CaseStud from "@/Component/casestudy";


export default function Home() {
  return (
    <main data-scroll-container>
      <Navbar />
      <Hero data-scroll-section />
      <Partners data-scroll-section />
      <About data-scroll-section />
      <Services data-scroll-section />
      <WhoWeAre data-scroll-section />
      <Methodology data-scroll-section />
      <CaseStud data-scroll-section />
      
      <Testimonials data-scroll-section />
      <CTA data-scroll-section />
      <Footer data-scroll-section />
    </main>
  );
}
