import { useState } from "react";
import { Activity, MessageSquare, BookOpen, Trophy, Calendar, TrendingUp, LogOut, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { StatusCard } from "./StatusCard";
import { ExerciseSchedule } from "./ExerciseSchedule";
import { MessagingInterface } from "./MessagingInterface";
import { EducationModule } from "./EducationModule";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

interface AthleteDashboardProps {
  onLogout: () => void;
  userId: string;
}

const mockAthleteData = {
  name: "Jordan Martinez",
  injury: "ACL Tear - Right Knee",
  injuryDate: "2025-09-15",
  organization: "Louisiana Sports Medicine Center",
  physician: "Dr. Sarah Johnson",
  physicalTherapist: "Mike Thompson, PT",
  mentalTherapist: "Dr. Emily Chen",
  overallProgress: 67,
  physicalProgress: 72,
  mentalProgress: 55,
  currentPhase: "Intermediate Recovery",
  streak: 12,
  achievements: ["7-Day Streak", "First Month Complete", "50% Progress"],
  nextAppointment: "2025-11-05 10:00 AM",
};

export function AthleteDashboard({ onLogout, userId }: AthleteDashboardProps) {
  const [activeTab, setActiveTab] = useState("overview");

  const DashboardContent = () => (
    <>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl mb-2">Welcome back, {mockAthleteData.name}! 👋</h1>
          <p className="text-gray-600">Keep up the great work on your recovery journey</p>
        </div>
        <Button variant="outline" onClick={onLogout}>
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="exercises">Exercises</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="progress">Progress</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Status Card */}
          <StatusCard
            physicalProgress={mockAthleteData.physicalProgress}
            mentalProgress={mockAthleteData.mentalProgress}
            currentPhase={mockAthleteData.currentPhase}
            lastUpdated="2 hours ago"
            canEdit={false}
          />

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Current Streak</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl">🔥 {mockAthleteData.streak} days</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Overall Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl">{mockAthleteData.overallProgress}%</div>
                <Progress value={mockAthleteData.overallProgress} className="mt-2" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl">
                  <Trophy className="inline-block text-yellow-500" /> {mockAthleteData.achievements.length}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Next Appointment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm">
                  <Calendar className="inline-block w-4 h-4 mr-1" />
                  Nov 5, 10:00 AM
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Care Team */}
          <Card>
            <CardHeader>
              <CardTitle>Your Care Team</CardTitle>
              <CardDescription>Healthcare professionals supporting your recovery</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p>{mockAthleteData.physician}</p>
                  <p className="text-sm text-gray-600">Orthopedic Surgeon</p>
                </div>
                <Button size="sm" variant="outline">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Message
                </Button>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p>{mockAthleteData.physicalTherapist}</p>
                  <p className="text-sm text-gray-600">Physical Therapist</p>
                </div>
                <Button size="sm" variant="outline">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Message
                </Button>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p>{mockAthleteData.mentalTherapist}</p>
                  <p className="text-sm text-gray-600">Mental Health Therapist</p>
                  <Badge variant="secondary" className="mt-1">Optional Support</Badge>
                </div>
                <Button size="sm" variant="outline">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Message
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Achievements</CardTitle>
              <CardDescription>Milestones you've reached</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {mockAthleteData.achievements.map((achievement, index) => (
                  <Badge key={index} variant="default" className="py-2 px-4">
                    <Trophy className="w-4 h-4 mr-2 inline-block" />
                    {achievement}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="exercises">
          <ExerciseSchedule role="athlete" />
        </TabsContent>

        <TabsContent value="messages">
          <MessagingInterface role="athlete" />
        </TabsContent>

        <TabsContent value="education">
          <EducationModule />
        </TabsContent>

        <TabsContent value="progress">
          <Card>
            <CardHeader>
              <CardTitle>Progress History</CardTitle>
              <CardDescription>Track your recovery over time</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span>Physical Recovery</span>
                  <span>{mockAthleteData.physicalProgress}%</span>
                </div>
                <Progress value={mockAthleteData.physicalProgress} />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>Mental Health Progress</span>
                  <span>{mockAthleteData.mentalProgress}%</span>
                </div>
                <Progress value={mockAthleteData.mentalProgress} />
              </div>

              <div className="space-y-4 mt-8">
                <h3 className="text-lg">Recovery Timeline</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-32 text-sm text-gray-600">Oct 31, 2025</div>
                    <div className="flex-1">
                      <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
                        <p>Completed Week 8 exercises with excellent form</p>
                        <p className="text-sm text-gray-600 mt-1">Updated by Mike Thompson, PT</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-32 text-sm text-gray-600">Oct 24, 2025</div>
                    <div className="flex-1">
                      <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                        <p>Started mental health support sessions</p>
                        <p className="text-sm text-gray-600 mt-1">Dr. Emily Chen</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-32 text-sm text-gray-600">Oct 15, 2025</div>
                    <div className="flex-1">
                      <div className="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">
                        <p>Progressed to intermediate recovery phase</p>
                        <p className="text-sm text-gray-600 mt-1">Updated by Dr. Sarah Johnson</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="w-8 h-8 text-blue-600" />
            <span className="text-xl">Ambrosia</span>
          </div>
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4 mt-8">
                <Button variant="ghost" onClick={() => setActiveTab("overview")}>Overview</Button>
                <Button variant="ghost" onClick={() => setActiveTab("exercises")}>Exercises</Button>
                <Button variant="ghost" onClick={() => setActiveTab("messages")}>Messages</Button>
                <Button variant="ghost" onClick={() => setActiveTab("education")}>Education</Button>
                <Button variant="ghost" onClick={() => setActiveTab("progress")}>Progress</Button>
                <Button variant="outline" onClick={onLogout}>Logout</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <DashboardContent />
      </main>
    </div>
  );
}
