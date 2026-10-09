import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import { ProjectIndex } from "@/components/sections/ProjectIndex";
import { Method } from "@/components/sections/Method";
import { Pricing } from "@/components/sections/Pricing";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Preloader } from "@/components/ui/Preloader";
import { DepthRuler } from "@/components/ui/DepthRuler";

export default function Home() {
  return (
    <>
      <Preloader />
      <Header />
      <DepthRuler />
      <main>
        <Hero />
        <Manifesto />
        <Services />
        <Work />
        <ProjectIndex />
        <Method />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
