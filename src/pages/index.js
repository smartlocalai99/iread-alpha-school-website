import Head from "next/head";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import FeaturesTicker from "../Components/FeaturesTicker";
import StatsSection from "@/Components/Stats";
import AboutSection from "@/Components/About";
import AcademicsSection from "@/Components/Academics";
import ProgramsSection from "@/Components/Programs";
import FacilitiesSection from "@/Components/Facilities";
import PrincipalDesk from "@/Components/PrincipalDesk";
import AdmissionSection from "@/Components/Admission";
import GallerySection from "@/Components/Gallery";
import ContactSection from "@/Components/Contact";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>IREAD ALPHA English Medium High School — Building Strong Foundations</title>
        <meta
          name="description"
          content="IREAD ALPHA English Medium High School in Guduru, Andhra Pradesh. Quality education, holistic development, IIT-NEET foundation, experienced faculty. Admissions Open 2026-27."
        />
      </Head>

      <Navbar />
      <Hero />
      <FeaturesTicker />
      <StatsSection />
      <AboutSection />
      <AcademicsSection />
      <ProgramsSection />
      <FacilitiesSection />
      <PrincipalDesk />
      <AdmissionSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </>
  );
}