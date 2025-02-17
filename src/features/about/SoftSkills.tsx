type SoftSkillCategory = {
  category: string;
  color: string;
  icon: React.ReactNode;
  skills: string[];
};

type SoftSkillsProps = {
  skills: SoftSkillCategory[];
};

function SoftSkills({ skills }: SoftSkillsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {skills.map((category) => (
        <div
          key={category.category}
          className={`pt-3 pb-4 px-2 rounded-xl shadow-sm hover:shadow-md transition-shadow
              sm:w-[40%] md:w-[35%] lg:w-[31%] flex flex-col items-center
              bg-gradient-to-br ${category.color}`}
        >
          <div className="flex items-center gap-2 mb-3">
            <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
              {category.category}
            </h4>
            {category.icon}
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {category.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 text-sm rounded-full bg-white/50 dark:bg-gray-800/50
                    hover:bg-white dark:hover:bg-gray-700/70 transition-colors border border-gray-200
                    dark:border-gray-600"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SoftSkills;
