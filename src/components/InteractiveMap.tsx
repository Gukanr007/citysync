import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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

  const categories = [
    { id: "all", label: "All Locations", icon: MapPin, color: "bg-gray-100 text-gray-800" },
    { id: "transport", label: "Transportation", icon: Bus, color: "bg-blue-100 text-blue-800" },
    { id: "healthcare", label: "Healthcare", icon: Hospital, color: "bg-red-100 text-red-800" },
    { id: "education", label: "Education", icon: School, color: "bg-green-100 text-green-800" },
    { id: "parks", label: "Parks & Recreation", icon: Trees, color: "bg-emerald-100 text-emerald-800" },
    { id: "government", label: "Government", icon: Building, color: "bg-blue-100 text-blue-800" },
    { id: "dining", label: "Dining", icon: Utensils, color: "bg-orange-100 text-orange-800" },
    { id: "services", label: "Services", icon: Coffee, color: "bg-green-100 text-green-800" }
  ];

  const nearbyLocations = [
    { id: 1, name: "City Hall", category: "government", address: "123 Main St", distance: "0.2 miles", hours: "8 AM - 5 PM" },
    { id: 2, name: "Central Library", category: "education", address: "456 Oak Ave", distance: "0.4 miles", hours: "9 AM - 8 PM" },
    { id: 3, name: "Memorial Hospital", category: "healthcare", address: "789 Elm St", distance: "0.6 miles", hours: "24/7" },
    { id: 4, name: "Riverside Park", category: "parks", address: "321 River Rd", distance: "0.8 miles", hours: "6 AM - 10 PM" },
    { id: 5, name: "Metro Station", category: "transport", address: "555 Transit Way", distance: "0.3 miles", hours: "5 AM - 12 AM" },
    { id: 6, name: "Fire Station #3", category: "government", address: "777 Safety Blvd", distance: "0.5 miles", hours: "24/7" }
  ];

  const reportedIssues = [
    { id: 1, type: "Pothole", location: "Main St & 1st Ave", status: "reported", severity: "medium" },
    { id: 2, type: "Street Light Out", location: "Oak Park", status: "in-progress", severity: "low" },
    { id: 3, type: "Water Main", location: "Elm Street", status: "critical", severity: "high" }
  ];

  const filteredLocations = nearbyLocations.filter(location => 
    (selectedCategory === "all" || location.category === selectedCategory) &&
    (searchQuery === "" || location.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : MapPin;
  };

  const getCategoryColor = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.color : "bg-gray-100 text-gray-800";
  };

  const getIssueColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200";
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-blue-100 text-blue-800 border-blue-200";
    }
  };

  const handleGetDirections = () => {
    toast({
      title: "Getting Directions",
      description: "Opening navigation app...",
    });
  };

  const handleRouteClick = (locationName: string) => {
    toast({
      title: "Route to " + locationName,
      description: "Calculating best route...",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Interactive City Map
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore your city with ease. Find public services, transportation, healthcare facilities, 
            and more with our comprehensive interactive map.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Search and Filter */}
            <Card className="shadow-md border-0">
              <CardHeader className="bg-gradient-to-r from-blue-800 to-green-600 text-white rounded-t-lg">
                <CardTitle className="text-lg">Search & Filter</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <div className="relative">
                  <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                  <Input
                    placeholder="Search locations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200 shadow-lg">
                    {categories.map((category) => {
                      const Icon = category.icon;
                      return (
                        <SelectItem key={category.id} value={category.id} className="hover:bg-gray-50">
                          <span className="flex items-center gap-2">
                            <Icon size={16} />
                            {category.label}
                          </span>
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Category Quick Filter */}
            <Card className="shadow-md border-0">
              <CardHeader className="bg-gradient-to-r from-green-600 to-blue-800 text-white rounded-t-lg">
                <CardTitle className="text-lg">Quick Categories</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 gap-2">
                  {categories.slice(1).map((category) => {
                    const Icon = category.icon;
                    return (
                      <Button
                        key={category.id}
                        variant={selectedCategory === category.id ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(category.id)}
                        className="flex flex-col items-center gap-1 h-auto p-3 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                      >
                        <Icon size={18} />
                        <span className="text-xs">{category.label.split(' ')[0]}</span>
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Reported Issues */}
            <Card className="shadow-md border-0">
              <CardHeader className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-t-lg">
                <CardTitle className="text-lg">Nearby Issues</CardTitle>
                <CardDescription className="text-red-100">Community-reported problems</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 pt-6">
                {reportedIssues.map((issue) => (
                  <div key={issue.id} className={`p-3 rounded-lg border ${getIssueColor(issue.severity)} hover:shadow-md transition-shadow cursor-pointer`}>
                    <div className="flex justify-between items-start mb-1">
                      <p className="font-medium text-sm">{issue.type}</p>
                      <Badge variant="secondary" className="text-xs">
                        {issue.status}
                      </Badge>
                    </div>
                    <p className="text-xs opacity-75">{issue.location}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Map Area */}
          <div className="lg:col-span-3 space-y-6">
            {/* Map Placeholder */}
            <Card className="h-96 shadow-lg border-0">
              <CardContent className="p-0 h-full">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                  {/* Map simulation with pins */}
                  <div className="absolute inset-4 bg-white/20 rounded border-2 border-dashed border-white/40 flex items-center justify-center">
                    <div className="text-center text-gray-700">
                      <MapPin size={48} className="mx-auto mb-4 text-blue-800" />
                      <h3 className="text-xl font-semibold mb-2">Interactive Map View</h3>
                      <p className="text-sm opacity-75 max-w-md">
                        This would integrate with Google Maps API to show real locations, routes, and city services.
                      </p>
                      <Button 
                        className="mt-4 bg-green-600 hover:bg-green-700 text-white shadow-lg" 
                        variant="default"
                        onClick={handleGetDirections}
                      >
                        <Navigation size={16} className="mr-2" />
                        Get Directions
                      </Button>
                    </div>
                  </div>
                  
                  {/* Sample map pins */}
                  <div className="absolute top-8 left-8 w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg animate-bounce"></div>
                  <div className="absolute top-16 right-12 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg"></div>
                  <div className="absolute bottom-12 left-16 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg"></div>
                  <div className="absolute bottom-8 right-8 w-4 h-4 bg-purple-500 rounded-full border-2 border-white shadow-lg"></div>
                </div>
              </CardContent>
            </Card>

            {/* Location List */}
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-blue-800 to-green-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center justify-between">
                  <span>Nearby Locations</span>
                  <Badge variant="secondary" className="bg-white text-blue-800">{filteredLocations.length} found</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {filteredLocations.map((location) => {
                    const Icon = getCategoryIcon(location.category);
                    return (
                      <div key={location.id} className="flex items-start gap-4 p-4 border rounded-lg hover:shadow-md transition-all duration-200 hover:bg-gray-50">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <Icon size={20} className="text-blue-800" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-semibold text-gray-900">{location.name}</h3>
                            <Badge className={getCategoryColor(location.category)}>
                              {location.category}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-1">{location.address}</p>
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <span>{location.distance}</span>
                            <span>{location.hours}</span>
                          </div>
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="hover:bg-green-50 hover:text-green-700 border-green-200"
                          onClick={() => handleRouteClick(location.name)}
                        >
                          <Navigation size={14} className="mr-1" />
                          Route
                        </Button>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;
