// ! shadcn/ui Drawer:
// Side panel for temporary content like filters, carts, settings, menus, etc.
"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import Link from "next/link";

const page = () => {
  return (
    <div>
      <Drawer1 />
      <DrawerDialog2 />
    </div>
  );
};

export default page;

export const Drawer1 = () => {
  return (
    <div>
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">Open Mid Drawer</Button>
        </DrawerTrigger>
        <DrawerContent className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Menu</DrawerTitle>
          </DrawerHeader>
          <nav className="flex flex-col gap-4 px-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

// example 2   mobile screen - drawer , desktop - dialog/modal show

import { useState } from "react";
import { cn } from "@/lib/utils";
// import { useMediaQuery } from "usehooks-ts";                // 1st way
import { useMediaQuery } from "@/hooks/use-media-query"; // 2nd way
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function DrawerDialog2() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <ProfileForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Edit profile</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
  return (
    <form className={cn("grid items-start gap-6", className)}>
      <div className="grid gap-3">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" defaultValue="shadcn@example.com" />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="username">Username</Label>
        <Input id="username" defaultValue="@shadcn" />
      </div>
      <Button type="submit">Save changes</Button>
    </form>
  );
}

/*
 Drawer Component — Use Cases

1. 🛒 Cart Sidebar         → Show cart items in e-commerce without leaving page
2. 🔍 Filter Panel         → Product/blog filters on the side
3. 📱 Mobile Navigation    → Hamburger menu opens drawer
4. ✍️ Inline Forms         → Create/Edit forms in a non-intrusive way
5. ⚙️ Settings Panel       → App/user settings in drawer
6. 📑 Contextual Docs      → Show help/docs alongside main content
7. 🧾 Notifications         → Activity feed or alerts
8. 📅 Event Details        → Calendar event details drawer

 Keeps user in context, avoids page reload
 Ideal for mobile & dashboards
*/

//!  for useMediaquery
// This is a lightweight library of useful React hooks, including useMediaQuery.

// 1.way Install usehooks-ts
// npm install usehooks-ts

//  or

// 2.way Install use-media-query hook
//  npx shadcn@latest add https://www.shadcn.io/registry/use-media-query.json   (Recommended)
