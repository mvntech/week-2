import React from "react";
import { Link } from "react-router-dom";

const PostItem = ({ post, deletePost }) => {
  return (
    <div className="p-6 mb-4 bg-white rounded-lg shadow-sm border border-gray-100 transition duration-300 hover:shadow-md">
      <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-indigo-600 transition duration-150">
        <Link to={`/post/${post.id}`}>{post.title}</Link>
      </h3>

      <p className="text-gray-600 mb-4 line-clamp-2">{post.content}</p>

      <div className="flex space-x-4 text-sm font-medium">
        <Link
          to={`/post/${post.id}`}
          className="text-indigo-600 hover:text-indigo-800 transition duration-150"
        >
          Read Post →
        </Link>

        <Link
          to={`/edit/${post.id}`}
          className="text-gray-500 hover:text-gray-700 transition duration-150"
        >
          Edit
        </Link>

        <button
          onClick={() => deletePost(post.id)}
          className="text-red-500 hover:text-red-700 transition duration-150 focus:outline-none cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default PostItem;
