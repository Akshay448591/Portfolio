import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Chatbot from "./Components/Chatbot"; 

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
      <Chatbot /> 
    </>
  );
};

export default App;
