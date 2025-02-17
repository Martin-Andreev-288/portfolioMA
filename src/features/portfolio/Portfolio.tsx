import { Projects } from "@/features";
import { projects } from "@/utils";

function Portfolio() {
  return (
    <section className="min-h-screen py-9 px-4 sm:px-6 lg:px-8">
      <h1 className="title text-center text-5xl font-bold text-[#333] border-b-[0.3rem] uppercase tracking-[0.5rem] drop-shadow-[0.2rem_0.2rem_1rem_#555]">
        Projects
      </h1>
      <div className="max-w-7xl mx-auto text-center">
        {/* Projects */}
        <div>
          <Projects projects={projects} />
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
