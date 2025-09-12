// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Buy from "./pages/Buy";
import Rent from "./pages/Rent";
import Tools from "./pages/Tools";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import PostProperty from "./pages/PostProperty";
import BlogDetails from "./pages/BlogDetails";
import UserDashboard from "./pages/Dashboard/UserDashboard";
import AdminDashboard from "./pages/Dashboard/AdminDashboard";
import AgentDashboard from "./pages/Dashboard/AgentDashboard";
import PropertyDetail from "./pages/PropertyDetail";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
       
        <Route path="/blog" element={<Blog />} />
        <Route path="/post-property" element={<PostProperty />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/dashboard/admin" element={<AdminDashboard />} />
        <Route path="/dashboard/agent" element={<AgentDashboard />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
