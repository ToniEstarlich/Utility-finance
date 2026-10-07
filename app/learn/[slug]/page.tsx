import Link from "next/link";
import "./learn.css";

type LearnPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const topics: Record<
  string,
  {
    title: string;
    category: string;
    simple: string;
    why: string;
    example: string;
  }
> = {
  "GBP/USD": {
    title: "GBP / USD",
    category: "Currency",
    simple:
      "GBP/USD tells you how many US dollars you can get for one British pound.",
    why:
      "The exchange rate affects holidays, imported products, international businesses and the value of money moving between the UK and the US.",
    example:
      "If GBP/USD rises, one pound buys more dollars. If it falls, one pound buys fewer dollars.",
  },
  "EUR/USD": {
    title: "EUR / USD",
    category: "Currency",
    simple:
      "EUR/USD tells you how many US dollars you can get for one euro.",
    why:
      "It helps show how the euro is moving compared with the US dollar and can affect the price of goods, travel and international business.",
    example:
      "If EUR/USD rises, one euro buys more dollars.",
  },
  "USD/JPY": {
    title: "USD / JPY",
    category: "Currency",
    simple:
      "USD/JPY tells you how many Japanese yen are needed to buy one US dollar.",
    why:
      "Currency movements can affect imports, exports, travel and companies that operate internationally.",
    example:
      "If USD/JPY rises, the dollar is stronger against the yen.",
  },
  "BTC/USD": {
    title: "Bitcoin",
    category: "Crypto",
    simple:
      "Bitcoin is a digital asset that can be bought and sold without being controlled by one central bank.",
    why:
      "Bitcoin can move much more sharply than traditional currencies or many major markets, so it can have a big effect on the value of a crypto portfolio.",
    example:
      "If Bitcoin rises 10%, £1,000 invested in Bitcoin would become £1,100 before fees and taxes.",
  },
  "ETH/USD": {
    title: "Ethereum",
    category: "Crypto",
    simple:
      "Ethereum is a blockchain network and ETH is the digital asset used by that network.",
    why:
      "Ethereum is used for applications and digital assets built on its network, so its price can respond to activity and expectations around the ecosystem.",
    example:
      "If ETH rises from $2,000 to $2,200, it has increased by 10%.",
  },
  AAPL: {
    title: "Apple",
    category: "Stock",
    simple:
      "Apple is a publicly traded company. Buying a share means owning a very small part of the company.",
    why:
      "Large companies can influence major stock indexes and their results can affect investors around the world.",
    example:
      "If Apple's share price rises 5%, a share worth $200 would become $210 before fees and taxes.",
  },
  MSFT: {
    title: "Microsoft",
    category: "Stock",
    simple:
      "Microsoft is a publicly traded technology company. Its shares represent ownership in the company.",
    why:
      "Microsoft is one of the world's largest technology companies and is included in major market indexes.",
    example:
      "A change in Microsoft's share price can contribute to movements in major stock indexes.",
  },
  NVDA: {
    title: "NVIDIA",
    category: "Stock",
    simple:
      "NVIDIA makes chips and technology used in areas such as artificial intelligence and computing.",
    why:
      "Demand for AI infrastructure has made semiconductor companies particularly important to financial markets.",
    example:
      "When expectations for AI spending change, NVIDIA's share price can move significantly.",
  },
  TSLA: {
    title: "Tesla",
    category: "Stock",
    simple:
      "Tesla is a publicly traded company focused mainly on electric vehicles and energy products.",
    why:
      "Its share price reflects what investors expect about future sales, profits, competition and growth.",
    example:
      "A company can have strong sales but still see its share price fall if investors expected even stronger results.",
  },
  AMZN: {
    title: "Amazon",
    category: "Stock",
    simple:
      "Amazon is a large company involved in online retail, cloud computing and other businesses.",
    why:
      "Amazon's results can reflect changes in consumer spending and business technology demand.",
    example:
      "If consumers spend less, expectations for retail companies can change.",
  },
  SPY: {
    title: "S&P 500 ETF",
    category: "Market",
    simple:
      "SPY is an exchange-traded fund designed to track the S&P 500.",
    why:
      "It gives investors exposure to a large group of major US companies rather than just one company.",
    example:
      "Instead of buying one company, an ETF can spread exposure across many companies.",
  },
  QQQ: {
    title: "NASDAQ 100 ETF",
    category: "Market",
    simple:
      "QQQ is an ETF that tracks the NASDAQ-100, which contains many large non-financial companies listed on Nasdaq.",
    why:
      "It gives a quick view of how a major group of large technology and growth-oriented companies is performing.",
    example:
      "When major technology companies move together, QQQ can move significantly too.",
  },
};

export default async function LearnPage({
  params,
}: LearnPageProps) {
  const { slug } = await params;

  const topic = topics[slug];

  if (!topic) {
    return (
      <main className="learn-page">
        <section className="learn-page__hero">
          <span className="learn-page__eyebrow">
            UTILITY LEARN
          </span>

          <h1>We are still explaining this one.</h1>

          <p>
            This market is on our live feed, but its
            educational page is coming next.
          </p>

          <Link href="/" className="learn-page__back">
            ← Back to Utility Finance
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="learn-page">
      <section className="learn-page__hero">
        <span className="learn-page__eyebrow">
          UTILITY LEARN · {topic.category}
        </span>

        <h1>{topic.title}</h1>

        <p>{topic.simple}</p>
      </section>

      <section className="learn-page__grid">
        <article className="learn-card learn-card--green">
          <span>IN 10 SECONDS</span>
          <h2>What is it?</h2>
          <p>{topic.simple}</p>
        </article>

        <article className="learn-card learn-card--blue">
          <span>WHY DOES IT MATTER?</span>
          <h2>Why should you care?</h2>
          <p>{topic.why}</p>
        </article>

        <article className="learn-card learn-card--yellow">
          <span>A SIMPLE EXAMPLE</span>
          <h2>Make it practical</h2>
          <p>{topic.example}</p>
        </article>

        <article className="learn-card learn-card--purple">
          <span>THINK ABOUT IT</span>
          <h2>What could change?</h2>
          <p>
            Prices move because millions of people and
            businesses are constantly changing what they
            expect about the future.
          </p>
        </article>
      </section>

      <section className="learn-page__strategy">
        <span className="learn-page__eyebrow">
          USE THE INFORMATION
        </span>

        <h2>Turn information into better questions.</h2>

        <p>
          Utility Finance does not tell you what to buy or
          sell. Instead, use market information to understand
          what is happening and then explore the numbers that
          matter to your own situation.
        </p>

        <div className="learn-page__actions">
          <Link href="/tools/mortgage">
            Mortgage calculator →
          </Link>

          <Link href="/">
            Explore more tools →
          </Link>
        </div>
      </section>

      <Link href="/" className="learn-page__back">
        ← Back to Utility Finance
      </Link>
    </main>
  );
}