export default function Certifications() {
  return (
    <section id="certifications" className="content-section">
      <h2 className="section-title">Certifications</h2>

      {/* --- CHANGE: Restructured the certification cards --- */}
      <div className="cert-grid">

        {/* Card 1: Deep Learning */}
        <div className="cert-card">
          <div className="cert-icon"><i className="fas fa-brain"></i></div>
          <div>
            <h4>Deep Learning Specialization</h4>
            <p>Deeplearning.ai</p>
          </div>
        </div>

        {/* Card 2: Google Data Analytics */}
        <div className="cert-card">
          <div className="cert-icon"><i className="fab fa-coursera"></i></div>
          <div>
            <h4>Google Data Analytics Professional Certificate</h4>
            <p>Coursera</p>
          </div>
        </div>
        
        {/* Card 3: Quantum Machine Learning (Unchanged) */}
        <div className="cert-card">
          <div className="cert-icon"><i className="fas fa-atom"></i></div>
          <div>
            <h4>Quantum Machine Learning</h4>
            <p>NPTEL - IIT Madras</p>
          </div>
        </div>

      </div>
    </section>
  );
}