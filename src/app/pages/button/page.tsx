import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex-box flex-col">
      <h1 className="text-center heading">Button Component</h1>

      <div className="max-w-7xl mx-auto w-full p-10 space-x-5">
        <Button>Click me</Button>
        <Button variant={"default"}>Click me</Button>
        <Button variant={"destructive"}>Click me</Button>
        <Button variant={"ghost"}>Click me</Button>
        <Button variant={"link"}>Click me</Button>
        <Button variant={"outline"}>Click me</Button>
        <Button variant={"secondary"}>Click me</Button>

        <Button size={"icon"}>Size-icon</Button>
        <Button size={"lg"}>size-lg</Button>
        <Button size={"sm"}>Size-sm</Button>

        <Button className="bg-neutral-600 border-b border-cyan-300">
          Custom
        </Button>

        <div className="flex-box mt-20">
          <ul>
            <li>
              {/* The 'asChild={true}' prop means that the styling and behavior of the Button component will be transferred to the Link component. */}
              {/* This makes the Link component appear like a button, but it will still remain an anchor (<a>) tag semantically. */}
              <Button asChild={true}>
                <Link href={"/"}>Home Button as child</Link>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
