import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaHome } from "react-icons/fa";
import { navItems } from "@/data";
import { FeaturesSectionDemo } from '../components/ui/Features';
import { MLCardsCarousel } from "@/components/Projects";
import { GridBackground } from "@/components/Background"
import { PublicationsList } from "@/components/Publication";
import Footer from "@/components/Footer";
// import CertificationsSection from "@/components/Certification";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center fleex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={navItems}
        />
        <Hero />
        <FeaturesSectionDemo />
        <MLCardsCarousel />
        <PublicationsList />
        {/* <CertificationsSection /> */}
        <Footer/>

      </div>
    </main>
  );
}
