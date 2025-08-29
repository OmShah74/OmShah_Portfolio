import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingStyle = {
    transform: `translate3d(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px, 0)`,
    transition: 'transform 0.3s ease-out',
  };

  return (
    <section id="hero" className={`hero-section ${isVisible ? 'hero-visible' : ''}`}>
      {/* Interactive Background Elements */}
      <div className="hero-bg-elements">
        <div className="floating-element element-1" style={floatingStyle}></div>
        <div className="floating-element element-2" style={{
          ...floatingStyle,
          transform: `translate3d(${mousePosition.x * -0.05}px, ${mousePosition.y * -0.05}px, 0)`,
        }}></div>
        <div className="floating-element element-3" style={{
          ...floatingStyle,
          transform: `translate3d(${mousePosition.x * 0.08}px, ${mousePosition.y * -0.08}px, 0)`,
        }}></div>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-greeting">
            <span className="greeting-text">Hello, I am</span>
          </div>
          <h1 className="hero-title">
            <span className="title-word">Om</span>
            <span className="title-word">Shah</span>
          </h1>
          <div className="hero-tagline">
            <span className="tagline-text">Creative Developer</span>
            <span className="tagline-separator">×</span>
            <span className="tagline-text">AI Enthusiast</span>
          </div>
          <p className="hero-subtitle">
            Crafting innovative digital experiences through cutting-edge technology, 
            machine learning, and user-centric design. Building the future, one line of code at a time.
          </p>
          <div className="hero-cta">
            <Link href="/projects" className="btn btn-primary hero-btn-primary">
              <span>Explore My Universe</span>
              <i className="fas fa-rocket"></i>
            </Link>
            <a href="/assets/documents/OmShah_Resume.pdf" download className="btn btn-secondary hero-btn-secondary">
              <span>Download Resume</span>
              <i className="fas fa-download"></i>
            </a>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/OmShah74" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-link github">
              <i className="fab fa-github"></i>
              <span className="social-tooltip">GitHub</span>
            </a>
            <a href="http://linkedin.com/in/om-shah-2277b22b9" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link linkedin">
              <i className="fab fa-linkedin"></i>
              <span className="social-tooltip">LinkedIn</span>
            </a>
            <a href="https://leetcode.com/u/OS74/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode" className="social-link leetcode">
              <i className="fas fa-code"></i>
              <span className="social-tooltip">LeetCode</span>
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="photo-container">
            <div className="photo-glow"></div>
            <Image
              src="/assets/images/image.png"
              alt="Om Shah"
              width={300}
              height={300}
              className="profile-photo"
              priority
            />
            <div className="photo-overlay"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span className="scroll-text">Scroll to explore</span>
      </div>
    </section>
  );
}