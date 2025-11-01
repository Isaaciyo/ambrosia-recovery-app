import { useState } from "react";
import { Activity, MapPin, Star, Navigation, Calendar, ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

type UserRole = "landing" | "athlete" | "physician" | "mental-therapist" | "organization";

interface OrganizationSelectionProps {
  onComplete: (role: UserRole, id: string) => void;
  onBack: () => void;
}

const mockOrganizations = [
  {
    id: "org1",
    name: "Louisiana Sports Medicine Center",
    location: "Baton Rouge, LA",
    distance: "2.3 miles",
    rating: 4.8,
    reviews: 127,
    specialties: ["ACL Recovery", "Sports Injuries", "Physical Therapy"],
    verified: true,
  },
  {
    id: "org2",
    name: "New Orleans Orthopedic Clinic",
    location: "New Orleans, LA",
    distance: "78 miles",
    rating: 4.9,
    reviews: 203,
    specialties: ["Orthopedic Surgery", "Rehabilitation", "Mental Health"],
    verified: true,
  },
  {
    id: "org3",
    name: "Acadiana Physical Therapy",
    location: "Lafayette, LA",
    distance: "45 miles",
    rating: 4.7,
    reviews: 89,
    specialties: ["Physical Therapy", "Sports Medicine"],
    verified: true,
  },
  {
    id: "org4",
    name: "Shreveport Sports Rehabilitation",
    location: "Shreveport, LA",
    distance: "215 miles",
    rating: 4.6,
    reviews: 64,
    specialties: ["ACL Recovery", "Injury Prevention"],
    verified: true,
  },
];

export function OrganizationSelection({ onComplete, onBack }: OrganizationSelectionProps) {
  const [selectedOrg, setSelectedOrg] = useState<string | null>(null);
  const [showScheduleDialog, setShowScheduleDialog] = useState(false);

  const handleScheduleMeetup = () => {
    setShowScheduleDialog(false);
    if (selectedOrg) {
      onComplete("athlete", "athlete1");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="w-8 h-8 text-blue-600" />
            <span className="text-xl">Ambrosia</span>
          </div>
          <Button variant="ghost" onClick={onBack}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl mb-2">Select Your Healthcare Organization</h1>
            <p className="text-gray-600">
              Choose a verified organization near you. You'll schedule an initial assessment
              before beginning your recovery journey.
            </p>
          </div>

          {/* Search */}
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="Enter your location..."
                    className="pl-10"
                    defaultValue="Baton Rouge, LA"
                  />
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Navigation className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Organizations List */}
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl">Nearby Organizations</h2>
              <Badge variant="secondary">Sorted by proximity</Badge>
            </div>

            {mockOrganizations.map((org) => (
              <Card
                key={org.id}
                className={`cursor-pointer hover:shadow-lg transition-all ${
                  selectedOrg === org.id ? "border-blue-500 ring-2 ring-blue-200" : ""
                }`}
                onClick={() => setSelectedOrg(org.id)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl">{org.name}</h3>
                        {org.verified && (
                          <Badge className="bg-green-100 text-green-800">Verified</Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {org.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Navigation className="w-4 h-4" />
                          {org.distance} away
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                          <span>{org.rating}</span>
                        </div>
                        <span className="text-sm text-gray-600">({org.reviews} reviews)</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {org.specialties.map((specialty, index) => (
                          <Badge key={index} variant="outline" className="border-blue-200">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    {selectedOrg === org.id && (
                      <div className="ml-4">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full" />
                        </div>
                      </div>
                    )}
                  </div>

                  {selectedOrg === org.id && (
                    <div className="pt-4 border-t">
                      <Dialog open={showScheduleDialog} onOpenChange={setShowScheduleDialog}>
                        <DialogTrigger asChild>
                          <Button className="w-full bg-blue-600 hover:bg-blue-700">
                            <Calendar className="w-4 h-4 mr-2" />
                            Schedule Initial Assessment
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Schedule Initial Assessment</DialogTitle>
                            <DialogDescription>
                              Book your first appointment with {org.name}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <Label>Full Name</Label>
                              <Input placeholder="John Doe" />
                            </div>
                            <div>
                              <Label>Email</Label>
                              <Input type="email" placeholder="john@example.com" />
                            </div>
                            <div>
                              <Label>Phone Number</Label>
                              <Input type="tel" placeholder="(555) 123-4567" />
                            </div>
                            <div>
                              <Label>Type of Injury</Label>
                              <Input placeholder="e.g., ACL Tear" />
                            </div>
                            <div>
                              <Label>Preferred Date</Label>
                              <Input type="date" />
                            </div>
                            <div>
                              <Label>Additional Notes</Label>
                              <Textarea
                                placeholder="Any additional information about your injury..."
                                rows={3}
                              />
                            </div>
                            <div className="p-4 bg-blue-50 border border-blue-200 rounded">
                              <p className="text-sm text-blue-900">
                                <strong>Next Steps:</strong> After submitting, a physician from{" "}
                                {org.name} will contact you to confirm your appointment and conduct
                                an initial assessment before creating your personalized recovery
                                plan.
                              </p>
                            </div>
                            <Button
                              className="w-full bg-blue-600 hover:bg-blue-700"
                              onClick={handleScheduleMeetup}
                            >
                              Submit Request
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 p-4 bg-white border rounded-lg">
            <h3 className="text-lg mb-2">Why choose a verified organization?</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>✓ All organizations are certified and accredited</li>
              <li>✓ Licensed healthcare professionals only</li>
              <li>✓ Recommended based on proximity for easier access</li>
              <li>✓ Comprehensive care teams including physical and mental health support</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
