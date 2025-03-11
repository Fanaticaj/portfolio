"use client";

import { Carousel } from "flowbite-react";
<<<<<<< HEAD
import CarouselItem from "./CarouselItem";
//
=======

>>>>>>> ebad9a7a75477c9fdfef03663f48cb927a9382c6
export function SlideShow() {
  return (
    <div className="h-[35rem] w-[80rem]">
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
