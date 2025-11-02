import { useState } from "react";
import { Activity, Brain, Calendar, LogOut, Plus } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { MessagingInterface } from "./MessagingInterface";
import { Avatar, AvatarFallback } from "./ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface MentalTherapistDashboardProps {
  onLogout: () => void;
  userId: string;
}

const mockClients = [
  {
    id: 1,
    name: "Jordan Martinez",
    injury: "ACL Tear",
    sessionsCompleted: 4,
    totalSessions: 8,
    mentalProgress: 55,
    nextSession: "Nov 2, 2025",
    notes: "Making good progress with anxiety around return-to-play",
  },
  {
    id: 2,
    name: "Sam Chen",
    injury: "Ankle Sprain",
    sessionsCompleted: 6,
    totalSessions: 8,
    mentalProgress: 75,
    nextSession: "Nov 4, 2025",
    notes: "Showing improvement in confidence levels",
  },
];

export function MentalTherapistDashboard({
  onLogout,
  userId,
}: MentalTherapistDashboardProps) {
  const [activeTab, setActiveTab] = useState("clients");

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="w-8 h-8 text-green-600" />
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
          <h1 className="text-3xl mb-2">Mental Therapist Dashboard</h1>
          <p className="text-gray-600">
            Dr. Emily Chen - Licensed Sports Psychologist
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Active Clients</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl">{mockClients.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Sessions This Week</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl">5</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Clearances Issued</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl">12</div>
              <p className="text-sm text-gray-600 mt-1">This month</p>
            </CardContent>
          </Card>
        </div>

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-6"
        >
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="clients">Clients</TabsTrigger>
            <TabsTrigger value="sessions">Sessions</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
          </TabsList>

          <TabsContent value="clients" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl">Client Management</h2>
            </div>

            <div className="grid gap-4">
              {mockClients.map((client) => (
                <Card key={client.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback>
                          {client.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-lg mb-1">{client.name}</h3>
                            <p className="text-sm text-gray-600">
                              {client.injury}
                            </p>
                          </div>
                          <Badge variant="secondary">
                            {client.sessionsCompleted}/{client.totalSessions}{" "}
                            sessions
                          </Badge>
                        </div>
                        <div className="mt-4">
                          <div className="flex justify-between mb-2 text-sm">
                            <span>Mental Health Progress</span>
                            <span>{client.mentalProgress}%</span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full">
                            <div
                              className="h-full bg-green-600 rounded-full"
                              style={{
                                width: `${client.mentalProgress}%`,
                              }}
                            />
                          </div>
                        </div>
                        <div className="mt-4 p-3 bg-gray-50 rounded">
                          <p className="text-sm text-gray-700">
                            {client.notes}
                          </p>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <p className="text-sm text-gray-600">
                            <Calendar className="w-3 h-3 inline-block mr-1" />
                            Next session: {client.nextSession}
                          </p>
                          <div className="flex gap-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button size="sm">
                                  <Plus className="w-4 h-4 mr-2" />
                                  Add Note
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>
                                    Session Notes - {client.name}
                                  </DialogTitle>
                                  <DialogDescription>
                                    Record observations and progress from
                                    therapy session
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="space-y-4">
                                  <div>
                                    <Label>Session Summary</Label>
                                    <Textarea
                                      placeholder="Session observations, progress, and notes..."
                                      rows={5}
                                    />
                                  </div>
                                  <div>
                                    <Label>Current Mental State</Label>
                                    <Select>
                                      <SelectTrigger>
                                        <SelectValue placeholder="Select state" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="excellent">
                                          Excellent - High confidence
                                        </SelectItem>
                                        <SelectItem value="good">
                                          Good - Making progress
                                        </SelectItem>
                                        <SelectItem value="fair">
                                          Fair - Some challenges
                                        </SelectItem>
                                        <SelectItem value="needs-support">
                                          Needs additional support
                                        </SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </div>
                                  <div>
                                    <Label>Progress Update (%)</Label>
                                    <Select>
                                      <SelectTrigger>
                                        <SelectValue placeholder="Update progress" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="60">60%</SelectItem>
                                        <SelectItem value="70">70%</SelectItem>
                                        <SelectItem value="80">80%</SelectItem>
                                        <SelectItem value="90">
                                          90% - Ready for clearance
                                        </SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </div>
                                  <Button className="w-full">
                                    Save Session Notes
                                  </Button>
                                </div>
                              </DialogContent>
                            </Dialog>
                            <Button size="sm" variant="outline">
                              View History
                            </Button>
                            {client.mentalProgress >= 90 && (
                              <Button
                                size="sm"
                                className="bg-green-600 hover:bg-green-700"
                              >
                                Issue Clearance
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sessions">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Sessions</CardTitle>
                <CardDescription>
                  Scheduled therapy appointments
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border-l-4 border-purple-600 bg-purple-50 rounded">
                  <div className="flex items-center justify-between mb-2">
                    <h4>Jordan Martinez</h4>
                    <Badge>Tomorrow 2:00 PM</Badge>
                  </div>
                  <p className="text-sm text-gray-600">
                    Session 5/8 - Return-to-play anxiety management
                  </p>
                </div>

                <div className="p-4 border-l-4 border-green-600 bg-green-50 rounded">
                  <div className="flex items-center justify-between mb-2">
                    <h4>Sam Chen</h4>
                    <Badge variant="secondary">Nov 4, 10:00 AM</Badge>
                  </div>
                  <p className="text-sm text-gray-600">
                    Session 7/8 - Confidence building exercises
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="messages">
            <MessagingInterface role="mental-therapist" />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
