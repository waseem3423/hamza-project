"use client";

import Header from "@/components/Header";
import MobileHeader from "@/components/MobileHeader";
import ContactHero from "@/components/ContactHero";
import ContactMainSection from "@/components/ContactMainSection";
import ContactFaq from "@/components/ContactFaq";
import ContactLocation from "@/components/ContactLocation";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main>
      <Header />
      <MobileHeader />
      <ContactHero />
      <ContactMainSection />
      <ContactFaq />
      <ContactLocation />
      <Cta />
      <Footer />
    </main>
  );
}
