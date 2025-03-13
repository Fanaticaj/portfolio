import React from 'react';
import '../styles/CarouselItem.css';

export interface CarouselItemProps {
  Comp: React.ReactNode;
}

const CarouselItem = ({Comp}: CarouselItemProps) => {
  return (
    <div className="overflow-y-auto max-h-full scrollbar-hidden">
      {Comp}
    </div>
  );
}


export default CarouselItem;
