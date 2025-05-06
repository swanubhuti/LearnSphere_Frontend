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
 
} from "../controllers/course.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import upload from "../utils/multer.js";
import { getInstructorStats } from "../controllers/progress.controller.js";

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

router.delete("/:courseId", isAuthenticated,deleteCourse);
router.put(
  "/:courseId",
  isAuthenticated,
  upload.single("courseThumbnail"),
  editCourse
);
router.get("/instructor/stats", isAuthenticated, getInstructorStats);


export default router;
