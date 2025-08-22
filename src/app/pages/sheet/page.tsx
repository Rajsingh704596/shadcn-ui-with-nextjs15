import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function SheetDemo() {
  return (
    <div className="text-center space-y-5">
      {/* e.g 1 */}
      <SheetDemo1 />
      <br />
      {/* e.g 1 */}
      <ProfileSheet2 />
    </div>
  );
}

// example 1
export const SheetDemo1 = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Open</Button>
        </SheetTrigger>
        <SheetContent side="left">
          {/* here we can change the side left , right , top , bottom */}
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </SheetDescription>
          </SheetHeader>
          <div className="grid flex-1 auto-rows-min gap-6 px-4">
            <div className="grid gap-3">
              <Label htmlFor="sheet-demo-name">Name</Label>
              <Input id="sheet-demo-name" defaultValue="Rock" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="sheet-demo-username">Username</Label>
              <Input id="sheet-demo-username" defaultValue="@peduarte" />
            </div>
          </div>
          <SheetFooter>
            <Button type="submit">Save changes</Button>
            <SheetClose asChild>
              <Button variant="outline">Close</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
};

// example 2

import { User, AtSign, Camera } from "lucide-react";

export function ProfileSheet2() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="rounded-xl shadow">
          Edit Profile
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="bg-gradient-to-b from-slate-900 to-slate-800 text-white w-[400px] sm:w-[540px] px-5" // here we can change the size also slide sheet appear which side
      >
        <SheetHeader>
          <SheetTitle className="text-xl font-semibold text-white">
            Edit Profile
          </SheetTitle>
          <SheetDescription className="text-slate-300">
            Update your information and save the changes.
          </SheetDescription>
        </SheetHeader>

        <div className="grid gap-6 py-6">
          {/* Avatar Upload */}
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-full bg-slate-600 flex items-center justify-center">
              <Camera className="h-6 w-6 text-slate-200" />
            </div>
            <Button variant="secondary" size="sm">
              Change Avatar
            </Button>
          </div>

          {/* Name */}
          <div className="grid gap-2">
            <Label htmlFor="name" className="flex items-center gap-2">
              <User className="h-4 w-4" /> Name
            </Label>
            <Input id="name" defaultValue="Rock" className="rounded-lg" />
          </div>

          {/* Username */}
          <div className="grid gap-2">
            <Label htmlFor="username" className="flex items-center gap-2">
              <AtSign className="h-4 w-4" /> Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="rounded-lg"
            />
          </div>

          {/* Bio */}
          <div className="grid gap-2">
            <Label htmlFor="bio">Bio</Label>
            <textarea
              id="bio"
              placeholder="Tell us about yourself..."
              className="rounded-lg border border-slate-700 bg-slate-900 p-2 text-sm"
            />
          </div>
        </div>

        <SheetFooter>
          <Button type="submit" className="rounded-lg shadow">
            Save Changes
          </Button>
          <SheetClose asChild>
            <Button variant="secondary" className="rounded-lg">
              Cancel
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

// ! Sheet - work like slide bar
// usecase-
// 📝 Profile Editing → User profile info update (name, email, bio, avatar change)
// ⚙️ Settings Panel → App/site preferences (theme, notifications, privacy settings)
// 💳 Checkout/Payment → Collect billing & payment details during checkout
// 🔍 Filters Panel → Apply filters/search options in products, jobs, listings
// ⚡ Quick Actions → Add task, create note, or trigger small workflows
// 🔔 Notifications → Show announcements, updates, or alerts non-intrusively
// 🚀 Onboarding → Step-by-step user guide or first-time setup flow
// ❗ Confirmations → Confirm irreversible actions (delete, logout, deactivate)
// 📂 File Upload → Upload profile picture, documents, or gallery images
