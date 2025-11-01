import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { CheckCircle, AlertCircle, Clock } from "lucide-react";

interface StatusCardProps {
  physicalProgress: number;
  mentalProgress: number;
  currentPhase: string;
  lastUpdated: string;
  canEdit: boolean;
  onEdit?: () => void;
}

export function StatusCard({
  physicalProgress,
  mentalProgress,
  currentPhase,
  lastUpdated,
  canEdit,
  onEdit,
}: StatusCardProps) {
  // Determine overall status color
  const getStatusColor = () => {
    const avg = (physicalProgress + mentalProgress) / 2;
    if (avg >= 80) return "bg-gradient-to-br from-green-400 to-green-600";
    if (avg >= 50) return "bg-gradient-to-br from-yellow-400 to-orange-500";
    return "bg-gradient-to-br from-red-400 to-red-600";
  };

  const getStatusLabel = () => {
    const avg = (physicalProgress + mentalProgress) / 2;
    if (avg >= 80) return { text: "Ready for Return", icon: CheckCircle, color: "text-green-600" };
    if (avg >= 50) return { text: "In Progress", icon: Clock, color: "text-yellow-600" };
    return { text: "Early Recovery", icon: AlertCircle, color: "text-red-600" };
  };

  const status = getStatusLabel();
  const StatusIcon = status.icon;

  return (
    <Card className="overflow-hidden">
      <div className={`${getStatusColor()} text-white p-6`}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl mb-1">Recovery Status Card</h2>
            <p className="text-sm opacity-90">Last updated: {lastUpdated}</p>
          </div>
          {canEdit && (
            <Button variant="secondary" size="sm" onClick={onEdit}>
              Update Status
            </Button>
          )}
        </div>

        <div className="flex items-center gap-2 mb-2">
          <StatusIcon className="w-6 h-6" />
          <span className="text-xl">{status.text}</span>
        </div>
        <p className="text-sm opacity-90">Current Phase: {currentPhase}</p>
      </div>

      <CardContent className="p-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Physical Progress */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg">Physical Recovery</h3>
              <span className="text-2xl">{physicalProgress}%</span>
            </div>
            <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 transition-all duration-500"
                style={{ width: `${physicalProgress}%` }}
              />
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${physicalProgress >= 25 ? "bg-blue-600" : "bg-gray-300"}`} />
                <span className="text-sm">Initial Assessment</span>
              </div>
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${physicalProgress >= 50 ? "bg-blue-600" : "bg-gray-300"}`} />
                <span className="text-sm">Intermediate Recovery</span>
              </div>
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${physicalProgress >= 75 ? "bg-blue-600" : "bg-gray-300"}`} />
                <span className="text-sm">Advanced Rehabilitation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${physicalProgress >= 95 ? "bg-blue-600" : "bg-gray-300"}`} />
                <span className="text-sm">Return to Play Cleared</span>
              </div>
            </div>
          </div>

          {/* Mental Health Progress */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg">Mental Health</h3>
              <span className="text-2xl">{mentalProgress}%</span>
            </div>
            <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-600 transition-all duration-500"
                style={{ width: `${mentalProgress}%` }}
              />
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${mentalProgress >= 20 ? "bg-green-600" : "bg-gray-300"}`} />
                <span className="text-sm">Initial Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${mentalProgress >= 40 ? "bg-green-600" : "bg-gray-300"}`} />
                <span className="text-sm">Regular Sessions</span>
              </div>
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${mentalProgress >= 70 ? "bg-green-600" : "bg-gray-300"}`} />
                <span className="text-sm">Coping Strategies Mastered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${mentalProgress >= 90 ? "bg-green-600" : "bg-gray-300"}`} />
                <span className="text-sm">Mental Clearance Approved</span>
              </div>
            </div>
          </div>
        </div>

        {/* Clearance Status */}
        {physicalProgress >= 95 && mentalProgress >= 90 && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-green-900">Ready for Return to Play</span>
            </div>
            <p className="text-sm text-green-800">
              Both physical and mental health clearances have been approved. Your return-to-play
              certificate is ready.
            </p>
            <Button className="mt-3 bg-green-600 hover:bg-green-700">
              Download Certificate
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
