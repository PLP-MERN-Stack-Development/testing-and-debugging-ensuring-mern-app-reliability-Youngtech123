import { useState } from "react";

export default function BugForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, status: "open" });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <input
        type="text"
        placeholder="Bug title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded-md"
        required
      />
      <textarea
        placeholder="Bug description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 rounded-md"
        required
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
      >
        Submit Bug
      </button>
    </form>
  );
}
