// components/ResponsiveImage.jsx
import React from "react";

export default function ResponsiveImage({ desktopSrc, mobileSrc, alt, className }) {
  return (
    <>
      <img
        src={desktopSrc}
        alt={alt}
        className={`hidden md:block ${className || ""}`}
      />
      <img
        src={mobileSrc}
        alt={alt}
        className={`block md:hidden ${className || ""}`}
      />
    </>
  );
}
