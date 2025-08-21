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
      {/* e.g 3 with api image */}
      <ApiImageCarousel3 />
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
            className=" sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 px-2"
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
import Image from "next/image";
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
      className="w-full max-w-3xl mx-auto mt-10"
      onMouseEnter={() => autoplayPlugin?.stop()}
      onMouseLeave={() => autoplayPlugin?.play()}
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="basis-full md:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="relative w-full aspect-video overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/30681794/pexels-photo-30681794.jpeg"
                    alt="test"
                    className="object-cover"
                    fill
                    priority
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-semibold text-white opacity-50 drop-shadow">
                      {index + 1}
                    </span>
                  </div>
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

// Example-3
//! Picsum Api call and image render in carousel

// "use client"

// import React, { useEffect, useState } from "react"
// import Autoplay, { type AutoplayType } from "embla-carousel-autoplay"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"
// import { Card, CardContent } from "@/components/ui/card"

interface ImageItem {
  id: string;
  author: string;
  download_url: string;
}

export function ApiImageCarousel3() {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [autoplayPlugin, setAutoplayPlugin] = useState<AutoplayType | null>(
    null
  );

  // Fetch images from API
  useEffect(() => {
    fetch("https://picsum.photos/v2/list?page=2&limit=5")
      .then((res) => res.json())
      .then((data: ImageItem[]) => setImages(data))
      .catch((err) => console.error("Failed to fetch images", err));
  }, []);

  // Initialize autoplay plugin
  useEffect(() => {
    const plugin = Autoplay({ delay: 2500, stopOnInteraction: true });
    setAutoplayPlugin(plugin);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto mt-10">
      <Carousel
        plugins={autoplayPlugin ? [autoplayPlugin] : []}
        onMouseEnter={() => autoplayPlugin?.stop()}
        onMouseLeave={() => autoplayPlugin?.play()}
        opts={{ align: "center", loop: true }}
      >
        <CarouselContent>
          {images.map((img) => (
            <CarouselItem key={img.id}>
              <div className="p-2">
                <Card>
                  <CardContent className="aspect-video overflow-hidden p-0">
                    <Image
                      src={img.download_url}
                      alt={img.author}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
