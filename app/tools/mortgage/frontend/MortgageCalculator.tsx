"use client";

import { useState } from "react";
import {
  calculateMortgage,
  type MortgageResult,
} from "../backend/calculateMortgage";
import "./MortgageCalculator.css";

type Currency = "GBP" | "USD" | "EUR" | "CAD";

const currencyConfig: Record<
  Currency,
  { symbol: string; locale: string }
> = {
  GBP: { symbol: "£", locale: "en-GB" },
  USD: { symbol: "$", locale: "en-US" },
  EUR: { symbol: "", locale: "de-DE" },
  CAD: { symbol: "CA$", locale: "en-CA" },
};

export default function MortgageCalculator() {
  const [currency, setCurrency] = useState<Currency>("GBP");
  const [principal, setPrincipal] = useState("250000");
  const [annualRate, setAnnualRate] = useState("4.5");
  const [years, setYears] = useState("25");
  const [result, setResult] = useState<MortgageResult | null>(null);

  function handleCalculate() {
    const amount = Number(principal);
    const rate = Number(annualRate);
    const term = Number(years);

    if (
      !Number.isFinite(amount) ||
      !Number.isFinite(rate) ||
      !Number.isFinite(term) ||
      amount <= 0 ||
      rate < 0 ||
      term <= 0
    ) {
      return;
    }

    setResult(
      calculateMortgage({
        principal: amount,
        annualRate: rate,
        years: term,
      })
    );
  }

  function formatMoney(value: number) {
    return new Intl.NumberFormat(currencyConfig[currency].locale, {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(value);
  }

  const interestPercentage = result
    ? (result.totalInterest / result.totalPayments) * 100
    : 0;

  return (
    <main className="mortgage-page">
      <div className="mortgage-orb mortgage-orb--one" />
      <div className="mortgage-orb mortgage-orb--two" />

      <section className="mortgage-shell">
        <div className="mortgage-heading">
          <span className="mortgage-eyebrow">
            UTILITY FINANCE
          </span>

          <h1>
            See what your
            <br />
            mortgage <em>really</em> costs.
          </h1>

          <p>
            Explore your estimated monthly payment, total interest and
            overall cost in seconds.
          </p>
        </div>

        <div className="mortgage-card">
          <div className="mortgage-card__form">
            <div className="mortgage-card__top">
              <div>
                <span className="mortgage-label">YOUR DETAILS</span>
                <h2>Mortgage calculator</h2>
              </div>

              <div className="currency-switcher">
                {(["GBP", "USD", "EUR", "CAD"] as Currency[]).map(
                  (item) => (
                    <button
                      key={item}
                      type="button"
                      className={
                        currency === item ? "is-active" : ""
                      }
                      onClick={() => setCurrency(item)}
                    >
                      {item}
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="mortgage-fields">
              <label className="mortgage-field mortgage-field--large">
                <span>Mortgage amount</span>

                <div className="mortgage-input">
                  <b>{currencyConfig[currency].symbol}</b>

                  <input
                    type="number"
                    min="1"
                    value={principal}
                    onChange={(event) =>
                      setPrincipal(event.target.value)
                    }
                  />
                </div>
              </label>

              <div className="mortgage-fields__row">
                <label className="mortgage-field">
                  <span>Interest rate</span>

                  <div className="mortgage-input">
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={annualRate}
                      onChange={(event) =>
                        setAnnualRate(event.target.value)
                      }
                    />

                    <b>%</b>
                  </div>
                </label>

                <label className="mortgage-field">
                  <span>Mortgage term</span>

                  <div className="mortgage-input">
                    <input
                      type="number"
                      min="1"
                      max="50"
                      value={years}
                      onChange={(event) =>
                        setYears(event.target.value)
                      }
                    />

                    <b>yrs</b>
                  </div>
                </label>
              </div>
            </div>

            <button
              type="button"
              className="mortgage-button"
              onClick={handleCalculate}
            >
              Calculate my mortgage
              <span>→</span>
            </button>

            <p className="mortgage-note">
              Estimate only. Your actual mortgage may differ.
            </p>
          </div>

          <div className="mortgage-card__result">
            <div className="result-glow" />

            <span className="mortgage-label">
              ESTIMATED PAYMENT
            </span>

            {result ? (
              <div className="mortgage-result-content">
                <div className="monthly-payment">
                  <span>per month</span>
                  <strong>
                    {formatMoney(result.monthlyPayment)}
                  </strong>
                </div>

                <div className="result-line" />

                <div className="result-stats">
                  <div>
                    <span>Total cost</span>
                    <strong>
                      {formatMoney(result.totalPayments)}
                    </strong>
                  </div>

                  <div>
                    <span>Total interest</span>
                    <strong>
                      {formatMoney(result.totalInterest)}
                    </strong>
                  </div>
                </div>

                <div className="cost-breakdown">
                  <div className="cost-breakdown__header">
                    <span>Cost breakdown</span>
                    <strong>
                      {interestPercentage.toFixed(0)}% interest
                    </strong>
                  </div>

                  <div className="cost-bar">
                    <span
                      style={{
                        width: `${100 - interestPercentage}%`,
                      }}
                    />
                  </div>

                  <div className="cost-legend">
                    <span>
                      <i />
                      Borrowed
                    </span>

                    <span>
                      <i />
                      Interest
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="result-empty">
                <div className="result-empty__icon">↗</div>

                <h3>Your estimate lives here.</h3>

                <p>
                  Adjust your numbers and calculate to see the
                  result.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="mortgage-footer-note">
          <span>Transparent calculations</span>
          <span>•</span>
          <span>Simple assumptions</span>
          <span>•</span>
          <span>Built by Utility</span>
        </div>
      </section>
    </main>
  );
}
