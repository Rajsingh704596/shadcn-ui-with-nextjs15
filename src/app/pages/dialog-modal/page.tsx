"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

export default function ExampleDialog() {
  return (
    <div className="flex-box flex-col">
      {/* Example 1 */}

      <Dialog>
        <DialogTrigger asChild>
          <button className="btn">Open Modal</button>
        </DialogTrigger>

        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Delete Item?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. Are you sure?
            </DialogDescription>
          </DialogHeader>

          {/* Content such as forms, buttons, confirmations */}

          <DialogFooter>
            <DialogClose asChild>
              <Button variant={"ghost"}>Cancel</Button>
            </DialogClose>
            <Button variant={"secondary"}>Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <br />
      {/* Example 2 */}

      <FullFeatureDialog />
    </div>
  );
}

//! Dialog -  A centered modal window that overlays the entire screen and demands the user's attention.

//?   Shadcn Dialog Use Cases:-

//   1. Form Dialogs:
//      - Login / Signup modal
//      - Edit profile form
//      - Create or update item

//   2. Confirmation Dialogs/Prompts/Modal:
//      - Delete confirmation (e.g., "Are you sure you want to delete this post?")
//      - Submit confirmation before sending data

//   3. Alert Dialogs:
//      - Display warnings or critical alerts (e.g., "Session expired", "Payment failed")

//   4. Informational Popups:
//      - Show additional info or context without leaving the page
//      - E.g., Terms and Conditions, feature explanations

//   5. Multi-step / Wizard Dialogs:
//      - Step-based flows inside a modal (e.g., onboarding or checkout steps)

//   6. Scrollable Content Dialogs:
//      - Long privacy policy or terms inside a scrollable modal

//   7. Nested or Contextual Dialogs:
//      - Open dialogs from dropdowns, tooltips, or other modals

//   8. Media / Preview Dialogs:
//      - Image zoom modal
//      - Video playback popup
//      - File previews

//   9. Mobile Modals:
//      - Bottom sheet-style dialogs optimized for mobile devices

//   Note: Shadcn Dialog provides accessibility (focus trap, keyboard nav), smooth transitions,
//   responsive design, and easy Tailwind customization.

//!  Example 2

export function FullFeatureDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="btn">Open Full Feature Dialog</button>
      </DialogTrigger>

      <DialogContent className="max-w-3xl p-6 bg-white shadow-lg rounded-lg">
        {/* Header Section */}
        <DialogHeader>
          <DialogTitle>Multi-step Form Example</DialogTitle>
          <DialogDescription>
            This is a multi-step dialog with form inputs, scrollable content,
            and confirmation.
          </DialogDescription>
        </DialogHeader>

        {/* Form Content */}
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Scrollable Content */}
          <div className="h-32 overflow-y-auto bg-gray-100 p-4 rounded-lg mt-4">
            <p>
              Here goes some longer content. You can display terms, privacy
              policies, or other scrollable text. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Repellendus tenetur cumque eos
              reprehenderit ab eaque labore placeat fugiat aut cum ullam, illum
              impedit! Animi, doloremque! Accusamus commodi exercitationem ullam
              distinctio eum architecto dolores hic labore beatae, dolorem,
              nihil totam nulla tempore officia ipsum voluptatibus molestiae?
              Tenetur aliquam suscipit expedita tempora nobis, voluptatum illo
              illum enim? Perferendis eligendi nostrum laborum aut commodi,
              minus unde in rerum, fuga, natus magnam quae quod excepturi ut?
              Maiores nesciunt doloremque nam porro error quae earum voluptate
              rerum eaque, omnis debitis consectetur quam natus praesentium
              aperiam obcaecati fuga minus dolorem quis nisi magni voluptatem
              voluptatum fugiat cumque. Unde, at illo? Eaque sed ex voluptatum
              nemo. Iste, aut possimus! Id, quas. Dolorem debitis quisquam rerum
              vitae iusto!
            </p>
          </div>
        </div>

        {/* Nested Dialog (Confirm Action) */}
        <Dialog>
          <DialogTrigger asChild>
            <button className="btn-danger mt-4">Delete Item</button>
          </DialogTrigger>

          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>
                Are you sure you want to delete this item?
              </DialogTitle>
            </DialogHeader>

            <DialogFooter>
              <DialogClose asChild>
                <button className="btn-secondary">Cancel</button>
              </DialogClose>
              <button className="btn-danger">Confirm Delete</button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Command Palette */}
        <Dialog>
          <DialogTrigger asChild>
            <button className="btn">Open Command Palette</button>
          </DialogTrigger>

          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Search Commands</DialogTitle>
            </DialogHeader>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Search for commands..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
              <ul className="space-y-1">
                <li>Open Dashboard</li>
                <li>Create New Task</li>
                <li>Logout</li>
              </ul>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <button className="btn-secondary">Close</button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Footer with Multiple Actions */}
        <DialogFooter className="space-x-4">
          <DialogClose asChild>
            <button className="btn-secondary">Cancel</button>
          </DialogClose>
          <button className="btn-primary">Save Changes</button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
