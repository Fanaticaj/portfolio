"use client";

import { Carousel } from "flowbite-react";
import CarouselItem from "./CarouselItem";
import Who from '../pages/Who';
import What from '../pages/What';

export function SlideShow() {
  return (
    <div className="h-[35rem] w-[80rem]">
      <Carousel slide={false}>
      <div className="overflow-y-auto max-h-[35rem]">
        <CarouselItem Comp={<Who />} to="/who" />
        </div>
        <div className="overflow-y-auto max-h-[35rem]">
        <CarouselItem Comp={<What />} to="/what" />
        </div>
        <div className="overflow-y-auto max-h-[35rem]">
          Slide 3
        </div>
      </Carousel>
    </div>
  );
}

export default SlideShow;
