import GradientBackground from "../components/GradientBackground";
import SlideShow from "../components/SlideShow";
import FooterNav from "../components/FooterNav";


const Why: React.FC = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-gray-900">
      
      {/* Background and Interactive Effects */}
      <GradientBackground />

      {/* Main Content */}
      <main className="relative z-10 flex h-full flex-col items-center justify-center space-y-6 text-center">

        {/* Header */}
        <header className="font-sans">
          <h1 className="text-5xl font-semibold uppercase text-white">
            Anthony Grippi
          </h1>
          <span className="font-mono text-sm font-extralight lowercase italic text-gray-500">
            dev, architect, security aficionado
          </span>
          <h2 className="text-5xl font-light text-gray-300 italic uppercase">
            Why You're Here
          </h2>
        </header>

        {/* Carousel Section */}
        <section className="max-h-7xl flex w-full max-w-7xl items-center justify-center">
          <SlideShow />
        </section>
        <FooterNav />
      </main>

      {/* Footer / Gallery Section */}
      <footer className="absolute bottom-10 left-1/2 -translate-x-1/2 transform text-center text-white">
      </footer>
    </div>
  );
};

export default Why;
