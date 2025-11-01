import { useState } from "react";
import { LandingPage } from "./components/LandingPage";
import { RoleSelection } from "./components/RoleSelection";
import { OrganizationSelection } from "./components/OrganizationSelection";
import { AthleteDashboard } from "./components/AthleteDashboard";
import { PhysicianDashboard } from "./components/PhysicianDashboard";
import { MentalTherapistDashboard } from "./components/MentalTherapistDashboard";
import { OrganizationDashboard } from "./components/OrganizationDashboard";

type UserRole =
  | "landing"
  | "athlete"
  | "physician"
  | "mental-therapist"
  | "organization";
type ViewState = UserRole | "role-selection" | "org-selection";

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>("landing");
  const [userId, setUserId] = useState<string>("");

  const handleGetStarted = () => {
    setCurrentView("role-selection");
  };

  const handleRoleSelect = (role: UserRole, id?: string) => {
    // If athlete and new user, show org selection
    if (role === "athlete" && id === "new") {
      setCurrentView("org-selection");
    } else {
      setCurrentView(role);
      if (id) setUserId(id);
    }
  };

  const handleOrgSelectionComplete = (role: UserRole, id: string) => {
    setCurrentView(role);
    setUserId(id);
  };

  const handleBackToLanding = () => {
    setCurrentView("landing");
  };

  const handleBackToRoleSelection = () => {
    setCurrentView("role-selection");
  };

  const handleLogout = () => {
    setCurrentView("landing");
    setUserId("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {currentView === "landing" && (
        <LandingPage
          onRoleSelect={handleRoleSelect}
          onGetStarted={handleGetStarted}
        />
      )}
      {currentView === "role-selection" && (
        <RoleSelection
          onRoleSelect={handleRoleSelect}
          onBack={handleBackToLanding}
        />
      )}
      {currentView === "org-selection" && (
        <OrganizationSelection
          onComplete={handleOrgSelectionComplete}
          onBack={handleBackToRoleSelection}
        />
      )}
      {currentView === "athlete" && (
        <AthleteDashboard onLogout={handleLogout} userId={userId} />
      )}
      {currentView === "physician" && (
        <PhysicianDashboard onLogout={handleLogout} userId={userId} />
      )}
      {currentView === "mental-therapist" && (
        <MentalTherapistDashboard onLogout={handleLogout} userId={userId} />
      )}
      {currentView === "organization" && (
        <OrganizationDashboard onLogout={handleLogout} userId={userId} />
      )}
    </div>
  );
}
