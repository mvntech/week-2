import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, deletePost }) => {
  if (posts.length === 0)
    return (
      <p className="text-center text-gray-400 mt-8 p-4">
        No posts yet! Click "Create Post" to start your blog.
      </p>
    );

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} deletePost={deletePost} />
      ))}
    </div>
  );
};

export default PostList;
