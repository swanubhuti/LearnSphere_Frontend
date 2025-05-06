import prisma from "../database/db.config.js";


export const createSession = async (req, res) => {
  try {
    const { courseId } = req.params;
    const { title, youtubeUrl, richText } = req.body;

    const session = await prisma.session.create({
      data: { title, videoUrl: youtubeUrl, richText, courseId: Number(courseId) },
    });

    return res.status(201).json({ session, message: "Session created successfully." });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Failed to create session." });
  }
};


export const editSession = async (req, res) => {
  try {
    const { sessionId } = req.params;
    const { title, youtubeUrl, richText } = req.body;

    const session = await prisma.session.update({
      where: { id: Number(sessionId) },
      data: { title, videoUrl: youtubeUrl, richText },
    });

    return res.status(200).json({ session, message: "Session updated successfully." });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Failed to edit session." });
  }
};

// Delete Session
export const deleteSession = async (req, res) => {
  try {
    const { sessionId } = req.params;

    await prisma.session.delete({ where: { id: Number(sessionId) } });

    return res.status(200).json({ message: "Session deleted successfully." });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Failed to delete session." });
  }
};

// // Get Sessions by Course
// export const getSessionsByCourse = async (req, res) => {
//   try {
//     const { courseId } = req.params;

//     const sessions = await prisma.session.findMany({
//       where: { courseId: Number(courseId) },
//     });

//     return res.status(200).json({ sessions });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: "Failed to get sessions." });
//   }
// };

// Instructor - Get Sessions of Their Own Course
export const getSessionsByCourse = async (req, res) => {
  const { courseId } = req.params;
  try {
    const course = await prisma.course.findFirst({
      where: {
        id: Number(courseId),
        creatorId: req.user.id,
      },
    });

    if (!course) return res.status(403).json({ message: "Not authorized" });

    const sessions = await prisma.session.findMany({
      where: { courseId: Number(courseId) },
    });

    res.status(200).json({ sessions });
  } catch (err) {
    res.status(500).json({ message: "Failed to get sessions" });
  }
};

// Student - Get Sessions of Enrolled Course
export const getStudentSessionsByCourse = async (req, res) => {
  const { courseId } = req.params;

  try {
    const enrollment = await prisma.enrollment.findFirst({
      where: {
        courseId: Number(courseId),
        userId: req.user.id,
      },
    });

    if (!enrollment) return res.status(403).json({ message: "Access denied" });

    const sessions = await prisma.session.findMany({
      where: { courseId: Number(courseId) },
    });

    res.status(200).json({ sessions });
  } catch (err) {
    res.status(500).json({ message: "Failed to get sessions" });
  }
};
