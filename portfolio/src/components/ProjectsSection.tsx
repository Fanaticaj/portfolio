import { useState } from "react";
import { Timeline } from "flowbite-react";
import ProjectTimelineItem from "./ProjectTimelineItem";
import ProjectModalContent from "./ProjectModalContent";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const projects = [
    {
      title: "Real-Time Document Editor (rtde)",
      time: "April 2025",
      description:
        "RTDE is a serverless, real-time collaborative document editor built with Next.js and AWS Amplify. It enables multiple users to edit documents simultaneously, with changes reflected instantly across all clients. The project showcases the integration of modern web technologies to create a seamless and scalable collaborative editing experience.",
      link: "https://github.com/Fanaticaj/rtde",
      modal: {
        sections: [
          {
            heading: "Overview",
            text: "The Real-Time Document Editor (rtde) is designed to facilitate seamless collaboration by allowing multiple users to edit documents concurrently. Leveraging the capabilities of AWS Amplify and Next.js, RTDE ensures that all changes are synchronized in real-time, providing an experience akin to popular collaborative platforms. The application emphasizes scalability, responsiveness, and ease of use, making it suitable for various collaborative scenarios.",
          },
          {
            heading: "Technical Details",
            text: "RTDE is developed using Next.js with the App Router architecture, providing a robust and efficient frontend framework. AWS Amplify is utilized to handle backend services, including authentication, API routes, and data storage, ensuring a serverless and scalable infrastructure. The project structure includes modular components for ease of maintenance and scalability. Real-time synchronization is achieved through AWS Amplify's DataStore or GraphQL subscriptions, ensuring that all users have the most up-to-date view of the document. The application also incorporates best practices for security and performance optimization.",
          },
        ],
        images: [
          "../../public/projects/rtde-1.png",
          "../../public/projects/rtde-2.png",
        ],
      },
    },

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
            text: "poe2-gaslighter is a custom-built automation and data analytics tool for Path of Exile 2 that helps players identify underpriced gear on the trade market with high crafting potential. The system mimics the decision-making process of advanced traders by simulating stat increases from runes, quality bonuses, and corruption outcomes. It enables users to evaluate whether an item is worth investing in by projecting its final stats and comparing them against similar, more expensive items. Through this analysis, users can reliably spot opportunities to buy low and sell high—turning raw gear into profit with minimal manual calculation.",
          },
          {
            heading: "Technical Details",
            text: "This project is written entirely in Python and organized into modular components, each responsible for a core aspect of the trading strategy. It leverages the official Path of Exile 2 trade API to execute complex item searches (`poe2_api.py`), applies custom stat simulations using rule-based calculations (`calculations.py`), and performs automated evaluations via filters (`itemfilter.py`) that compare modified gear against predefined thresholds. The CLI interface allows users to run tailored queries and respond in real time to recommended purchases. The app also features recursive query refinement to intelligently handle large result sets, handles rate limits gracefully, and even supports automated purchase initiation through in-game whisper token execution. Configuration is securely handled using environment variables, keeping sensitive tokens like POESESSID safe from public exposure.",
          },
        ],
        images: [
          "../../public/projects/poe2-1.png",
          "../../public/projects/poe2-2.png",
        ],
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
            text: "This project implements a Q-Learning-based Blackjack AI capable of learning optimal strategies through self-play. By simulating thousands of games, the AI agent learns to make decisions that maximize expected rewards, adapting to various game variants and rules. The approach demonstrates the practical application of reinforcement learning techniques in developing intelligent game-playing agents.",
          },
          {
            heading: "Technical Details",
            text: "Developed in Python, the project utilizes NumPy for numerical computations and Matplotlib for data visualization. The AI agent employs the Q-Learning algorithm, maintaining a Q-table to estimate the value of state-action pairs. An ε-greedy policy balances exploration and exploitation during training. The environment simulates Blackjack games, providing feedback in the form of rewards, which the agent uses to update its Q-values. Visualizations include plots of win/loss ratios over time and convergence patterns of the Q-values, offering insights into the learning process and the effectiveness of the derived strategies.",
          },
        ],
        images: [
          "../../public/projects/bjai-1.png",
          "../../public/projects/bjai-2.png",
        ],
      },
    },
    {
      title: "RAT24S Compiler",
      time: "April 2025",
      description:
        "A Python-based compiler for the RAT24S language, developed as a comprehensive project for CPSC 323. This compiler encompasses lexical analysis, syntax parsing, and symbol table management, providing a full-fledged compilation process for a custom-defined language.",
      link: "https://github.com/Fanaticaj/CPSC-323-Compiler",
      modal: {
        sections: [
          {
            heading: "Overview",
            text: "The RAT24S Compiler is designed to process and compile code written in the RAT24S language, a custom language specification developed for educational purposes. The compiler performs lexical analysis to tokenize the input, syntax analysis using recursive descent parsing, and manages a symbol table for identifiers. This project demonstrates the practical application of compiler design principles and provides insights into the construction of language processors.",
          },
          {
            heading: "Technical Details",
            text: "Implemented in Python, the compiler leverages several modules to achieve its functionality. The 'lexer.py' module performs lexical analysis, converting source code into a stream of tokens. 'rdp.py' handles syntax analysis through recursive descent parsing, ensuring the code adheres to the grammatical rules of RAT24S. The 'sym_table.py' module manages the symbol table, keeping track of identifiers and their attributes. Additional modules like 'fsm.py' and 'utils.py' support finite state machine design and utility functions, respectively. The compiler is designed with modularity in mind, allowing for easy maintenance and potential future enhancements.",
          },
        ],
        //images: [
        //"../../public/projects/pal-1.png",
        // "../../public/projects/pal-2.png",
        //],
      },
    },
    {
      title: "PalTrade-Hub",
      time: "March 2024",
      description:
        "A work-in-progress trading hub for Palworld that aims to centralize listings, simplify item discovery, and connect players with streamlined trade mechanics. Built with scalability in mind, it lays the groundwork for a dedicated marketplace tailored to the Palworld community.",
      link: "https://github.com/yoshinoashton/cpsc362-project",
      modal: {
        sections: [
          {
            heading: "Overview",
            text: "PalTrade-Hub is an innovative online platform inspired by the engaging gameplay of Palworld and the convenience of Facebook Marketplace. Designed to facilitate the trading and selling of Palworld creatures, items, and related goods, PalTrade-Hub aims to create a vibrant community for players and enthusiasts. With an intuitive interface and user-friendly features, it serves as a central hub for all Palworld trading activities, offering a secure and organized space for transactions.",
          },
          {
            heading: "Technical Details",
            text: "The frontend of PalTrade-Hub is developed using React, TypeScript, and Tailwind CSS, ensuring a responsive and modern user interface. The backend is structured with Node.js and MongoDB, providing a robust and scalable foundation for handling user data, listings, and transactions. The application architecture emphasizes modularity, facilitating future integrations with official game APIs and third-party services. Key features include user authentication, real-time listing updates, and comprehensive filtering options to enhance user experience and engagement.",
          },
        ],
        images: [
          "../../public/projects/pal-1.png",
          "../../public/projects/pal-2.png",
        ],
      },
    },
    {
      title: "FTP Server & Client",
      time: "December 2023",
      description:
        "A custom-built FTP server and client application implemented in Python, featuring user authentication, file transfer protocols, and real-time communication over sockets. Demonstrates a strong grasp of networking principles and low-level protocol design.",
      link: "https://github.com/Fanaticaj/ftp-server-client",
      modal: {
        sections: [
          {
            heading: "Overview",
            text: `This project implements a custom-built FTP server and client system using Python socket programming. It recreates core FTP functionality—such as listing files (LS), downloading (GET), uploading (PUT), and session termination (QUIT)—using a simple two-socket protocol. The architecture mirrors traditional FTP structure with a dedicated control connection and a separate data connection. This design not only reinforces an understanding of TCP/IP socket communication but also emphasizes hands-on protocol implementation, allowing single-client interactions to be managed reliably across discrete channels.`,
          },
          {
            heading: "Technical Details",
            text: `The server listens on a configurable control port and initiates separate data transfers over a hardcoded data port. It processes client commands through a synchronous loop and handles file transfers using a custom protocol that prepends metadata (filename and file size) to the data stream. The client manages user input, validates file existence during PUT, and interprets server responses via a dual-socket setup. Both sides leverage a recvAll utility to handle TCP fragmentation and ensure reliable transmission. Although limited to one client and using an intentionally constrained buffer size for learning purposes, the system demonstrates real-world networking concepts such as port reuse (SO_REUSEADDR), socket blocking behavior, and structured file chunking.`,
          },
        ],
        //images: ["/images/ftp-1.png", "/images/ftp-2.png"],
      },
    },
  ];

  return (
    <section className="mb-6 space-y-10">
      <h3 className="mb-4 text-xl font-semibold text-blue-300">Projects</h3>
      <Timeline>
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

      <ProjectModalContent
        open={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title ?? ""}
        sections={selectedProject?.modal?.sections ?? []}
        images={selectedProject?.modal?.images ?? []}
      />
    </section>
  );
};

export default ProjectsSection;
