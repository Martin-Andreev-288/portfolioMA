import { EducationCard } from "@/features";
import { education } from "@/utils";

function Resume() {
  return (
    <section className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-center text-5xl font-bold mb-8 border-b-4 border-primary pb-4">
        Education & Credentials
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Education Timeline */}
        <div className="md:col-span-2 space-y-8">
          {education.map((edu, index) => (
            <EducationCard
              key={index}
              title={edu.title}
              institution={edu.institution}
              date={edu.date}
              location={edu.location}
              bullets={edu.bullets}
              isLast={index === education.length - 1}
            />
          ))}
        </div>{" "}
      </div>
    </section>
  );
}

export default Resume;
