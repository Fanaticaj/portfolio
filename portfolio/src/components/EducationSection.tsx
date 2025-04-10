import { Timeline } from "flowbite-react";
import EducationTimelineItem from "./EducationTimelineItem";

const EducationSection = () => {
  const education = [
    {
      school: "California State University Fullerton",
      degree: "B.S. in Computer Science, Cybersecurity",
      time: "2022 – Present",
      description: `Currently pursuing a Bachelor's degree with a concentration in Cybersecurity. 
      Developed a strong foundation in network security, ethical hacking, and secure software design. 
      Worked on real-world projects involving secure system architecture and participated in cybersecurity competitions and Capture the Flag (CTF) events. 
      Engaged in collaborative research and technical writing, while maintaining academic excellence.`
    },
    {
      school: "Saddleback College",
      degree: "A.S. in Computer Science & A.A. in Liberal Studies",
      time: "2019 – 2022",
      description: `Completed foundational coursework in computer science, programming, and data structures, 
      while also broadening critical thinking and communication skills through liberal studies. 
      Participated in student-led coding clubs and tutoring programs, assisting peers in understanding core programming concepts. 
      Built early projects in Python and Java that laid the groundwork for future academic and professional success.`
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
            description={item.description}
          />
        ))}
      </Timeline>
    </section>
  );
};

export default EducationSection;
