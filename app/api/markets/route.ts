import { NextResponse } from "next/server";

const API_KEY = process.env.TWELVE_DATA_API_KEY;

const MARKETS = [
  { symbol: "GBP/USD", name: "GBP / USD", category: "Currencies" },
  { symbol: "EUR/USD", name: "EUR / USD", category: "Currencies" },
  { symbol: "USD/JPY", name: "USD / JPY", category: "Currencies" },
  { symbol: "BTC/USD", name: "Bitcoin", category: "Crypto" },
  { symbol: "ETH/USD", name: "Ethereum", category: "Crypto" },
  { symbol: "AAPL", name: "Apple", category: "Stocks" },
  { symbol: "MSFT", name: "Microsoft", category: "Stocks" },
  { symbol: "NVDA", name: "NVIDIA", category: "Stocks" },
  { symbol: "TSLA", name: "Tesla", category: "Stocks" },
  { symbol: "AMZN", name: "Amazon", category: "Stocks" },
  { symbol: "SPY", name: "S&P 500 ETF", category: "Markets" },
  { symbol: "QQQ", name: "NASDAQ 100 ETF", category: "Markets" },
];

export async function GET() {
  if (!API_KEY) {
    return NextResponse.json(
      { error: "TWELVE_DATA_API_KEY is not configured" },
      { status: 500 }
    );
  }

  const markets = await Promise.all(
    MARKETS.map(async (market) => {
      try {
        const url =
          "https://api.twelvedata.com/quote" +
          `?symbol=${encodeURIComponent(market.symbol)}` +
          `&apikey=${API_KEY}`;

        const response = await fetch(url, {
          next: { revalidate: 60 },
        });

        const quote = await response.json();

        if (!response.ok || quote.status === "error") {
          return {
            ...market,
            error: true,
          };
        }

        return {
          ...market,
          price: quote.close,
          change: quote.change,
          percentChange: quote.percent_change,
          currency: quote.currency,
          marketOpen: quote.is_market_open,
        };
      } catch {
        return {
          ...market,
          error: true,
        };
      }
    })
  );

  return NextResponse.json({
    markets,
    updatedAt: new Date().toISOString(),
  });
}