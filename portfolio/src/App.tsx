import GradientBackground from "./components/GradientBackground";
import SlideShow from "./components/SlideShow";

const App: React.FC = () => {
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
        </header>

        {/* Carousel Section */}
        <section className="max-h-7xl flex w-full max-w-7xl items-center justify-center">
          <SlideShow />
        </section>
      </main>

      {/* Footer / Gallery Section */}
      <footer className="absolute bottom-10 left-1/2 -translate-x-1/2 transform text-center text-white">
        <div id="carousel-links" className="flex gap-6">
          {/* These links should update dynamically when the user interacts with the carousel */}
          <a href="/who" className="underline">
            Who I Am
          </a>
          <a href="/what" className="underline">
            What I’ve Done
          </a>
          <a href="/where" className="underline">
            Where I’ve Learned
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
