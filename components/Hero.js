import Link from 'next/link';

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Hi, I'm Om Shah</h1>
          <p className="hero-subtitle">
            A creative developer and computer science student focused on building innovative and user-centric applications.
          </p>
          <div className="hero-cta">
            <Link href="/projects" className="btn btn-primary">
              View My Work
            </Link>
            <a href="/assets/documents/Om_Shah_Resume.pdf" download className="btn btn-secondary">
              Download Resume
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/OmShah74" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="http://linkedin.com/in/om-shah-2277b22b9" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://leetcode.com/u/OS74/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
              <i className="fas fa-code"></i>
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <img src="/assets/images/image.png" alt="Om Shah" className="profile-photo" />
        </div>
      </div>
    </section>
  );
}