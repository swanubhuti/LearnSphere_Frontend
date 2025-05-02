import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetSessionsByCourseQuery } from "@/features/api/sessionApi";
import { Button } from "@/components/ui/button";

const ViewSessions = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isError, error } = useGetSessionsByCourseQuery(courseId);

  if (isLoading) return <p>Loading sessions...</p>;
  if (isError) return <p>{error?.data?.message || "Failed to load sessions."}</p>;

  return (
    <div className="p-5">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold">Sessions</h2>
        <Button onClick={() => navigate("add")}>Add New Session</Button>
      </div>

      {data.sessions.length ? (
        <ul className="space-y-2">
          {data.sessions.map((session, index) => (
            <li key={session.id} className="border p-3 rounded">
              <h3 className="font-semibold">
                {index + 1}. {session.title}
              </h3>
              <p>{session.videoUrl}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No sessions found.</p>
      )}
    </div>
  );
};

export default ViewSessions;
