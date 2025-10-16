import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
const page = () => {
  return (
    <div>
      <h1
        className="text-center font-extrabold
      "
      >
        Alert Message Component
      </h1>

      <br />
      <div className="flex justify-center items-center">
        <AlertDemo />
      </div>
    </div>
  );
};

export default page;

import { AlertCircleIcon, CheckCircle2Icon, PopcornIcon } from "lucide-react";

export function AlertDemo() {
  return (
    <div className="grid w-full max-w-xl items-start gap-4">
      <Alert>
        <CheckCircle2Icon />
        <AlertTitle>Success! Your changes have been saved</AlertTitle>
        <AlertDescription>
          This is an alert with icon, title and description.
        </AlertDescription>
      </Alert>

      <Alert variant="default">
        <PopcornIcon />
        <AlertTitle>
          This Alert has a title and an icon. No description.
        </AlertTitle>
      </Alert>

      <Alert variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>Unable to process your payment.</AlertTitle>
        <AlertDescription>
          <p>Please verify your billing information and try again.</p>
          <ul className="list-inside list-disc text-sm">
            <li>Check your card details</li>
            <li>Ensure sufficient funds</li>
            <li>Verify billing address</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}
