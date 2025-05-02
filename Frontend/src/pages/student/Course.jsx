import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  return (
    <Link to={`/course-detail/${course.id}`}>
      <Card className="overflow-y-hidden text-black  rounded-lg bg-blue-100 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
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
        <CardContent className="px-5 py-4 space-y-3">
          <h1 className="hover:underline font-bold text-lg truncate">
            {course.courseTitle || "Untitled"}
          </h1>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src={
                    course.creator?.photoUrl || "https://github.com/shadcn.png"
                  }
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h1 className="font-medium text-sm">{course.creator?.name}</h1>
            </div>
            <Badge
              className={
                "bg-blue-600 text-white px-2 py-1 text-xs rounded-full"
              }
            >
              {course.courseLevel || "N/A"}
            </Badge>
          </div>
          <div className="text-lg font-bold">
            <span>₹{course.coursePrice ?? 0}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default Course;

// import React from 'react'

// const Course = () => {
//   return (
//     <div>Course</div>
//   )
// }

// export default Course
