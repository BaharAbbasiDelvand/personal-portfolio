import React from "react";

interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Textarea({ className = "", ...props }: TextareaProps) {
    return (
        <textarea
            className={`border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
            {...props}
        />
    );
}
