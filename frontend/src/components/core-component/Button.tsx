import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { FC, forwardRef } from "react";
const variantsButton = cva("inline-flex items-center justify-center button rounded-md", {
  variants: {
    variantType: {
      primary: ["bg-primary hover:bg-primary/80 ", "text-primary-foreground", "active:bg-primary/90"],
      secondary: ["bg-secondary hover:bg-secondary/80", "text-secondary-foreground", "active:bg-secondary/90"],
      destructive: [
        "bg-destructive hover:bg-destructive/80",
        "text-destructive-foreground",
        "active:bg-destructive/90",
      ],
      disable: ["bg-muted", "text-muted-foreground", "cursor-not-allowed"],
      disableLink: ["text-muted", "text-muted-foreground", "cursor-not-allowed"],
      outline: ["border-2 border-input hover:bg-accent hover:text-accent-foreground", "text-foreground"],
      link: ["text-primary-foreground hover:underline", "text-foreground"],
      text: ["text-primary-foreground hover:underline", "text-foreground"],
    },
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
    },
  },
  defaultVariants: {
    variantType: "primary",
    size: "default",
  },
});

type ReactNode = React.ReactNode;
type ForwardedRef<T> = React.ForwardedRef<T>;
type ButtonHTMLAttributes<T> = React.ButtonHTMLAttributes<T>;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof variantsButton> {
  children: ReactNode;
  ref?: ForwardedRef<HTMLButtonElement>;
  disabled?: boolean;
}
export const Button: FC<ButtonProps> = forwardRef(({ className, size, variantType, children, ...props }, ref) => {
  return (
    <button ref={ref} className={cn(variantsButton({ variantType, size, className }))} {...props}>
      {children}
    </button>
  );
});
