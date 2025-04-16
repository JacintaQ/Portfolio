"use client";
import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from './components/AboutSection'
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <HeroSection onNavigate={setActiveSection} />;
      case "about":
        return <AboutSection />;
      case "projects":
        return <ProjectSection />;
      case "contact":
        return <EmailSection />;
      default:
        return <HeroSection />;
    }
  };
  
  return (
 
      <main className="flex flex-col h-screen w-full overflow-hidden bg-[#0e0705] ">
        <Navbar className='fixed'onNavigate={setActiveSection}/>
        <div className="flex-1 overflow-y-auto ">
          {renderSection()}
        </div>
        <div className="fixed bottom-0 w-full z-50">
          <Footer />
        </div>

      </main>  

  );
}

