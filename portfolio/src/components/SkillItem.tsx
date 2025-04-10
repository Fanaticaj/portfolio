type SkillItemProps = {
    category: string;
    skills: string[];
  };
  
  const SkillItem = ({ category, skills }: SkillItemProps) => {
    return (
      <div>
        <h4 className="text-gray-300 font-bold p-2 text-lg mb-2">{category}</h4>
        <ul className="flex flex-wrap gap-2 text-sm text-gray-300">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="bg-gray-700 px-3 py-1 rounded-full text-gray-300"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default SkillItem;
  