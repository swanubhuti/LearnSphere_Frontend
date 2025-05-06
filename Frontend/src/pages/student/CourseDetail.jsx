import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
// import { useGetCourseDetailWithStatusQuery } from "@/features/api/purchaseApi";
import { BadgeInfo, Lock, PlayCircle } from "lucide-react";
import React from "react";
import ReactPlayer from "react-player";
import { useNavigate, useParams } from "react-router-dom";
import EnrollButton from "./../../components/EnrollButton";

import { useGetCourseByIdQuery } from "@/features/api/courseApi";
import { useGetMyEnrollmentsQuery } from "@/features/api/enrollApi";

const CourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isError } = useGetCourseByIdQuery(courseId);
  const { data: myEnrollments, isLoading: enrollLoading } =
    useGetMyEnrollmentsQuery();

  if (isLoading || enrollLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Failed to load course details</h1>;

  const course = data?.course;

  const enrollments = myEnrollments?.enrollments || [];
  const isEnrolled = enrollments.some((e) => e.courseId === Number(courseId));
  

  return (
    <div className="space-y-5">
      <div className="bg-sky-900 text-white">
        <div className="max-w-7xl mx-auto py-5 px-4 my-16 flex flex-col gap-1">
          <h1 className="font-bold text-2xl md:text-3xl">
            {course?.courseTitle}
          </h1>
          <p className="text-base md:text-lg">Course Sub-title: {course?.subTitle}</p>
          <p>
            Created By{" "}
            <span className="text-[#C0C4FC] underline italic">
              {course?.creator.name}
            </span>
          </p>
          <div className="flex items-center gap-2 text-sm">
            <BadgeInfo size={16} />
            <p>Last updated {course?.createdAt.split("T")[0]}</p>
          </div>
         
        </div>
      </div>
      <div className="max-w-7xl mx-auto my-5 px-4 md:px-8 flex flex-col lg:flex-row justify-between gap-10">
        <div className="w-full lg:w-1/2 space-y-5">
          <h1 className="font-bold text-xl md:text-2xl">Description</h1>
          <p
            className="text-sm"
            dangerouslySetInnerHTML={{ __html: course.description }}
          />
          <Card className="bg-blue-100">
            <CardHeader  className="flex justify-center w-full p-4">
              
              <EnrollButton  courseId={courseId} isEnrolled={isEnrolled} />
            </CardHeader>
           
          </Card>
        </div>
        <div className="w-full lg:w-1/3">
          <Card className="overflow-hidden text-black rounded-lg bg-blue-100 shadow-lg ">
            <CardContent className="p-3 flex flex-col">
            
               <div className="relative mx-1 ">
          <img
            src={
              course.courseThumbnail ||
              "https://placehold.co/600x300?text=No+Thumbnail"
            }
            alt="course"
            className="w-full h-36 object-cover rounded-t-lg"
          />
        </div>

              <Separator className="my-0.5" />
              <h1 className="text-lg md:text-xl font-semibold">
                Course Price
              </h1>{" "}
              {course?.coursePrice}{" "}
              <span className="text-sm text-gray-500">INR</span>
            </CardContent>
           
           
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
