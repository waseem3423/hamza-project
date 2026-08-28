"use client";

import { useEffect } from "react";

export default function AnimationInitializer() {
  useEffect(() => {
    const runAnimations = () => {
      // 1. Initialize AOS (Animate on Scroll)
      if (typeof window !== "undefined" && (window as any).AOS) {
        try {
          (window as any).AOS.init({
            duration: 1000,
            once: true,
            disable: false,
          });
          (window as any).AOS.refresh();
        } catch (e) {
          console.error("AOS Init Error:", e);
        }
      }

      // 2. Initialize jQuery & plugin effects
      if (typeof window !== "undefined" && (window as any).jQuery) {
        const $ = (window as any).jQuery;

        // Sticky Header Effect
        $(window).off("scroll.stickyHeader").on("scroll.stickyHeader", function () {
          if ($(window).scrollTop() > 50) {
            $(".header-area").addClass("sticky");
          } else {
            $(".header-area").removeClass("sticky");
          }
        });

        // NiceSelect
        if ($.fn && $.fn.niceSelect && $(".nice-select").length > 0) {
          try {
            $(".nice-select").niceSelect();
          } catch (e) {}
        }

        // Slick Sliders
        if ($.fn && $.fn.slick) {
          if ($(".tes1-slider-area").length > 0 && !$(".tes1-slider-area").hasClass("slick-initialized")) {
            try {
              $(".tes1-slider-area").slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
                autoplay: true,
                autoplaySpeed: 3000,
              });
            } catch (e) {}
          }
        }
      }
    };

    // Run animations after React hydration
    const timer1 = setTimeout(runAnimations, 200);
    const timer2 = setTimeout(runAnimations, 800);
    const timer3 = setTimeout(runAnimations, 1800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return null;
}
