import React from "react";
import PostList from "../components/PostList";
import { Link } from "react-router-dom";

const Home = ({ posts, deletePost }) => {
  return (
    <main className="container mx-auto max-w-full py-2 px-4 sm:px-6 lg:px-8  min-h-screen">
      <div className="flex justify-between items-center mb-6 border-b pb-3">
        <h2 className="text-3xl font-light text-gray-800">All Blog Posts</h2>
        <Link
          to="/create"
          className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition duration-150 shadow-md"
        >
          + Create Post
        </Link>
      </div>

      <PostList posts={posts} deletePost={deletePost} />
    </main>
  );
};

export default Home;
