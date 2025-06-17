import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Search, Navigation, Bus, Hospital, School, Trees, Building, Coffee, Utensils } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const InteractiveMap = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  // State: simulate location/result info for prototype
  const [directions, setDirections] = useState<string | null>(null);
  const [recentRoute, setRecentRoute] = useState<string | null>(null);

  const categories = [
    { id: "all", label: "All", icon: MapPin, color: "bg-gray-100 text-gray-800" },
    { id: "transport", label: "Transport", icon: Bus, color: "bg-blue-100 text-blue-800" },
    { id: "healthcare", label: "Healthcare", icon: Hospital, color: "bg-red-100 text-red-800" },
    { id: "education", label: "Education", icon: School, color: "bg-green-100 text-green-800" },
    { id: "parks", label: "Parks", icon: Trees, color: "bg-emerald-100 text-emerald-800" },
    { id: "government", label: "Govt", icon: Building, color: "bg-blue-100 text-blue-800" },
    { id: "dining", label: "Dining", icon: Utensils, color: "bg-orange-100 text-orange-800" },
    { id: "services", label: "Services", icon: Coffee, color: "bg-green-100 text-green-800" }
  ];

  const nearbyLocations = [
    { id: 1, name: "City Hall", category: "government", address: "123 Main St", distance: "0.2 mi", hours: "8-5" },
    { id: 2, name: "Library", category: "education", address: "456 Oak Ave", distance: "0.4 mi", hours: "9-8" },
    { id: 3, name: "Hospital", category: "healthcare", address: "789 Elm St", distance: "0.6 mi", hours: "24/7" },
    { id: 4, name: "River Park", category: "parks", address: "321 River Rd", distance: "0.8 mi", hours: "6-22" },
    { id: 5, name: "Metro", category: "transport", address: "555 Transit Way", distance: "0.3 mi", hours: "5-24" },
  ];

  const issues = [
    { id: 1, type: "Pothole", location: "Main & 1st", status: "Reported", severity: "medium" },
    { id: 2, type: "Light Out", location: "Oak Park", status: "Progress", severity: "low" },
    { id: 3, type: "Water Main", location: "Elm", status: "Critical", severity: "high" }
  ];

  // Filter locations in-memory
  const filteredLocations = nearbyLocations.filter(location =>
    (selectedCategory === "all" || location.category === selectedCategory) &&
    (searchQuery === "" || location.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  function getCategoryIcon(cid: string) {
    const c = categories.find(cat => cat.id === cid);
    return c ? c.icon : MapPin;
  }
  function getCategoryColor(cid: string) {
    const c = categories.find(cat => cat.id === cid);
    return c ? c.color : "bg-gray-100 text-gray-800";
  }
  function getIssueColor(severity: string) {
    switch (severity) {
      case "high": return "bg-red-100 text-red-800 border-red-200";
      case "medium": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default: return "bg-blue-100 text-blue-800 border-blue-200";
    }
  }

  function handleGetDirections() {
    setDirections("Navigation to selected location started!");
    toast({
      title: "Directions",
      description: "Navigation started.",
    });
  }
  function handleRouteClick(name: string) {
    setRecentRoute(name);
    toast({
      title: "Route",
      description: `Route to ${name} active.`,
    });
  }

  return (
    <div className="w-full min-h-screen bg-white py-6 pb-10 md:pb-12">
      <div className="container mx-auto px-1.5 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Sidebar Filters */}
          <div className="col-span-1 flex flex-col gap-4">
            {/* Search/Filter */}
            <Card className="shadow border-0 mb-0">
              <CardHeader className="bg-gradient-to-r from-[#162447] to-green-700 text-white rounded-t-md py-2 px-3">
                <CardTitle className="text-base text-white">Find</CardTitle>
              </CardHeader>
              <CardContent className="pt-3 pb-4 flex flex-col gap-2">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 text-gray-400" size={16} />
                  <Input
                    placeholder="Search nearby..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="pl-8 rounded bg-gray-50 border border-gray-200 py-1 text-sm"
                    style={{fontSize:'14px'}}
                  />
                </div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="rounded bg-gray-50 border border-gray-200 focus:ring-green-500 text-sm">
                    <SelectValue placeholder="Choose category" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200 shadow-lg z-[1200]">
                    {categories.map((cat) => {
                      const Icon = cat.icon;
                      return (
                        <SelectItem key={cat.id} value={cat.id}>
                          <span className="flex items-center gap-2 text-black">
                            <Icon size={15} />
                            {cat.label}
                          </span>
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>
            {/* Quick Categories */}
            <Card className="shadow border-0">
              <CardHeader className="bg-gradient-to-r from-green-600 to-[#162447] text-white rounded-t-md py-2 px-3">
                <CardTitle className="text-base text-white">Quick</CardTitle>
              </CardHeader>
              <CardContent className="pt-2 pb-3">
                <div className="grid grid-cols-2 gap-2">
                  {categories.slice(1).map(cat => {
                    const Icon = cat.icon;
                    const isActive = selectedCategory === cat.id;
                    return (
                      <Button
                        key={cat.id}
                        variant={isActive ? "default" : "outline"}
                        onClick={() => setSelectedCategory(cat.id)}
                        aria-label={cat.label}
                        className={`flex flex-col items-center gap-1 h-auto py-2 px-2 ${
                          isActive
                            ? "bg-green-600 text-white hover:bg-green-700"
                            : "bg-white text-[#162447] hover:bg-green-100"
                        }`}
                      >
                        <Icon size={16} />
                        <span className="text-xs font-medium">{cat.label}</span>
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
            {/* Issues */}
            <Card className="shadow border-0">
              <CardHeader className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-t-md py-2 px-3">
                <CardTitle className="text-base text-white">Issues</CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                {issues.map(issue => (
                  <div key={issue.id}
                    className={`mb-2 px-2.5 py-1.5 rounded border ${getIssueColor(issue.severity)} text-xs`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{issue.type}</span>
                      <Badge variant="secondary" className="text-[10px] capitalize">{issue.status}</Badge>
                    </div>
                    <span className="text-[11px] text-gray-600">{issue.location}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
          {/*Map + List */}
          <div className="col-span-1 md:col-span-3 flex flex-col gap-4">
            {/* Map */}
            <Card className="h-64 md:h-72 shadow border-0 mb-0">
              <CardContent className="p-0 h-full relative">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-green-100 rounded-md flex items-center justify-center relative overflow-hidden">
                  {/* Map Box */}
                  <div className="absolute inset-4 bg-white/40 rounded border-2 border-dashed border-white/30 flex items-center justify-center z-[1]">
                    <div className="text-center">
                      <MapPin size={40} className="mx-auto mb-2 text-[#162447]" />
                      <h3 className="font-semibold text-lg text-[#162447]">Your City Map</h3>
                      <p className="text-xs text-gray-700">Map features coming soon. Use below to test navigation!</p>
                      <Button 
                        className="mt-3 bg-green-600 hover:bg-green-700 text-white px-4 py-1"
                        size="sm"
                        onClick={handleGetDirections}
                      >
                        <Navigation size={14} className="mr-1" />
                        Get Directions
                      </Button>
                      {directions && (
                        <div className="mt-2 text-green-700 text-xs">{directions}</div>
                      )}
                    </div>
                  </div>
                  {/* Pins */}
                  <div className="absolute top-8 left-10 w-3 h-3 bg-red-500 rounded-full border-2 border-white shadow"></div>
                  <div className="absolute bottom-10 right-14 w-3 h-3 bg-green-700 rounded-full border-2 border-white shadow"></div>
                  <div className="absolute top-10 right-20 w-3 h-3 bg-blue-700 rounded-full border-2 border-white shadow"></div>
                </div>
              </CardContent>
            </Card>
            {/* Locations List */}
            <Card className="shadow border-0">
              <CardHeader className="bg-gradient-to-r from-[#162447] to-green-700 text-white rounded-t-md py-2 px-3">
                <CardTitle className="flex items-center justify-between text-base text-white">
                  <span>Nearby Places</span>
                  <Badge className="bg-green-100 text-green-800 ml-2">{filteredLocations.length}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-3 pb-4 flex flex-col gap-2">
                {filteredLocations.length === 0 ? (
                  <div className="text-center text-gray-400 font-medium">No results.</div>
                ) :
                  filteredLocations.map(loc => {
                    const Icon = getCategoryIcon(loc.category);
                    return (
                      <div key={loc.id} className="flex items-center gap-3 p-2 border rounded-md bg-white shadow-sm hover:bg-green-50">
                        <div className="w-8 h-8 bg-blue-50 flex items-center justify-center rounded-full">
                          <Icon size={16} className="text-blue-900" />
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="font-semibold text-black text-sm">{loc.name}</span>
                            <Badge className={getCategoryColor(loc.category) + " font-normal"}>{loc.category}</Badge>
                          </div>
                          <span className="block text-xs text-gray-500">{loc.address} &bull; {loc.distance} &bull; {loc.hours}</span>
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="bg-green-600 text-white border-none hover:bg-green-700 px-2 py-1"
                          onClick={() => handleRouteClick(loc.name)}
                        >
                          <Navigation size={13} className="mr-1" />
                          Route
                        </Button>
                      </div>
                    );
                  })}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;
