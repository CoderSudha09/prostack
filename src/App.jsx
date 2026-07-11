// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";
import Certificates from "./components/Certificates";

import AOS from "aos";
import { useEffect, useState } from "react";

export default function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // ✅ MAIN FIX HERE
  useEffect(() => {
    document.body.setAttribute("class", theme + "-theme");
  }, [theme]);

  return (
    <>
      <Navbar toggleTheme={toggleTheme} theme={theme} />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <BackToTop />
      <Footer />
    </>
  );
}