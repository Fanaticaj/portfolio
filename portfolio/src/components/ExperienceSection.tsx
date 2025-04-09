import { Timeline } from "flowbite-react";
import ExperienceTimelineItem from "./ExperienceTimelineItem";

const ExperienceSection = () => {
  const experience = [
    {
      title: "Senior Developer / Architect, CRM Engineer",
      company: "Clarus IT Solutions",
      time: "2021 – Present",
      bullets: [
        "Led a team of developers in CRM projects from inception to deployment.",
        "Designed and optimized workflow configurations across multiple environments.",
        "Implemented software solutions for enterprise clients across various industries.",
      ],
    },
    // Add more roles here as needed in the future
  ];

  return (
    <section className="mb-6">
      <h3 className="text-xl font-semibold text-blue-300 mb-4">Experience</h3>
      <Timeline>
        {experience.map((item) => (
          <ExperienceTimelineItem
            key={item.title}
            title={item.title}
            company={item.company}
            time={item.time}
            bullets={item.bullets}
          />
        ))}
      </Timeline>
    </section>
  );
};

export default ExperienceSection;
