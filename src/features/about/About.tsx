import { TechSkills, SoftSkills } from "@/features";
import { techSkills, softSkills } from "@/utils";

function About() {
  return (
    <section className="min-h-screen py-9 px-4 sm:px-6 lg:px-8">
      <h1 className="title text-center text-5xl font-bold text-[#333] border-b-[0.3rem] uppercase tracking-[0.5rem] drop-shadow-[0.2rem_0.2rem_1rem_#555]">
        About me
      </h1>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="title subtitle">Technical Skills</h2>
        <TechSkills skills={techSkills} />
        <h2 className="title subtitle">Soft Skills</h2>
        <SoftSkills skills={softSkills} />

        <h2 className="title subtitle">Hobbies</h2>
      </div>
    </section>
  );
}

export default About;
