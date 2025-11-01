import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Checkbox } from "./ui/checkbox";
import { Calendar, Clock, CheckCircle, Plus, Sparkles } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

interface ExerciseScheduleProps {
  role: "athlete" | "physician";
}

const mockExercises = [
  {
    id: 1,
    name: "Quad Sets",
    description: "Tighten quadriceps muscle for 5 seconds, then relax",
    sets: 3,
    reps: 15,
    duration: "10 min",
    completed: true,
    time: "9:00 AM",
    notes: "Great form today!",
  },
  {
    id: 2,
    name: "Straight Leg Raises",
    description: "Lie on back, lift leg 6 inches off ground",
    sets: 3,
    reps: 10,
    duration: "8 min",
    completed: true,
    time: "9:15 AM",
    notes: "",
  },
  {
    id: 3,
    name: "Hamstring Curls",
    description: "Lying face down, bend knee to lift heel toward buttocks",
    sets: 3,
    reps: 12,
    duration: "10 min",
    completed: false,
    time: "2:00 PM",
    notes: "",
  },
  {
    id: 4,
    name: "Wall Squats",
    description: "Slide down wall until knees at 90 degrees, hold",
    sets: 3,
    reps: 8,
    duration: "12 min",
    completed: false,
    time: "2:15 PM",
    notes: "",
  },
  {
    id: 5,
    name: "Balance Exercises",
    description: "Stand on affected leg, hold for 30 seconds",
    sets: 3,
    reps: 1,
    duration: "5 min",
    completed: false,
    time: "2:30 PM",
    notes: "",
  },
];

const aiTemplates = [
  {
    name: "Early Stage ACL Recovery",
    phase: "Weeks 0-2",
    exercises: ["Range of Motion", "Quad Sets", "Ankle Pumps", "Gentle Walking"],
  },
  {
    name: "Intermediate ACL Recovery",
    phase: "Weeks 3-8",
    exercises: ["Leg Raises", "Wall Squats", "Hamstring Curls", "Balance Work"],
  },
  {
    name: "Advanced ACL Recovery",
    phase: "Weeks 9-16",
    exercises: ["Single Leg Squats", "Lateral Movements", "Sport-Specific Drills"],
  },
];

export function ExerciseSchedule({ role }: ExerciseScheduleProps) {
  const [exercises, setExercises] = useState(mockExercises);
  const [showTemplates, setShowTemplates] = useState(false);

  const toggleComplete = (id: number) => {
    setExercises(
      exercises.map((ex) => (ex.id === id ? { ...ex, completed: !ex.completed } : ex))
    );
  };

  const completedCount = exercises.filter((ex) => ex.completed).length;
  const completionRate = Math.round((completedCount / exercises.length) * 100);

  return (
    <div className="space-y-6">
      {/* Progress Overview */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Today's Schedule - October 31, 2025</CardTitle>
              <CardDescription>
                {completedCount} of {exercises.length} exercises completed ({completionRate}%)
              </CardDescription>
            </div>
            {role === "physician" && (
              <div className="flex gap-2">
                <Dialog open={showTemplates} onOpenChange={setShowTemplates}>
                  <DialogTrigger asChild>
                    <Button variant="outline">
                      <Sparkles className="w-4 h-4 mr-2" />
                      AI Templates
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>AI-Assisted Recovery Templates</DialogTitle>
                      <DialogDescription>
                        Select a template based on recovery phase. You can customize after selection.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      {aiTemplates.map((template, index) => (
                        <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
                          <CardHeader>
                            <CardTitle className="text-lg">{template.name}</CardTitle>
                            <CardDescription>{template.phase}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="flex flex-wrap gap-2 mb-3">
                              {template.exercises.map((exercise, i) => (
                                <Badge key={i} variant="secondary">
                                  {exercise}
                                </Badge>
                              ))}
                            </div>
                            <Button size="sm">Apply Template</Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </DialogContent>
                </Dialog>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="w-4 h-4 mr-2" />
                      Add Exercise
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New Exercise</DialogTitle>
                      <DialogDescription>Create a custom exercise for your patient</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label>Exercise Name</Label>
                        <Input placeholder="e.g., Leg Press" />
                      </div>
                      <div>
                        <Label>Description</Label>
                        <Textarea placeholder="Detailed instructions..." />
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <Label>Sets</Label>
                          <Input type="number" defaultValue={3} />
                        </div>
                        <div>
                          <Label>Reps</Label>
                          <Input type="number" defaultValue={10} />
                        </div>
                        <div>
                          <Label>Time</Label>
                          <Input type="time" defaultValue="14:00" />
                        </div>
                      </div>
                      <Button className="w-full">Add Exercise</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 transition-all duration-500"
              style={{ width: `${completionRate}%` }}
            />
          </div>
        </CardContent>
      </Card>

      {/* Exercise List */}
      <div className="space-y-4">
        {exercises.map((exercise) => (
          <Card key={exercise.id} className={exercise.completed ? "bg-gray-50" : ""}>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                {role === "athlete" && (
                  <Checkbox
                    checked={exercise.completed}
                    onCheckedChange={() => toggleComplete(exercise.id)}
                    className="mt-1"
                  />
                )}
                {role === "physician" && (
                  <div className="mt-1">
                    {exercise.completed ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <Clock className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                )}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className={`text-lg ${exercise.completed ? "line-through text-gray-500" : ""}`}>
                        {exercise.name}
                      </h3>
                      <p className="text-sm text-gray-600">{exercise.description}</p>
                    </div>
                    <Badge variant={exercise.completed ? "secondary" : "default"}>
                      <Clock className="w-3 h-3 mr-1 inline-block" />
                      {exercise.time}
                    </Badge>
                  </div>
                  <div className="flex gap-4 text-sm text-gray-600 mb-2">
                    <span>Sets: {exercise.sets}</span>
                    <span>Reps: {exercise.reps}</span>
                    <span>Duration: {exercise.duration}</span>
                  </div>
                  {exercise.notes && (
                    <div className="mt-2 p-2 bg-blue-50 rounded text-sm">
                      <span className="text-blue-900">Note: {exercise.notes}</span>
                    </div>
                  )}
                  {role === "athlete" && !exercise.completed && (
                    <div className="mt-3">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="sm" variant="outline">
                            Log Progress
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Log Exercise Progress</DialogTitle>
                            <DialogDescription>{exercise.name}</DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <Label>How did it go?</Label>
                              <Textarea placeholder="Notes about your exercise..." />
                            </div>
                            <div>
                              <Label>Difficulty Level</Label>
                              <div className="flex gap-2 mt-2">
                                {["Easy", "Moderate", "Challenging", "Very Hard"].map((level) => (
                                  <Button key={level} variant="outline" size="sm">
                                    {level}
                                  </Button>
                                ))}
                              </div>
                            </div>
                            <Button className="w-full" onClick={() => toggleComplete(exercise.id)}>
                              Complete Exercise
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
