import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Blogs from "./pages/Blogs.jsx";
import Contact from "./pages/Contact.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Navber from "./components/Navber.jsx";
import Footer from "./components/Footer.jsx";
import Loader from "./components/Loader.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });

    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the delay time as needed

    return () => clearTimeout(timer); // Cleanup the timeout on unmount
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navber />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}
