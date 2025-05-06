import React, { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ReactPlayer from "react-player/youtube";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useParams } from "react-router-dom";
import { Label } from "../../components/ui/label";
import RichTextEditor from "./RickTextEditor";

const AddSession = () => {
  const { courseId } = useParams();
  const [title, setTitle] = useState("");
  const [richText, setRichText] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");


  const handleSubmit = async () => {


    const res = await fetch(`http://localhost:3000/api/sessions/${courseId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ title, youtubeUrl, richText }),
    });

    const data = await res.json();

    if (res.ok) {
      toast.success(data.message);
      setTitle("");
      setYoutubeUrl("");
      setRichText("");
      editor?.commands.setContent("");
    } else {
      toast.error(data.message || "Something went wrong");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-24 space-y-4">
      <h1 className="text-xl font-bold">Add New Session</h1>

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

      {/* <div>
        <h2 className="font-semibold">Explanation</h2>
        <EditorContent editor={editor} className="border p-2 rounded min-h-[200px]" />
      </div> */}
      <div>
        <Label>Description</Label>

        <RichTextEditor content={richText} onChange={setRichText} />

      </div>

      <Button onClick={handleSubmit}>Create Session</Button>
    </div>
  );
};

export default AddSession;
