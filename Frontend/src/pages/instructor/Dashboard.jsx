import React from "react";
import Sidebar from "./Sidebar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetCreatorCourseQuery } from "@/features/api/courseApi";
import { Edit } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CourseTab from "./CourseTab";

const Dashboard = () => {
  const { data, isLoading, isError, error } = useGetCreatorCourseQuery();

  const navigate = useNavigate();

  if (isLoading) return <h1>Loading courses...</h1>;

  if (isError) {
    return (
      <div>
        <h1>Error loading courses</h1>
        <p>{error?.data?.message || "An unexpected error occurred."}</p>
      </div>
    );
  }

  // Check if data exists and has the courses property
  if (!data?.courses) {
    return <p>No courses found.</p>; // Or some other appropriate message
  }

  return (
    <div className="flex my-13">
      <Sidebar />
      <div className="flex-1 p-5">
        <h1 className="text-3xl font-extrabold p-5">Instructor Dashboard</h1>
        <p>Welcome to your dashboard, here you can manage your courses.</p>
        <Table>
          <TableCaption>A list of your recent courses.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] text-center">Course</TableHead>
              <TableHead className="w-[100px] text-center">Price</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-center">Title</TableHead>
              <TableHead className="text-right">Edit</TableHead>
              <TableHead className="text-center">Sections</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.courses.map((course,index) => (
              <TableRow key={course.id}>
                 <TableCell className="text-center font-medium">{index + 1}</TableCell> 
                <TableCell className="font-medium">
                  {course?.coursePrice || "NA"}
                </TableCell>
                <TableCell>
                  {" "}
                  <Badge className="bg-sky-800">
                    {course.isPublished ? "Published" : "Draft"}
                  </Badge>{" "}
                </TableCell>
                <TableCell className=" font-black">{course.courseTitle}</TableCell>
                <TableCell className="text-right">
                  <Button
                    className="bg-sky-800 text-white"
                    size="sm"
                    variant="ghost"
                    onClick={() => navigate(`${course.id}`)}
                  >
                    <Edit />
                  </Button>
                </TableCell>
                <TableCell className="text-center">
                  <Button
                    className="bg-sky-800 text-white"
                    size="sm"
                    variant="ghost"
                    onClick={() =>
                      navigate(`/dashboard/course/${course.id}/sessions`)
                    }
                  >
                    View all sections
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Dashboard;
