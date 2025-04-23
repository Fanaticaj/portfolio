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

      gradientRef.current.style.background = `radial-gradient(circle at ${xPercent}% ${yPercent}%, rgba(59, 56, 59, 0.2), rgba(62, 56, 70, 0.2), rgba(0, 0, 0, 0.2))`;
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
          "radial-gradient(circle at center, rgba(59, 56, 59, 0.2), rgba(62, 56, 70, 0.2), rgba(0, 0, 0, 0.2))",
      }}
    ></div>
  );
};

export default GradientBackground;
