import Header from "@/components/Header";

import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto h-screen">
      <div className="flex justify-center items-center p-5">
        <h1 className="text-2xl md:text-4xl font-extrabold animate-gradient-text">
          Next Js 15 + shadcn UI
        </h1>
        <h1 className="text-2xl font-bold animate-gradient-border text-white ml-2  ">
          TypeScript
        </h1>
      </div>

      {/* cn function use case like dark mode  */}
      <Header />

      {/* All Component */}
      <div className="flex-box mt-10 text-xl text-blue-500 font-bold">
        <ul>
          <li>
            <Link href={"/pages/button"}>Button Component</Link>
          </li>
          <li>
            <Link href={"/pages/dialog-modal"}>Dialog/Modal Component</Link>
          </li>
          <li>
            <Link href={"/pages/drawer"}>Drawer Component</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
