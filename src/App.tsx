import React, { useEffect } from "react";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navigation from "./components/organisms/Navigation";
import Hero3D from "./components/organisms/Hero3D";
import About3D from "./components/organisms/About3D";
import Projects3D from "./components/organisms/Projects3D";
import Skills3D from "./components/organisms/Skills3D";
import Contact3D from "./components/organisms/Contact3D";
import Footer3D from "./components/organisms/Footer3D";
import { Toaster } from "./components/atoms/sonner";

export default function App(): JSX.Element {
  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (
        target.tagName === "A" &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        e.preventDefault();
        const id = target.getAttribute("href")?.slice(1);
        const element = document.getElementById(id || "");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white scroll-smooth">
        <Navigation />
        <main>
          <Hero3D />
          <About3D />
          <Skills3D />
          <Projects3D />
          <Contact3D />
        </main>
        <Footer3D />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}
