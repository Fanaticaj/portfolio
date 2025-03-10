import React, { useEffect, useRef } from "react";

const GradientBackground: React.FC = () => {
  const gradientRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!gradientRef.current) return;

      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;

      const xPercent = (clientX / innerWidth) * 100;
      const yPercent = (clientY / innerHeight) * 100;

      gradientRef.current.style.background = `radial-gradient(circle at ${xPercent}% ${yPercent}%, rgba(255, 255, 255, 0.1), rgba(100, 0, 255, 0.2), rgba(0, 0, 0, 0.2))`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={gradientRef}
      className="absolute inset-0 transition-all duration-200"
      style={{
        background:
          "radial-gradient(circle at center, rgba(0, 0, 255, 0.3), rgba(255, 0, 255, 0.2), rgba(0, 0, 0, 0.8))",
      }}
    ></div>
  );
};

export default GradientBackground;
