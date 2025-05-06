import React, { useEffect } from "react";
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
import { InstructorRoute, ProtectedRoute } from "./components/ProtectedRoute";
import AddSession from "./pages/instructor/AddSession";
import CourseSessions from "./pages/student/CourseSessions";
import ViewSessions from "./pages/instructor/ViewSessions";
import CourseTab from "./pages/instructor/CourseTab";
import { useDispatch } from "react-redux";
import { useLoadUserQuery } from "./features/api/authApi";
import { userLoggedIn, userLoggedOut } from "./features/AuthSlice";
import NotFound from "./components/NotFound";
import Stats from "./pages/instructor/Stats";

const App = () => {
  const dispatch = useDispatch();

  // Read token from cookies (only runs client-side)
  // const token = typeof document !== "undefined"
  //   ? document.cookie
  //       .split("; ")
  //       .find((row) => row.startsWith("token="))
  //       ?.split("=")[1]
  //   : null;

  // Skip if no token
  const { data, isLoading, error, isSuccess, isError } = useLoadUserQuery();

  useEffect(() => {
    if (isSuccess && data?.user) {
      dispatch(userLoggedIn({ user: data.user }));
    } else if (isError) {
      dispatch(userLoggedOut());
    }
  }, [isSuccess, isError, data, dispatch]);

  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
  <Route path="/" element={<MainLayout />}>
    <Route index element={<><HeroSection /><Courses /></>} /></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/course/search" element={<SearchPage />} />
          <Route
            path="/course-detail/:courseId"
            element={
              <ProtectedRoute>
                <CourseDetail />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-learning"
            element={
              <ProtectedRoute>
                <MyLearning />
              </ProtectedRoute>
            }
          />
          <Route
            path="/course/:courseId/sessions"
            element={
              <ProtectedRoute>
                <CourseSessions />
              </ProtectedRoute>
            }
          />
          <Route
            path="/course/:courseId/sessions"
            element={
              <ProtectedRoute>
                <CourseSessions />
              </ProtectedRoute>
            }
          />

          {/* <Route path="/session/:courseId" element={<AddSession />} /> */}

          <Route
            path="instructor/dashboard"
            element={
              <InstructorRoute>
                <Dashboard />
              </InstructorRoute>
            }
          />

          <Route
            path="instructor/dashboard/:courseId"
            element={
              <InstructorRoute>
                <CourseTab />
              </InstructorRoute>
            }
          />

          <Route
            path="instructor/dashboard/add-course"
            element={
              <InstructorRoute>
                <AddCourse />
              </InstructorRoute>
            }
          />
           <Route
            path="instructor/dashboard/stats"
            element={
              <InstructorRoute>
                <Stats />
              </InstructorRoute>
            }
          />

          <Route
            path="/session/:courseId"
            element={
              <InstructorRoute>
                <AddSession />
              </InstructorRoute>
            }
          />

          <Route
            path="/dashboard/course/:courseId/sessions"
            element={
              <InstructorRoute>
                <ViewSessions />
              </InstructorRoute>
            }
          />

          <Route
            path="/dashboard/course/:courseId/sessions/add"
            element={
              <InstructorRoute>
                <AddSession />
              </InstructorRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
