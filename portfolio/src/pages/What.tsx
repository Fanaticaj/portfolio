import { Card } from "flowbite-react";
import GradientBackground from "../components/GradientBackground";
import FooterNav from "../components/FooterNav";
import PageTitle from "../components/PageTitle";
import ProjectsSection from "../components/ProjectsSection";


const What = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center overflow-y-auto bg-gray-900 text-white">
      <GradientBackground />
      <div className="container mx-auto flex flex-col items-center md:flex-row">
        <div className="w-full">
        <PageTitle title="What I've done" />
          <Card className="border border-gray-700 bg-gray-800 shadow-lg m-5">
            <ProjectsSection />
          </Card>
        </div>
      </div>
      {location.pathname === "/what" ? <FooterNav /> : null}
    </div>
  );
};

export default What;
