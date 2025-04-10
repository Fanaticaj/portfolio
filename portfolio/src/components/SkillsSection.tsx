import SkillItem from "./SkillItem";

const SkillsSection = () => {
  const skillGroups = [
    {
      category: "Programming Languages",
      skills: ["C++", "Java", "JavaScript", "Python", "TypeScript", "C#"],
    },
    {
      category: "Platforms & Tools",
      skills: ["Dynamics 365", "Unreal Engine 4", "Flowbite", "Power Platform", "Git", "Postman", "Docker"],
    },
    {
      category: "Cybersecurity",
      skills: ["CTF Challenges", "Authentication Systems", "Burpsuite", "Nmap", "Metasploit", "Wireshark", "GNS3"]
    },
  ];

  return (
    <section>
      <h3 className="text-xl font-semibold text-blue-300">Skills</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <SkillItem
            key={group.category}
            category={group.category}
            skills={group.skills}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
