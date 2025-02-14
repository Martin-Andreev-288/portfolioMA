import { TechSkills } from "@/features";
import { techSkills } from "../../utils/skillsData";

function About() {
  return (
    <section className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-center">About me</h1>
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
