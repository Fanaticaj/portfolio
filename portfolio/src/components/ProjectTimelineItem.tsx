import { FaGithub } from "react-icons/fa";
import { TimelineItem, TimelinePoint, TimelineContent, TimelineTime, TimelineTitle, TimelineBody, Button } from "flowbite-react";

type ProjectProps = {
  title: string;
  time: string;
  description: string;
  link: string;
};

const ProjectTimelineItem = ({ title, time, description, link }: ProjectProps) => {
  return (
    <TimelineItem>
      <TimelinePoint icon={FaGithub} className="p-3"/>
      <TimelineContent>
        <TimelineTime>{time}</TimelineTime>
        <TimelineTitle className="text-gray-300 font-bold p-2" >{title}</TimelineTitle>
        <TimelineBody className="text-gray-50">{description}</TimelineBody>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Button color="gray" className="mt-2">
            View on GitHub
          </Button>
        </a>
      </TimelineContent>
    </TimelineItem>
  );
};

export default ProjectTimelineItem;
