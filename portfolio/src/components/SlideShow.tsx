"use client";

import { Carousel } from "flowbite-react";
import CarouselItem from "./CarouselItem";
import Who from '../pages/Who';

export function SlideShow() {
  return (
    <div className="h-[35rem] w-[80rem]">
      <Carousel slide={false}>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <CarouselItem Comp={<Who />} />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 2
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 3
        </div>
      </Carousel>
    </div>
  );
}

export default SlideShow;
