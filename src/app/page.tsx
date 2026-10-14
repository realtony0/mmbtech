import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Facts } from "@/components/site/Facts";
import { Work } from "@/components/site/Work";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { Pricing } from "@/components/site/Pricing";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer, MobileBar } from "@/components/site/Footer";
import { RevealObserver } from "@/components/site/Reveal";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Facts />
        <Work />
        <Services />
        <Process />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
      <RevealObserver />
    </>
  );
}
