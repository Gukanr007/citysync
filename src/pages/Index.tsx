
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ReportIssue from "@/components/ReportIssue";
import CommunityHub from "@/components/CommunityHub";
import InteractiveMap from "@/components/InteractiveMap";

const Index = () => {
  // Save/load last active section for persistence in prototype
  const [activeSection, setActiveSection] = useState(() => sessionStorage.getItem("activeSection") || "home");

  useEffect(() => {
    sessionStorage.setItem("activeSection", activeSection);
  }, [activeSection]);

  const renderSection = () => {
    switch (activeSection) {
      case "report":
        return <ReportIssue />;
      case "community":
        return <CommunityHub />;
      case "map":
        return <InteractiveMap />;
      default:
        return (
          <>
            <Hero setActiveSection={setActiveSection} />
            <Features />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#162447] via-white to-green-50" style={{fontFamily: "'Inter', sans-serif"}}>
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="pt-[72px] max-w-5xl mx-auto w-full">
        {renderSection()}
      </main>
    </div>
  );
};

export default Index;
