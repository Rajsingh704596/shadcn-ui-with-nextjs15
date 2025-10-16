const page = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="space-y-8">
        <h1> Avatar Page</h1>
        <div>
          <AvatarDemo />
          <UserAvatar
            src="/next.svg"
            alt="svg"
            initials="avatar name"
            size="lg"
          />
        </div>

        <h2 className="text-xl font-bold">Hover Zoom</h2>
        {/* Hover effect avatar */}
        <AvatarHoverZoom />

        <h2 className="text-xl font-bold">Sizes</h2>
        {/* Small, Medium, Large */}
        <AvatarDiffSize />

        <h2 className="text-xl font-bold">Status</h2>
        {/* Online status dot */}
        <OnlineStatusIndicator />

        <h2 className="text-xl font-bold">Badge</h2>
        {/* Notification bubble */}
        <AvatarNotification />

        <h2 className="text-xl font-bold">Group Stack</h2>
        {/* Avatar group */}
        <AvatarHoverPop />

        <h2 className="text-xl font-bold">Tooltip</h2>
        {/* Tooltip on hover */}
        <AvatarTooltip />
      </div>
    </div>
  );
};

export default page;

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AvatarDemo() {
  return (
    <div className="flex flex-row flex-wrap items-center gap-12">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar className="rounded-lg">
        <AvatarImage
          src="https://github.com/evilrabbit.png"
          alt="@evilrabbit"
        />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>
      <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            src="https://github.com/maxleiter.png"
            alt="@maxleiter"
          />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            src="https://github.com/evilrabbit.png"
            alt="@evilrabbit"
          />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

export const AvatarHoverZoom = () => {
  return (
    <Avatar className="transition-transform hover:scale-110 duration-300">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export const AvatarDiffSize = () => {
  return (
    <div className="flex items-center gap-4">
      <Avatar className="h-8 w-8">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar className="h-12 w-12">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar className="h-16 w-16">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};

export const OnlineStatusIndicator = () => {
  return (
    <div className="relative inline-block w-12 h-12">
      <Avatar className="w-full h-full">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-white"></span>
    </div>
  );
};

export const AvatarNotification = () => {
  return (
    <div className="relative inline-block w-12 h-12">
      <Avatar className="w-full h-full">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
        3
      </span>
    </div>
  );
};

export const AvatarHoverPop = () => {
  return (
    <div className="flex -space-x-3 hover:[&>*]:z-10">
      {[1, 2, 3].map((_, i) => (
        <Avatar
          key={i}
          className="border-2 border-white hover:scale-110 transition-transform"
        >
          <AvatarImage src={`https://i.pravatar.cc/150?img=${i + 10}`} />
          <AvatarFallback>U{i + 1}</AvatarFallback>
        </Avatar>
      ))}
    </div>
  );
};

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const AvatarTooltip = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Avatar className="cursor-pointer">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </TooltipTrigger>
        <TooltipContent>Shadcn (online)</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

// Bonus for reusable component
export const UserAvatar = ({
  src,
  alt,
  initials,
  size = "md",
}: {
  src: string;
  alt: string;
  initials: string;
  size: string;
}) => {
  const sizeClass = {
    sm: "h-8 w-8",
    md: "h-12 w-12",
    lg: "h-16 w-16",
  }[size];

  return (
    <Avatar className={`${sizeClass} transition-transform hover:scale-105`}>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  );
};
