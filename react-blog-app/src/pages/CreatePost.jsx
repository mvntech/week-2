import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = ({ addPost }) => {
  const [form, setForm] = useState({ title: "", content: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.content)
      return alert("Please fill in the fields!");
    addPost(form);
    navigate("/");
  };
  return (
    <div className="container mx-auto max-w-xl p-8 bg-white shadow-sm rounded-lg mt-4 mb-4">
      <h2 className="text-3xl font-light text-gray-800 mb-6 text-center border-b pb-3">
        Create a New Post
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
        />

        <textarea
          placeholder="Content"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          rows="8" // Give it space for content
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
        />
        <button
          type="submit"
          className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-150 cursor-pointer"
        >
          Add Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
