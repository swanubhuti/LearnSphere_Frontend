import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useEnrollCourseMutation, useGetMyEnrollmentsQuery } from "@/features/api/enrollApi";

const EnrollButton = ({ courseId}) => {
  const [enrollCourse, { isLoading, isSuccess, isError, error }] = useEnrollCourseMutation();
  const { data: myEnrollments } = useGetMyEnrollmentsQuery();

  const enrollments = myEnrollments?.enrollments || []; // ✅ extract array

const isEnrolled = enrollments.some((e) => e.courseId === Number(courseId));

  const handleEnroll = async () => {
    try {
      await enrollCourse(courseId).unwrap();
    } catch (_) {}
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Successfully enrolled!");
    } else if (isError) {
      toast.error(error?.data?.message || "Failed to enroll");
    }
  }, [isSuccess, isError]);

  return (
    <Button disabled={isLoading || isEnrolled} onClick={handleEnroll} className="w-full">
      {isEnrolled ? "Enrolled" : isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </>
      ) : (
        "Enroll"
      )}
    </Button>
  );
};

export default EnrollButton;
