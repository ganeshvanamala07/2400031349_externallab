import React from "react";

export default function Button({
  children,
  color = "blue",
  variant = "solid",
  size = "md",
  className = "",
  ...props
}) {
  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };

  const variants = {
    solid: `bg-${color}-600 text-white hover:bg-${color}-700`,
    outline: `border border-${color}-600 text-${color}-600 hover:bg-${color}-50`,
    ghost: `text-${color}-600 hover:bg-${color}-100`,
  };

  return (
    <button
      className={`${sizes[size]} ${variants[variant]} rounded-lg transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
