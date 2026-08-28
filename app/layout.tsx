import type { Metadata } from "next";
import Script from "next/script";
import AnimationInitializer from "@/components/AnimationInitializer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nicole Mashini | Luxury Real Estate Agency",
  description: "Nicole Mashini Luxury Real Estate Next.js Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/assets/img/logo/fav-logo1.png" type="image/x-icon" />
        <link rel="stylesheet" href="/assets/css/plugins/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/aos.css" />
        <link rel="stylesheet" href="/assets/css/plugins/fontawesome.css" />
        <link rel="stylesheet" href="/assets/css/plugins/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/plugins/mobile.css" />
        <link rel="stylesheet" href="/assets/css/plugins/owlcarousel.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/sidebar.css" />
        <link rel="stylesheet" href="/assets/css/plugins/slick-slider.css" />
        <link rel="stylesheet" href="/assets/css/plugins/nice-select.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
      </head>
      <body className="homepage1-body">
        {children}
        <AnimationInitializer />
        <Script src="/assets/js/plugins/jquery-3-6-0.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/plugins/bootstrap.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/plugins/fontawesome.js" strategy="beforeInteractive" />
        <Script src="/assets/js/plugins/aos.js" strategy="beforeInteractive" />
        <Script src="/assets/js/plugins/counter.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/sidebar.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/magnific-popup.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/mobilemenu.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/owlcarousel.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/nice-select.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/waypoints.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/slick-slider.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/circle-progress.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/gsap.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/ScrollTrigger.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/Splitetext.js" strategy="afterInteractive" />
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
