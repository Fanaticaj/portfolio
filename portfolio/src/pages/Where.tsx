import GradientBackground from "../components/GradientBackground";
import FooterNav from "../components/FooterNav";
import { Card } from "flowbite-react";
import PageTitle from "../components/PageTitle";
import ExperienceSection from "../components/ExperienceSection";
import EducationSection from "../components/EducationSection";

const Where = () => {
    return (
      <div className="relative flex min-h-screen flex-col items-center overflow-y-auto bg-gray-900 text-white">
        <GradientBackground />
        <div className="container mx-auto flex flex-col items-center md:flex-row">
          <div className="w-full">
          <PageTitle title="Where I've Been" />
            <Card className="border border-gray-700 bg-gray-800 shadow-lg m-5">
              <ExperienceSection />
              <EducationSection />
            </Card>
          </div>
        </div>
        {location.pathname === "/where" ? <FooterNav /> : null}
      </div>
    );
  };
  
  export default Where;
  