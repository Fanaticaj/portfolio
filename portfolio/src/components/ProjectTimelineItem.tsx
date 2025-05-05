import { FaGithub } from "react-icons/fa";
import {
  TimelineItem,
  TimelinePoint,
  TimelineContent,
  TimelineTime,
  TimelineTitle,
  TimelineBody,
  Button,
} from "flowbite-react";

type ProjectProps = {
  title: string;
  time: string;
  description: string;
  link: string;
  onMoreInfo?: () => void;
};

const ProjectTimelineItem = ({
  title,
  time,
  description,
  link,
  onMoreInfo,
}: ProjectProps) => {
  return (
    <TimelineItem>
      <TimelinePoint icon={FaGithub} className="p-3" />
      <TimelineContent>
        <TimelineTime>{time}</TimelineTime>
        <TimelineTitle className="p-2 font-bold text-gray-300">
          {title}
        </TimelineTitle>
        <TimelineBody className="text-gray-50">{description}</TimelineBody>
        <div className="mt-3 flex gap-2">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            title="View on GitHub"
          >
            <Button color="dark" size="xs" className="p-2">
              <FaGithub className="h-5 w-5" />
            </Button>
          </a>
          <Button color="gray" className="mt-2" onClick={onMoreInfo}>
            More Info
          </Button>
        </div>
      </TimelineContent>
    </TimelineItem>
  );
};

export default ProjectTimelineItem;
