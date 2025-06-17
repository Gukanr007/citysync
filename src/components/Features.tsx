
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Camera, MessageSquare, Bell, MapPin, Users, Shield, Navigation, Smartphone, Clock, Globe } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Camera,
      title: "Real-Time Issue Reporting",
      description: "Report potholes, streetlight outages, or waste management problems instantly with photo evidence and GPS location data.",
      badge: "Core Feature",
      color: "text-blue-600"
    },
    {
      icon: Users,
      title: "Comprehensive Citizen Engagement",
      description: "Engage with local government authorities through a unified platform. Report issues, access services, and join community discussions.",
      badge: "Community",
      color: "text-green-600"
    },
    {
      icon: Bell,
      title: "Information Hub",
      description: "Stay updated with local services, upcoming events, and critical notifications. Never miss important community developments.",
      badge: "Updates",
      color: "text-orange-600"
    },
    {
      icon: MapPin,
      title: "Interactive Maps",
      description: "Explore your city with integrated maps. Locate public transportation, parks, healthcare facilities, and municipal services.",
      badge: "Navigation",
      color: "text-purple-600"
    },
    {
      icon: MessageSquare,
      title: "Community Forums",
      description: "Participate in forums, surveys, and event calendars. Contribute to local decision-making and connect with fellow residents.",
      badge: "Social",
      color: "text-indigo-600"
    },
    {
      icon: Shield,
      title: "Secure Communication",
      description: "Enjoy encrypted messaging and robust data protection when communicating with local government authorities.",
      badge: "Security",
      color: "text-red-600"
    }
  ];

  const stats = [
    { icon: Clock, label: "24/7 Availability", value: "Always On" },
    { icon: Smartphone, label: "Mobile Optimized", value: "100%" },
    { icon: Globe, label: "Multi-Language", value: "Coming Soon" },
    { icon: Users, label: "Community Members", value: "Growing" }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Features</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Empowering Smart Civic Engagement
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            CitySync transforms how citizens interact with their city through innovative features 
            designed for seamless communication and community engagement.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:shadow-xl hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`p-3 rounded-lg bg-gray-50 group-hover:bg-gray-100 transition-colors ${feature.color}`}>
                      <Icon size={24} />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Built for Modern Cities
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              CitySync leverages cutting-edge technology to create a seamless experience 
              for citizens and municipal authorities alike.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-sm mb-3">
                    <Icon size={20} className="text-blue-600" />
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Join the Smart Citizen Movement?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Download CitySync today and become an active participant in shaping the future of your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Smartphone className="mr-2" size={20} />
              Get Started Now
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
