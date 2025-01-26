import { Routes, Route } from "react-router-dom";
import BlogLayout from "../components/blog/BlogLayout";
import Home from "../pages/blog/Home";
import BlogPost from "../pages/blog/BlogPost";
import Category from "../pages/blog/Category";
import About from "../pages/blog/About";
import Contact from "../pages/blog/Contact";

function BlogRoutes() {
  return (
    <BlogLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<BlogPost />} />
        <Route path="/category/:name" element={<Category />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BlogLayout>
  );
}

export default BlogRoutes;
