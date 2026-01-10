import React from "react";
import {
  GraduationCap,
  Heart,
  Code,
  MapPin,
  Calendar,
  Briefcase,
  CheckCircle2,
} from "lucide-react";
import { Card, CardContent } from "@/components/atoms/card";
import { portfolioData } from "@/mockData";

const About: React.FC = () => {
  const { about, personal } = portfolioData;

  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Get to know more about my background, education, and what drives my
            passion for development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* My Story & Education - Left Side */}
          <div className="order-1 space-y-6">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl shadow-lg shadow-teal-500/30">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      My Story
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> {personal.location}
                    </p>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                  {about.description}
                </p>
              </CardContent>
            </Card>

            {/* Education Card */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl shadow-lg shadow-cyan-500/30">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      Education
                    </h3>
                    <p className="text-teal-500 dark:text-teal-400 flex items-center gap-1 font-medium">
                      <Calendar className="w-4 h-4" /> {about.education.year}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xl font-semibold text-slate-900 dark:text-white">
                    {about.education.degree}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 text-lg">
                    {about.education.institution}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Experience Section - Right Side */}
          <div className="order-2">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 overflow-hidden h-full">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl shadow-lg shadow-purple-500/30">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      Professional Experience
                    </h3>
                  </div>
                </div>

                {about.experience.map((exp, index) => (
                  <div key={index} className="mb-6 last:mb-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <div>
                        <h4 className="text-xl font-semibold text-slate-900 dark:text-white">
                          {exp.title}
                        </h4>
                        <p className="text-teal-600 dark:text-teal-400 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col sm:items-end mt-2 sm:mt-0">
                        <span className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1">
                          <Calendar className="w-4 h-4" /> {exp.duration}
                        </span>
                        <span className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1">
                          <MapPin className="w-4 h-4" /> {exp.location}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2 mt-4">
                      {exp.responsibilities.map((resp, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-slate-600 dark:text-slate-300 text-sm"
                        >
                          <CheckCircle2 className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Interests Section */}
        <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 overflow-hidden">
          <CardContent className="p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl shadow-lg shadow-rose-500/30">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                What I Love Doing
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {about.interests.map((interest, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all duration-300 group cursor-default"
                >
                  <span className="mt-1.5 w-2 h-2 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex-shrink-0 group-hover:scale-150 transition-transform"></span>
                  <span className="text-slate-600 dark:text-slate-300 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {interest}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
