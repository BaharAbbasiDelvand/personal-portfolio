import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "destructive"
  size?: "sm" | "md" | "lg"
}

export function Button({ variant = "primary", size = "md", className = "", ...props }: ButtonProps) {
  const base = "rounded px-4 py-2 font-medium transition-colors"
  const variants: Record<string, string> = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    ghost: "bg-transparent text-gray-800 hover:bg-gray-100",
    destructive: "bg-red-500 text-white hover:bg-red-600",
  }
  const sizes: Record<string, string> = {
    sm: "text-sm px-2 py-1",
    md: "text-md px-4 py-2",
    lg: "text-lg px-6 py-3",
  }

  return <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props} />
}
