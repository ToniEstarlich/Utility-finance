"use client";

import { useEffect, useState } from "react";
import "./CookieBanner.css";

const COOKIE_KEY = "utility-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);

    if (!consent) {
      setVisible(true);
    }
  }, []);

  function saveConsent(value: "accepted" | "rejected") {
    localStorage.setItem(COOKIE_KEY, value);
    setVisible(false);

    window.dispatchEvent(
      new CustomEvent("utility-cookie-consent", {
        detail: value,
      })
    );
  }

  if (!visible) {
    return null;
  }

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie preferences">
      <div className="cookie-banner__content">
        <div>
          <span className="cookie-banner__eyebrow">
            YOUR PRIVACY
          </span>

          <h2>We use cookies.</h2>

          <p>
            We use essential cookies to make Utility work. With your
            permission, we may also use analytics cookies to understand how
            people use the site and improve our tools.
          </p>

          <a href="/privacy">Learn more about privacy</a>
        </div>

        <div className="cookie-banner__actions">
          <button
            type="button"
            className="cookie-banner__button cookie-banner__button--secondary"
            onClick={() => saveConsent("rejected")}
          >
            Reject optional
          </button>

          <button
            type="button"
            className="cookie-banner__button cookie-banner__button--primary"
            onClick={() => saveConsent("accepted")}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
