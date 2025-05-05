const Hero = () => {
  return (
    <div className="mb-10 flex flex-col items-center justify-center text-center">
      <div className="relative h-64 w-64">
        <div className="relative h-full w-full rounded-full border-4 border-blue-500 bg-gray-800 shadow-2xl">
          <img
            src="../photo.jpg"
            alt="Anthony Grippi"
            className="h-full w-full rounded-full object-cover"
          />
          {/* Glitch overlay */}
          <div className=" absolute inset-0 animate-glitch rounded-full" />
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
