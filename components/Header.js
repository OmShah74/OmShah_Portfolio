import Link from 'next/link';

export default function Header() {
  return (
    <header id="main-header">
      <nav>
        <div className="logo">
          <Link href="/">OM SHAH</Link>
        </div>
        <ul>
          <li>
            <Link href="/#about">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/education">Education</Link>
          </li>
          <li>
            <Link href="/#contact" className="nav-contact-btn">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}