import { cn } from "@/lib/utils";
import { LabelHTMLAttributes, forwardRef } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

const Label = forwardRef<HTMLLabelElement, LabelProps>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn("block text-sm font-medium text-gray-700", className)}
    {...props}
  />
));

Label.displayName = "Label";

export { Label };
