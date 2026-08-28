"use client";
import { useState, useEffect } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  const letters = ["N", "I", "C", "O", "L", "E", " ", "M", "A", "S", "H", "I", "N", "I"];

  return (
    <>
{/*===== PRELOADER STARTS =======*/}
<div id="preloader">
  <div id="ctn-preloader" className="ctn-preloader">
    <div className="animation-preloader">
        <div className="txt-loading">
          {letters.map((char, index) => (
            <span key={index} data-text-preloader={char} className="letters-loading">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>
    </div>
  </div>
</div>
{/*===== PRELOADER ENDS =======*/}
    </>
  );
}
