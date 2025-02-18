type EducationCardProps = {
  title: string;
  institution: string;
  date: string;
  location: string;
  bullets: string[];
  isLast: boolean;
};

function EducationCard({
  title,
  institution,
  date,
  location,
  bullets,
  isLast,
}: EducationCardProps) {
  return (
    <div className="relative pl-8 border-l-4 border-primary">
      {/* Timeline Dot */}
      <div className="absolute w-6 h-6 bg-primary rounded-full -left-[14px] top-0" />

      {/* Content */}
      <div className="space-y-2">
        <h3 className="text-2xl font-bold">{title}</h3>
        <div className="flex justify-between items-start">
          <p className="font-semibold text-gray-600 dark:text-gray-300">
            {institution}
          </p>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
        <p className="text-sm text-gray-500">{location}</p>
        <ul className="list-disc pl-6 space-y-1">
          {bullets.map((bullet, i) => (
            <li key={i} className="text-gray-600 dark:text-gray-400">
              {bullet}
            </li>
          ))}
        </ul>
      </div>

      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute h-full w-1 bg-gradient-to-b from-primary to-transparent -left-[4px] top-6" />
      )}
    </div>
  );
}

export default EducationCard;
