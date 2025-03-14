import React from "react";
import { Link } from "react-router-dom";

export interface CarouselItemProps {
  Comp: React.ReactNode;
  to: string; // Path to navigate
}

const CarouselItem = ({ Comp, to }: CarouselItemProps) => {
  return (
    <Link to={to} className="block w-full h-full cursor-pointer">
      <div className="overflow-y-auto max-h-full">
        {Comp}
      </div>
    </Link>
  );
};

export default CarouselItem;
