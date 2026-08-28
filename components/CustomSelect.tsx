"use client";

import React, { useState, useRef, useEffect } from "react";

export interface SelectOption {
  label: string;
  value: string;
}

interface CustomSelectProps {
  options: SelectOption[];
  defaultValue?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  className?: string;
  theme?: "light" | "dark";
}

export default function CustomSelect({
  options,
  defaultValue,
  placeholder = "Select...",
  onChange,
  className = "",
  theme = "light",
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<SelectOption>(
    options.find((o) => o.value === defaultValue || o.label === defaultValue) || options[0] || { label: placeholder, value: "" }
  );
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside, true);
    return () => document.removeEventListener("mousedown", handleClickOutside, true);
  }, []);

  const handleSelect = (option: SelectOption) => {
    setSelected(option);
    setIsOpen(false);
    if (onChange) onChange(option.value);
  };

  const isDark = theme === "dark";

  return (
    <div
      ref={containerRef}
      className={`custom-select-wrapper ${isOpen ? "open" : ""} ${className}`}
      onClick={(e) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
      }}
      style={{
        width: "100%",
        minWidth: "160px",
        backgroundColor: isDark ? "#080500" : "#ffffff",
        color: isDark ? "#ffffff" : "#121820",
        border: `1px solid ${isOpen ? "#121820" : isDark ? "#262420" : "#DCDCDC"}`,
        borderRadius: "8px",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: "16px",
        paddingRight: "38px",
        position: "relative",
        cursor: "pointer",
        userSelect: "none",
        fontSize: "15px",
        fontWeight: "600",
        boxSizing: "border-box",
        transition: "all 0.2s ease",
        zIndex: isOpen ? 99999 : 5,
      }}
    >
      <span
        style={{
          color: isDark ? "#ffffff" : "#121820",
          display: "block",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {selected.label}
      </span>
      
      {/* Arrow icon */}
      <span
        style={{
          position: "absolute",
          right: "14px",
          top: "50%",
          transform: isOpen ? "translateY(-50%) rotate(180deg)" : "translateY(-50%) rotate(0deg)",
          transition: "transform 0.25s ease",
          pointerEvents: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1.5L6 6.5L11 1.5" stroke={isDark ? "#C6C4C1" : "#121820"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>

      {/* Options Dropdown Menu */}
      {isOpen && (
        <ul
          style={{
            display: "block",
            opacity: 1,
            visibility: "visible",
            pointerEvents: "auto",
            position: "absolute",
            top: "calc(100% + 6px)",
            left: 0,
            right: 0,
            width: "100%",
            backgroundColor: isDark ? "#0D0A06" : "#ffffff",
            border: `1px solid ${isDark ? "#262420" : "#E0E0E0"}`,
            borderRadius: "8px",
            boxShadow: "0 12px 32px rgba(0,0,0,0.25)",
            maxHeight: "220px",
            overflowY: "auto",
            zIndex: 999999,
            padding: "6px 0",
            margin: 0,
            listStyle: "none",
          }}
        >
          {options.map((option, index) => (
            <li
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                handleSelect(option);
              }}
              style={{
                padding: "12px 18px",
                lineHeight: "1.4",
                color: selected.value === option.value 
                  ? (isDark ? "#C6C4C1" : "#000000") 
                  : (isDark ? "#D4D4D4" : "#333333"),
                backgroundColor: selected.value === option.value 
                  ? (isDark ? "rgba(198,196,193,0.18)" : "#F0F0F0") 
                  : "transparent",
                fontWeight: selected.value === option.value ? "700" : "500",
                cursor: "pointer",
                fontSize: "14px",
                transition: "background-color 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = isDark ? "rgba(198,196,193,0.25)" : "#EAEAEA";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = selected.value === option.value 
                  ? (isDark ? "rgba(198,196,193,0.18)" : "#F0F0F0") 
                  : "transparent";
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
