import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import {
  useDeleteCourseMutation,
  useEditCourseMutation,
  useGetCourseByIdQuery,
  useTogglePublishCourseMutation,
} from "@/features/api/courseApi";
import { Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import RichTextEditor from "./RickTextEditor";

const CourseTab = () => {
  const [input, setInput] = useState({
    courseTitle: "",
    subTitle: "",
    description: "",
    category: "",
    courseLevel: "",
    coursePrice: "",
    courseThumbnail: "",
  });

  const params = useParams();
  const courseId = params.courseId;
  const {
    data: courseByIdData,
    isLoading: courseByIdLoading,
    refetch,
  } = useGetCourseByIdQuery(courseId);

  const [publishCourse] = useTogglePublishCourseMutation();
  const [removeCourse] = useDeleteCourseMutation();

  useEffect(() => {
    if (courseByIdData?.course) {
      const course = courseByIdData.course;
      setInput({
        courseTitle: course.courseTitle || "",
        subTitle: course.subTitle || "",
        description: course.description || "",
        category: course.category || "",
        courseLevel: course.courseLevel || "",
        coursePrice: course.coursePrice || "",
        courseThumbnail: course.courseThumbnail || "",
      });
      setPreviewThumbnail(course.courseThumbnail || "");
    }
  }, [courseByIdData]);

  const [previewThumbnail, setPreviewThumbnail] = useState("");
  const navigate = useNavigate();

  const [editCourse, { data, isLoading, isSuccess, error }] =
    useEditCourseMutation();

  const changeEventHandler = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const selectCategory = (value) => {
    setInput((prev) => ({ ...prev, category: value }));
  };

  const selectCourseLevel = (value) => {
    setInput((prev) => ({ ...prev, courseLevel: value }));
  };

  const updateCourseHandler = async () => {
    const formData = new FormData();
    Object.entries(input).forEach(([key, value]) => {
      formData.append(key, value || "");
    });
    await editCourse({ formData, courseId });
  };

  const publishStatusHandler = async () => {
    try {
      const response = await publishCourse({ courseId });
      if (response.data) {
        refetch();
        toast.success(response.data.message);
      }
    } catch {
      toast.error("Failed to publish or unpublish course");
    }
  };

  const deleteCourseHandler = async () => {
    if (!window.confirm("Are you sure you want to delete this course?")) return;
    try {
      const res = await removeCourse(courseId).unwrap();
      toast.success(res.message);
      navigate("/instructor/dashboard");
    } catch {
      toast.error("Failed to delete course");
    }
  };

  useEffect(() => {
    if (isSuccess) toast.success(data.message || "Course updated");
    if (error) toast.error(error.data.message || "Failed to update course");
  }, [isSuccess, error]);

  if (courseByIdLoading)
    return (
      <h1 className="text-center text-xl font-semibold text-sky-800">
        Loading...
      </h1>
    );

  return (
    <Card className="bg-white p-8 rounded-3xl shadow-2xl max-w-5xl mx-auto my-20">
      <CardHeader className="flex flex-col sm:flex-row justify-between items-start gap-6">
        <div className="w-full text-center sm:text-left">
          <CardTitle className="text-3xl font-bold text-sky-900">
            Course Management
          </CardTitle>
          <CardDescription className="text-sky-700 text-base mt-1">
            Update your course details and save changes.
          </CardDescription>
          <Button
            variant="link"
            className="text-sky-600 underline mt-2"
            onClick={() => navigate(`/session/${courseId}`)}
          >
            Manage Sessions
          </Button>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            className="bg-sky-700 hover:bg-sky-800 text-white px-6 py-2"
            onClick={publishStatusHandler}
          >
            {courseByIdData?.course.isPublished ? "Unpublish" : "Publish"}
          </Button>
          <Button
            variant="destructive"
            className="px-6 py-2"
            onClick={deleteCourseHandler}
          >
            Delete
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <Label className="text-sky-800 font-medium">Title</Label>
            <Input
              name="courseTitle"
              value={input.courseTitle}
              onChange={changeEventHandler}
              placeholder="Ex. Fullstack Developer"
              className="mt-1"
            />
          </div>
          <div>
            <Label className="text-sky-800 font-medium">Subtitle</Label>
            <Input
              name="subTitle"
              value={input.subTitle}
              onChange={changeEventHandler}
              placeholder="Ex. Zero to Hero in 2 months"
              className="mt-1"
            />
          </div>
        </div>

        <div>
          <Label className="text-sky-800 font-medium">Description</Label>
          <RichTextEditor
            content={input.description}
            onChange={(value) =>
              setInput((prev) => ({ ...prev, description: value }))
            }
            editable={true}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <Label className="text-sky-800 font-medium">Category</Label>
            <Select value={input.category} onValueChange={selectCategory}>
              <SelectTrigger className="bg-white mt-1">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Category</SelectLabel>
                  {[
                    "Next JS",
                    "Data Science",
                    "Computer Science",
                    "Programming",
                    "Web Development",
                    "Javascript",
                    "MongoDB",
                  ].map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="text-sky-800 font-medium">Level</Label>
            <Select value={input.courseLevel} onValueChange={selectCourseLevel}>
              <SelectTrigger className="bg-white mt-1">
                <SelectValue placeholder="Select level" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Level</SelectLabel>
                  {["Beginner", "Medium", "Advance"].map((level) => (
                    <SelectItem key={level} value={level}>
                      {level}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="text-sky-800 font-medium">Price (INR)</Label>
            <Input
              type="number"
              name="coursePrice"
              value={input.coursePrice}
              onChange={changeEventHandler}
              placeholder="199"
              className="mt-1"
            />
          </div>
        </div>

        <div>
          <Label className="text-sky-800 font-medium">Thumbnail URL</Label>
          <Input
            name="courseThumbnail"
            value={input.courseThumbnail}
            onChange={changeEventHandler}
            placeholder="https://example.com/image.jpg"
            className="mt-1"
          />
          {input.courseThumbnail && (
            <img
              src={input.courseThumbnail}
              alt="Preview"
              className="w-full max-w-sm mt-4 rounded-xl shadow-lg"
            />
          )}
        </div>

        <div className="flex justify-end gap-4">
          <Button
            variant="outline"
            className="px-6 py-2"
            onClick={() => navigate("/instructor/dashboard")}
          >
            Cancel
          </Button>
          <Button
            onClick={updateCourseHandler}
            disabled={isLoading}
            className="bg-sky-700 hover:bg-sky-900 text-white px-6 py-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
              </>
            ) : (
              "Save"
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseTab;
