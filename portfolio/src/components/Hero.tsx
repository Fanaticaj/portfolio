const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center mb-10">
      <div className="relative h-64 w-64">
        <div className="relative h-full w-full rounded-full border-4 border-blue-500 bg-gray-800 shadow-2xl">
          <img
            src="../photo.jpg"
            alt="Anthony Grippi"
            className="h-full w-full rounded-full object-cover"
          />
          {/* Glitch overlay */}
          <div className="pointer-events-none absolute inset-0 rounded-full animate-glitch z-10" />
        </div>
      </div>
      <h2 className="mt-4 text-3xl font-bold text-blue-400">Anthony Grippi</h2>
      <p className="text-gray-400">
        Computer Science Scholar | Cybersecurity Enthusiast
      </p>
    </div>
  );
};

export default Hero;
