import Link from "next/link";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="utility-footer">
      <div className="utility-footer__inner">
        <div className="utility-footer__intro">
          <div className="utility-footer__brand">
            <span>Utility</span>
            <small>Finance</small>
          </div>

          <p>
            Simple financial tools to help you understand your money.
          </p>
        </div>

        <div className="utility-footer__columns">
          <div>
            <strong>Tools</strong>
            <Link href="/mortgage">Mortgage</Link>
            <Link href="/life-insurance">Life insurance</Link>
            <Link href="/credit-card">Credit cards</Link>
          </div>

          <div>
            <strong>Utility</strong>
            <Link href="#about">About</Link>
            <Link href="/methodology">Methodology</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>

      <div className="utility-footer__bottom">
        <span>Copyright 2026 Utility Finance</span>
        <span>Simple by design.</span>
      </div>
    </footer>
  );
}
