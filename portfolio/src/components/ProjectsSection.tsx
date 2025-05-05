import { useState } from "react";
import { Timeline, Modal, ModalHeader, ModalBody } from "flowbite-react";
import ProjectTimelineItem from "./ProjectTimelineItem";
import ProjectModalContent from "./ProjectModalContent";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const projects = [
    {
      title: "poe2-gaslighter",
      time: "March 2025",
      description:
        "A Python automation tool for the Path of Exile 2 trade market that identifies undervalued gear, calculates optimal crafting routes, and evaluates profit margins. Designed to streamline in-game flipping strategies through smart item valuation and market analysis.",
      link: "https://github.com/Fanaticaj/poe2-gaslighter",
      modal: {
        sections: [
          {
            heading: "Overview",
            text: "poe2-gaslighter is a custom automation tool designed to help players of Path of Exile 2 identify profitable trade opportunities. It analyzes item data in real-time, calculates potential crafting outcomes, and suggests high-margin flips.",
          },
          {
            heading: "Technical Details",
            text: "Built with Python, this project leverages web scraping, REST API calls, and statistical modeling using Pandas. It includes CLI tools for filtering, strategy analysis, and market updates.",
          },
        ],
        images: ["/images/poe2-1.png", "/images/poe2-2.png"],
      },
    },
    {
      title: "PalTrade-Hub",
      time: "April 2025",
      description:
        "A work-in-progress trading hub for Palworld that aims to centralize listings, simplify item discovery, and connect players with streamlined trade mechanics. Built with scalability in mind, it lays the groundwork for a dedicated marketplace tailored to the Palworld community.",
      link: "https://github.com/Fanaticaj/PalTrade-Hub",
      modal: {
        sections: [
          {
            heading: "Overview",
            text: "PalTrade-Hub is being developed as a centralized trading platform for Palworld players. It supports item listings, player-to-player offers, and filters for item type, rarity, and value.",
          },
          {
            heading: "Technical Details",
            text: "The app is built using React, TypeScript, and Tailwind CSS on the front end, with a backend stack planned to use Node.js and MongoDB. The design prioritizes modularity and future integration with official game APIs.",
          },
        ],
        images: ["/images/palhub-1.png", "/images/palhub-2.png"],
      },
    },
    {
      title: "FTP Server & Client",
      time: "January 2025",
      description:
        "A custom-built FTP server and client application implemented in Python, featuring user authentication, file transfer protocols, and real-time communication over sockets. Demonstrates a strong grasp of networking principles and low-level protocol design.",
      link: "https://github.com/Fanaticaj/ftp-server-client",
      modal: {
        sections: [
          {
            heading: "Overview",
            text: "This FTP system was designed from scratch to provide basic file transfer capabilities in a controlled environment. It includes both server-side and client-side components with support for upload, download, and directory navigation.",
          },
          {
            heading: "Technical Details",
            text: "Implemented using Python's `socket` and `os` modules, it supports multi-threaded connections, encrypted logins, and basic command-line interface controls for managing file operations.",
          },
        ],
        images: ["/images/ftp-1.png", "/images/ftp-2.png"],
      },
    },
    {
      title: "Q-Learning Blackjack AI",
      time: "December 2024",
      description:
        "A Python application that learns to play Traditional Blackjack, Blackjack Switch, Spanish Blackjack, and European Blackjack using Q-learning algorithms. This project showcases reinforcement learning techniques and the application of machine learning principles to develop a strategy for optimal gameplay.",
      link: "https://github.com/Fanaticaj/ftp-server-client",
      modal: {
        sections: [
          {
            heading: "Overview",
            text: "This project implements a Q-Learning-based Blackjack AI capable of learning various game variants. It simulates thousands of games to derive an optimal play strategy for each version of the game.",
          },
          {
            heading: "Technical Details",
            text: "Built with Python using NumPy and Matplotlib, it simulates player actions, reward calculation, and Q-value updates. It also includes visualization of win/loss ratios and convergence patterns.",
          },
        ],
        images: ["/images/blackjack-1.png", "/images/blackjack-2.png"],
      },
    },
  ];

  return (
    <section className="mb-6 space-y-10">
      <h3 className="mb-4 text-xl font-semibold text-blue-300">Projects</h3>
      <Timeline horizontal>
        {projects.map((project) => (
          <ProjectTimelineItem
            key={project.title}
            title={project.title}
            time={project.time}
            description={project.description}
            link={project.link}
            onMoreInfo={() => setSelectedProject(project)}
          />
        ))}
      </Timeline>

      <Modal
        show={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject && (
          <>
            <ModalHeader className="bg-gray-800 text-white">
              {selectedProject.title} – Details
            </ModalHeader>
            <ModalBody className="bg-gray-900">
              <ProjectModalContent {...selectedProject.modal} />
            </ModalBody>
          </>
        )}
      </Modal>
    </section>
  );
};

export default ProjectsSection;
