import express from "express";
import { enrollCourse } from "../controllers/enrollment.controller.js";
import { getEnrolledCourses } from "../controllers/enrollment.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.post("/:courseId",isAuthenticated, enrollCourse);
router.get("/me",isAuthenticated, getEnrolledCourses);

export default router;
