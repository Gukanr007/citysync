
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, Camera, Shield, Navigation } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface HeroProps {
  setActiveSection?: (section: string) => void;
}

const Hero = ({ setActiveSection }: HeroProps) => {
  const { toast } = useToast();

  const handleReportIssue = () => {
    setActiveSection && setActiveSection("report");
    if (!setActiveSection) {
      toast({
        title: "Report Issue",
        description: "Opening report form...",
      });
    }
  };

  const handleJoinCommunity = () => {
    setActiveSection && setActiveSection("community");
    if (!setActiveSection) {
      toast({
        title: "Community",
        description: "Opening community hub...",
      });
    }
  };

  return (
    <section className="relative min-h-[350px] flex flex-col items-center justify-center py-12 md:py-18 px-4 bg-gradient-to-br from-[#162447] via-[#1c293a] to-green-900">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#162447]/85 pointer-events-none z-0" />
      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center text-white max-w-3xl mx-auto">
        <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-1 mb-6 text-green-300 text-sm font-semibold gap-2">
          <Navigation size={17} />
          <span className="text-green-300">Smart Civic Engagement</span>
        </div>
        <h1 className="font-bold text-4xl md:text-5xl mb-3 text-center leading-tight text-white">
          <span className="inline-block">CitySync</span>
        </h1>
        <div className="text-cyan-200 font-normal text-xl md:text-2xl italic mb-8">
          Your City, Your Voice
        </div>
        <p className="text-lg md:text-xl font-medium text-blue-100 text-center mb-7">
          Connect. Report. Engage. Discover city services, report issues,<br className="hidden md:inline" /> and collaborate with your community in one app.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white text-base font-semibold rounded-md shadow"
            onClick={handleReportIssue}
          >
            <Camera className="mr-2" size={20} />
            Report Issue
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#162447] text-base font-semibold rounded-md shadow"
            onClick={handleJoinCommunity}
          >
            <Users className="mr-2" size={20} />
            Community
          </Button>
        </div>
        {/* Feature quick cards */}
        <div className="grid md:grid-cols-3 gap-4 w-full">
          <Card className="bg-white/10 backdrop-blur-sm border-0 text-white text-center px-2">
            <CardContent className="p-5">
              <MapPin className="mx-auto mb-2 text-green-300" size={28} />
              <h3 className="text-base font-semibold mb-1 text-white">Instant Reporting</h3>
              <p className="text-xs text-blue-100">Quickly log city issues.</p>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-0 text-white text-center px-2">
            <CardContent className="p-5">
              <Users className="mx-auto mb-2 text-green-300" size={28} />
              <h3 className="text-base font-semibold mb-1 text-white">Community Hub</h3>
              <p className="text-xs text-blue-100">Chat & get updates.</p>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-0 text-white text-center px-2">
            <CardContent className="p-5">
              <Shield className="mx-auto mb-2 text-green-300" size={28} />
              <h3 className="text-base font-semibold mb-1 text-white">Secure & Private</h3>
              <p className="text-xs text-blue-100">Your data is protected.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default Hero;
