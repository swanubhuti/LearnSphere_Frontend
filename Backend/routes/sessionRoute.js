import express from "express";
import {
  createSession,
  editSession,
  deleteSession,
  getSessionsByCourse,
  getStudentSessionsByCourse
} from "../controllers/session.controller.js";

import isAuthenticated, { isInstructor, isStudent } from "../middlewares/isAuthenticated.js";


const router = express.Router();

// Create a new session (Only Instructor)
router.post("/:courseId", isAuthenticated, isInstructor, createSession);

// Edit a session (Only Instructor)
router.put("/:sessionId", isAuthenticated, isInstructor, editSession);

// Delete a session (Only Instructor)
router.delete("/:sessionId", isAuthenticated, isInstructor, deleteSession);

// Get sessions by course - Instructor (Only sessions of their own course)
router.get("/:courseId", isAuthenticated, getSessionsByCourse);

// Get sessions for student (Only if enrolled)
router.get("/student/:courseId", isAuthenticated, isStudent, getStudentSessionsByCourse);

export default router;
