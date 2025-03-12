import { Card } from "flowbite-react";
import GradientBackground from "../components/GradientBackground";
import FooterNav from "../components/FooterNav";

const Who = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <GradientBackground />
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-8">
        {/* Profile Photo Section */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img 
            src="../photo.jpg" 
            alt="Anthony Grippi" 
            className="w-64 h-64 object-cover rounded-full border-4 border-blue-400 shadow-lg" 
          />
        </div>
        
        {/* Information Card */}
        <div className="w-full md:w-2/3">
          <Card className="bg-gray-800 border border-gray-700 shadow-lg">
              <h2 className="text-3xl font-bold text-center text-blue-400">Anthony Grippi</h2>
              <p className="text-center text-gray-400">Computer Science Scholar | Cybersecurity Enthusiast</p>
              <section className="mb-6">
                <h3 className="text-xl font-semibold text-blue-300">About Me</h3>
                <p className="text-gray-300">
                  I am a passionate Computer Science student with a concentration in Cybersecurity. I thrive in fast-paced,
                  challenging environments and enjoy developing innovative solutions in software engineering and IT security.
                </p>
              </section>
              
              <section className="mb-6">
                <h3 className="text-xl font-semibold text-blue-300">Experience</h3>
                <p className="text-gray-300">
                  <strong>Senior Developer / Architect, CRM Engineer</strong> - Clarus IT Solutions (2021 - Present)
                </p>
                <ul className="list-disc pl-6 text-gray-300">
                  <li>Led a team of developers in CRM projects from inception to deployment.</li>
                  <li>Designed and optimized workflow configurations across multiple environments.</li>
                  <li>Implemented software solutions for enterprise clients across various industries.</li>
                </ul>
              </section>
              
              <section className="mb-6">
                <h3 className="text-xl font-semibold text-blue-300">Education</h3>
                <ul className="text-gray-300">
                  <li><strong>California State University Fullerton</strong> - B.S. in Computer Science, Cybersecurity (2022 - Present)</li>
                  <li><strong>Saddleback College</strong> - A.S. in Computer Science & A.A. in Liberal Studies (2019 - 2022)</li>
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
              
              <section className="mb-6">
                <h3 className="text-xl font-semibold text-blue-300">Certifications</h3>
                <ul className="list-disc pl-6 text-gray-300">
                  <li>Cisco IT Essentials Certification</li>
                  <li>Robotics Assembly & Programming Certification</li>
                </ul>
              </section>
          </Card>
        </div>
      </div>
      <FooterNav />
    </div>
  );
};

export default Who;
