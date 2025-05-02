import jwt from "jsonwebtoken";
import prisma from "../database/db.config.js";
const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        message: "User not authenticated",
        success: false,
      });
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const user = await prisma.user.findUnique({ where: { id: decode.userId } });
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "User not found" });
    }

    if (!decode) {
      return res.status(401).json({
        message: "Invalid token",
        success: false,
      });
    }

    req.id = decode.userId;
   req.user = user;
    next();
  } catch (error) {
    console.log("JWT verification failed:", error.message);

    return res.status(401).json({
      message: "Invalid or expired token",
      success: false,
    });
  }
};

export default isAuthenticated;

export const isInstructor = (req, res, next) => {
  if (!req.user || req.user.role !== "instructor") {
    return res.status(403).json({ message: "Instructor only" });
  }
  next();
};

export const isStudent = (req, res, next) => {
  if (!req.user || req.user.role !== "student") {
    return res.status(403).json({ message: "Student only" });
  }
  next();
};
