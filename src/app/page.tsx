import Image from "next/image";
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

export default function Home() {
  return (
    <>
    <Navbar/>
    {/* <Hero/> */}
    
    <Stats/>
    <AboutUs/>
    <ChooseUs/>
    <Coaches/>
    <Gallery/>
    <Join/>
    <Testimonial/>
    <CallUs/>
    <Footer/> 
    </>
    
  );
}
