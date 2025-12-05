// src/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Existing pages
import LandingPage from "./pages/LandingPage.jsx";
import StudentSignUpPage from "./pages/StudentSignupPage.jsx";
import StudentLoginPage from "./pages/StudentLoginPage.jsx";
import StudentDashboard from "./pages/StudentDashboard.jsx";
import LogbookPage from "./pages/LogBook.jsx";
import ActivityTrackerPage from "./pages/StudentActivityTracker.jsx";
import Internships from "./pages/InternshipsPage.jsx";

import RoleSelectPage from "./pages/RoleSelectPage.jsx";
import FacultyLoginPage from "./pages/FacultyLoginPage.jsx";
import FacultySignupPage from "./pages/FacultySignupPage.jsx";
import FacultyDashboard from "./pages/FacultyDashboard.jsx";

// Company Dashboard Layout + Pages
import { CompanyProvider } from "./context/CompanyContext";
import DashboardLayout from "./components/companydashboard/Layout/DashboardLayout";
import Overview from "./pages/company/Overview";
import CreateOpening from "./pages/company/CreateOpening";
import Applicants from "./pages/company/Applicants";
import Analytics from "./pages/company/Analytics";
import Chat from "./pages/company/Chat";
import StudentProfile from "./pages/company/StudentProfile";
import SelectedStudents from "./pages/company/SelectedStudents";
import RejectedStudents from "./pages/company/RejectedStudents";
import RecruitedStudents from "./pages/company/RecruitedStudents";

// Company Layout Wrapper Component
const CompanyDashboardWrapper = () => {
  return (
    <CompanyProvider>
      <DashboardLayout />
    </CompanyProvider>
  );
};

export default function App() {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <Routes>
        {/* Landing + Role selection */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/roleselect" element={<RoleSelectPage />} />

        {/* Student Routes */}
        <Route path="/studentsignup" element={<StudentSignUpPage />} />
        <Route path="/studentlogin" element={<StudentLoginPage />} />
        <Route path="/studentdashboard" element={<StudentDashboard />} />
        <Route path="/logbook" element={<LogbookPage />} />
        <Route path="/activitytracker" element={<ActivityTrackerPage />} />
        <Route path="/internships" element={<Internships />} />

        {/* Faculty Routes */}
        <Route path="/facultylogin" element={<FacultyLoginPage />} />
        <Route path="/facultysignup" element={<FacultySignupPage />} />
        <Route path="/faculty/dashboard" element={<FacultyDashboard />} />

        {/* Company Dashboard Routes */}
        <Route path="/company" element={<CompanyDashboardWrapper />}>
          <Route index element={<Navigate to="overview" replace />} />
          <Route path="overview" element={<Overview />} />
          <Route path="create-opening" element={<CreateOpening />} />
          <Route path="applicants" element={<Applicants />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="selected-students" element={<SelectedStudents />} />
          <Route path="rejected-students" element={<RejectedStudents />} />
          <Route path="recruited-students" element={<RecruitedStudents />} />
          <Route path="chat" element={<Chat />} />
          <Route path="student/:id" element={<StudentProfile />} />
        </Route>

        {/* 404 - Catch all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}