import type { Metadata } from "next";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import CookieBanner from "./components/cookies/CookieBanner";
import GoogleAnalytics from "./components/analytics/GoogleAnalytics";
import "./globals.css";
import LiveMarketBar from "./components/live-market/LiveMarketBar";

export const metadata: Metadata = {
  title: "Utility Finance",
  description:
    "Simple financial tools and calculators to help you understand your money.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <LiveMarketBar />
        <Footer />
        <CookieBanner />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
