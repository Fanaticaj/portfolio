"use client";

import { Carousel } from "flowbite-react";
import CarouselItem from "./CarouselItem";
//
export function SlideShow() {
  return (
    <div className="h-[70vh] w-[70vw]">
      <Carousel>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <CarouselItem />
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
