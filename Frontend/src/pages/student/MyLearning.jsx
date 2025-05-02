import React from "react";
import { useLoadUserQuery } from "@/features/api/authApi";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";

const MyLearning = () => {
  const { data, isLoading, isError } = useLoadUserQuery();

  const user = data?.user;
  const isStudent = user?.role === "student"; 
  const enrolledCourses = user?.enrolledCourses || [];
  const navigate = useNavigate();

  if (isLoading) {
    return <div className="text-center mt-24">Loading your enrolled courses...</div>;
  }

  if (isError || !user) {
    return <div className="text-center mt-24 text-red-500">Failed to load user data.</div>;
  }

  if (!isStudent) {
    return <div className="text-center mt-24">Only students can access My Learning.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-24 px-4">
      <h1 className="font-bold text-3xl mb-4">My Learning</h1>
      <p className="text-gray-800 mb-4 text-lg font-bold" >Here are the courses you are currently enrolled in:</p>

      {enrolledCourses.length === 0 ? (
        <p className="text-gray-600">You are not enrolled in any courses.</p>
      ) : (
        <ul className=" pl-5 space-y-4">
          {enrolledCourses.map((course) => (
            <li key={course.id}>
              <div className="p-4 bg-blue-100 rounded shadow">
                <h2 className="font-semibold text-lg">{course.courseTitle}</h2>
                <p className="text-sm text-gray-600">{course.category}</p>
                <Button className="bg-sky-800 my-3" onClick={() => navigate(`/course/${course.id}/sessions`)}>View Sessions</Button>

              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyLearning;
