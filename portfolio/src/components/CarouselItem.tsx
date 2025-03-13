import React from 'react';

export interface CarouselItemProps {
  Comp: React.ReactNode;
}

const CarouselItem = ({Comp}: CarouselItemProps) => {
  return (
    <div className="overflow-y-auto max-h-full">
      {Comp}
    </div>
  );
}


export default CarouselItem;
