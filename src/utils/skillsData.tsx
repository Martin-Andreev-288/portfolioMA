import { IoLogoJavascript } from "react-icons/io";
import {
  FaGithub,
  FaGitSquare,
  FaCss3,
  FaHtml5,
  FaReact,
} from "react-icons/fa";
import { SiShadcnui, SiVitest, SiRedux, SiTypescript } from "react-icons/si";
import { DiMongodb, DiFirebase } from "react-icons/di";
import { RiSupabaseFill, RiTailwindCssFill } from "react-icons/ri";

export const techSkills = [
  { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
  { name: "JavaScript", icon: <IoLogoJavascript className="text-[#F7DF1E]" /> },
  { name: "Redux", icon: <SiRedux className="text-[#764ABC]" /> },
  { name: "HTML", icon: <FaHtml5 className="text-[#E34F26]" /> },
  { name: "CSS", icon: <FaCss3 className="text-[#1572B6]" /> },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill className="text-[#06B6D4]" />,
  },
  { name: "Firebase", icon: <DiFirebase className="text-[#FFCA28]" /> },
  { name: "Supabase", icon: <RiSupabaseFill className="text-[#3ECF8E]" /> },
  { name: "MongoDB", icon: <DiMongodb className="text-[#47A248]" /> },
  { name: "Git", icon: <FaGitSquare className="text-[#F05032]" /> },
  { name: "GitHub", icon: <FaGithub className="text-[#181717]" /> },
  { name: "Vitest", icon: <SiVitest className="text-[#729B1B]" /> },
  { name: "shadcn/ui", icon: <SiShadcnui className="text-[#4F46E5]" /> },
];
