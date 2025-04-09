import { Timeline } from "flowbite-react";
import ProjectTimelineItem from "./ProjectTimelineItem";

const ProjectsSection = () => {
  const projects = [
    {
      title: "poe2-gaslighter",
      time: "March 2025",
      description:
        "A Python automation tool for the Path of Exile 2 trade market that identifies undervalued gear, calculates optimal crafting routes, and evaluates profit margins. Designed to streamline in-game flipping strategies through smart item valuation and market analysis.",
      link: "https://github.com/Fanaticaj/poe2-gaslighter",
    },
    {
      title: "PalTrade-Hub",
      time: "April 2025",
      description:
        "A work-in-progress trading hub for Palworld that aims to centralize listings, simplify item discovery, and connect players with streamlined trade mechanics. Built with scalability in mind, it lays the groundwork for a dedicated marketplace tailored to the Palworld community.",
      link: "https://github.com/Fanaticaj/PalTrade-Hub",
    },
    {
      title: "FTP Server & Client",
      time: "January 2025",
      description:
        "A custom-built FTP server and client application implemented in Python, featuring user authentication, file transfer protocols, and real-time communication over sockets. Demonstrates a strong grasp of networking principles and low-level protocol design.",
      link: "https://github.com/Fanaticaj/ftp-server-client",
    },
    {
        title: "Q-Learning Blackjack AI",
        time: "December 2024",
        description:
          "A Python application that learns to play Traditional Blackjack, Blackjack Switch, Spanish Blackjack, and European Blackjack using Q-learning algorithms. This project showcases reinforcement learning techniques and the application of machine learning principles to develop a strategy for optimal gameplay.",
        link: "https://github.com/Fanaticaj/ftp-server-client"
    }
  ];

  return (
    <section className="mb-6 space-y-10">
      <h3 className="text-xl font-semibold text-blue-300 mb-4">Projects</h3>
      <Timeline horizontal>
        {projects.map((project) => (
          <ProjectTimelineItem
            key={project.title}
            title={project.title}
            time={project.time}
            description={project.description}
            link={project.link}
          />
        ))}
      </Timeline>
    </section>
  );
};

export default ProjectsSection;
