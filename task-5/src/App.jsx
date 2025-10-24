import React from "react";
// installed the `react-router-dom` package to use react router
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    // wraps the app and manages the history API
    <BrowserRouter>
      <nav>
        {/* used instead of anchor tags `<a>` for navigation without page reload. */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div className="page-content">
        {/* contains multiple <Route> components. */}
        <Routes>
          {/* defines a path and the component to render. */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
