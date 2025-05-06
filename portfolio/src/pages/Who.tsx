import { Card } from "flowbite-react";
import GradientBackground from "../components/GradientBackground";
import FooterNav from "../components/FooterNav";
import SkillsSection from "../components/SkillsSection";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import PageTitle from "../components/PageTitle";

const Who = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center overflow-y-auto bg-gray-900 text-white">
      <GradientBackground />
      <div className="container mx-auto flex flex-col items-center md:flex-row">
        <div className="w-full">
          <PageTitle title="Who I Am" />
          <Card className="m-5 border border-gray-700 bg-gray-800 shadow-lg">
            <Hero />
            <AboutSection />
            <SkillsSection />
          </Card>
        </div>
      </div>
      {location.pathname === "/who" ? <FooterNav /> : null}
    </div>
  );
};

export default Who;
