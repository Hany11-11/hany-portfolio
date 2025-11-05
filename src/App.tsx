import React from "react";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navigation from "./components/organisms/Navigation";
import Hero from "./components/organisms/Hero";
import About from "./components/organisms/About";
import Projects from "./components/organisms/Projects";
import Skills from "./components/organisms/Skills";
import Contact from "./components/organisms/Contact";
import Footer from "./components/organisms/Footer";

export default function App(): JSX.Element {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
