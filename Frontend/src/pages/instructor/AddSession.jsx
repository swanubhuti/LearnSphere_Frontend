import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import RichTextEditor from "./RickTextEditor";
import { Label } from "@/components/ui/label";
import ReactPlayer from "react-player/youtube";

const AddSession = () => {
  const { courseId, sessionId } = useParams();
  const isEdit = Boolean(sessionId);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [richText, setRichText] = useState("");

  useEffect(() => {
    if (isEdit) {
      // Fetch session to edit
      fetch(`http://localhost:3000/api/sessions/single/${sessionId}`, {
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setYoutubeUrl(data.videoUrl); 

          setRichText(data.richText);
        })
        .catch(() => toast.error("Failed to load session data"));
    }
  }, [isEdit, sessionId]);

  const handleSubmit = async () => {
    const url = isEdit
      ? `http://localhost:3000/api/sessions/${sessionId}`
      : `http://localhost:3000/api/sessions/${courseId}`;
    const method = isEdit ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ title, videoUrl: youtubeUrl, richText }),
    });

    const data = await res.json();

    if (res.ok) {
      toast.success(data.message);
      if (isEdit) {
        navigate(`/dashboard/course/${courseId}/sessions`);
      } else {
        setTitle("");
        setYoutubeUrl("");
        setRichText("");
      }
    } else {
      toast.error(data.message || "Something went wrong");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-24 space-y-4">
      <h1 className="text-xl font-bold">
        {isEdit ? "Edit Session" : "Add New Session"}
      </h1>

      <Input
        placeholder="Session Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Input
        placeholder="YouTube Video URL"
        value={youtubeUrl}
        onChange={(e) => setYoutubeUrl(e.target.value)}
      />

      {ReactPlayer.canPlay(youtubeUrl) && (
        <div className="aspect-video">
          <ReactPlayer url={youtubeUrl} controls width="100%" height="100%" />
        </div>
      )}

      <div>
        <Label>Description</Label>
        <RichTextEditor content={richText} onChange={setRichText} />
      </div>

      <Button onClick={handleSubmit}>
        {isEdit ? "Update Session" : "Create Session"}
      </Button>
    </div>
  );
};

export default AddSession;
