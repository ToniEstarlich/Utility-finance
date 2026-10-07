import Link from "next/link";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="utility-navbar">
      <div className="utility-navbar__inner">
        <Link href="/" className="utility-navbar__brand">
          <span className="utility-navbar__brand-main">Utility</span>
          <span className="utility-navbar__brand-sub">Finance</span>
        </Link>

        <nav className="utility-navbar__nav">
          <Link href="/">Home</Link>
          <Link href="#tools">Tools</Link>
          <Link href="#about">About</Link>
        </nav>
      </div>
    </header>
  );
}
