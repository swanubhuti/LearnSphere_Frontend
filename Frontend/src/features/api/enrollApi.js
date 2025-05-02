import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const enrollApi = createApi({
  reducerPath: "enrollApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/enrollments",
    credentials: "include",
  }),
  tagTypes: ["Enrollments"],
  endpoints: (builder) => ({
    enrollCourse: builder.mutation({
      query: (courseId) => ({
        url: `/${courseId}`,
        method: "POST",
        body: { courseId },
      }),
      invalidatesTags: ["Enrollments"],
    }),
    getMyEnrollments: builder.query({
      query: () => ({
        url: "/me",
        method: "GET",
      }),
      providesTags: ["Enrollments"],
    }),
  }),
});

export const {
  useEnrollCourseMutation,
  useGetMyEnrollmentsQuery,
} = enrollApi;
