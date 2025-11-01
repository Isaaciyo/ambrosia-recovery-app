import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { BookOpen, PlayCircle, CheckCircle, Lock } from "lucide-react";

const educationModules = [
  {
    id: 1,
    title: "Understanding ACL Injuries",
    description: "Learn about the anatomy of your knee and how ACL tears occur",
    duration: "12 min",
    completed: true,
    progress: 100,
    lessons: 5,
  },
  {
    id: 2,
    title: "Recovery Timeline & Expectations",
    description: "What to expect during each phase of your recovery journey",
    duration: "15 min",
    completed: true,
    progress: 100,
    lessons: 6,
  },
  {
    id: 3,
    title: "Proper Exercise Form",
    description: "Video demonstrations of correct form for all recovery exercises",
    duration: "20 min",
    completed: false,
    progress: 60,
    lessons: 8,
  },
  {
    id: 4,
    title: "Nutrition for Recovery",
    description: "Optimize your diet to support healing and tissue repair",
    duration: "10 min",
    completed: false,
    progress: 0,
    lessons: 4,
  },
  {
    id: 5,
    title: "Mental Aspects of Recovery",
    description: "Understanding and managing the psychological challenges of injury",
    duration: "18 min",
    completed: false,
    progress: 0,
    lessons: 7,
    locked: false,
  },
  {
    id: 6,
    title: "Return to Sport Preparation",
    description: "Preparing mentally and physically for your return to play",
    duration: "14 min",
    completed: false,
    progress: 0,
    lessons: 5,
    locked: true,
  },
];

const recommendedVideos = [
  {
    title: "5 Common Mistakes in ACL Recovery",
    author: "Dr. Michael Chen, PT",
    views: "12.5K",
    duration: "8:42",
  },
  {
    title: "Building Confidence After Injury",
    author: "Sports Psychology Institute",
    views: "8.3K",
    duration: "12:15",
  },
  {
    title: "Advanced Strengthening Techniques",
    author: "Elite Performance Lab",
    views: "15.2K",
    duration: "10:30",
  },
];

export function EducationModule() {
  return (
    <div className="space-y-6">
      {/* Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Your Learning Progress</CardTitle>
          <CardDescription>Complete educational modules to better understand your recovery</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-2">
            <span>Overall Progress</span>
            <span className="text-2xl">43%</span>
          </div>
          <Progress value={43} className="mb-4" />
          <div className="flex gap-4 text-sm text-gray-600">
            <span>2 of 6 modules completed</span>
            <span>•</span>
            <span>1 in progress</span>
          </div>
        </CardContent>
      </Card>

      {/* Modules */}
      <div>
        <h2 className="text-2xl mb-4">Educational Modules</h2>
        <div className="space-y-4">
          {educationModules.map((module) => (
            <Card key={module.id} className={module.locked ? "opacity-60" : ""}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    {module.completed ? (
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </div>
                    ) : module.locked ? (
                      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                        <Lock className="w-6 h-6 text-gray-400" />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-blue-600" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-lg mb-1">{module.title}</h3>
                        <p className="text-sm text-gray-600">{module.description}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary">{module.duration}</Badge>
                        {module.locked && (
                          <Badge variant="outline" className="ml-2">
                            Locked
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <span>{module.lessons} lessons</span>
                      {!module.completed && !module.locked && (
                        <>
                          <span>•</span>
                          <span>{module.progress}% complete</span>
                        </>
                      )}
                    </div>
                    {!module.completed && !module.locked && module.progress > 0 && (
                      <Progress value={module.progress} className="mb-3" />
                    )}
                    {module.locked ? (
                      <p className="text-sm text-gray-500">
                        Complete previous modules to unlock
                      </p>
                    ) : (
                      <Button
                        variant={module.completed ? "outline" : "default"}
                        size="sm"
                      >
                        {module.completed ? "Review" : module.progress > 0 ? "Continue" : "Start"}
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recommended Videos */}
      <div>
        <h2 className="text-2xl mb-4">Recommended Videos</h2>
        <Card>
          <CardHeader>
            <CardTitle>Expert Insights & Tips</CardTitle>
            <CardDescription>Curated content from healthcare professionals</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recommendedVideos.map((video, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                <div className="w-32 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded flex items-center justify-center">
                  <PlayCircle className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="mb-1">{video.title}</h4>
                  <p className="text-sm text-gray-600">{video.author}</p>
                  <div className="flex items-center gap-3 text-sm text-gray-500 mt-1">
                    <span>{video.views} views</span>
                    <span>•</span>
                    <span>{video.duration}</span>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <PlayCircle className="w-5 h-5" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
