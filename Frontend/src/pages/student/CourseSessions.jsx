import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { useGetStudentSessionsByCourseQuery } from "@/features/api/sessionApi";

const CourseSessions = () => {
  const { courseId } = useParams();
  const { data, isLoading, error } = useGetStudentSessionsByCourseQuery(courseId);
  const storageKey = `completedSessions_${courseId}`;
  
  const [completedSessions, setCompletedSessions] = useState({});
  const [expandedSession, setExpandedSession] = useState(null);

  // Load completion status from localStorage
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

  const toggleSession = (id) => {
    setExpandedSession(expandedSession === id ? null : id);
  };

  if (isLoading) return <div>Loading sessions...</div>;
  if (error) return <div>Failed to load sessions.</div>;

 
  const totalSessions = data?.sessions?.length || 0;
  const completedCount = Object.values(completedSessions).filter(Boolean).length;
  const progressPercentage = totalSessions ? (completedCount / totalSessions) * 100 : 0;

  return (
    <div className="max-w-4xl mx-auto mt-24 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Course Sessions</h1>

      <div className="mb-4">
        <p className="text-center font-semibold">Progress: {completedCount} / {totalSessions} Sessions Completed</p>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div className="bg-sky-800 h-4 rounded-full" style={{ width: `${progressPercentage}%` }}></div>
        </div>
      </div>

      {/* Session Tiles */}
      <div className="space-y-4">
        {data.sessions.map((session, index) => {
          const isCompleted = completedSessions[session.id];
          const isExpanded = expandedSession === session.id;

          return (
            <div key={session.id} className="bg-white border rounded-lg shadow-md p-4">
              {/* Session Title (Dropdown Trigger) */}
              <button
                onClick={() => toggleSession(session.id)}
                className="w-full text-left text-lg font-semibold flex justify-between items-center"
              >
                {index + 1}. {session.title}
                <span>{isExpanded ? "▲" : "▼"}</span>
              </button>

              {/* Dropdown Content */}
              {isExpanded && (
                <div className="mt-4">
                  <ReactPlayer url={session.videoUrl} controls width="100%" />
                  <p className="text-sm mt-2" dangerouslySetInnerHTML={{ __html: session.richText }} />

                  {/* Completion Button */}
                  <button
                    onClick={() => toggleCompletion(session.id)}
                    className={`mt-4 w-full py-2 rounded-lg font-medium ${
                      isCompleted ? "bg-gray-300 text-black" : "bg-sky-800 text-white"
                    }`}
                  >
                    {isCompleted ? "Mark as Incomplete" : "Mark as Complete"}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseSessions;
