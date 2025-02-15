import { TechSkills } from "@/features";
import { techSkills } from "@/utils";

function About() {
  return (
    <section className="min-h-screen py-9 px-4 sm:px-6 lg:px-8">
      <h1 className="text-center text-5xl font-bold text-[#333] dark:text-white uppercase tracking-[0.5rem] mb-8 border-b-[0.3rem] border-b-[#333] dark:border-blue-100 border-solid drop-shadow-[0.2rem_0.2rem_1rem_#555]">
        About me
      </h1>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
          Technical Skills
        </h2>
        <TechSkills skills={techSkills} />

        <h3>Soft Skills</h3>
        <h3>Hobbies</h3>
      </div>
    </section>
  );
}

export default About;
