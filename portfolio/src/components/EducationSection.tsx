import { Timeline } from "flowbite-react";
import EducationTimelineItem from "./EducationTimelineItem";

const EducationSection = () => {
  const education = [
    {
      school: "California State University Fullerton",
      degree: "B.S. in Computer Science, Cybersecurity",
      time: "2022 – Present",
    },
    {
      school: "Saddleback College",
      degree: "A.S. in Computer Science & A.A. in Liberal Studies",
      time: "2019 – 2022",
    },
  ];

  return (
    <section className="mb-6">
      <h3 className="text-xl font-semibold text-blue-300 mb-4">Education</h3>
      <Timeline horizontal>
        {education.map((item) => (
          <EducationTimelineItem
            key={item.school}
            school={item.school}
            degree={item.degree}
            time={item.time}
          />
        ))}
      </Timeline>
    </section>
  );
};

export default EducationSection;
