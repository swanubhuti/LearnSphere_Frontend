import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetSessionsByCourseQuery,
  useDeleteSessionMutation,
  useEditSessionMutation,
} from "@/features/api/sessionApi";
import { Button } from "@/components/ui/button";
import ReactPlayer from "react-player";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ViewSessions = () => {
  const { courseId } = useParams();
  const { data, isLoading, isError, error, refetch } = useGetSessionsByCourseQuery(courseId);
  const [deleteSession] = useDeleteSessionMutation();
  const [editSession] = useEditSessionMutation();
  const navigate = useNavigate();

  const [editModeId, setEditModeId] = useState(null);
  const [formData, setFormData] = useState({ title: "", youtubeUrl: "", richText: "" });

  const handleEditClick = (session) => {
    setEditModeId(session.id);
    setFormData({
      title: session.title,
      youtubeUrl: session.videoUrl,
      richText: session.richText,
    });
  };

  const handleEditSubmit = async (e, sessionId) => {
    e.preventDefault();
    await editSession({ sessionId, title: formData.title, videoUrl: formData.youtubeUrl, richText: formData.richText });

    setEditModeId(null);
    refetch();

  };

  const handleDelete = async (sessionId) => {
    if (confirm("Are you sure you want to delete this session?")) {
      await deleteSession(sessionId);
      refetch();
    }
  };

  if (isLoading) return <p>Loading sessions...</p>;
  if (isError) return <p>{error?.data?.message || "Failed to load sessions."}</p>;

  return (
    <div className="p-6 md:p-12 lg:p-24">
      <div className="flex justify-between items-center  mb-7 ">
        <h2 className="text-3xl fixed text-sky-900 font-bold">Sessions</h2>
        <Button className = "bg-sky-900 fixed right-9 z-50" onClick={() => navigate(`/session/${courseId}`) }>Add New Session</Button>
      </div>

      {data.sessions.length ? (
        <ul className="grid gap-6 mx-auto max-w-3xl">
          {data.sessions.map((session, index) => (
            <li
              key={session.id}
              className="border rounded-lg p-5 max-w-3xl bg-white shadow-sm"
            >
              {editModeId === session.id ? (
                <form onSubmit={(e) => handleEditSubmit(e, session.id)} className="space-y-3">
                  <Input
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Session Title"
                    required
                  />
                  <Input
                    value={formData.youtubeUrl}
                    onChange={(e) => setFormData({ ...formData, youtubeUrl: e.target.value })}
                    placeholder="YouTube URL"
                    required
                  />
                  <Textarea
                    value={formData.richText}
                    onChange={(e) => setFormData({ ...formData, richText: e.target.value })}
                    placeholder="Description"
                    rows={4}
                    required
                  />
                  <div className="flex gap-2">
                    <Button type="submit">Save</Button>
                    <Button variant="secondary" onClick={() => setEditModeId(null)}>Cancel</Button>
                  </div>
                </form>
              ) : (
                <>
                  <h3 className="text-lg font-semibold">
                    {index + 1}. {session.title}
                  </h3>
                  <ReactPlayer
                    url={session.videoUrl}
                    controls
                    width="100%"
                    className="my-2"
                  />
                  <div
                    className="text-sm mt-2"
                    dangerouslySetInnerHTML={{ __html: session.richText }}
                  />
                  <div className="flex gap-2 mt-4">
                    <Button size="sm" onClick={() =>
                navigate(
                  `/dashboard/course/${session.courseId}/sessions/edit/${session.id}`
                )
              }>
                      Edit
                    </Button>
                    <Button size="sm" variant="destructive" onClick={() => handleDelete(session.id)}>
                      Delete
                    </Button>
                  </div>
                </>
              )}
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
