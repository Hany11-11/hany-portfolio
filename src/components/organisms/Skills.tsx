import React from "react";
import * as LucideIcons from "lucide-react";
import { Card, CardContent } from "@/components/atoms/card";
import { portfolioData } from "@/mockData";

const Skills: React.FC = () => {
  const { skills } = portfolioData;

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            My <span className="text-teal-500">Skills</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill: any, index: number) => {
            const IconComponent =
              (LucideIcons as any)[skill.icon] || (LucideIcons as any).Code;

            return (
              <Card
                key={index}
                className="group border-2 border-slate-200 dark:border-slate-800 hover:border-teal-500 dark:hover:border-teal-400 transition-all duration-300 hover:shadow-xl cursor-pointer"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.05}s both`,
                }}
              >
                <CardContent className="p-6 flex flex-col items-center justify-center space-y-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-teal-500/20 dark:bg-teal-400/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <div className="relative p-4 bg-slate-100 dark:bg-slate-800 rounded-full group-hover:bg-teal-100 dark:group-hover:bg-teal-900/30 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-slate-700 dark:text-slate-300 group-hover:text-teal-500 transition-colors duration-300" />
                    </div>
                  </div>
                  <div className="text-center space-y-2">
                    <p className="font-semibold text-slate-900 dark:text-white group-hover:text-teal-500 transition-colors">
                      {skill.name}
                    </p>
                    {/* Skill Level Bar */}
                    <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
                      <div
                        className="h-full bg-teal-500 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          transitionDelay: `${index * 0.05}s`,
                        }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Skills Note */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 dark:text-slate-400">
            Always learning and exploring new technologies to stay ahead in the
            ever-evolving tech landscape
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;

