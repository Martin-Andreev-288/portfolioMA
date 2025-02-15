import {
  MessagesSquare,
  Users,
  BrainCircuit,
  Trophy,
  Sprout,
} from "lucide-react";

export const softSkills = [
  {
    category: "Communication",
    color:
      "from-blue-50/80 to-blue-100/50 dark:from-blue-900/30 dark:to-blue-800/50",
    icon: (
      <MessagesSquare className="w-5 h-5 text-blue-600 dark:text-blue-400" />
    ),
    skills: [
      "Clear Communication",
      "Active Listening",
      "Receptiveness to Feedback",
    ],
  },
  {
    category: "Collaboration",
    color:
      "from-green-50/80 to-green-100/50 dark:from-green-900/30 dark:to-green-800/50",
    icon: <Users className="w-5 h-5 text-green-600 dark:text-green-400" />,
    skills: ["Teamwork", "Conflict Resolution", "Empathy"],
  },
  {
    category: "Problem Solving",
    color:
      "from-purple-50/80 to-purple-100/50 dark:from-purple-900/30 dark:to-purple-800/50",
    icon: (
      <BrainCircuit className="w-5 h-5 text-purple-600 dark:text-purple-400" />
    ),
    skills: ["Creative Thinking", "Decision Making", "Adaptability"],
  },
  {
    category: "Work Ethic",
    color:
      "from-orange-50/80 to-orange-100/50 dark:from-orange-900/30 dark:to-orange-800/50",
    icon: <Trophy className="w-5 h-5 text-orange-600 dark:text-orange-400" />,
    skills: [
      "Discipline",
      "Self-Motivation",
      "Efficiency",
      "Attention to Detail",
    ],
  },
  {
    category: "Personal Growth",
    color:
      "from-teal-50/80 to-teal-100/50 dark:from-teal-900/30 dark:to-teal-800/50",
    icon: <Sprout className="w-5 h-5 text-teal-600 dark:text-teal-400" />,
    skills: ["Growth Mindset", "Emotional Intelligence", "Patience"],
  },
];
