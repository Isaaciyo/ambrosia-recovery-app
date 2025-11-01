import { useState } from "react";
import {
  Activity,
  Users,
  Calendar,
  TrendingUp,
  LogOut,
  Menu,
  Plus,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./ui/tabs";
import { Badge } from "./ui/badge";
import { StatusCard } from "./StatusCard";
import { ExerciseSchedule } from "./ExerciseSchedule";
import { MessagingInterface } from "./MessagingInterface";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Avatar, AvatarFallback } from "./ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface PhysicianDashboardProps {
  onLogout: () => void;
  userId: string;
}

const mockPatients = [
  {
    id: 1,
    name: "Jordan Martinez",
    injury: "ACL Tear",
    phase: "Intermediate Recovery",
    physicalProgress: 72,
    mentalProgress: 55,
    nextAppointment: "Nov 5, 2025",
    status: "on-track",
  },
  {
    id: 2,
    name: "Alex Rivera",
    injury: "Meniscus Tear",
    phase: "Advanced Rehabilitation",
    physicalProgress: 85,
    mentalProgress: 90,
    nextAppointment: "Nov 3, 2025",
    status: "excellent",
  },
  {
    id: 3,
    name: "Taylor Kim",
    injury: "Shoulder Dislocation",
    phase: "Early Recovery",
    physicalProgress: 35,
    mentalProgress: 40,
    nextAppointment: "Nov 1, 2025",
    status: "needs-attention",
  },
  {
    id: 4,
    name: "Morgan Lee",
    injury: "Hamstring Strain",
    phase: "Advanced Rehabilitation",
    physicalProgress: 92,
    mentalProgress: 85,
    nextAppointment: "Nov 8, 2025",
    status: "excellent",
  },
];

