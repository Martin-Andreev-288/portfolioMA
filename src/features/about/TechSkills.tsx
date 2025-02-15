type Skill = {
  name: string;
  icon: React.ReactNode;
};

type TechSkillsProps = {
  skills: Skill[];
};

function TechSkills({ skills }: TechSkillsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {skills.map((skill) => (
        <div className="flex items-center px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 hover:scale-105 hover:shadow-md transition-shadow">
          <span className="mr-2 text-xl">{skill.icon}</span>
          <span className="text-sm">{skill.name}</span>
        </div>
      ))}
    </div>
  );
}

export default TechSkills;
