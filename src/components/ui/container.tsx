import * as React from "react"
import { cn } from "@/lib/utils"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  size?: "sm" | "md" | "lg" | "xl" | "full"
}

const containerSizes = {
  sm: "max-w-3xl",
  md: "max-w-5xl", 
  lg: "max-w-7xl",
  xl: "max-w-[1400px]",
  full: "max-w-none",
}

export function Container({ 
  children, 
  size = "lg", 
  className, 
  ...props 
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        containerSizes[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
} 