type SkillItemProps = {
    category: string;
    skills: string[];
  };
  
  const SkillItem = ({ category, skills }: SkillItemProps) => {
    return (
      <div className="bg-gray-800 rounded-xl p-4 shadow-sm">
        <h4 className="text-blue-300 font-semibold text-lg mb-2">{category}</h4>
        <ul className="flex flex-wrap gap-2 text-sm text-gray-200">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="bg-gray-700 px-3 py-1 rounded-full text-gray-100"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default SkillItem;
  