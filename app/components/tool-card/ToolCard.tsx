import Link from "next/link";

type ToolCardProps = {
  title: string;
  description: string;
  href: string;
  status?: "available" | "coming-soon";
};

export default function ToolCard({
  title,
  description,
  href,
  status = "available",
}: ToolCardProps) {
  const available = status === "available";

  return (
    <article className="utility-tool-card">
      <div className="utility-tool-card__top">
        <span
          className={`utility-tool-card__status ${
            available ? "is-available" : "is-coming"
          }`}
        >
          <span />
          {available ? "Available" : "Coming soon"}
        </span>
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      {available ? (
        <Link href={href} className="utility-tool-card__link">
          Open tool <span>?</span>
        </Link>
      ) : (
        <span className="utility-tool-card__disabled">
          Coming soon
        </span>
      )}
    </article>
  );
}
