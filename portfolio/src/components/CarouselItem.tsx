import React from "react";
import { Link } from "react-router-dom";

export interface CarouselItemProps {
  Comp: React.ReactNode;
  to: string;
}

const CarouselItem = ({ Comp, to }: CarouselItemProps) => {
  return (
    <Link to={to} className="cursor-pointer">
      <div>
        {Comp}
      </div>
    </Link>
  );
};

export default CarouselItem;
