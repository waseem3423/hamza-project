"use client";

import Preloader from "@/components/Preloader";
import PageProgress from "@/components/PageProgress";
import Header from "@/components/Header";
import MobileHeader from "@/components/MobileHeader";
import Hero from "@/components/Hero";
import SearchFilter from "@/components/SearchFilter";
import About from "@/components/About";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import Properties from "@/components/Properties";
import Location from "@/components/Location";
import Testimonial from "@/components/Testimonial";
import Blog from "@/components/Blog";
import ContactSection from "@/components/ContactSection";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Preloader />
      <PageProgress />
      <Header />
      <MobileHeader />
      <Hero />
      <SearchFilter />
      <About />
      <Features />
      <Gallery />
      <Properties />
      <Location />
      <Testimonial />
      <Blog />
      <ContactSection />
      <Cta />
      <Footer />
    </main>
  );
}
