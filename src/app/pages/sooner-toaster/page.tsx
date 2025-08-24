"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Megaphone } from "lucide-react";

export default function SonnerDemo() {
  return (
    <>
      <SonnerToast1 />
      <SonnerToast2 />
      <SonnerToast3 />
      <SonnerToast4 />
      <SonnerToast5 />
      <SonnerToast6 />
      <SonnerToast7 />
      <SonnerToast8 />
      <SonnerToast9 />
      <Toast10 />

      {/*ek custom component hai jise theme ke hisaab se dynamic toast rendering ke liye use kiya gaya hai. */}
      {/* <Toaster />          */}
    </>
  );
}

// example 1

export const SonnerToast1 = () => {
  return (
    <div>
      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            duration: 5000, // duration time
            icon: <MyIcon />, //svg icon
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show Toast 1
      </Button>
    </div>
  );
};

function MyIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-4"
    >
      <path d="M5.85 3.5a.75.75 0 0 0-1.117-1 9.719 9.719 0 0 0-2.348 4.876.75.75 0 0 0 1.479.248A8.219 8.219 0 0 1 5.85 3.5ZM19.267 2.5a.75.75 0 1 0-1.118 1 8.22 8.22 0 0 1 1.987 4.124.75.75 0 0 0 1.48-.248A9.72 9.72 0 0 0 19.266 2.5Z" />
      <path
        fillRule="evenodd"
        d="M12 2.25A6.75 6.75 0 0 0 5.25 9v.75a8.217 8.217 0 0 1-2.119 5.52.75.75 0 0 0 .298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 1 0 7.48 0 24.583 24.583 0 0 0 4.83-1.244.75.75 0 0 0 .298-1.205 8.217 8.217 0 0 1-2.118-5.52V9A6.75 6.75 0 0 0 12 2.25ZM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 0 0 4.496 0l.002.1a2.25 2.25 0 1 1-4.5 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

// example 2

export const SonnerToast2 = () => {
  return (
    <div>
      <Button
        variant="outline"
        onClick={() => toast.success("Event has been created")}
      >
        Show Toast 2
      </Button>
    </div>
  );
};

// example 3
export const SonnerToast3 = () => {
  return (
    <div>
      <Button
        variant="outline"
        onClick={() =>
          toast.info("Be at the area 10 minutes before the event time")
        }
      >
        Show Toast 3
      </Button>
    </div>
  );
};

// example 4
export const SonnerToast4 = () => {
  return (
    <div>
      <Button
        variant="outline"
        onClick={() =>
          toast.warning("Event start time cannot be earlier than 8am")
        }
      >
        Show Toast 4
      </Button>
    </div>
  );
};

// example 5
export const SonnerToast5 = () => {
  return (
    <div>
      <Button
        variant="outline"
        onClick={() => toast.error("Event has not been created")}
      >
        Show Toast 5
      </Button>
    </div>
  );
};

// example 6
export const SonnerToast6 = () => {
  return (
    <div>
      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show Toast 6
      </Button>
    </div>
  );
};

// example 7
export const SonnerToast7 = () => {
  return (
    <div>
      <Button
        variant="outline"
        onClick={() => {
          const myPromise = new Promise<{ name: string }>((resolve) => {
            setTimeout(() => {
              resolve({ name: "My toast" });
            }, 3000);
          });

          toast.promise(myPromise, {
            loading: "Loading...",
            success: (data: { name: string }) => {
              return {
                message: `${data.name} toast has been added`,
                description: "Custom description for the success state",
              };
            },
            error: "Error",
          });
        }}
      >
        Show Toast 7
      </Button>
    </div>
  );
};

// example 8
export const SonnerToast8 = () => {
  return (
    <div>
      <Button
        variant="outline"
        onClick={() => toast(<div>A custom toast with default styling</div>)}
      >
        Show Toast 8
      </Button>
    </div>
  );
};

// example 9

export const SonnerToast9 = () => {
  return (
    <div>
      <Button
        variant="outline"
        onClick={() =>
          toast.custom((t) => (
            <div className="flex items-center justify-between p-4 bg-white text-gray-800 rounded-lg shadow-md border border-gray-200">
              <h1 className="font-medium text-sm flex gap-2 items-center">
                <span>
                  <Megaphone className="size-4" />
                </span>
                Event Created Successfully
              </h1>
              <button
                onClick={() => toast.dismiss(t)}
                className="ml-4 p-1.5 bg-transparent text-gray-600 hover:text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          ))
        }
      >
        Show Toast 9
      </Button>
    </div>
  );
};

export const Toast10 = () => {
  return (
    <>
      <Button
        variant={"outline"}
        onClick={() => toast("Global toast", { toasterId: "global" })}
      >
        Show in Global Toaster
      </Button>
      <Button
        variant={"destructive"}
        onClick={() => toast("Canvas toast", { toasterId: "canvas" })}
      >
        Show in Canvas Toaster
      </Button>
    </>
  );
};

// Dynamic Theme for toaster

import { Toaster as SonnerToaster, type ToasterProps } from "sonner";
import { useTheme } from "next-themes";

export function Toaster() {
  const { resolvedTheme } = useTheme();

  return <SonnerToaster theme={resolvedTheme as ToasterProps["theme"]} />;
}
