
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, MapPin, Bell, Users, Camera } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header = ({ activeSection, setActiveSection }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const navItems = [
    { id: "home", label: "Home", icon: MapPin },
    { id: "report", label: "Report Issue", icon: Camera },
    { id: "community", label: "Community", icon: Users },
    { id: "map", label: "City Map", icon: MapPin },
  ];

  const handleNotificationClick = () => {
    toast({
      title: "Notifications",
      description: "You have 3 new updates from your city",
    });
  };

  const NavContent = () => (
    <div className="flex flex-col md:flex-row gap-2 md:gap-4">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <Button
            key={item.id}
            variant={activeSection === item.id ? "default" : "ghost"}
            onClick={() => {
              setActiveSection(item.id);
              setIsOpen(false);
            }}
            className="flex items-center gap-2 justify-start md:justify-center hover:bg-green-50 hover:text-green-700 transition-colors"
          >
            <Icon size={18} />
            {item.label}
          </Button>
        );
      })}
    </div>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveSection("home")}>
            <div className="w-10 h-10 bg-gradient-to-r from-blue-800 to-green-600 rounded-lg flex items-center justify-center shadow-md">
              <MapPin className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">CitySync</h1>
              <p className="text-xs text-gray-600 hidden sm:block">Your Smart Citizen Companion</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <NavContent />
          </nav>

          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              size="sm" 
              className="hidden sm:flex items-center gap-2 hover:bg-blue-50 hover:text-blue-700 border-blue-200"
              onClick={handleNotificationClick}
            >
              <Bell size={16} />
              <span className="hidden lg:inline">Notifications</span>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="md:hidden hover:bg-gray-50">
                  <Menu size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64 bg-white">
                <div className="flex flex-col gap-6 mt-6">
                  <div className="flex items-center gap-3 pb-4 border-b">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-800 to-green-600 rounded-lg flex items-center justify-center">
                      <MapPin className="text-white" size={20} />
                    </div>
                    <div>
                      <h2 className="font-semibold text-gray-900">CitySync</h2>
                      <p className="text-sm text-gray-600">Smart Citizen Companion</p>
                    </div>
                  </div>
                  <NavContent />
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2 hover:bg-blue-50 hover:text-blue-700"
                    onClick={handleNotificationClick}
                  >
                    <Bell size={16} />
                    Notifications
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
