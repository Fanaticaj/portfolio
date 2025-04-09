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
};

const EducationTimelineItem = ({ school, degree, time }: EducationProps) => {
  return (
    <TimelineItem>
      <TimelinePoint icon={IoIosSchool} />
      <TimelineContent>
        <TimelineTime>{time}</TimelineTime>
        <TimelineTitle className="text-gray-300">{school}</TimelineTitle>
        <TimelineBody className="text-gray-50">
          <p className="text-gray-300">{degree}</p>
        </TimelineBody>
      </TimelineContent>
    </TimelineItem>
  );
};

export default EducationTimelineItem;
