import React from "react";
import { useParams, Link } from "react-router-dom";

const PostDetails = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  if (!post)
    return <p className="text-center text-red-500 mt-20">Post not found!</p>;

  return (
    <div className="container mx-auto max-w-3xl px-4 py-10 bg-white shadow-sm rounded-lg mb-4 mt-4">
      <h2 className="text-4xl text-center font-bold text-gray-900 mb-6 border-b pb-4">
        {post.title}
      </h2>

      <p className="text-lg text-gray-700 leading-relaxed mb-8 whitespace-pre-wrap">
        {post.content}
      </p>

      <Link
        to="/"
        className="text-indigo-600 hover:text-indigo-800 transition duration-150 font-medium flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back to all posts
      </Link>
    </div>
  );
};

export default PostDetails;
