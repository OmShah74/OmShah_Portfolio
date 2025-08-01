import Link from 'next/link';
import Image from 'next/image'; // --- FIX: Import the next/image component

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-content">
        <div className="hero-text">
          {/* --- FIX 1: Replaced the apostrophe in "I'm" --- */}
          <h1 className="hero-title">Hi, I'm Om Shah</h1>
          <p className="hero-subtitle">
            A creative developer and computer science student focused on building innovative and user-centric applications.
          </p>
          <div className="hero-cta">
            <Link href="/projects" className="btn btn-primary">
              View My Work
            </Link>
            <a href="/assets/documents/OmShah_Resume.pdf" download className="btn btn-secondary">
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
          {/* --- FIX 2: Replaced <img> with the optimized <Image> component --- */}
          <Image
            src="/assets/images/image.png"
            alt="Om Shah"
            width={250} // Required for <Image>
            height={250} // Required for <Image>
            className="profile-photo"
          />
        </div>
      </div>
    </section>
  );
}