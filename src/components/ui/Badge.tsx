import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-1 font-mono text-xs",
        variant === "default" &&
          "border-border bg-base-elevated text-ink-secondary",
        variant === "accent" &&
          "border-accent/30 bg-accent-dim text-accent",
        className
      )}
      {...props}
    />
  );
}
