import React from "react";
import { GraduationCap, Heart, Code } from "lucide-react";
import { Card, CardContent } from "@/components/atoms/card";
import { portfolioData } from "@/mockData";

const About: React.FC = () => {
  const { about } = portfolioData;

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            About <span className="text-teal-500">Me</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Get to know more about my background, skills, and what drives me
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Description */}
          <Card className="border-2 border-slate-200 dark:border-slate-800 hover:border-teal-500 dark:hover:border-teal-400 transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-lg">
                  <Code className="w-6 h-6 text-teal-500" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                  My Story
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {about.description}
              </p>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="border-2 border-slate-200 dark:border-slate-800 hover:border-teal-500 dark:hover:border-teal-400 transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-teal-500" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                  Education
                </h3>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-slate-900 dark:text-white">
                  {about.education.degree}
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  {about.education.institution}
                </p>
                <p className="text-sm text-teal-500 dark:text-teal-400">
                  {about.education.year}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Interests */}
        <Card className="border-2 border-slate-200 dark:border-slate-800 hover:border-teal-500 dark:hover:border-teal-400 transition-all duration-300 hover:shadow-xl">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-lg">
                <Heart className="w-6 h-6 text-teal-500" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                What I Love Doing
              </h3>
            </div>
            <ul className="grid sm:grid-cols-2 gap-4">
              {about.interests.map((interest, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-slate-600 dark:text-slate-400"
                >
                  <span className="inline-block w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{interest}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;

