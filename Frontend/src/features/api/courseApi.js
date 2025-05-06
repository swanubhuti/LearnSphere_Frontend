// src/services/courseApi.js

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const COURSE_API = "http://localhost:3000/api/courses";

export const courseApi = createApi({
  reducerPath: "courseApi",
  tagTypes: ["Courses", "Refetch_Creator_Course", "Refetch_Lecture"],
  baseQuery: fetchBaseQuery({
    baseUrl: COURSE_API,
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // 1. Create Course
    createCourse: builder.mutation({
      query: ({ courseTitle, description, category, creatorId }) => ({
        url: "/",
        method: "POST",
        body: { courseTitle, description, category, creatorId },
      }),
      invalidatesTags: ["Courses"],
    }),

    // 2. Search Courses
    searchCourses: builder.query({
      query: ({ searchQuery = "", categories = [], sortByPrice = "" }) => {
        const params = new URLSearchParams();
    
        if (searchQuery) params.append("query", searchQuery);
        if (categories.length > 0) params.append("categories", categories.join(","));
        if (sortByPrice) params.append("sortByPrice", sortByPrice);
    
        return {
          url: `/search?${params.toString()}`,
          method: "GET",
        };
      },
      providesTags: ["Courses"],
    }),
    

    // 3. Get Published Courses
    getPublishedCourses: builder.query({
      query: () => ({
        url: "/published",
        method: "GET",
      }),
      providesTags: ["Courses"],
    }),

    // 4. Publish/Unpublish Course
    togglePublishCourse: builder.mutation({
      query: ({ courseId, publish }) => ({
        url: `/publish/${courseId}`,
        method: "PATCH",
      }),
      invalidatesTags: ["Courses"],
    }),

    // 5. Get Course by ID
    getCourseById: builder.query({
      query: (courseId) => ({
        url: `/${courseId}`,
        method: "GET",
      }),
      providesTags: ["Courses"],
    }),

    // 6. Get Courses Created by Instructor
    getCreatorCourse: builder.query({
      query: () => ({
        url: "/instructor/courses",
        method: "GET",
      }),
      providesTags: ["Refetch_Creator_Course"],
    }),

    // 7. Edit Course
    editCourse: builder.mutation({
      query: ({ formData, courseId }) => ({
        url: `/${courseId}`,
        method: "PUT",
        body: formData,
       headers: () => ({}),
      }),
      invalidatesTags: ["Refetch_Creator_Course"],
    }),
    deleteCourse: builder.mutation({
      query: (courseId) => ({
        url: `/${courseId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Courses"],
    }),

    // 8. Create Lecture
    createLecture: builder.mutation({
      query: ({ lectureTitle, courseId }) => ({
        url: `/${courseId}/lecture`,
        method: "POST",
        body: { lectureTitle },
      }),
      invalidatesTags: ["Refetch_Lecture"],
    }),

    // 9. Get All Lectures in a Course
    getCourseLecture: builder.query({
      query: (courseId) => ({
        url: `/${courseId}/lecture`,
        method: "GET",
      }),
      providesTags: ["Refetch_Lecture"],
    }),

    // 10. Edit Lecture
    editLecture: builder.mutation({
      query: ({ lectureTitle, videoInfo, isPreviewFree, courseId, lectureId }) => ({
        url: `/${courseId}/lecture/${lectureId}`,
        method: "POST",
        body: { lectureTitle, videoInfo, isPreviewFree },
      }),
      invalidatesTags: ["Refetch_Lecture"],
    }),

    // 11. Remove Lecture
    removeLecture: builder.mutation({
      query: (lectureId) => ({
        url: `/lecture/${lectureId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Refetch_Lecture"],
    }),

    // 12. Get Lecture by ID
    getLectureById: builder.query({
      query: (lectureId) => ({
        url: `/lecture/${lectureId}`,
        method: "GET",
      }),
     
    }),
    getInstructorStats: builder.query({
      query: () => ({
        url: "/instructor/stats",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateCourseMutation,
  useSearchCoursesQuery,
  useGetPublishedCoursesQuery,
  useTogglePublishCourseMutation,
  useGetCourseByIdQuery,
  useGetCreatorCourseQuery,
  useEditCourseMutation,
  useDeleteCourseMutation,
  useCreateLectureMutation,
  useGetCourseLectureQuery,
  useEditLectureMutation,
  useRemoveLectureMutation,
  useGetLectureByIdQuery,
  useGetInstructorStatsQuery

  
} = courseApi;
