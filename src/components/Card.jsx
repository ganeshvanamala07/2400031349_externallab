import React from "react";

export default function Card(props) {
  const { title, subtitle, children, footer } = props;

  return (
    <div className="border rounded-xl shadow-md bg-white overflow-hidden">
      <div className="p-4">
        {title && <h2 className="text-lg font-bold">{title}</h2>}
        {subtitle && <p className="text-gray-500 text-sm">{subtitle}</p>}
        <div className="mt-2">{children}</div>
      </div>

      {footer && <div className="bg-gray-100 p-3">{footer}</div>}
    </div>
  );
}
