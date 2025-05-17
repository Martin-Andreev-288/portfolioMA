import { Button } from "@/components/ui/button";
import { useState } from "react";
import { NavLink } from "react-router";

export function IntroductionText() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div className="mt-12 text-center animate-in fade-in-50 slide-in-from-bottom-3 duration-500">
      {/* Header */}
      <p className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
        Hey there ✋ (in case you skipped the video)!
      </p>
      {/* Main text */}
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        I'm Martin - Frontend developer by day, CSS wrestler by night,
        specializing in creating user-friendly and performant applications with{" "}
        <span className="text-black dark:text-gray-100 font-semibold">
          React, TypeScript
        </span>{" "}
        and related technologies. This portfolio is where I showcase my skills,
        projects, and journey in web development.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        What you'll find here: 🤔
      </p>

      {/* Expandable Section */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isExpanded ? "max-h-[2000px]" : "max-h-0"
        }`}
      >
        <ul className="space-y-4 text-gray-700 dark:text-gray-300 mb-8">
          <li key="about">
            👉{" "}
            <NavLink
              to="/about"
              className="text-primary dark:text-gray-100 hover:underline font-medium"
            >
              About
            </NavLink>{" "}
            - A deeper look into my technical skills, soft skills, and passions.
            🔍
          </li>
          <li key="portfolio">
            👉{" "}
            <NavLink
              to="/portfolio"
              className="text-primary dark:text-gray-100 hover:underline font-medium"
            >
              Portfolio
            </NavLink>{" "}
            - A selection of projects i've built (which could easily have the
            "200 caffeine dozens later..." subtitle 😉).
          </li>
          <li key="resume">
            👉{" "}
            <NavLink
              to="/resume"
              className="text-primary dark:text-gray-100 hover:underline font-medium"
            >
              Resume
            </NavLink>{" "}
            - My education and my certifications. 📄
          </li>
          <li key="q&a">
            👉{" "}
            <NavLink
              to="/q&a"
              className="text-primary dark:text-gray-100 hover:underline font-medium"
            >
              Q&A
            </NavLink>{" "}
            - Answers to some burning questions about my programming journey -
            just in case you're curious. ❔
          </li>
          <li key="contact">
            👉{" "}
            <NavLink
              to="/contact"
              className="text-primary dark:text-gray-100 hover:underline font-medium"
            >
              Contact
            </NavLink>{" "}
            - If you want to connect (or even hate me, if you dare), here's
            where you'll find all the ways to reach out. ☎️
          </li>
        </ul>
        <p className="text-xl font-medium text-gray-600 dark:text-gray-300 mb-4">
          Thanks for stopping by - i hope you enjoy exploring my work!
        </p>
        <p className="text-xl font-medium text-gray-600 dark:text-gray-300 mb-4">
          Have a great day, and be a nice person! ✌️
        </p>
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <Button
          variant="outline"
          onClick={() => setIsExpanded(!isExpanded)}
          className="transition-transform hover:scale-105 dark:border-gray-100"
        >
          {isExpanded ? "Show Less ↑" : "Show More ↓"}
        </Button>
      </div>
    </div>
  );
}

export default IntroductionText;
