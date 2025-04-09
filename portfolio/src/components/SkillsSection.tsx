import SkillItem from "./SkillItem";

const SkillsSection = () => {
  const skillGroups = [
    {
      category: "Programming Languages",
      skills: ["C++", "Java", "JavaScript", "Python"],
    },
    {
      category: "Platforms & Tools",
      skills: ["Dynamics 365", "Unreal Engine 4", "Flowbite", "Power Platform"],
    },
    {
      category: "Cybersecurity",
      skills: ["CTF Challenges", "IT Security", "Authentication Systems"],
    },
  ];

  return (
    <section className="mb-6">
      <h3 className="text-xl font-semibold text-blue-300 mb-4">Skills</h3>
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
