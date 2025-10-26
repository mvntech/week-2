import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import PostDetails from "./pages/PostDetails";

const App = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Blog",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, labore! Animi cum molestias enim, ea, fugiat numquam voluptate expedita quod nulla earum laudantium. Est, neque sit! Magnam non inventore quo.Pariatur, ex, architecto ad esse eveniet est ipsam asperiores sint earum quis tempora rerum dolores eligendi porro natus, praesentium voluptatibus hic. Nulla maiores repellendus ad tempora nostrum beatae laboriosam deserunt. Quis fugiat minus, illum, iusto ipsa officiis magni, aut ipsum exercitationem sint atque quia ea hic ex doloribus magnam? Inventore rem ab corrupti sequi, minima error velit voluptates sit autem.",
    },
  ]);

  // add a post
  const addPost = (post) => {
    setPosts([...posts, { id: Date.now(), ...post }]);
  };

  // update a post
  const updatePost = (id, updatedPost) => {
    setPosts(
      posts.map((post) => (post.id === id ? { ...post, ...updatedPost } : post))
    );
  };

  // delete a post
  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <BrowserRouter>
      <nav className="bg-gray-800 shadow-sm sticky top-0 z-10">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              to="/"
              className="flex-shrink-0 text-xl font-bold text-indigo-400 hover:text-indigo-300 transition duration-150"
            >
              React Blog App
            </Link>

            <div className="flex items-center space-x-6">
              <Link
                to="/"
                className="text-white text-sm font-medium hover:text-indigo-400 transition duration-150 p-2 rounded-md"
              >
                Home
              </Link>
              <Link
                to="/create"
                className="text-white text-sm font-medium bg-indigo-600 px-3 py-2 rounded-lg hover:bg-indigo-700 transition duration-150 shadow-md"
              >
                Create Post
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-2">
        <Routes>
          <Route
            path="/"
            element={<Home posts={posts} deletePost={deletePost} />}
          />
          <Route path="/create" element={<CreatePost addPost={addPost} />} />
          {/* dynamic routing with :id */}
          <Route
            path="/edit/:id"
            element={<EditPost posts={posts} updatePost={updatePost} />}
          />
          <Route path="/post/:id" element={<PostDetails posts={posts} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
