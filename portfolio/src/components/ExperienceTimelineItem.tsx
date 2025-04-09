import { FaHammer } from "react-icons/fa6";
import {
  TimelineItem,
  TimelinePoint,
  TimelineContent,
  TimelineTime,
  TimelineTitle,
  TimelineBody,
} from "flowbite-react";

type ExperienceProps = {
  title: string;
  company: string;
  time: string;
  bullets: string[];
};

const ExperienceTimelineItem = ({ title, company, time, bullets }: ExperienceProps) => {
  return (
    <TimelineItem>
      <TimelinePoint icon={FaHammer} />
      <TimelineContent>
        <TimelineTime>{time}</TimelineTime>
        <TimelineTitle className="text-gray-300">{title}</TimelineTitle>
        <TimelineBody className="text-gray-50">
          <p className="text-gray-300 font-medium mb-2">{company}</p>
          <ul className="list-disc pl-5 text-gray-300">
            {bullets.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </TimelineBody>
      </TimelineContent>
    </TimelineItem>
  );
};

export default ExperienceTimelineItem;
