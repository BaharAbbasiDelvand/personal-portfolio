import React from "react"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className = "", children, ...props }: CardProps) {
  return <div className={`bg-white shadow rounded p-4 ${className}`} {...props}>{children}</div>
}
