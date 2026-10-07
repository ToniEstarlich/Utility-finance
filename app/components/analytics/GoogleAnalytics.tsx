"use client";

import { useEffect } from "react";

const MEASUREMENT_ID = "G-ZXNFPVEQKZ";
const COOKIE_KEY = "utility-cookie-consent";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function loadGoogleAnalytics() {
  if (window.gtag) {
    return;
  }

  window.dataLayer = window.dataLayer || [];

  window.gtag = (...args: unknown[]) => {
    window.dataLayer.push(args);
  };

  window.gtag("js", new Date());
  window.gtag("config", MEASUREMENT_ID);

  const script = document.createElement("script");

  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;

  document.head.appendChild(script);
}

export default function GoogleAnalytics() {
  useEffect(() => {
    if (localStorage.getItem(COOKIE_KEY) === "accepted") {
      loadGoogleAnalytics();
    }

    function handleConsent(event: Event) {
      const customEvent =
        event as CustomEvent<"accepted" | "rejected">;

      if (customEvent.detail === "accepted") {
        loadGoogleAnalytics();
      }
    }

    window.addEventListener(
      "utility-cookie-consent",
      handleConsent
    );

    return () => {
      window.removeEventListener(
        "utility-cookie-consent",
        handleConsent
      );
    };
  }, []);

  return null;
}