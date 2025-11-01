import {
  Activity,
  User,
  Stethoscope,
  Brain,
  Building2,
  ArrowLeft,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

type UserRole =
  | "landing"
  | "athlete"
  | "physician"
  | "mental-therapist"
  | "organization";

interface RoleSelectionProps {
  onRoleSelect: (role: UserRole, id?: string) => void;
  onBack: () => void;
}

export function RoleSelection({
  onRoleSelect,
  onBack,
}: RoleSelectionProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="w-8 h-8 text-gray-900" />
            <span className="text-xl">Ambrosia</span>
          </div>
          <Button variant="ghost" onClick={onBack}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl mb-4">Select Your Role</h1>
            <p className="text-xl text-gray-600">
              Choose how you'd like to access Ambrosia
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Athlete - Blue */}
            <Card className="cursor-pointer hover:shadow-xl hover:border-blue-300 transition-all group">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <User className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>I'm an Athlete</CardTitle>
                <CardDescription>
                  Track your recovery journey, communicate with
                  your care team, and work towards returning to
                  play
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-400 cursor-pointer"
                  onClick={() => onRoleSelect("athlete", "new")}
                >
                  Continue as Athlete
                </Button>
              </CardContent>
            </Card>

            {/* Physician/PT - Purple */}
            <Card className="cursor-pointer hover:shadow-xl hover:border-purple-300 transition-all group">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                  <Stethoscope className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle>I'm a Physician/PT</CardTitle>
                <CardDescription>
                  Manage patients, create recovery plans,
                  monitor progress, and approve AI-assisted
                  recommendations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  className="w-full bg-purple-600 hover:bg-purple-400 cursor-pointer"
                  onClick={() =>
                    onRoleSelect("physician", "physician1")
                  }
                >
                  Continue as Physician
                </Button>
              </CardContent>
            </Card>

            {/* Mental Therapist - Green */}
            <Card className="cursor-pointer hover:shadow-xl hover:border-green-300 transition-all group">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <Brain className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle>I'm a Mental Therapist</CardTitle>
                <CardDescription>
                  Support athletes through the mental aspects of
                  recovery and issue clearances when ready
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  className="w-full bg-green-600 hover:bg-green-400 cursor-pointer"
                  onClick={() =>
                    onRoleSelect(
                      "mental-therapist",
                      "therapist1",
                    )
                  }
                >
                  Continue as Therapist
                </Button>
              </CardContent>
            </Card>

            {/* Organization - Black */}
            <Card className="cursor-pointer hover:shadow-xl hover:border-gray-400 transition-all group">
              <CardHeader>
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-gray-200 transition-colors">
                  <Building2 className="w-8 h-8 text-gray-900" />
                </div>
                <CardTitle>I'm an Organization</CardTitle>
                <CardDescription>
                  Manage your healthcare facility, staff
                  members, and view organizational metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  className="w-full bg-gray-900 hover:bg-gray-400 cursor-pointer"
                  onClick={() =>
                    onRoleSelect("organization", "org1")
                  }
                >
                  Continue as Organization
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <a
                href="#"
                className="text-gray-900 hover:text-gray-700 underline"
              >
                Contact us to get started
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}