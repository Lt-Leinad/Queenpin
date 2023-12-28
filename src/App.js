import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Project from "./components/Project";
import Post from "./components/Post";
import SinglePost from "./components/SinglePost";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router basename="/">
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<About />} path="/about" />
        <Route element={<Testimonials />} path="/testimonials" />
        <Route element={<SinglePost />} path="/post/:slug" />
        <Route element={<Post />} path="/post" />
        <Route element={<Project />} path="/project" />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
