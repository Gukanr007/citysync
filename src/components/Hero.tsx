import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, Bell, Camera, Shield, Navigation } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface HeroProps {
  setActiveSection?: (section: string) => void;
}

const Hero = ({ setActiveSection }: HeroProps) => {
  const { toast } = useToast();

  const handleReportIssue = () => {
    if (setActiveSection) {
      setActiveSection("report");
    } else {
      toast({
        title: "Report Issue",
        description: "Opening issue reporting form...",
      });
    }
  };

  const handleJoinCommunity = () => {
    if (setActiveSection) {
      setActiveSection("community");
    } else {
      toast({
        title: "Community",
        description: "Connecting you to your local community...",
      });
    }
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-900 to-green-700 opacity-95" />

      {/* Content */}
      <div className="relative container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Navigation size={16} />
              <span className="text-sm font-medium">
                Smart Civic Engagement Platform
              </span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            CitySync
            <br />
            <span className="bg-gradient-to-r from-green-300 to-green-400 bg-clip-text text-transparent">
              Your Smart Citizen Companion
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Transform the way you interact with your city. Report issues, engage
            with your community, and stay informed about local developments -
            all in one powerful platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-green-600 text-white hover:bg-green-700 text-lg px-8 py-3 shadow-lg transition-all duration-200 transform hover:scale-105"
              onClick={handleReportIssue}
            >
              <Camera className="mr-2" size={20} />
              Report an Issue
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-white hover:text-blue-800 text-lg px-8 py-3 shadow-lg transition-all duration-200 transform hover:scale-105"
              onClick={handleJoinCommunity}
            >
              <Users className="mr-2" size={20} />
              Join Community
            </Button>
          </div>

          {/* Feature cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <MapPin className="mx-auto mb-4 text-green-300" size={32} />
                <h3 className="text-lg font-semibold mb-2">
                  Real-Time Reporting
                </h3>
                <p className="text-blue-100 text-sm">
                  Report potholes, streetlight issues, and more with GPS
                  precision
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Users className="mx-auto mb-4 text-green-300" size={32} />
                <h3 className="text-lg font-semibold mb-2">Community Hub</h3>
                <p className="text-blue-100 text-sm">
                  Connect with neighbors and participate in local decisions
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Shield className="mx-auto mb-4 text-green-300" size={32} />
                <h3 className="text-lg font-semibold mb-2">Secure & Private</h3>
                <p className="text-blue-100 text-sm">
                  Encrypted communication with local authorities
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          fill="none"
          className="w-full h-20 text-white"
        >
          <path
            d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
