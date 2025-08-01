export default function Education() {
  return (
    <section id="education-page" className="content-section">
      <h2 className="section-title">My Journey</h2>
      <p className="section-paragraph">
        My academic background and commitment to continuous learning through certifications.
      </p>

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-icon"><i className="fas fa-graduation-cap"></i></div>
          <div className="timeline-content">
            <span className="timeline-date">2022 - 2026</span>
            <h3>MPSTME, NMIMS University</h3>
            <p>B.Tech in Computer Engineering</p>
            <p><strong>CGPA:</strong> 3.96 / 4.0</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon"><i className="fas fa-school"></i></div>
          <div className="timeline-content">
            <span className="timeline-date">2020 - 2022</span>
            <h3>R.N. Podar School</h3>
            <p>HSC (CBSE Board)</p>
            <p><strong>Score:</strong> 97%</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon"><i className="fas fa-school"></i></div>
          <div className="timeline-content">
            <span className="timeline-date">2020</span>
            <h3>Sri Aurobindo Memorial School</h3>
            <p>SSC (CBSE Board)</p>
            <p><strong>Score:</strong> 90.2%</p>
          </div>
        </div>
      </div>
    </section>
  );
}