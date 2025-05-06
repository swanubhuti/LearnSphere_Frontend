import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    LineChart,
    Line,
    PieChart,
    Pie,
    Cell,
    Legend,
  } from "recharts";
  import { Card, CardContent, CardHeader } from "@/components/ui/card";
  import { useEffect, useState } from "react";
  import axios from "axios";
  import dayjs from "dayjs";
  import { useGetInstructorStatsQuery } from "../../features/api/courseApi";
  
  const COLORS = ["#0284c7", "#0369a1", "#38bdf8", "#0ea5e9", "#7dd3fc"]; // Tailwind sky/blue tone palette
  
  const InstructorDashboard = () => {
    const { data, isLoading, error } = useGetInstructorStatsQuery();
  
    if (isLoading) return <p className="text-sky-900 font-medium">Loading stats...</p>;
    if (error) return <p className="text-red-600 font-semibold">Failed to load stats</p>;
  
    const enrollmentCounts = data?.enrollmentCounts || [];
    const totalEnrollments = enrollmentCounts.reduce((acc, curr) => acc + curr.enrolledCount, 0);
  
    const coursesByCategory = Object.values(
      data.enrollmentCounts.reduce((acc, cur) => {
        acc[cur.category] = acc[cur.category] || {
          name: cur.category,
          value: 0,
        };
        acc[cur.category].value += 1;
        return acc;
      }, {})
    );
  
    const topCourses = [...data.enrollmentCounts]
      .sort((a, b) => b.enrolledCount - a.enrolledCount)
      .slice(0, 5)
      .map((course) => ({ name: course.title, value: course.enrolledCount }));
  
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-6 my-12 sm:p-10 bg-blue-100 min-h-screen">
        <div className="mb-5 lg:mb-0 col-span-2 lg:col-span-3 flex flex-col justify-center ">
          <h1 className="text-3xl font-bold text-sky-900">📊 Instructor Dashboard</h1>
          <p className="text-sky-800 mt-1">Your teaching insights at a glance</p>
        </div>
        <div className="col-span-2 lg:col-span-3 flex flex-wrap justify-between items-center">
          <h2 className="text-xl font-bold text-sky-900">📚 Total Courses: <span className="text-sky-800">{data?.totalCourses || 0}</span></h2>
          <h2 className="text-xl font-bold text-sky-900">👥 Total Enrollments: <span className="text-sky-800">{totalEnrollments}</span></h2>
        </div>
  
        <Card className="col-span-2 lg:col-span-3 shadow-md bg-white border border-sky-100">
          <CardHeader className="text-lg font-semibold text-sky-900">📈 Enrollments Per Course</CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data.enrollmentCounts}>
                <XAxis dataKey="title" tick={{ fill: '#0369a1', fontSize: 12 }} />
                <YAxis allowDecimals={false} tick={{ fill: '#0369a1' }} />
                <Tooltip />
                <Bar dataKey="enrolledCount" fill="#0284c7" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
  
        <Card className="col-span-2 lg:col-span-3 shadow-md bg-white border border-sky-100">
          <CardHeader className="text-lg font-semibold text-sky-900">🕒 Course Creation Timeline</CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={data.enrollmentCounts.map((course) => ({
                  date: dayjs(course.createdAt).format("MMM DD"),
                  count: course.enrolledCount,
                }))}
              >
                <XAxis dataKey="date" tick={{ fill: '#0369a1' }} />
                <YAxis tick={{ fill: '#0369a1' }} />
                <Tooltip />
                <Line type="monotone" dataKey="count" stroke="#0ea5e9" strokeWidth={2} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
  
        <Card className="shadow-md bg-white border border-sky-100">
          <CardHeader className="text-lg font-semibold text-sky-900">🧑‍🎓 Top Enrolled Courses</CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={topCourses}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={100}
                  label
                >
                  {topCourses.map((_, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
  
        <Card className="shadow-md bg-white border border-sky-100">
          <CardHeader className="text-lg font-semibold text-sky-900">📂 Courses by Category</CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={coursesByCategory}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={100}
                  label
                >
                  {coursesByCategory.map((_, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    );
  };
  
  export default InstructorDashboard;
  