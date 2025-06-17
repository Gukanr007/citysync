import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MapPin, Bell, Users, Camera, Navigation } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const navItems = [
  { id: "home", label: "Home", icon: MapPin },
  { id: "report", label: "Report Issue", icon: Camera },
  { id: "community", label: "Community", icon: Users },
  { id: "map", label: "Map", icon: Navigation },
];

const Header = ({ activeSection, setActiveSection }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  // Sync section in sessionStorage for persistence
  useEffect(() => {
    sessionStorage.setItem("activeSection", activeSection);
  }, [activeSection]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#162447] border-b border-gray-100 shadow">
      <div className="container mx-auto px-3 py-2 flex justify-between items-center min-h-[60px]">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setActiveSection("home")}
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-green-600 to-blue-900 flex items-center justify-center shadow">
            <MapPin className="text-white" size={22} />
          </div>
          <span className="font-bold text-white text-lg tracking-tight">CitySync</span>
        </div>
        <div className="hidden md:flex items-center">
          {/* Navigation: force visible and readable text */}
          <nav className="flex flex-col md:flex-row gap-2 md:gap-3 items-start md:items-center">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <Button
                  key={item.id}
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                  onClick={() => {
                    setActiveSection(item.id);
                  }}
                  className={`gap-2 px-3 ${
                    isActive
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : "hover:bg-green-100 hover:text-[#162447] text-white"
                  }`}
                  style={{
                    fontWeight: isActive ? 600 : 500,
                    fontSize: "15px",
                  }}
                >
                  <Icon size={18} />
                  <span className="text-white">{item.label}</span>
                </Button>
              );
            })}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() =>
              toast({
                title: "Notifications",
                description: "You have 3 updates.",
              })
            }
            className="bg-white border-none text-[#162447] hover:bg-green-100"
          >
            <Bell size={18} />
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden bg-white border-none text-[#162447] hover:bg-green-100"
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"
                  viewBox="0 0 24 24"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#162447] text-white w-72 p-6 z-[1100] border-l-0">
              <div className="mb-5 flex items-center gap-2">
                <MapPin size={20} className="text-green-400" />
                <span className="font-bold text-xl text-white">CitySync</span>
              </div>
              <nav className="flex flex-col gap-3">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  return (
                    <Button
                      key={item.id}
                      variant={isActive ? "default" : "ghost"}
                      size="sm"
                      onClick={() => {
                        setActiveSection(item.id);
                        setIsOpen(false);
                      }}
                      className={`gap-2 px-3 ${
                        isActive
                          ? "bg-green-600 text-white hover:bg-green-700"
                          : "hover:bg-green-100 hover:text-[#162447] text-white"
                      }`}
                      style={{
                        fontWeight: isActive ? 600 : 500,
                        fontSize: "15px",
                      }}
                    >
                      <Icon size={18} />
                      <span className="text-white">{item.label}</span>
                    </Button>
                  );
                })}
              </nav>
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  toast({
                    title: "Notifications",
                    description: "You have 3 updates.",
                  })
                }
                className="mt-6 text-[#162447] border-none w-full bg-white hover:bg-green-100"
              >
                <Bell size={18} />
                Notifications
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
