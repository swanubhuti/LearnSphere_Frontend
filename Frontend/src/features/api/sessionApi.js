import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const sessionApi = createApi({
  reducerPath: "sessionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/sessions",
    credentials: "include", // Required for sending cookies (JWT, etc.)
  }),
  endpoints: (builder) => ({
    getSessionsByCourse: builder.query({
      query: (courseId) => `/${courseId}`, // GET /api/sessions/:courseId
    }),
    getStudentSessionsByCourse: builder.query({
      query: (courseId) => `/student/${courseId}`, // GET /api/sessions/student/:courseId
    }),
    editSession: builder.mutation({
      query: ({ sessionId, ...data }) => ({
        url: `/${sessionId}`, // PUT /api/sessions/:sessionId
        method: "PUT",
        body: data,
      }),
    }),
    deleteSession: builder.mutation({
      query: (sessionId) => ({
        url: `/${sessionId}`, // DELETE /api/sessions/:sessionId
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetSessionsByCourseQuery,
  useGetStudentSessionsByCourseQuery,
  useEditSessionMutation,
  useDeleteSessionMutation,
} = sessionApi;
