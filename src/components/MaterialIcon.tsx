import React from "react";

interface MaterialIconProps {
  name: string;
  className?: string;
  fill?: boolean;
  weight?: number;
}

export default function MaterialIcon({
  name,
  className = "",
  fill = false,
  weight = 300,
}: MaterialIconProps) {
  return (
    <span
      className={`material-symbols-outlined select-none ${className}`}
      style={{
        fontVariationSettings: `'FILL' ${fill ? 1 : 0}, 'wght' ${weight}, 'GRAD' 0, 'opsz' 24`,
        verticalAlign: "middle",
      }}
    >
      {name}
    </span>
  );
}
