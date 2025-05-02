import React from "react";
import Course from "./Course";
import { useGetPublishedCoursesQuery } from "@/features/api/courseApi";
 
const Courses = () => {
  const {data, isLoading, isError} = useGetPublishedCoursesQuery();
 
  if(isError) return <h1>Some error occurred while fetching courses.</h1>

// const isLoading = false; // Simulating loading state
  return (
    <div className="bg-gray-50 overflow-x-hidden">
      <div className="max-w-7xl mx-auto overflow-auto p-6">
        <h2 className="font-bold text-3xl text-center mb-10 text-sky-900">Our Courses</h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {isLoading ? (
            <p>Your Courses are loading</p>
          ) : (
           data?.courses && data.courses.map((course, index) => <Course key={index} course={course}/>) 
        
         )}
        </div>
      </div>
    </div>
  );
};

export default Courses;