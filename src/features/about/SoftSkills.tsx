type Skill = {
  category: string;
  skills: string[];
};

type SoftSkillsProps = {
  skills: Skill[];
};

function SoftSkills({ skills }: SoftSkillsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {skills.map((category) => (
        <div
          key={category.category}
          className="pt-3 pb-4 px-2 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 shadow-sm hover:shadow-md transition-shadow sm:w-[40%] md:w-[35%] lg:w-[31%] flex justify-center"
        >
          <div className="text-center">
            <h4 className="text-lg text-center font-semibold mb-3 text-gray-700 dark:text-gray-200">
              {category.category}
            </h4>
            <div className="flex flex-wrap justify-center gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm rounded-full bg-gray-200/50 dark:bg-gray-700/50 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SoftSkills;
