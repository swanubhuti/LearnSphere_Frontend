import prisma from "../database/db.config.js";

export const createCourse = async (req, res) => {
  try {
    const {
      courseTitle,
      subTitle,
      description,
      category,
      courseLevel,
      coursePrice,
      courseThumbnail,
      creatorId,
    } = req.body;

    if (!courseTitle || !category) {
      return res
        .status(400)
        .json({ message: "Title and Category are required." });
    }

    if (!creatorId) {
      return res.status(400).json({ message: "Creator ID is required." });
    }

    const courseData = {
      courseTitle,
      subTitle,
      description,
      category,
      courseLevel,
      coursePrice: Number(coursePrice),
      courseThumbnail,
      creator: {
        connect: { id: creatorId },
      },
    };

    const course = await prisma.course.create({ data: courseData });

    return res
      .status(201)
      .json({ course, message: "Course created successfully." });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Failed to create course." });
  }
};

export const getPublishedCourses = async (req, res) => {
  try {
    const courses = await prisma.course.findMany({
      where: { isPublished: true },
      include: { creator: { select: { name: true, photoUrl: true } } },
    });

    return res.status(200).json({ courses });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Failed to get published courses." });
  }
};
export const searchCourses = async (req, res) => {
  try {
    const { query = "", sortByPrice = "" } = req.query;
    let categories = req.query.categories || [];
    if (typeof categories === "string") {
      categories = categories.split(",").map((c) => c.trim());
    }
    const courses = await prisma.course.findMany({
      where: {
        isPublished: true,
        AND: [
          {
            OR: [
              { courseTitle: { contains: query, mode: "insensitive" } },
              // { description: { contains: query, mode: "insensitive" } },
              // { category: { contains: query, mode: "insensitive" } },
            ],
          },
          ...(categories.length > 0 ? [{ category: { in: categories } }] : []),
        ],
      },
      include: { creator: { select: { name: true, photoUrl: true } } },
      orderBy: sortByPrice
        ? { coursePrice: sortByPrice === "low" ? "asc" : "desc" }
        : undefined,
    });
    return res.status(200).json({ courses });
  } catch (error) {
    console.error("Search Error:", error);
    return res.status(500).json({ message: "Failed to search courses." });
  }
};

export const deleteCourse = async (req, res) => {
  const courseId = Number(req.params.courseId);

  try {
    await prisma.courseProgress.deleteMany({ where: { courseId } });
    await prisma.coursePurchase.deleteMany({ where: { courseId } });
    await prisma.session.deleteMany({ where: { courseId } });
    await prisma.enrollment.deleteMany({ where: { courseId } });

    const deletedCourse = await prisma.course.delete({
      where: { id: courseId },
    });
    return res.status(200).json({
      message: "Course deleted successfully.",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Failed to delete course.",
    });
  }
};

export const togglePublishCourse = async (req, res) => {
  const { courseId } = req.params;

  try {
    const existingCourse = await prisma.course.findUnique({
      where: { id: Number(courseId) },
    });
    if (!existingCourse)
      return res.status(404).json({ error: "Course not found" });

    const updatedCourse = await prisma.course.update({
      where: { id: Number(courseId) },
      data: { isPublished: !existingCourse.isPublished },
    });
    return res.status(200).json({
      message: `Course is ${
        updatedCourse.isPublished ? "Published" : "Unpublished"
      }.`,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Failed to toggle publish course." });
  }
};

export const getCourseById = async (req, res) => {
  try {
    const { courseId } = req.params;
    console.log("COURSE ID:", courseId);

    const course = await prisma.course.findUnique({
      where: { id: Number(courseId) },
      include: {
        sessions: true,
        creator: {
          select: {
            name: true,
            photoUrl: true,
          },
        },
      },
    });

    if (!course) return res.status(404).json({ message: "Course not found." });

    return res.status(200).json({ course });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Failed to get course by ID." });
  }
};
export const getCreatorCourses = async (req, res) => {
  try {
    const instructorId = req.id;
    const courses = await prisma.course.findMany({
      where: {
        creatorId: instructorId,
      },
      include: {
        creator: {
          select: { name: true, email: true },
        },
      },
    });

    return res.status(200).json({ courses });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to get courses" });
  }
};
export const editCourse = async (req, res) => {
  try {
    const courseId = Number(req.params.courseId);
    const {
      courseTitle,
      subTitle,
      description,
      category,
      courseLevel,
      coursePrice,
      courseThumbnail,
    } = req.body;

    const existingCourse = await prisma.course.findUnique({
      where: { id: courseId },
    });
    if (!existingCourse)
      return res.status(404).json({ message: "Course not found!" });

    const updatedCourse = await prisma.course.update({
      where: { id: courseId },
      data: {
        courseTitle,
        subTitle,
        description,
        category,
        courseLevel,
        coursePrice: Number(coursePrice),
        courseThumbnail,
      },
    });

    return res
      .status(200)
      .json({ course: updatedCourse, message: "Course updated successfully." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to edit course" });
  }
};

