import React from "react";
import * as LucideIcons from "lucide-react";
import { Card, CardContent } from "@/components/atoms/card";
import { portfolioData } from "@/mockData";

const Skills: React.FC = () => {
  const { skills } = portfolioData;

  return (
    <section
      id="skills"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill, index) => {
            const IconComponent =
              (LucideIcons as any)[skill.icon] || LucideIcons.Code;

            return (
              <Card
                key={skill.name}
                className="group border-0 shadow-lg hover:shadow-xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 overflow-hidden transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-4 text-center">
                  <div className="relative inline-block mb-3">
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity"></div>
                    <div className="relative p-3 bg-slate-100 dark:bg-slate-800 rounded-xl group-hover:bg-teal-50 dark:group-hover:bg-teal-900/30 transition-colors">
                      <IconComponent className="w-6 h-6 text-slate-600 dark:text-slate-400 group-hover:text-teal-500 transition-colors" />
                    </div>
                  </div>
                  <p className="font-semibold text-slate-900 dark:text-white text-sm mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {skill.name}
                  </p>
                  {/* Progress bar */}
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {skill.level}%
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Footer note */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Always learning and exploring new technologies to stay ahead in the
            ever-evolving tech landscape
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
