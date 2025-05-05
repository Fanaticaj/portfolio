type ProjectModalContentProps = {
  sections: { heading: string; text: string }[];
  images: string[];
};

const ProjectModalContent = ({
  sections,
  images,
}: ProjectModalContentProps) => {
  return (
    <div className="space-y-6">
      {sections.map((section, idx) => (
        <div key={idx}>
          <h4 className="mb-2 text-lg font-semibold text-blue-300">
            {section.heading}
          </h4>
          <p className="text-gray-300">{section.text}</p>
        </div>
      ))}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Screenshot ${idx + 1}`}
            className="rounded-lg border border-gray-700 shadow"
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectModalContent;
