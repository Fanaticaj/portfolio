import GradientBackground from "../components/GradientBackground";
import SlideShow from "../components/SlideShow";
import FooterNav from "../components/FooterNav";
import PageTitle from "../components/PageTitle";
import { ContactMe } from "../components/ContactMe";
import { Button } from "flowbite-react";

const Why: React.FC = () => {
  return (
    <div className="relative h-screen w-screen overflow-auto bg-gray-900">
      {/* Background and Interactive Effects */}
      <GradientBackground />

      {/* Main Content */}
      <main className="relative z-10 flex h-full flex-col items-center space-y-6">
        {/* Header */}
        <header className="font-sans">
          <h1 className="text-5xl font-semibold uppercase text-white">
            Anthony Grippi
          </h1>
          <span className="flex items-center justify-center font-mono text-sm font-extralight lowercase italic text-gray-500">
            dev, architect, security aficionado
          </span>
          <PageTitle title="Why You're Here" />
        </header>

        {/* Carousel Section */}
        <section className="max-h-7xl flex w-full max-w-7xl items-center justify-center">
          <SlideShow />
        </section>
        <FooterNav />

        <span className="flex items-center justify-center font-mono text-sm font-extralight lowercase italic text-gray-500">
          <ContactMe />
        </span>
        <span className="flex items-center justify-center font-mono text-sm font-extralight lowercase italic text-gray-500">
          <a href="/Resume.pdf" download>
            <Button color="gray">Download My Resume!</Button>
          </a>
        </span>
      </main>

      {/* Footer / Gallery Section */}
      <footer className="absolute bottom-10 left-1/2 -translate-x-1/2 transform text-center text-white"></footer>
    </div>
  );
};

export default Why;
