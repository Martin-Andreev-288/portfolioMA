import { IoLogoJavascript } from "react-icons/io";
import {
  FaTheaterMasks,
  FaGithub,
  FaCss3,
  FaHtml5,
  FaReact,
} from "react-icons/fa";
import {
  SiShadcnui,
  SiVitest,
  SiNextdotjs,
  SiRedux,
  SiTypescript,
  SiExpress,
  SiPrisma,
  SiVercel,
  SiClaude,
} from "react-icons/si";
import { DiMongodb, DiFirebase, DiPostgresql } from "react-icons/di";
import { GoCopilot } from "react-icons/go";
import { RiNodejsLine, RiTailwindCssFill } from "react-icons/ri";

export const techSkills = [
  { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
  { name: "JavaScript", icon: <IoLogoJavascript className="text-[#F7DF1E]" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-[#000000]" /> },
  { name: "Redux", icon: <SiRedux className="text-[#764ABC]" /> },
  { name: "HTML", icon: <FaHtml5 className="text-[#E34F26]" /> },
  { name: "CSS", icon: <FaCss3 className="text-[#1572B6]" /> },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill className="text-[#06B6D4]" />,
  },
  { name: "Node.js", icon: <RiNodejsLine className="text-[#28c564]" /> },
  { name: "Express.js", icon: <SiExpress className="text-[#8374f3]" /> },
  { name: "Firebase", icon: <DiFirebase className="text-[#FFCA28]" /> },
  { name: "MongoDB", icon: <DiMongodb className="text-[#47A248]" /> },
  { name: "PostgreSQL", icon: <DiPostgresql className="text-[#4169E1]" /> },
  {
    name: "Prisma",
    icon: <SiPrisma className="text-[#2D3748] dark:text-[#A0AEC0]" />,
  },
  { name: "GitHub", icon: <FaGithub className="text-[#181717]" /> },
  {
    name: "Vercel",
    icon: <SiVercel className="text-[#000000] dark:text-[#FFFFFF]" />,
  },
  { name: "GitHub Copilot", icon: <GoCopilot className="text-[#8957E5]" /> },
  { name: "Claude", icon: <SiClaude className="text-[#D97757]" /> },
  { name: "Vitest", icon: <SiVitest className="text-[#729B1B]" /> },
  { name: "Playwright", icon: <FaTheaterMasks className="text-[#211b9b]" /> },
  { name: "shadcn/ui", icon: <SiShadcnui className="text-[#4F46E5]" /> },
];
