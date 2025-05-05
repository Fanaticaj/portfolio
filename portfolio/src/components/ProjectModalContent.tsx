import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "flowbite-react";

type ProjectModalContentProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  sections: { heading: string; text: string }[];
  images: string[];
};

const ProjectModalContent = ({
  open,
  onClose,
  title,
  sections,
  images,
}: ProjectModalContentProps) => {
  return (
    <Modal show={open} onClose={onClose} size="7xl" popup>
      <div className="relative rounded-lg border border-gray-700 bg-gray-800 shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between rounded-t border-b border-gray-700 p-4 md:p-5">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <button
            onClick={onClose}
            type="button"
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-sm text-gray-400 hover:bg-gray-700 hover:text-white"
          >
            <svg
              className="h-3 w-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
              aria-hidden="true"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>

        {/* Body */}
        <ModalBody className="space-y-6 p-4 text-gray-300 md:p-5">
          {sections.map((section, idx) => (
            <div key={idx}>
              <h4 className="mb-2 text-lg font-semibold text-blue-300">
                {section.heading}
              </h4>
              <p className="text-sm leading-relaxed">{section.text}</p>
            </div>
          ))}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {images.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Screenshot ${idx + 1}`}
                className="rounded-lg border border-gray-700 shadow-md"
              />
            ))}
          </div>
        </ModalBody>

        {/* Footer */}
        <ModalFooter className="flex items-center justify-end rounded-b border-t border-gray-700 p-4 md:p-5">
          <Button color="gray" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </div>
    </Modal>
  );
};

export default ProjectModalContent;
