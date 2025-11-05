import React from "react";
import { Heart } from "lucide-react";
import { portfolioData } from "@/mockData";

const Footer: React.FC = () => {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
            <span>© {currentYear}</span>
            <span>All rights reserved</span>
          </div>

          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
            <span>Built by</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>{personal.name}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
