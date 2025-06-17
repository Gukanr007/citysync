import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Camera, MapPin, Upload, AlertCircle, CheckCircle, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ReportIssue = () => {
  const [issueType, setIssueType] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const { toast } = useToast();

  const issueTypes = [
    { value: "pothole", label: "Potholes & Road Issues", icon: "🛣️" },
    { value: "streetlight", label: "Street Lighting", icon: "💡" },
    { value: "waste", label: "Waste Management", icon: "🗑️" },
    { value: "water", label: "Water Issues", icon: "💧" },
    { value: "parks", label: "Parks & Recreation", icon: "🌳" },
    { value: "traffic", label: "Traffic & Parking", icon: "🚦" },
    { value: "other", label: "Other", icon: "📝" }
  ];

  const recentReports = [
    { id: 1, type: "Pothole", location: "Main Street & Oak Ave", status: "In Progress", time: "2 hours ago" },
    { id: 2, type: "Street Light", location: "Park Road", status: "Resolved", time: "1 day ago" },
    { id: 3, type: "Waste Collection", location: "Elm Street", status: "Pending", time: "3 days ago" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!issueType || !description || !location) {
      toast({
        title: "Please fill all required fields",
        description: "Issue type, description, and location are required.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Issue reported successfully!",
      description: "Your report has been submitted to the municipal authorities. You'll receive updates on its progress.",
    });

    // Reset form
    setIssueType("");
    setDescription("");
    setLocation("");
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Resolved":
        return <CheckCircle size={16} className="text-green-600" />;
      case "In Progress":
        return <Clock size={16} className="text-blue-600" />;
      default:
        return <AlertCircle size={16} className="text-orange-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Resolved":
        return "bg-green-100 text-green-800";
      case "In Progress":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-orange-100 text-orange-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Report a City Issue
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Help improve your community by reporting issues that need attention. 
            Our municipal team will review and address your concerns promptly.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Report Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="text-blue-600" size={24} />
                  New Issue Report
                </CardTitle>
                <CardDescription>
                  Provide detailed information about the issue to help us resolve it quickly.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Issue Type */}
                  <div className="space-y-2">
                    <Label htmlFor="issue-type">Issue Type *</Label>
                    <Select value={issueType} onValueChange={setIssueType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select the type of issue" />
                      </SelectTrigger>
                      <SelectContent>
                        {issueTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            <span className="flex items-center gap-2">
                              <span>{type.icon}</span>
                              {type.label}
                            </span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Location */}
                  <div className="space-y-2">
                    <Label htmlFor="location">Location *</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 text-gray-400" size={18} />
                      <Input
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Enter street address or landmark"
                        className="pl-10"
                      />
                    </div>
                    <div className="flex justify-center">
                      <Button type="button" variant="outline" size="sm" className="mt-2">
                        <MapPin size={16} className="mr-2" />
                        Use Current Location
                      </Button>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <Label htmlFor="description">Description *</Label>
                    <Textarea
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Describe the issue in detail. Include any relevant information that would help our team understand and resolve the problem."
                      className="min-h-[120px]"
                    />
                  </div>

                  {/* Photo Upload */}
                  <div className="space-y-2">
                    <Label>Photo Evidence (Optional)</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors cursor-pointer">
                      <Upload className="mx-auto mb-4 text-gray-400" size={32} />
                      <p className="text-gray-600 mb-2">Click to upload photos or drag and drop</p>
                      <p className="text-sm text-gray-500">PNG, JPG, JPEG up to 10MB each</p>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name (Optional)</Label>
                      <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email (Optional)</Label>
                      <Input id="email" type="email" placeholder="Enter your email for updates" />
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                    Submit Report
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Reporting Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex gap-3">
                  <Camera size={18} className="text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">Include Photos</p>
                    <p className="text-xs text-gray-600">Visual evidence helps our team assess the issue faster</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <MapPin size={18} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">Be Specific with Location</p>
                    <p className="text-xs text-gray-600">Exact addresses or landmarks speed up response time</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <AlertCircle size={18} className="text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">Emergency Issues</p>
                    <p className="text-xs text-gray-600">For urgent safety issues, call emergency services first</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Reports */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Reports</CardTitle>
                <CardDescription>Community activity in your area</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentReports.map((report) => (
                  <div key={report.id} className="border-l-4 border-blue-200 pl-4 py-2">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-medium text-sm">{report.type}</p>
                      <Badge className={`text-xs ${getStatusColor(report.status)}`}>
                        {getStatusIcon(report.status)}
                        <span className="ml-1">{report.status}</span>
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-600 mb-1">{report.location}</p>
                    <p className="text-xs text-gray-500">{report.time}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportIssue;
