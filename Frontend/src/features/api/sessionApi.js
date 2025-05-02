import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const sessionApi = createApi({
  reducerPath: "sessionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/sessions",
    credentials: "include", // Required for sending cookies
  }),
  endpoints: (builder) => ({
    getSessionsByCourse: builder.query({
      query: (courseId) => `/${courseId}`, // Instructor
    }),
    getStudentSessionsByCourse: builder.query({
      query: (courseId) => `/student/${courseId}`, // Student
    }),
  }),
});

export const {
  useGetSessionsByCourseQuery,
  useGetStudentSessionsByCourseQuery,
} = sessionApi;
