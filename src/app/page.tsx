"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import CallUs from "@/components/CallUs";
import Stats from "@/components/Stats";
import AboutUs from "@/components/AboutUs";
import ChooseUs from "@/components/ChooseUs";
import Coaches from "@/components/Coaches";
import Gallery from "@/components/Gallery";
import Join from "@/components/Join";
import Testimonial from "@/components/Testimonial";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <AboutUs />
      <ChooseUs />
      <Coaches />
      <Gallery />
      <Join />
      <Testimonial />
      <CallUs />
      <Footer />
    </>
  );
}
