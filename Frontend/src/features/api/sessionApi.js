import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const sessionApi = createApi({
  reducerPath: "sessionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/sessions",
    credentials: "include", 
  }),
  endpoints: (builder) => ({
    getSessionsByCourse: builder.query({
      query: (courseId) => `/${courseId}`, 
    }),
    getStudentSessionsByCourse: builder.query({
      query: (courseId) => `/student/${courseId}`, 
    }),
    editSession: builder.mutation({
      query: ({ sessionId, ...data }) => ({
        url: `/${sessionId}`, 
        method: "PUT",
        body: data,
      }),
    }),
    deleteSession: builder.mutation({
      query: (sessionId) => ({
        url: `/${sessionId}`, 
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
