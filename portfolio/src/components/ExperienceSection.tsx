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
    {
      title: "Software Engineer Intern",
      company: "Edwards Lifesciences",
      time: "September 2024 – May 2025",
      bullets: [
        "Worked with the MCoE Team to create a system of applications to manage work orders for both internal and customer facing use.",
        "Creatd both front-end and back-end components for the application suite.",
        "Developed reports and dashboards for data visualization and analysis for team leaders",
      ],
    }
  ];

  return (
    <section className="mb-6">
      <h3 className="text-xl font-semibold text-blue-300 mb-4">Experience</h3>
      <Timeline horizontal>
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
