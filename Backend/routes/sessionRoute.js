import express from "express";
import {
  createSession,
  editSession,
  deleteSession,
  getSessionsByCourse,
  getStudentSessionsByCourse,
  getSessionById,
} from "../controllers/session.controller.js";

import isAuthenticated, {
  isInstructor,
  isStudent,
} from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.post("/:courseId", isAuthenticated, isInstructor, createSession);

router.put("/:sessionId", isAuthenticated, isInstructor, editSession);

router.delete("/:sessionId", isAuthenticated, isInstructor, deleteSession);

router.get("/:courseId", isAuthenticated, getSessionsByCourse);
router.get("/single/:sessionId", isAuthenticated, getSessionById);


router.get(
  "/student/:courseId",
  isAuthenticated,
  isStudent,
  getStudentSessionsByCourse
);

export default router;