export function PhysicianDashboard({
  onLogout,
  userId,
}: PhysicianDashboardProps) {
  const [activeTab, setActiveTab] = useState("patients");
  const [selectedPatient, setSelectedPatient] = useState<
    number | null
  >(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent":
        return "bg-green-100 text-green-800";
      case "on-track":
        return "bg-blue-100 text-blue-800";
      case "needs-attention":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const DashboardContent = () => (
    <>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl mb-2">Physician Dashboard</h1>
          <p className="text-gray-600">
            Dr. Sarah Johnson - Louisiana Sports Medicine Center
          </p>
        </div>
        <Button variant="outline" onClick={onLogout}>
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">
              Active Patients
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl">
              {mockPatients.length}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm">
              Appointments Today
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl">3</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm">
              Pending Reviews
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl">5</div>
            <p className="text-sm text-gray-600 mt-1">
              AI suggestions
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm">
              Avg Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl">71%</div>
          </CardContent>
        </Card>
      </div>

      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-6"
      >
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="patients">Patients</TabsTrigger>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="patients" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl">Patient Management</h2>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-purple-600 hover:bg-purple-800">
                  <Plus className="w-4 h-4 mr-2" />
                  Register New Patient
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>
                    Register New Patient
                  </DialogTitle>
                  <DialogDescription>
                    Initial patient registration and assessment
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>First Name</Label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <Label>Last Name</Label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <Label>Injury Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select injury type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="acl">
                          ACL Tear
                        </SelectItem>
                        <SelectItem value="meniscus">
                          Meniscus Tear
                        </SelectItem>
                        <SelectItem value="shoulder">
                          Shoulder Injury
                        </SelectItem>
                        <SelectItem value="hamstring">
                          Hamstring Strain
                        </SelectItem>
                        <SelectItem value="ankle">
                          Ankle Sprain
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Initial Assessment Notes</Label>
                    <Input placeholder="Initial evaluation findings..." />
                  </div>
                  <div>
                    <Label>Recovery Phase</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select phase" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="early">
                          Early Recovery
                        </SelectItem>
                        <SelectItem value="intermediate">
                          Intermediate Recovery
                        </SelectItem>
                        <SelectItem value="advanced">
                          Advanced Rehabilitation
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-800">
                    Register Patient
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid gap-4">
            {mockPatients.map((patient) => (
              <Card
                key={patient.id}
                className="cursor-pointer hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback>
                        {patient.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg mb-1">
                            {patient.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {patient.injury}
                          </p>
                        </div>
                        <Badge
                          className={getStatusColor(
                            patient.status,
                          )}
                        >
                          {patient.status.replace("-", " ")}
                        </Badge>
                      </div>
                      <div className="grid md:grid-cols-3 gap-4 mt-4">
                        <div>
                          <p className="text-sm text-gray-600">
                            Physical Progress
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex-1 h-2 bg-gray-200 rounded-full">
                              <div
                                className="h-full bg-blue-600 rounded-full"
                                style={{
                                  width: `${patient.physicalProgress}%`,
                                }}
                              />
                            </div>
                            <span className="text-sm">
                              {patient.physicalProgress}%
                            </span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">
                            Mental Progress
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex-1 h-2 bg-gray-200 rounded-full">
                              <div
                                className="h-full bg-purple-600 rounded-full"
                                style={{
                                  width: `${patient.mentalProgress}%`,
                                }}
                              />
                            </div>
                            <span className="text-sm">
                              {patient.mentalProgress}%
                            </span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">
                            Next Appointment
                          </p>
                          <p className="text-sm mt-1">
                            <Calendar className="w-3 h-3 inline-block mr-1" />
                            {patient.nextAppointment}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button
                          size="sm"
                          onClick={() =>
                            setSelectedPatient(patient.id)
                          }
                        >
                          View Details
                        </Button>
                        <Button size="sm" variant="outline">
                          Update Status
                        </Button>
                        <Button size="sm" variant="outline">
                          Message
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {selectedPatient && (
            <Dialog
              open={!!selectedPatient}
              onOpenChange={() => setSelectedPatient(null)}
            >
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>
                    {
                      mockPatients.find(
                        (p) => p.id === selectedPatient,
                      )?.name
                    }
                  </DialogTitle>
                  <DialogDescription>
                    {
                      mockPatients.find(
                        (p) => p.id === selectedPatient,
                      )?.injury
                    }{" "}
                    -{" "}
                    {
                      mockPatients.find(
                        (p) => p.id === selectedPatient,
                      )?.phase
                    }
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-6">
                  <StatusCard
                    physicalProgress={
                      mockPatients.find(
                        (p) => p.id === selectedPatient,
                      )?.physicalProgress || 0
                    }
                    mentalProgress={
                      mockPatients.find(
                        (p) => p.id === selectedPatient,
                      )?.mentalProgress || 0
                    }
                    currentPhase={
                      mockPatients.find(
                        (p) => p.id === selectedPatient,
                      )?.phase || ""
                    }
                    lastUpdated="2 hours ago"
                    canEdit={true}
                    onEdit={() => alert("Update status card")}
                  />
                  <ExerciseSchedule role="physician" />
                </div>
              </DialogContent>
            </Dialog>
          )}
        </TabsContent>

        <TabsContent value="schedule">
          <Card>
            <CardHeader>
              <CardTitle>
                Today's Schedule - October 31, 2025
              </CardTitle>
              <CardDescription>
                Upcoming appointments and tasks
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 border-l-4 border-blue-600 bg-blue-50 rounded">
                <div className="flex items-center justify-between mb-2">
                  <h4>Jordan Martinez - Follow-up</h4>
                  <Badge>In 30 min</Badge>
                </div>
                <p className="text-sm text-gray-600">
                  10:00 AM - 10:30 AM
                </p>
                <p className="text-sm mt-2">
                  Review progress and adjust recovery plan
                </p>
              </div>

              <div className="p-4 border-l-4 border-green-600 bg-green-50 rounded">
                <div className="flex items-center justify-between mb-2">
                  <h4>Alex Rivera - Final Assessment</h4>
                  <Badge variant="secondary">2:00 PM</Badge>
                </div>
                <p className="text-sm text-gray-600">
                  2:00 PM - 2:45 PM
                </p>
                <p className="text-sm mt-2">
                  Final clearance examination
                </p>
              </div>

              <div className="p-4 border-l-4 border-purple-600 bg-purple-50 rounded">
                <div className="flex items-center justify-between mb-2">
                  <h4>Taylor Kim - Initial Consultation</h4>
                  <Badge variant="secondary">4:00 PM</Badge>
                </div>
                <p className="text-sm text-gray-600">
                  4:00 PM - 4:30 PM
                </p>
                <p className="text-sm mt-2">
                  New patient evaluation
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="messages">
          <MessagingInterface role="physician" />
        </TabsContent>

        <TabsContent value="analytics">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Patient Outcomes</CardTitle>
                <CardDescription>
                  Recovery success rates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Completed Recoveries</span>
                      <span>32 patients</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-full w-[85%] bg-green-600 rounded-full" />
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      85% return-to-play rate
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>In Progress</span>
                      <span>12 patients</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-full w-[67%] bg-blue-600 rounded-full" />
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      67% average progress
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AI Suggestions</CardTitle>
                <CardDescription>
                  Pending physician approval
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded">
                  <p className="text-sm mb-2">
                    <strong>Jordan Martinez:</strong> AI
                    suggests progressing to advanced exercises
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm">Approve</Button>
                    <Button size="sm" variant="outline">
                      Modify
                    </Button>
                    <Button size="sm" variant="ghost">
                      Reject
                    </Button>
                  </div>
                </div>

                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded">
                  <p className="text-sm mb-2">
                    <strong>Taylor Kim:</strong> AI recommends
                    mental health referral
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm">Approve</Button>
                    <Button size="sm" variant="outline">
                      Modify
                    </Button>
                    <Button size="sm" variant="ghost">
                      Reject
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="w-8 h-8 text-purple-600" />
            <span className="text-xl">Ambrosia</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <DashboardContent />
      </main>
    </div>
  );
}