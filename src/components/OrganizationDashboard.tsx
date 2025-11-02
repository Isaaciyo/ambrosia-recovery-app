import {
  Activity,
  Users,
  Star,
  TrendingUp,
  LogOut,
  MapPin,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface OrganizationDashboardProps {
  onLogout: () => void;
  userId: string;
}

const mockStaff = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    image: "",
    role: "Orthopedic Surgeon",
    patients: 12,
    rating: 4.9,
  },
  {
    id: 2,
    name: "Mike Thompson",
    image: "",
    role: "Physical Therapist",
    patients: 18,
    rating: 4.8,
  },
  {
    id: 3,
    name: "Dr. Emily Chen",
    image: "",
    role: "Sports Psychologist",
    patients: 8,
    rating: 5.0,
  },
  {
    id: 4,
    name: "Dr. Robert Lee",
    image: "",
    role: "Orthopedic Surgeon",
    patients: 15,
    rating: 4.7,
  },
];

export function OrganizationDashboard({
  onLogout,
  userId,
}: OrganizationDashboardProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="w-8 h-8 text-gray-900" />
            <span className="text-xl">Ambrosia</span>
          </div>
          <Button variant="outline" onClick={onLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl mb-2">Organization Dashboard</h1>
          <p className="text-gray-600">Louisiana Sports Medicine Center</p>
          <div className="flex items-center gap-2 mt-2">
            <MapPin className="w-4 h-4 text-gray-600" />
            <span className="text-sm text-gray-600">
              Baton Rouge, Louisiana
            </span>
            <Badge variant="secondary" className="ml-2">
              <Star className="w-3 h-3 mr-1 inline-block fill-yellow-500 text-yellow-500" />
              4.8 Rating
            </Badge>
            <Badge className="bg-green-100 text-green-800">Verified</Badge>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Total Staff</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl">{mockStaff.length}</div>
              <p className="text-sm text-gray-600 mt-1">
                Healthcare professionals
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Active Patients</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl">53</div>
              <p className="text-sm text-gray-600 mt-1">
                Currently in treatment
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Success Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl">87%</div>
              <p className="text-sm text-gray-600 mt-1">
                Return-to-play clearances
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Organization Rating</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl flex items-center">
                <Star className="w-8 h-8 mr-2 fill-yellow-500 text-yellow-500" />
                4.8
              </div>
              <p className="text-sm text-gray-600 mt-1">Based on 127 reviews</p>
            </CardContent>
          </Card>
        </div>

        {/* Staff Management */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Staff Directory</CardTitle>
            <CardDescription>
              Healthcare professionals at your facility
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockStaff.map((staff) => (
                <div
                  key={staff.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12">
                      {staff.image ? (
                        <AvatarImage src={staff.image} />
                      ) : (
                        <AvatarFallback>
                          {staff.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      )}
                    </Avatar>
                    <div>
                      <h4>{staff.name}</h4>
                      <p className="text-sm text-gray-600">{staff.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <p className="text-2xl">{staff.patients}</p>
                      <p className="text-sm text-gray-600">Patients</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                      <span className="text-lg">{staff.rating}</span>
                    </div>
                    <Button variant="outline" size="sm">
                      View Profile
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Analytics */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Patient Outcomes</CardTitle>
              <CardDescription>Recovery statistics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span>Successful Recoveries</span>
                  <span>87%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-full w-[87%] bg-green-600 rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>In Progress</span>
                  <span>53 patients</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-full w-[65%] bg-blue-600 rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Average Recovery Time</span>
                  <span>16 weeks</span>
                </div>
                <p className="text-sm text-gray-600">For ACL injuries</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Reviews</CardTitle>
              <CardDescription>Patient feedback</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-gray-50 rounded">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-500 text-yellow-500"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">2 days ago</span>
                </div>
                <p className="text-sm">
                  "Excellent care and support throughout my ACL recovery. The
                  team was professional and caring."
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-500 text-yellow-500"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">1 week ago</span>
                </div>
                <p className="text-sm">
                  "The mental health support made all the difference in my
                  recovery journey. Highly recommend!"
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
