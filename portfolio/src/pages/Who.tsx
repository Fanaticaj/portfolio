import { Card } from "flowbite-react";
import GradientBackground from "../components/GradientBackground";
import FooterNav from "../components/FooterNav";
import ProjectsSection from "../components/ProjectsSection";
import ExperienceSection from "../components/ExperienceSection";

const Who = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center overflow-y-auto bg-gray-900 text-white">
      <GradientBackground />
      <div className="container mx-auto flex flex-col items-center gap-8 px-6 py-12 md:flex-row">
        {/* Information Card */}
        <div className="w-full">
          <Card className="border border-gray-700 bg-gray-800 shadow-lg">
            <div className="flex w-full justify-center">
              <img
                src="../photo.jpg"
                alt="Anthony Grippi"
                className="h-64 w-64 rounded-full border-4 border-blue-400 object-cover shadow-lg"
              />
            </div>
            <h2 className="text-center text-3xl font-bold text-blue-400">
              Anthony Grippi
            </h2>
            <p className="text-center text-gray-400">
              Computer Science Scholar | Cybersecurity Enthusiast
            </p>
            <section className="mb-6">
              <h3 className="text-xl font-semibold text-blue-300">About Me</h3>
              <p className="text-gray-300">
                I am a passionate Computer Science student with a concentration
                in Cybersecurity. I thrive in fast-paced, challenging
                environments and enjoy developing innovative solutions in
                software engineering and IT security.
              </p>
            </section>
            <ExperienceSection />
            <section className="mb-6">
              <h3 className="text-xl font-semibold text-blue-300">Education</h3>
              <ul className="text-gray-300">
                <li>
                  <strong>California State University Fullerton</strong> - B.S.
                  in Computer Science, Cybersecurity (2022 - Present)
                </li>
                <li>
                  <strong>Saddleback College</strong> - A.S. in Computer Science
                  & A.A. in Liberal Studies (2019 - 2022)
                </li>
              </ul>
            </section>
            <section className="mb-6">
              <h3 className="text-xl font-semibold text-blue-300">Skills</h3>
              <ul className="list-disc pl-6 text-gray-300">
                <li>Programming Languages: C++, Java, JavaScript, Python</li>
                <li>Expertise in Dynamics 365 & IT Security</li>
                <li>Cybersecurity & Capture the Flag (CTF) Challenges</li>
                <li>Blueprint Game Development in Unreal Engine 4</li>
              </ul>
            </section>
            <ProjectsSection />
          </Card>
        </div>
      </div>
      {location.pathname === "/who" ? <FooterNav /> : null}
    </div>
  );
};

export default Who;
