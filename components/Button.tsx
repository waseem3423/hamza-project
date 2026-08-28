"use client";

import React from "react";
import Link from "next/link";

export interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  iconSrc?: string;
  showIcon?: boolean;
  target?: string;
  rel?: string;
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  iconSrc = "/assets/img/icons/arrow1.svg",
  showIcon = true,
  target,
  rel,
  disabled = false,
}: ButtonProps) {
  const getFallback = (path: string) => `https://html.vikinglab.agency/homz${path}`;

  const baseClasses =
    variant === "secondary"
      ? "header-btn1 btn1"
      : variant === "outline"
      ? "header-btn1 btn-outline"
      : "header-btn1";

  const combinedClasses = `${baseClasses} ${className}`.trim();

  const iconElement = showIcon && iconSrc ? (
    <img
      src={iconSrc}
      alt=""
      onError={(e) => {
        e.currentTarget.src = getFallback(iconSrc);
      }}
    />
  ) : null;

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

    if (isExternal) {
      return (
        <a
          href={href}
          className={combinedClasses}
          onClick={onClick}
          target={target || (href.startsWith("http") ? "_blank" : undefined)}
          rel={rel || (href.startsWith("http") ? "noopener noreferrer" : undefined)}
        >
          {children}
          {iconElement}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={combinedClasses}
        onClick={onClick}
        target={target}
        rel={rel}
      >
        {children}
        {iconElement}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      {iconElement}
    </button>
  );
}
