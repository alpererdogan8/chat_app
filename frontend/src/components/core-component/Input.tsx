import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { FC, ForwardedRef, forwardRef } from "react";

const inputVariants = cva(
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black",
);

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
  ref?: ForwardedRef<HTMLInputElement>;
  submessage?: string;
}
export const Input: FC<InputProps> = forwardRef(({ className, submessage, ...props }, ref) => {
  return (
    <>
      <input ref={ref} className={cn(inputVariants({ className }), "peer")} {...props} />
      <div className="invisible peer-invalid:visible peer-invalid:border-red-700 peer-invalid:text-red-700">
        {submessage}
      </div>
    </>
  );
});
