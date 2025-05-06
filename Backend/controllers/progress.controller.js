// controller/instructor.controller.ts
import prisma from "../database/db.config.js";

export const getInstructorStats = async (req, res) => {
    try {
      const instructorId = req.id;
  
      const courses = await prisma.course.findMany({
        where: { creatorId: instructorId },
        include: {
          enrollments: true,
        },
      });
  
      const totalCourses = courses.length;
  
      const enrollmentCounts = courses.map((course) => ({
        title: course.courseTitle,
        enrolledCount: course.enrollments.length,
        createdAt: course.createdAt,
        category: course.category,
      }));
  
      const totalEnrollments = enrollmentCounts.reduce(
        (acc, curr) => acc + curr.enrolledCount,
        0
      );
  
      res.status(200).json({
        totalCourses,
        totalEnrollments,
        enrollmentCounts,
      });
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch stats", error });
    }
  };
  