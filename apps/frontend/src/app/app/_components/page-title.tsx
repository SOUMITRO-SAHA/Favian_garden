import { cn } from "@/lib";
import React from "react";

interface PageTitleProps {
  label: string;

  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div";
  className?: string;
}

export const PageTitle: React.FC<PageTitleProps> = ({
  as: Tag = "h3",
  label,
  className,
  ...props
}) => {
  const titleStyle =
    Tag === "h1" ? "text-lg md:text-xl lg:text-2xl" : "text-lg lg:text-xl";
  return (
    <Tag className={cn(titleStyle, className)} {...props}>
      {label}
    </Tag>
  );
};
