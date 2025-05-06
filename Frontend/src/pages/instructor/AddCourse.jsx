import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCreateCourseMutation } from "@/features/api/courseApi";
import { Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const AddCourse = () => {
  const [courseTitle, setCourseTitle] = useState("");
  const [category, setCategory] = useState("");
  const { user } = useSelector((state) => state.auth);

  const [createCourse, { data, isLoading, error, isSuccess }] =
    useCreateCourseMutation();

  const navigate = useNavigate();

  const getSelectedCategory = (value) => {
    setCategory(value);
  };

  const createCourseHandler = async () => {
    if (!user?.id) {
      toast.error("Creator not found");
      return;
    }

    await createCourse({
      courseTitle,
      category,
      creatorId: user.id,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(data?.message || "Course created.");
      navigate("/instructor/dashboard");
    }
  }, [isSuccess, error]);

  return (
    <div className="flex justify-center items-start px-4 sm:px-8 md:px-16 py-12">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 space-y-8">
        <div className="text-center sm:text-left">
          <h1 className="text-3xl font-bold text-sky-900 mb-2">
            Add a New Course
          </h1>
          <p className="text-sky-700 text-sm">
            Enter the basic course details to get started.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <Label className="text-sky-800">Course Title</Label>
            <Input
              type="text"
              value={courseTitle}
              onChange={(e) => setCourseTitle(e.target.value)}
              placeholder="e.g. Fullstack Web Development"
              className="bg-white"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-sky-800">Category</Label>
            <Select onValueChange={getSelectedCategory}>
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Available Categories</SelectLabel>
                  {[
                    "Next JS", "Data Science", "Computer Science",
                    "Programming", "Web Development", "Javascript", "MongoDB",
                  ].map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <Button
              variant="outline"
              onClick={() => navigate("/admin/course")}
              className="px-5 py-2"
            >
              Back
            </Button>
            <Button
              onClick={createCourseHandler}
              disabled={isLoading}
              className="bg-sky-800 hover:bg-sky-900 text-white px-6 py-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </>
              ) : (
                "Create Course"
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
