import express from "express";
import {
  createCourse,
  getPublishedCourses,
  searchCourses,
  editCourse,
  togglePublishCourse,
  getCourseById,
  deleteCourse,
  getCreatorCourses,
  createLecture,
  getCourseLecture,
  editLecture,
  removeLecture,
  getLectureById,
} from "../controllers/course.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import upload from "../utils/multer.js";

const router = express.Router();

// Create a new course
router.post("/", createCourse);

// Get all published courses
router.get("/published", getPublishedCourses);

// Search courses
router.get("/search", searchCourses);

// Edit course
router.put(
  "/:courseId",
  isAuthenticated,
  upload.single("courseThumbnail"),
  editCourse
);

// Publish/Unpublish a course
router.patch("/publish/:courseId", isAuthenticated, togglePublishCourse);

// Get course by ID
router.get("/:courseId", isAuthenticated, getCourseById);

router.get("/instructor/courses", isAuthenticated, getCreatorCourses);

router.delete("/:courseId", deleteCourse);
router.put(
  "/:courseId",
  isAuthenticated,
  upload.single("courseThumbnail"),
  editCourse
);
router.post("/:courseId/lecture", isAuthenticated, createLecture);
router.get("/:courseId/lecture", isAuthenticated, getCourseLecture);

router.post("/:courseId/lecture/:lectureId", isAuthenticated, editLecture);

// DELETE a lecture
router.delete("/lecture/:lectureId", isAuthenticated, removeLecture);

// GET single lecture by ID
router.get("/lecture/:lectureId", isAuthenticated, getLectureById);

export default router;
