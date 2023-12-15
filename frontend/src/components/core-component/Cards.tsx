import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React, { forwardRef, ForwardRefExoticComponent } from "react";
const variantsCards = cva("rounded-xl", {
  variants: {
    bordered: {
      true: "border-border border",
      false: "",
    },
  },
});

type ReactNode = React.ReactNode;
type ForwardedRef<T> = React.ForwardedRef<T>;
type RefAttributes<T> = React.RefAttributes<T>;
type HTMLAttributes<T> = React.HTMLAttributes<T>;

interface CardsChildren extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
interface CardsComponentProps
  extends CardsChildren,
    RefAttributes<HTMLDivElement>,
    VariantProps<typeof variantsCards> {}

interface CardsProps extends ForwardRefExoticComponent<CardsComponentProps> {
  children: ReactNode;
  Header: React.FC<HTMLAttributes<HTMLDivElement>>;
  Content: React.FC<HTMLAttributes<HTMLDivElement>>;
  Description: React.FC<HTMLAttributes<HTMLDivElement>>;
  Title: React.FC<HTMLAttributes<HTMLDivElement>>;
  Footer: React.FC<HTMLAttributes<HTMLDivElement>>;
  Stick: React.FC<HTMLAttributes<HTMLHRElement>>;
  ref?: ForwardedRef<HTMLDivElement>;
}
export const Cards = forwardRef<HTMLDivElement, CardsComponentProps>(
  ({ children, bordered, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(variantsCards({ bordered }), className)} {...props}>
        {children}
      </div>
    );
  },
) as CardsProps;

Cards.displayName = "Cards";
Cards.Stick = ({ className }) => {
  return <hr className={cn("border-border border-1 border-solid w-11/12", className)} />;
};
Cards.Stick.displayName = "Stick";
Cards.Header = ({ children, className }) => {
  return <header className={cn("w-full", className)}>{children}</header>;
};
Cards.Header.displayName = "Header";

Cards.Title = ({ children, className }) => {
  return <h1 className={cn("text-center", className)}>{children}</h1>;
};
Cards.Title.displayName = "Title";

Cards.Content = ({ children, className }) => {
  return <main className={cn("w-full", className)}>{children}</main>;
};
Cards.Content.displayName = "Content";

Cards.Description = ({ children, className }) => {
  return <div className={cn(className)}>{children}</div>;
};
Cards.Description.displayName = "Description";

Cards.Footer = ({ children, className }) => {
  return <footer className={cn(className)}>{children}</footer>;
};
Cards.Footer.displayName = "Footer";
