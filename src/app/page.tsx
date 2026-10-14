import { Header, TopBar } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { ProofStrip } from "@/components/landing/ProofStrip";
import { Benefits } from "@/components/landing/Benefits";
import { Work } from "@/components/landing/Work";
import { Offers } from "@/components/landing/Offers";
import { Steps } from "@/components/landing/Steps";
import { Faq } from "@/components/landing/Faq";
import { LeadForm } from "@/components/landing/LeadForm";
import { FinalCta, Footer, StickyCta } from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <ProofStrip />
        <Benefits />
        <Work />
        <Offers />
        <Steps />
        <LeadForm />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
