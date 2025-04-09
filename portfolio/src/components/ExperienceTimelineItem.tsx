import { HiCalendar } from "react-icons/hi";
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
      <TimelinePoint icon={HiCalendar} />
      <TimelineContent>
        <TimelineTime>{time}</TimelineTime>
        <TimelineTitle>{title}</TimelineTitle>
        <TimelineBody>
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
