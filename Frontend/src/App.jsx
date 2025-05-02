import React from "react";
import "./App.css";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HeroSection from "./pages/student/HeroSection";
import Courses from "./pages/student/Courses";
import CourseDetail from "./pages/student/CourseDetail";
import SearchPage from "./pages/student/SearchPage";
import MyLearning from "./pages/student/MyLearning";
import Dashboard from "./pages/instructor/Dashboard";
import AddCourse from "./pages/instructor/AddCourse";
import EditCourse from "./pages/instructor/EditCourse";
import { ProtectedRoute } from "./components/ProtectedRoute";
import AddSession from "./pages/instructor/AddSession";
import CourseSessions from "./pages/student/CourseSessions";
import ViewSessions from "./pages/instructor/ViewSessions";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route
            index
            element={
              <>
                <HeroSection />
                <Courses />
              </>
            }
          />

          <Route path="/course/search" element={<SearchPage />} />
          <Route path="/course-detail/:courseId" element={<CourseDetail />} />
          <Route path="/my-learning" element={<ProtectedRoute> <MyLearning /></ProtectedRoute>} />
          <Route path="instructor/dashboard" element={<Dashboard />} />
          <Route path="instructor/dashboard/:courseId" element={<EditCourse />} />
          <Route
            path="instructor/dashboard/add-course"
            element={<AddCourse />}
          />

          <Route path="/login" element={<Login />} />
          <Route path="/session/:courseId" element={<AddSession />} />
          <Route path="/course/:courseId/sessions" element={<ProtectedRoute><CourseSessions /></ProtectedRoute>}
           />
           <Route path="/dashboard/course/:courseId/sessions" element={<ViewSessions />} />
           <Route path="/dashboard/course/:courseId/sessions/add" element={<AddSession />} />




        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
