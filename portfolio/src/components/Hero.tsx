const Hero = () => {
    return (
      <div className="flex flex-col items-center text-center mb-10">
        <div className="flex justify-center w-full">
          <img
            src="../photo.jpg"
            alt="Anthony Grippi"
            className="h-64 w-64 rounded-full border-4 border-blue-400 object-cover shadow-lg"
          />
        </div>
        <h2 className="mt-4 text-3xl font-bold text-blue-400">Anthony Grippi</h2>
        <p className="text-gray-400">
          Computer Science Scholar | Cybersecurity Enthusiast
        </p>
      </div>
    );
  };
  
  export default Hero;
  