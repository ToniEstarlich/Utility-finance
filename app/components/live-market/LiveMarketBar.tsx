"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./LiveMarketBar.css";

type Market = {
  symbol: string;
  name: string;
  category: string;
  price?: string;
  percentChange?: string;
  error?: boolean;
};

export default function LiveMarketBar() {
  const [markets, setMarkets] = useState<Market[]>([]);

  async function loadMarkets() {
    try {
      const response = await fetch("/api/markets", {
        cache: "no-store",
      });

      const data = await response.json();

      setMarkets(
        (data.markets ?? []).filter(
          (market: Market) => !market.error
        )
      );
    } catch {
      // Keep existing data if refresh fails.
    }
  }

  useEffect(() => {
    loadMarkets();

    const interval = setInterval(loadMarkets, 60000);

    return () => clearInterval(interval);
  }, []);

  if (!markets.length) {
    return null;
  }

  const items = [...markets, ...markets];

  return (
    <div className="live-market-bar">
      <div className="live-market-bar__label">
        <span className="live-market-bar__dot" />
        <span>UTILITY LIVE</span>
      </div>

      <div className="live-market-bar__viewport">
        <div className="live-market-bar__track">
          {items.map((market, index) => {
            const change = Number(
              market.percentChange ?? 0
            );

            const positive = change >= 0;

            return (
              <div
                className="live-market-item"
                key={`${market.symbol}-${index}`}
              >
                <span className="live-market-item__category">
                  {market.category}
                </span>

                <span className="live-market-item__name">
                  {market.name}
                </span>

                <strong className="live-market-item__price">
                  {market.price}
                </strong>

                <span
                  className={
                    positive
                      ? "live-market-item__change is-positive"
                      : "live-market-item__change is-negative"
                  }
                >
                  {positive ? "↑" : "↓"}{" "}
                  {Math.abs(change).toFixed(2)}%
                </span>

                <Link
                  href={`/learn/${encodeURIComponent(
                    market.symbol
                  )}`}
                >
                  Explain
                </Link>

                <span className="live-market-item__separator">
                  •
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}