"use client";

import React from "react";
import Link from "next/link";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  variant?: "light" | "dark";
}

export default function BrandLogo({ className = "", size = "md", showText = true, variant = "dark" }: BrandLogoProps) {
  const iconHeight = size === "sm" ? "38px" : size === "lg" ? "52px" : "44px";
  const titleColor = variant === "light" ? "#111827" : "#C6C4C1";

  return (
    <Link href="/" className={`d-inline-flex align-items-center gap-2 text-decoration-none ${className}`}>
      <img
        src="/assets/img/logo/brand_logo.png"
        alt="Nicole Mashini"
        style={{
          height: iconHeight,
          width: "auto",
          objectFit: "contain"
        }}
      />
      {showText && (
        <div className="d-flex flex-column justify-content-center" style={{ lineHeight: "1.15" }}>
          <span
            style={{
              fontFamily: "'EB Garamond', 'IBM Plex Sans', serif",
              fontSize: size === "sm" ? "15px" : size === "lg" ? "20px" : "17px",
              fontWeight: "700",
              letterSpacing: "2px",
              color: titleColor,
              textTransform: "uppercase",
              whiteSpace: "nowrap"
            }}
          >
            Nicole Mashini
          </span>
          <span
            style={{
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontSize: size === "sm" ? "8px" : size === "lg" ? "10px" : "9px",
              fontWeight: "600",
              letterSpacing: "3.5px",
              color: "#888888",
              textTransform: "uppercase",
              marginTop: "2px",
              whiteSpace: "nowrap"
            }}
          >
            Luxury Real Estate
          </span>
        </div>
      )}
    </Link>
  );
}
