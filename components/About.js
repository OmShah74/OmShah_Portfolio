import { useState, useEffect, useRef } from 'react';

export default function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (aboutRef.current) {
        const rect = aboutRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  const highlights = [
    { text: "Computer Engineering", icon: "fas fa-microchip" },
    { text: "Machine Learning", icon: "fas fa-brain" },
    { text: "Full-Stack Development", icon: "fas fa-layer-group" },
    { text: "Algorithm Design", icon: "fas fa-project-diagram" },
    { text: "System Architecture", icon: "fas fa-sitemap" },
    { text: "Data-Driven Solutions", icon: "fas fa-chart-line" }
  ];

  return (
    <section 
      id="about" 
      className={`content-section about-section ${isVisible ? 'about-visible' : ''}`}
      ref={aboutRef}
    >
      {/* Dynamic Background Based on Mouse Position */}
      <div 
        className="about-bg-gradient"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(0, 245, 255, 0.03) 0%, 
            rgba(139, 92, 246, 0.02) 40%, 
            transparent 80%)`
        }}
      ></div>

      <div className="about-container">
        <div className="about-content">
          <div className="about-header">
            <h2 className="section-title" data-text="About Me">About Me</h2>
            <div className="title-decoration">
              <div className="decoration-line"></div>
              <div className="decoration-dot"></div>
            </div>
          </div>

          <div className="about-text-container">
            <p className="section-paragraph about-description">
              I am a <span className="highlight">Computer Engineering student</span> at 
              <span className="highlight"> MPSTME, NMIMS University</span>, with a solid technical foundation in 
              <span className="highlight">software development</span>, <span className="highlight">machine learning</span>, 
              and <span className="highlight">full-stack web technologies</span>. 
            </p>
            
            <p className="section-paragraph about-description">
              My academic and project-based experience spans <span className="highlight">algorithm design</span>, 
              <span className="highlight">model optimization</span>, <span className="highlight">system architecture</span>, 
              and deployment of <span className="highlight">scalable applications</span>. I am particularly interested in 
              solving complex engineering problems using <span className="highlight">data-driven approaches</span>.
            </p>

            <p className="section-paragraph about-description">
              I actively seek opportunities to apply <span className="highlight">cutting-edge tools and frameworks</span> 
              in real-world scenarios. I excel in <span className="highlight">collaborative, fast-paced environments</span> 
              and am committed to continuous learning in emerging domains like <span className="highlight">AI and systems design</span>.
            </p>
          </div>

          <div className="about-highlights">
            <h3 className="highlights-title">What I Do</h3>
            <div className="highlights-grid">
              {highlights.map((item, index) => (
                <div key={index} className="highlight-card" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="highlight-icon">
                    <i className={item.icon}></i>
                  </div>
                  <span className="highlight-text">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-code"></i>
              </div>
              <div className="stat-info">
                <span className="stat-number">10+</span>
                <span className="stat-label">Projects Built</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-award"></i>
              </div>
              <div className="stat-info">
                <span className="stat-number">3.96</span>
                <span className="stat-label">GPA Achievement</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-certificate"></i>
              </div>
              <div className="stat-info">
                <span className="stat-number">3+</span>
                <span className="stat-label">Certifications</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}