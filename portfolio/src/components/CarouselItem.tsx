import React from 'react';

export interface CarouselItemProps {
  Comp: React.ReactNode;
}

const CarouselItem = ({Comp}: CarouselItemProps) => {
  return (<div className="">
    {Comp}
  </div>
  );
}

export default CarouselItem;
