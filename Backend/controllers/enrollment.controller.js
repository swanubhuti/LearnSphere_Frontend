import prisma from "../database/db.config.js";

export const enrollCourse = async (req, res) => {
  try {
    console.log("EREQ.ID:", req.id); 
    const { courseId } = req.params;
    const userId = req.id;

    await prisma.user.update({
      where: { id: userId },  
      data: {
        enrolledCourses: {
          connect: { id: Number(courseId) },
        },
      },
    });

    const enrollment = await prisma.enrollment.create({
      data: {
        courseId: Number(courseId),
        userId: Number(userId),
      },
    });

    return res
      .status(201)
      .json({ enrollment, message: "Enrolled successfully." });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Failed to enroll." });
  }
};

export const getEnrolledCourses = async (req, res) => {
  try {
    const userId = req.id;
    console.log("REQ.ID:", req.id);

    const enrollments = await prisma.enrollment.findMany({
      where: { userId },
      include: { course: true },
    });

    return res.status(200).json({ enrollments });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Failed to fetch enrolled courses." });
  }
};
