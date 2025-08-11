// components/Separator.tsx
import React from "react";

interface SeparatorProps {
  width?: number | string;
  color?: string;
}

const Separator: React.FC<SeparatorProps> = ({
  width = 320,
  color = "#22CA38",
}) => {
  return (
    <svg
      width={typeof width === "number" ? `${width}` : width}
      height="9"
      viewBox="0 0 320 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line y1="0.5" x2="320" y2="0.5" stroke={color} />
      <line x1="40" y1="8.5" x2="280" y2="8.5" stroke={color} />
    </svg>
  );
};

export default Separator;
