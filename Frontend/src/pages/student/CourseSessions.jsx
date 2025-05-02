import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import {  useGetStudentSessionsByCourseQuery } from "@/features/api/sessionApi";

const CourseSessions = () => {
  const { courseId } = useParams();
  const { data, isLoading, error } = useGetStudentSessionsByCourseQuery(courseId);
  const storageKey = `completedSessions_${courseId}`;

  const [completedSessions, setCompletedSessions] = useState({});

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      setCompletedSessions(JSON.parse(stored));
    }
  }, [storageKey]);

  const toggleCompletion = (id) => {
    const updated = {
      ...completedSessions,
      [id]: !completedSessions[id],
    };
    setCompletedSessions(updated);
    localStorage.setItem(storageKey, JSON.stringify(updated));
  };

  if (isLoading) return <div>Loading sessions...</div>;
  if (error) return <div>Failed to load sessions.</div>;

  return (
    <div className="max-w-6xl mx-auto mt-24 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Course Sessions</h1>
      <div className="flex space-x-6 overflow-x-auto">
        {data.sessions.map((session, index) => {
          const isCompleted = completedSessions[session.id];
          return (
            <div
              key={session.id}
              className="min-w-[300px] max-w-xs bg-white border rounded-2xl shadow-md p-4 flex-shrink-0"
            >
              <h2 className="text-lg font-semibold mb-2">
                {index + 1}. {session.title}
              </h2>
              <ReactPlayer
                url={session.videoUrl?.trim()}
                controls
                width="100%"
              />
              <p className="mt-2 text-sm text-gray-600"> {session.richText}</p>
              <button
                onClick={() => toggleCompletion(session.id)}
                className={`mt-4 w-full py-2 rounded-lg font-medium ${
                  isCompleted
                    ? "bg-sky-800 text-white"
                    : "bg-gray-300 text-black"
                }`}
              >
                {isCompleted ? "Mark as Incomplete" : "Mark as Complete"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseSessions;
