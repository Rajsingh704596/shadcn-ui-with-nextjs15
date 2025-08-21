"use client"; // for ex.2  use react hook we need to make client side component

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselSize() {
  return (
    <>
      {/* eg.1 */}
      <Carousel1 />
      {/* eg.2 */}
      <CarouselPlugin2 />
    </>
  );
}

export const Carousel1 = () => {
  return (
    <Carousel
      opts={{
        align: "start", // start with 1st card
        loop: true, //^  after no. 10 card repeat in loop 1 to 10
      }}
      className="w-full max-w-sm lg:max-w-4xl mx-auto mt-5"
      // orientation="vertical"    // default horizontal
    >
      <CarouselContent>
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem
            key={index}
            className=" sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
            //  basis utility cls used for size of every card
          >
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

//! for auto play we need to install plugin  of embla-carousel-autoplay
// npm i embla-carousel-autoplay

import Autoplay, { type AutoplayType } from "embla-carousel-autoplay";
import { useEffect, useState } from "react";

export function CarouselPlugin2() {
  const [autoplayPlugin, setAutoplayPlugin] = useState<AutoplayType | null>(
    null
  );

  useEffect(() => {
    const pluginInstance = Autoplay({ delay: 3000, stopOnInteraction: true });
    setAutoplayPlugin(pluginInstance);
  }, []);

  return (
    <Carousel
      plugins={autoplayPlugin ? [autoplayPlugin] : []}
      className="w-full max-w-xs mx-auto mt-10"
      onMouseEnter={() => autoplayPlugin?.stop()}
      onMouseLeave={() => autoplayPlugin?.play()}
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
