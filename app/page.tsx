import ToolCard from "./components/tool-card/ToolCard";
import "./home.css";

export default function Home() {
  return (
    <main>
      <section className="home-hero">
        <div className="utility-container">
          <span className="utility-eyebrow">UTILITY FINANCE</span>

          <h1>
            Your money.
            <br />
            <em>Made clearer.</em>
          </h1>

          <p className="home-hero__description">
            Simple financial calculators and clear information to help you
            understand the numbers behind your decisions.
          </p>

          <div className="home-hero__actions">
            <a href="#tools" className="utility-button">
              Explore tools
              <span>→</span>
            </a>

            <a href="#why-utility" className="home-text-link">
              Why Utility?
              <span>↓</span>
            </a>
          </div>
        </div>
      </section>

      <section className="home-visual-section">
        <div className="utility-container">
          <div className="finance-visual">
            <div className="finance-visual__header">
              <div>
                <span className="utility-eyebrow">MONEY, VISUALISED</span>
                <h2>See the bigger picture.</h2>
              </div>

              <span className="finance-visual__badge">
                Illustrative example
              </span>
            </div>

            <div className="finance-dashboard">
              <div className="finance-dashboard__main">
                <div className="dashboard-stat">
                  <span>Example balance</span>
                  <strong>£24,850</strong>
                  <small>Illustrative scenario</small>
                </div>

                <div className="finance-chart">
                  <div className="chart-grid">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>

                  <svg
                    viewBox="0 0 760 260"
                    preserveAspectRatio="none"
                    aria-label="Illustrative financial growth chart"
                    role="img"
                  >
                    <defs>
                      <linearGradient
                        id="chartFill"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop offset="0%" stopColor="#dfff45" stopOpacity="0.28" />
                        <stop offset="100%" stopColor="#dfff45" stopOpacity="0" />
                      </linearGradient>
                    </defs>

                    <path
                      className="chart-area"
                      d="M0 220 C90 210 120 190 190 196 C270 202 285 158 360 165 C430 172 450 120 520 130 C600 140 635 70 760 42 L760 260 L0 260 Z"
                    />

                    <path
                      className="chart-line"
                      d="M0 220 C90 210 120 190 190 196 C270 202 285 158 360 165 C430 172 450 120 520 130 C600 140 635 70 760 42"
                    />

                    <circle cx="760" cy="42" r="6" className="chart-point" />
                  </svg>

                  <div className="chart-labels">
                    <span>Now</span>
                    <span>12 months</span>
                    <span>24 months</span>
                    <span>36 months</span>
                  </div>
                </div>
              </div>

              <div className="finance-dashboard__side">
                <div className="mini-stat">
                  <span>Monthly payment</span>
                  <strong>£1,389</strong>
                  <small>Example mortgage</small>
                </div>

                <div className="mini-stat">
                  <span>Interest paid</span>
                  <strong>£167k</strong>
                  <small>Example lifetime cost</small>
                </div>

                <div className="mini-stat mini-stat--accent">
                  <span>Understand first.</span>
                  <strong>Decide better.</strong>
                  <small>That's the Utility approach.</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tools" className="utility-section">
        <div className="utility-container">
          <div className="utility-section__heading">
            <div>
              <span className="utility-eyebrow">TOOLS</span>
              <h2>Start with something useful.</h2>
            </div>

            <p>
              Practical calculators built around real financial decisions.
            </p>
          </div>

          <div className="utility-tool-grid">
            <ToolCard
              title="Mortgage calculator"
              description="Estimate your monthly mortgage payment, interest and total cost."
              href="/tools/mortgage"
            />

            <ToolCard
              title="Life insurance calculator"
              description="Estimate how much life insurance cover your family may need."
              href="/life-insurance"
              status="coming-soon"
            />

            <ToolCard
              title="Credit card calculator"
              description="Understand payments, interest and how long it may take to clear a balance."
              href="/credit-card"
              status="coming-soon"
            />

            <ToolCard
              title="Savings calculator"
              description="See how regular saving and interest could affect your balance over time."
              href="/savings"
              status="coming-soon"
            />

            <ToolCard
              title="Loan calculator"
              description="Estimate repayments, interest and the overall cost of borrowing."
              href="/loan"
              status="coming-soon"
            />

            <ToolCard
              title="Compound interest"
              description="Explore how money can grow when returns are reinvested over time."
              href="/compound-interest"
              status="coming-soon"
            />
          </div>
        </div>
      </section>

      <section className="home-topics">
        <div className="utility-container">
          <div className="utility-section__heading">
            <div>
              <span className="utility-eyebrow">FINANCIAL TOPICS</span>
              <h2>Understand the decisions behind the numbers.</h2>
            </div>

            <p>
              Clear explanations, useful examples and transparent assumptions.
            </p>
          </div>

          <div className="topic-grid">
            <article className="topic-card">
              <span>01</span>
              <h3>Mortgages</h3>
              <p>
                Understand repayments, interest, borrowing costs and
                overpayments.
              </p>
            </article>

            <article className="topic-card">
              <span>02</span>
              <h3>Insurance</h3>
              <p>
                Explore cover, protection and the financial impact of
                unexpected events.
              </p>
            </article>

            <article className="topic-card">
              <span>03</span>
              <h3>Credit</h3>
              <p>
                Understand balances, repayments, interest and the cost of
                borrowing.
              </p>
            </article>

            <article className="topic-card">
              <span>04</span>
              <h3>Savings & investing</h3>
              <p>
                Learn how saving, returns and compound growth can affect your
                money over time.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="why-utility" className="home-trust">
        <div className="utility-container">
          <div className="trust-panel">
            <div className="trust-panel__intro">
              <span className="utility-eyebrow">WHY UTILITY</span>

              <h2>
                Finance doesn't need
                <br />
                to feel complicated.
              </h2>

              <p>
                We focus on making financial information easier to understand,
                with transparent calculations and straightforward explanations.
              </p>
            </div>

            <div className="trust-points">
              <div className="trust-point">
                <span>01</span>
                <div>
                  <strong>Transparent calculations</strong>
                  <p>
                    Clear formulas, assumptions and examples instead of hidden
                    numbers.
                  </p>
                </div>
              </div>

              <div className="trust-point">
                <span>02</span>
                <div>
                  <strong>Useful by design</strong>
                  <p>
                    Tools are built around questions people actually need to
                    answer.
                  </p>
                </div>
              </div>

              <div className="trust-point">
                <span>03</span>
                <div>
                  <strong>Built for clarity</strong>
                  <p>
                    No unnecessary complexity. Just the information needed to
                    understand the result.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="utility-section utility-section--about">
        <div className="utility-container">
          <div className="utility-about">
            <span className="utility-eyebrow">ABOUT UTILITY FINANCE</span>

            <h2>Financial information without the noise.</h2>

            <p>
              Utility Finance brings calculators and financial explanations
              together in one simple place — helping you understand the numbers
              before making important decisions.
            </p>

            <div className="utility-about__points">
              <div>
                <strong>Simple</strong>
                <span>Clear inputs and straightforward results.</span>
              </div>

              <div>
                <strong>Transparent</strong>
                <span>Clear assumptions and understandable calculations.</span>
              </div>

              <div>
                <strong>Useful</strong>
                <span>Tools designed around real financial decisions.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
