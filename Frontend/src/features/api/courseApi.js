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
   
    createCourse: builder.mutation({
      query: ({ courseTitle, description, category, creatorId }) => ({
        url: "/",
        method: "POST",
        body: { courseTitle, description, category, creatorId },
      }),
      invalidatesTags: ["Courses"],
    }),

   
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
    

    getPublishedCourses: builder.query({
      query: () => ({
        url: "/published",
        method: "GET",
      }),
      providesTags: ["Courses"],
    }),

  
    togglePublishCourse: builder.mutation({
      query: ({ courseId, publish }) => ({
        url: `/publish/${courseId}`,
        method: "PATCH",
      }),
      invalidatesTags: ["Courses"],
    }),


    getCourseById: builder.query({
      query: (courseId) => ({
        url: `/${courseId}`,
        method: "GET",
      }),
      providesTags: ["Courses"],
    }),

  
    getCreatorCourse: builder.query({
      query: () => ({
        url: "/instructor/courses",
        method: "GET",
      }),
      providesTags: ["Refetch_Creator_Course"],
    }),


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
  useGetInstructorStatsQuery
} = courseApi;
