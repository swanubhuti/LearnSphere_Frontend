import React from "react";
import Sidebar from "./Sidebar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetCreatorCourseQuery } from "@/features/api/courseApi";
import { Edit } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { data, isLoading, isError, error } = useGetCreatorCourseQuery();
  const navigate = useNavigate();

  if (isLoading) return <h1 className="text-center text-xl py-10">Loading courses...</h1>;

  if (isError) {
    return (
      <div className="text-center p-5">
        <h1 className="text-xl font-bold text-red-600">Error loading courses</h1>
        <p>{error?.data?.message || "An unexpected error occurred."}</p>
      </div>
    );
  }

  if (!data?.courses) {
    return <p className="text-center py-5">No courses found.</p>;
  }

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-[350px]">
        <Sidebar />
      </div>

      <div className="flex-1 my-12 p-5">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-sky-900 mb-2">Instructor Dashboard</h1>
        <p className="mb-4 text-sm sm:text-base">Welcome to your dashboard, here you can manage your courses.</p>

        {/* Table for medium and larger screens */}
        <div className="hidden md:block overflow-x-auto rounded-lg shadow-md">
          <Table>
            <TableCaption className="text-sm p-3">A list of your recent courses.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="text-center">#</TableHead>
                <TableHead className="text-center">Price</TableHead>
                <TableHead className="text-center">Status</TableHead>
                <TableHead className="text-center">Title</TableHead>
                <TableHead className="text-center">Edit</TableHead>
                <TableHead className="text-center">Sections</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.courses.map((course, index) => (
                <TableRow key={course.id}>
                  <TableCell className="text-center">{index + 1}</TableCell>
                  <TableCell className="text-center">{course?.coursePrice || "NA"}</TableCell>
                  <TableCell className="text-center">
                    <Badge className="bg-sky-800">
                      {course.isPublished ? "Published" : "Draft"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-center font-bold">{course.courseTitle}</TableCell>
                  <TableCell className="text-center">
                    <Button
                      className="bg-sky-800 text-white"
                      size="sm"
                      variant="ghost"
                      onClick={() => navigate(`${course.id}`)}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                  </TableCell>
                  <TableCell className="text-center">
                    <Button
                      className="bg-sky-800 text-white"
                      size="sm"
                      variant="ghost"
                      onClick={() => navigate(`/dashboard/course/${course.id}/sessions`)}
                    >
                      View Sections
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Stacked layout for small screens */}
        <div className="md:hidden flex flex-col gap-4">
          {data.courses.map((course, index) => (
            <div key={course.id} className="border p-4 rounded-lg shadow-sm bg-white">
              <p className="text-sm text-gray-500">#{index + 1}</p>
              <h2 className="text-lg font-bold">{course.courseTitle}</h2>
              <p className="text-sm">Price: {course?.coursePrice || "NA"}</p>
              <p className="text-sm">
                Status:{" "}
                <Badge className="bg-sky-800">
                  {course.isPublished ? "Published" : "Draft"}
                </Badge>
              </p>
              <div className="flex justify-between mt-3">
                <Button
                  className="bg-sky-800 text-white"
                  size="sm"
                  variant="ghost"
                  onClick={() => navigate(`${course.id}`)}
                >
                  <Edit className="w-4 h-4 mr-1" />
                  Edit
                </Button>
                <Button
                  className="bg-sky-800 text-white"
                  size="sm"
                  variant="ghost"
                  onClick={() => navigate(`/dashboard/course/${course.id}/sessions`)}
                >
                  View Sections
                </Button>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
