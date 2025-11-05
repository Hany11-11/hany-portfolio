import React from "react";
import { ArrowDown, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/atoms/button";
import { portfolioData } from "@/mockData";

const Hero: React.FC = () => {
  const { personal } = portfolioData;

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 md:pt-28 lg:pt-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="space-y-2">
              <p className="text-teal-500 dark:text-teal-400 font-medium text-lg animate-fade-in">
                Hello, I'm
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white animate-fade-in-up">
                {personal.name}
              </h1>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-700 dark:text-slate-300 animate-fade-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                {personal.title}
              </h2>
            </div>

            <p
              className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              {personal.intro}
            </p>

            <p
              className="text-md text-slate-500 dark:text-slate-500 flex items-center justify-center lg:justify-start gap-2 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <span className="inline-block w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span>
              Based in {personal.location}
            </p>

            <div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                onClick={() => scrollToSection("#projects")}
                className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                View My Work
              </Button>
              <Button
                onClick={() => scrollToSection("#contact")}
                variant="outline"
                className="border-2 border-slate-300 dark:border-slate-700 hover:border-teal-500 dark:hover:border-teal-400 px-8 py-6 text-lg rounded-full transform hover:scale-105 transition-all duration-300"
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div
              className="flex items-center justify-center lg:justify-start gap-4 pt-4 animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              <a
                href={`mailto:${personal.email}`}
                className="p-3 rounded-full border-2 border-slate-300 dark:border-slate-700 hover:border-teal-500 dark:hover:border-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all duration-300 transform hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-slate-700 dark:text-slate-300" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border-2 border-slate-300 dark:border-slate-700 hover:border-teal-500 dark:hover:border-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all duration-300 transform hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-slate-700 dark:text-slate-300" />
              </a>
              <a
                href="https://linkedin.com/in/hany02"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border-2 border-slate-300 dark:border-slate-700 hover:border-teal-500 dark:hover:border-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-slate-700 dark:text-slate-300" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div
            className="flex-1 flex justify-center lg:justify-end animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-teal-500/20 dark:bg-teal-400/10 rounded-full blur-3xl animate-pulse"></div>
              <img
                src={personal.profileImage}
                alt={personal.name}
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-8 border-white dark:border-slate-800 shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-teal-500 text-white px-6 py-3 rounded-full font-medium shadow-lg">
                Available for work
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="flex justify-center mt-16 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToSection("#about")}
            className="rounded-full hover:bg-teal-50 dark:hover:bg-teal-900/20"
          >
            <ArrowDown className="w-6 h-6 text-slate-600 dark:text-slate-400" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
