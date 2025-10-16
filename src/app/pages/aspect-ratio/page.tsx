import React from "react";

const page = () => {
  return (
    <div>
      <h1> Aspect Ration Demo </h1>

      <div className="w-[250px]">
        <AspectRatioDemo />
      </div>

      <div className="w-full max-w-[640px] mx-auto">
        <YoutubeDemo />
      </div>

      <div className="w-full max-w-screen-xl mx-auto">
        <WidescreenBannerDemo />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
        <div className="w-[300px]">
          <InstagramPostDemo />
        </div>
        <div className="w-[300px]">
          <PortraitPhotoDemo />
        </div>

        <div className="w-[300px]">
          <ResponsiveCardDemo />
        </div>
      </div>
    </div>
  );
};

export default page;

import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";

export function AspectRatioDemo() {
  return (
    <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
      <Image
        src="/globe.svg"
        alt="Photo by Drew Beamer"
        fill
        className="h-full w-full rounded-lg object-fill dark:brightness-[0.2] dark:grayscale"
      />
    </AspectRatio>
  );
}

export function YoutubeDemo() {
  return (
    <AspectRatio ratio={16 / 9} className="bg-black">
      <iframe
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="YouTube video"
        allowFullScreen
        className="w-full h-full rounded-md"
      ></iframe>
    </AspectRatio>
  );
}
export function InstagramPostDemo() {
  return (
    <AspectRatio ratio={1 / 1} className="bg-muted">
      <Image
        src="/next.svg"
        alt="Profile"
        fill
        className="object-contain rounded-md"
      />
    </AspectRatio>
  );
}
export function WidescreenBannerDemo() {
  return (
    <AspectRatio ratio={21 / 9} className="bg-gray-200">
      <Image
        src="/window.svg"
        alt="Banner"
        fill
        className="object-cover rounded-lg"
      />
    </AspectRatio>
  );
}

export function PortraitPhotoDemo() {
  return (
    <AspectRatio ratio={3 / 4} className="bg-muted">
      <Image
        src="/file.svg"
        alt="Portrait"
        fill
        className="object-contain rounded"
      />
    </AspectRatio>
  );
}

export function ResponsiveCardDemo() {
  return (
    <AspectRatio
      ratio={4 / 3}
      className="bg-blue-100 flex items-center justify-center"
    >
      <div className="text-center">
        <h3 className="text-xl font-bold">Card Title</h3>
        <p>Short description here.</p>
      </div>
    </AspectRatio>
  );
}
