import prisma from "../database/db.config.js";

// Create Course
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
      return res.status(400).json({ message: "Title and Category are required." });
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

    return res.status(201).json({ course, message: "Course created successfully." });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Failed to create course." });
  }
};

  
// Get Published Courses
export const getPublishedCourses = async (req, res) => {
  try {
    const courses = await prisma.course.findMany({
      where: { isPublished: true },
      include: { creator: { select: { name: true, photoUrl: true } } },
    });

    return res.status(200).json({ courses });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Failed to get published courses." });
  }
};

// Search Courses
export const searchCourses = async (req, res) => {
  try {
    const { query = "", sortByPrice = "" } = req.query;

    // Ensure categories is always an array
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
              { description: { contains: query, mode: "insensitive" } },
              { category: { contains: query, mode: "insensitive" } },
            ],
          },
          ...(categories.length > 0
            ? [{ category: { in: categories } }]
            : []),
        ],
      },
      include: {
        creator: { select: { name: true, photoUrl: true } },
      },
      orderBy: sortByPrice
        ? { price: sortByPrice === "low" ? "asc" : "desc" }
        : undefined,
    });

    return res.status(200).json({ courses });
  } catch (error) {
    console.error("Search Error:", error);
    return res.status(500).json({ message: "Failed to search courses." });
  }
};



export const deleteCourse = async (req, res) => {
  try {
    const { courseId } = req.params;

    // Delete the course
    await prisma.course.delete({
      where: { id: Number(courseId) },
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
  try {
    const { courseId } = req.params;
    const { publish } = req.query;

    const course = await prisma.course.update({
      where: { id: Number(courseId) },
      data: { isPublished: publish === "true" },
    });

    return res.status(200).json({ message: `Course is ${course.isPublished ? "Published" : "Unpublished"}.` });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Failed to toggle publish course." });
  }
};

  // Get Course by ID
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
    const instructorId = req.id
    const courses = await prisma.course.findMany({
      where: {
        creatorId: instructorId, // only fetch logged-in instructor's courses
      },
      include: {
        creator: {
          select: { name: true, email: true }, // optional: select what you need
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
    const { courseTitle, subTitle, description, category, courseLevel, coursePrice } = req.body;
    const thumbnail = req.file;

    const existingCourse = await prisma.course.findUnique({ where: { id: courseId } });
    if (!existingCourse) return res.status(404).json({ message: "Course not found!" });

    let courseThumbnail = existingCourse.courseThumbnail;
    if (thumbnail) {
      // if (courseThumbnail) {
      //   const publicId = courseThumbnail.split("/").pop().split(".")[0];
      //   await deleteMediaFromCloudinary(publicId);
      // }
      // const uploadResult = await uploadMedia(thumbnail.path);
      // courseThumbnail = uploadResult?.secure_url|| uploadResult?.url || thumbnail.filename;
      courseThumbnail = thumbnail.path; // Use the path directly for now
    }

    const updatedCourse = await prisma.course.update({
      where: { id: courseId },
      data: { 
        courseTitle,
        subTitle,
        description,
        category,
        courseLevel,
        coursePrice: Number(coursePrice),
        courseThumbnail
      }
    });

    return res.status(200).json({ course: updatedCourse, message: "Course updated successfully." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to edit course" });
  }
};
// export const getCourseById = async (req, res) => {
//   try {
//     const courseId = Number(req.params.courseId);
//     const course = await prisma.course.findUnique({ where: { id: courseId } });

//     if (!course) return res.status(404).json({ message: "Course not found!" });
//     return res.status(200).json({ course });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: "Failed to get course by id" });
//   }
// };

export const createLecture = async (req, res) => {
  try {
    const { lectureTitle } = req.body;
    const courseId = Number(req.params.courseId);

    if (!lectureTitle) return res.status(400).json({ message: "Lecture title is required" });

    const lecture = await prisma.lecture.create({
      data: { lectureTitle, courseId }
    });

    return res.status(201).json({ lecture, message: "Lecture created successfully." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to create lecture" });
  }
};
export const getCourseLecture = async (req, res) => {
  try {
    const courseId = Number(req.params.courseId);
    const lectures = await prisma.lecture.findMany({
      where: { courseId }
    });

    return res.status(200).json({ lectures });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to get lectures" });
  }
};
export const editLecture = async (req, res) => {
  try {
    const { lectureTitle, videoInfo, isPreviewFree } = req.body;
    const lectureId = Number(req.params.lectureId);

    const lecture = await prisma.lecture.findUnique({ where: { id: lectureId } });
    if (!lecture) return res.status(404).json({ message: "Lecture not found!" });

    const updatedLecture = await prisma.lecture.update({
      where: { id: lectureId },
      data: {
        lectureTitle,
        videoUrl: videoInfo?.videoUrl,
        publicId: videoInfo?.publicId,
        isPreviewFree
      }
    });

    return res.status(200).json({ lecture: updatedLecture, message: "Lecture updated successfully." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to edit lecture" });
  }
};
export const removeLecture = async (req, res) => {
  try {
    const lectureId = Number(req.params.lectureId);

    const lecture = await prisma.lecture.findUnique({ where: { id: lectureId } });
    if (!lecture) return res.status(404).json({ message: "Lecture not found!" });

    if (lecture.publicId) await deleteVideoFromCloudinary(lecture.publicId);

    await prisma.lecture.delete({ where: { id: lectureId } });

    return res.status(200).json({ message: "Lecture removed successfully." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to remove lecture" });
  }
};
export const getLectureById = async (req, res) => {
  try {
    const lectureId = Number(req.params.lectureId);
    const lecture = await prisma.lecture.findUnique({ where: { id: lectureId } });

    if (!lecture) return res.status(404).json({ message: "Lecture not found!" });
    return res.status(200).json({ lecture });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to get lecture by id" });
  }
};


