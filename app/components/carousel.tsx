import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselItem,
} from "@/components/core/carousel";
import { CarouselCard } from "./carousel-card";

export function CarouselSpacing() {
  return (
    <div className="mt-64 px-4">
      <Carousel>
        {/* Adjusted CarouselContent for tighter spacing */}
        <CarouselContent className="flex space-x-[15px] ">
          <CarouselItem className=" w-60 flex-shrink-0 ">
            <CarouselCard imagePath="" />
          </CarouselItem>
          <CarouselItem className="w-60 flex-shrink-0 ">
            <CarouselCard imagePath="" />
          </CarouselItem>
          <CarouselItem className="w-60 flex-shrink-0">
            <CarouselCard imagePath=""/>
          </CarouselItem>
          <CarouselItem className="w-60 flex-shrink-0">
            <CarouselCard imagePath=""/>
          </CarouselItem>
          <CarouselItem className="w-60 flex-shrink-0">
            <CarouselCard imagePath=""/>
          </CarouselItem>
          <CarouselItem className="w-60 flex-shrink-0">
            <CarouselCard imagePath=""/>
          </CarouselItem>
          <CarouselItem className="w-60 flex-shrink-0">
            <CarouselCard imagePath=""/>
          </CarouselItem>
          <CarouselItem className="w-60 flex-shrink-0">
            <CarouselCard imagePath=""/>
          </CarouselItem>
        </CarouselContent>

        <CarouselNavigation
          className="absolute -bottom-20 left-auto top-auto w-full justify-end gap-2"
          classNameButton="bg-zinc-800 *:stroke-zinc-50 dark:bg-zinc-200 dark:*:stroke-zinc-800"
          alwaysShow
        />
      </Carousel>
    </div>
  );
}
