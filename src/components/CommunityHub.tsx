
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Users, MessageSquare, Calendar, ThumbsUp, Search, Plus, TrendingUp, Clock, MapPin } from "lucide-react";

const CommunityHub = () => {
  const [activeTab, setActiveTab] = useState("forums");

  const forumPosts = [
    {
      id: 1,
      title: "New Bike Lane Proposal for Downtown",
      author: "Sarah Chen",
      avatar: "/placeholder.svg",
      category: "Transportation",
      replies: 24,
      likes: 18,
      time: "2 hours ago",
      isHot: true
    },
    {
      id: 2,
      title: "Community Garden Initiative",
      author: "Mike Johnson",
      avatar: "/placeholder.svg",
      category: "Environment",
      replies: 12,
      likes: 31,
      time: "5 hours ago",
      isHot: false
    },
    {
      id: 3,
      title: "Street Lighting Improvements Discussion",
      author: "Emma Rodriguez",
      avatar: "/placeholder.svg",
      category: "Safety",
      replies: 8,
      likes: 15,
      time: "1 day ago",
      isHot: false
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Town Hall Meeting",
      date: "March 15, 2024",
      time: "7:00 PM",
      location: "City Hall",
      attendees: 127,
      category: "Government"
    },
    {
      id: 2,
      title: "Community Clean-up Day",
      date: "March 22, 2024",
      time: "9:00 AM",
      location: "Central Park",
      attendees: 89,
      category: "Environment"
    },
    {
      id: 3,
      title: "Neighborhood Watch Meeting",
      date: "March 28, 2024",
      time: "6:30 PM",
      location: "Community Center",
      attendees: 45,
      category: "Safety"
    }
  ];

  const surveys = [
    {
      id: 1,
      title: "Public Transportation Improvements",
      description: "Help us prioritize transit improvements in your area",
      responses: 234,
      deadline: "March 20, 2024",
      isActive: true
    },
    {
      id: 2,
      title: "Park Renovation Plans",
      description: "Share your ideas for upgrading local parks",
      responses: 156,
      deadline: "March 25, 2024",
      isActive: true
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      Transportation: "bg-blue-100 text-blue-800",
      Environment: "bg-green-100 text-green-800",
      Safety: "bg-red-100 text-red-800",
      Government: "bg-purple-100 text-purple-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Community Hub
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with your neighbors, participate in local discussions, and stay informed about community events and initiatives.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="text-center">
            <CardContent className="p-4">
              <Users className="mx-auto mb-2 text-blue-600" size={24} />
              <div className="text-2xl font-bold text-gray-900">1,247</div>
              <div className="text-sm text-gray-600">Active Members</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-4">
              <MessageSquare className="mx-auto mb-2 text-green-600" size={24} />
              <div className="text-2xl font-bold text-gray-900">89</div>
              <div className="text-sm text-gray-600">Discussions</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-4">
              <Calendar className="mx-auto mb-2 text-purple-600" size={24} />
              <div className="text-2xl font-bold text-gray-900">12</div>
              <div className="text-sm text-gray-600">Upcoming Events</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-4">
              <TrendingUp className="mx-auto mb-2 text-orange-600" size={24} />
              <div className="text-2xl font-bold text-gray-900">156</div>
              <div className="text-sm text-gray-600">Active Surveys</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="forums">Forums</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="surveys">Surveys</TabsTrigger>
          </TabsList>

          {/* Forums Tab */}
          <TabsContent value="forums" className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4 justify-between">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                  <Input placeholder="Search discussions..." className="pl-10" />
                </div>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 w-full md:w-auto">
                <Plus size={18} className="mr-2" />
                Start Discussion
              </Button>
            </div>

            <div className="grid lg:grid-cols-4 gap-6">
              <div className="lg:col-span-3 space-y-4">
                {forumPosts.map((post) => (
                  <Card key={post.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex items-start gap-3 md:gap-4">
                        <Avatar className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0">
                          <AvatarImage src={post.avatar} />
                          <AvatarFallback className="text-xs md:text-sm">{post.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start flex-col sm:flex-row sm:items-center gap-2 mb-2">
                            <h3 className="font-semibold text-sm md:text-base hover:text-blue-600 cursor-pointer line-clamp-2 flex-1">
                              {post.title}
                            </h3>
                            {post.isHot && (
                              <Badge className="bg-red-100 text-red-800 text-xs flex-shrink-0">
                                🔥 Hot
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-2 mb-3 flex-wrap text-xs md:text-sm">
                            <span className="text-gray-600">by {post.author}</span>
                            <Badge className={`text-xs ${getCategoryColor(post.category)}`}>
                              {post.category}
                            </Badge>
                            <span className="text-gray-500">{post.time}</span>
                          </div>
                          <div className="flex items-center gap-3 md:gap-4 text-xs md:text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <MessageSquare size={14} />
                              <span className="hidden xs:inline">{post.replies} replies</span>
                              <span className="xs:hidden">{post.replies}</span>
                            </span>
                            <span className="flex items-center gap-1">
                              <ThumbsUp size={14} />
                              <span className="hidden xs:inline">{post.likes} likes</span>
                              <span className="xs:hidden">{post.likes}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Popular Categories</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm">Transportation</span>
                      <Badge variant="secondary">23</Badge>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm">Environment</span>
                      <Badge variant="secondary">18</Badge>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm">Safety</span>
                      <Badge variant="secondary">15</Badge>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm">Government</span>
                      <Badge variant="secondary">12</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events" className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <h2 className="text-2xl font-bold">Upcoming Events</h2>
              <Button className="bg-green-600 hover:bg-green-700 w-full md:w-auto">
                <Plus size={18} className="mr-2" />
                Create Event
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg leading-tight">{event.title}</CardTitle>
                      <Badge className={`${getCategoryColor(event.category)} text-xs`}>
                        {event.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar size={16} />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock size={16} />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin size={16} />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users size={16} />
                      <span className="text-sm">{event.attendees} attending</span>
                    </div>
                    <Button className="w-full mt-4" variant="outline">
                      Join Event
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Surveys Tab */}
          <TabsContent value="surveys" className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <h2 className="text-2xl font-bold">Active Surveys</h2>
              <Button className="bg-purple-600 hover:bg-purple-700 w-full md:w-auto">
                <Plus size={18} className="mr-2" />
                Create Survey
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {surveys.map((survey) => (
                <Card key={survey.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl leading-tight">{survey.title}</CardTitle>
                    <CardDescription className="text-sm">{survey.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center text-sm text-gray-600">
                      <span>{survey.responses} responses</span>
                      <span>Deadline: {survey.deadline}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${Math.min((survey.responses / 300) * 100, 100)}%` }}
                      ></div>
                    </div>
                    <Button className="w-full">
                      Participate in Survey
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CommunityHub;
