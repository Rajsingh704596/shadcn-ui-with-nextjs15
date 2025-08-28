//! Accordion -
//^ use case-
// FAQs: User can expand/collapse multiple questions to read answers.
// Settings Panel: Only one section open at a time for cleaner UI.
// Product Details: Toggle sections like specs, reviews, and shipping info.
// Sidebar Menu: Expand multiple menu items for easy navigation.

"use client"; // for e.g 4

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionDemo() {
  return (
    <div className="space-y-10">
      {/* eg.1 */}
      <AccordionSingleDefaultOpen />
      {/* eg.2 */}
      <AccordionSingleAllClosed />
      {/* eg.3 */}
      <AccordionMultipleOpen />
      {/* eg.4 */}
      <BlogAccordion
        posts={[
          {
            id: "1",
            title: "What is React?",
            content: "React is a JavaScript library for building UIs.",
          },
          {
            id: "2",
            title: "What is Tailwind?",
            content: "Tailwind is a utility-first CSS framework.",
          },
        ]}
      />
    </div>
  );
}

// Example 1 —  Single open (default), one item open by default
export function AccordionSingleDefaultOpen() {
  return (
    <Accordion
      type="single" // at a time only 1 item open
      defaultValue="item-1" // item-1 default open         // type- string
      className="w-full max-w-xl mx-auto"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>What is your name?</AccordionTrigger>
        <AccordionContent>My name is Accordion.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>What do you do?</AccordionTrigger>
        <AccordionContent>I toggle content for UI.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

// Example 2 —  Single open, all closed by default
export function AccordionSingleAllClosed() {
  return (
    <Accordion
      type="single"
      collapsible //user manually close the accordion item  {if we pass false user can't close} , only work with type - single
      defaultValue={undefined} // all are close first time
      className="w-full max-w-xl mx-auto"
    >
      <AccordionItem value="faq1">
        <AccordionTrigger>Can I return the product?</AccordionTrigger>
        <AccordionContent>Yes, within 30 days.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="faq2">
        <AccordionTrigger>Do you offer support?</AccordionTrigger>
        <AccordionContent>Yes, 24/7 email support available.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

// Example 3 — Multiple items open at the same time
export function AccordionMultipleOpen() {
  return (
    <Accordion
      type="multiple" // multiple item open
      defaultValue={["q1"]} // default open q1     // type - string[] must pass when type is multiple   {["q1","q2"]}
      className="w-full max-w-xl mx-auto"
    >
      <AccordionItem value="q1">
        <AccordionTrigger>Frontend Tools</AccordionTrigger>
        <AccordionContent>React, Next.js, Tailwind CSS</AccordionContent>
      </AccordionItem>
      <AccordionItem value="q2">
        <AccordionTrigger>Backend Tools</AccordionTrigger>
        <AccordionContent>Node.js, PostgreSQL, Prisma</AccordionContent>
      </AccordionItem>
      <AccordionItem value="q3">
        <AccordionTrigger>DevOps Tools</AccordionTrigger>
        <AccordionContent>Docker, GitHub Actions, Railway</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

// Example 4 —  Dynamic Blog Accordion (reusable with props)
export function BlogAccordion({
  posts,
}: {
  posts: { id: string; title: string; content: string }[];
}) {
  return (
    <Accordion type="single" collapsible className="w-full max-w-xl mx-auto">
      {posts.map((post) => (
        <AccordionItem key={post.id} value={post.id}>
          <AccordionTrigger>{post.title}</AccordionTrigger>
          <AccordionContent>{post.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
