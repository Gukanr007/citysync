import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, MessageSquare, Users, Bell, Camera, Shield, Navigation, Smartphone } from "lucide-react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ReportIssue from "@/components/ReportIssue";
import CommunityHub from "@/components/CommunityHub";
import InteractiveMap from "@/components/InteractiveMap";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="pt-16">
        {renderSection()}
      </main>
    </div>
  );
};

export default Index;
