import {
  Activity,
  Users,
  MessageSquare,
  Shield,
  Award,
  TrendingUp,
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

interface LandingPageProps {
  onRoleSelect: (role: UserRole, id?: string) => void;
  onGetStarted: () => void;
}

export function LandingPage({
  onRoleSelect,
  onGetStarted,
}: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="w-8 h-8 text-gray-900" />
            <span className="text-xl">Ambrosia</span>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" onClick={onGetStarted}>
              Sign In
            </Button>
            <Button
              className="bg-gray-900 hover:bg-gray-800"
              onClick={onGetStarted}
            >
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
            <Shield className="w-4 h-4" />
            <span className="text-sm">
              HIPAA Compliant & End-to-End Encrypted
            </span>
          </div>
          <h1 className="text-5xl mb-6">
            Complete Recovery Journey
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
              Physical & Mental Health
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connecting athletes with physicians, physical
            therapists, and mental health professionals for
            comprehensive ACL and musculoskeletal injury
            recovery.
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gray-900 hover:bg-gray-800"
              onClick={onGetStarted}
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 hover:bg-gray-50"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl text-center mb-12">
          Comprehensive Recovery Platform
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <Activity className="w-12 h-12 text-blue-600 mb-2" />
              <CardTitle>AI-Assisted Recovery Plans</CardTitle>
              <CardDescription>
                Personalized workout and recovery schedules
                created by your healthcare team with AI-powered
                suggestions
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Users className="w-12 h-12 text-purple-600 mb-2" />
              <CardTitle>Integrated Care Team</CardTitle>
              <CardDescription>
                Seamlessly connect with physicians, physical
                therapists, and mental health professionals
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <MessageSquare className="w-12 h-12 text-green-600 mb-2" />
              <CardTitle>Secure Messaging</CardTitle>
              <CardDescription>
                HIPAA-compliant, end-to-end encrypted
                communication with your care team
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <TrendingUp className="w-12 h-12 text-orange-600 mb-2" />
              <CardTitle>Real-Time Progress Tracking</CardTitle>
              <CardDescription>
                Color-coded virtual cards show your recovery
                status at a glance with detailed metrics
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Award className="w-12 h-12 text-yellow-600 mb-2" />
              <CardTitle>Gamification & Motivation</CardTitle>
              <CardDescription>
                Earn achievements, track streaks, and stay
                motivated throughout your recovery journey
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Shield className="w-12 h-12 text-red-600 mb-2" />
              <CardTitle>Mental Health Support</CardTitle>
              <CardDescription>
                Connect with accredited mental therapists when
                you're ready for the mental aspect of recovery
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Demo Access */}
      <section className="container mx-auto px-4 py-20 bg-white rounded-lg my-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl mb-6">
            Be a part of Ambrosia
          </h2>
          <p className="text-gray-600 mb-8">
            Experience the platform from different perspectives
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <Card
              className="cursor-pointer hover:shadow-lg transition-shadow border-l-2 border-blue-500"
              onClick={() =>
                onRoleSelect("athlete", "athlete1")
              }
            >
              <CardHeader>
                <CardTitle>Athlete Dashboard</CardTitle>
                <CardDescription>
                  View your recovery progress, exercises, and
                  communicate with your care team
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-blue-600 hover:bg-blue-400 cursor-pointer">
                  View as Athlete
                </Button>
              </CardContent>
            </Card>

            <Card
              className="cursor-pointer hover:shadow-lg transition-shadow border-l-2 border-purple-500"
              onClick={() =>
                onRoleSelect("physician", "physician1")
              }
            >
              <CardHeader>
                <CardTitle>Physician/PT Dashboard</CardTitle>
                <CardDescription>
                  Manage patients, create recovery plans, and
                  monitor progress
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-purple-600 hover:bg-purple-400 cursor-pointer">
                  View as Physician
                </Button>
              </CardContent>
            </Card>

            <Card
              className="cursor-pointer hover:shadow-lg transition-shadow border-l-2 border-green-500"
              onClick={() =>
                onRoleSelect("mental-therapist", "therapist1")
              }
            >
              <CardHeader>
                <CardTitle>
                  Mental Therapist Dashboard
                </CardTitle>
                <CardDescription>
                  Support athletes through the mental aspects of
                  recovery
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-green-600 hover:bg-green-400 cursor-pointer">
                  View as Therapist
                </Button>
              </CardContent>
            </Card>

            <Card
              className="cursor-pointer hover:shadow-lg transition-shadow border-l-2 border-gray-500"
              onClick={() =>
                onRoleSelect("organization", "org1")
              }
            >
              <CardHeader>
                <CardTitle>Organization Dashboard</CardTitle>
                <CardDescription>
                  Manage your facility, staff, and track
                  organizational metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-gray-900 hover:bg-gray-400 cursor-pointer">
                  View as Organization
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="container mx-auto px-4 py-8 text-center text-gray-600">
          <p>Ambrosia - Nexus Louisiana DevDays 2025</p>
          <p className="text-sm mt-2">
            Comprehensive ACL & Musculoskeletal Recovery
            Platform
          </p>
        </div>
      </footer>
    </div>
  );
}