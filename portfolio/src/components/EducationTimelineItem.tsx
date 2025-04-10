import { IoIosSchool } from "react-icons/io";
import {
  TimelineItem,
  TimelinePoint,
  TimelineContent,
  TimelineTime,
  TimelineTitle,
  TimelineBody,
} from "flowbite-react";

type EducationProps = {
  school: string;
  degree: string;
  time: string;
  description?: string;
};

const EducationTimelineItem = ({ school, degree, time, description }: EducationProps) => {
  return (
    <TimelineItem>
      <TimelinePoint icon={IoIosSchool} className="p-3"/>
      <TimelineContent>
        <TimelineTime>{time}</TimelineTime>
        <TimelineTitle className="text-gray-300 font-bold p-2">{school}</TimelineTitle>
        <TimelineBody className="text-gray-50">
          <p className="text-gray-300 font-semibold mb-1">{degree}</p>
          {description && <p className="text-gray-300">{description}</p>}
        </TimelineBody>
      </TimelineContent>
    </TimelineItem>
  );
};

export default EducationTimelineItem;
