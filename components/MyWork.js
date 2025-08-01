export default function MyWork() {
  return (
    <section id="projects-page" className="content-section">
      <h2 className="section-title">My Work</h2>
      <p className="section-paragraph">
        A selection of my best work, from machine learning models to full-stack web applications.
      </p>

      <div className="projects-grid">
        {/* --- Card 1: NMT (Updated Link) --- */}
        <a href="https://github.com/OmShah74/NMT_Spanish" target="_blank" rel="noopener noreferrer" className="project-card-link">
          <div className="project-card">
            <h3 className="project-title">Neural Machine Translation</h3>
            <p className="project-description">A Spanish-to-English NMT system using a Transformer-inspired Seq2Seq model, custom bidirectional GRUs, and attention mechanisms.</p>
            <div className="project-tags"><span>PyTorch</span><span>Seq2Seq</span><span>NLP</span></div>
          </div>
        </a>

        {/* --- Card 2: Face Detection (Updated Link) --- */}
        <a href="https://github.com/OmShah74/Face_Detection" target="_blank" rel="noopener noreferrer" className="project-card-link">
          <div className="project-card">
            <h3 className="project-title">Face Detection System</h3>
            <p className="project-description">A deep learning system implementing CNN architecture, custom data generators, and training loops on the WIDER FACE dataset.</p>
            <div className="project-tags"><span>Deep Learning</span><span>CNN</span><span>Computer Vision</span></div>
          </div>
        </a>

        {/* --- Card 3: GameVision (Updated Link) --- */}
        <a href="https://github.com/OmShah74/GameVision" target="_blank" rel="noopener noreferrer" className="project-card-link">
          <div className="project-card">
            <h3 className="project-title">Football Video Analysis</h3>
            <p className="project-description">A real-time tracking system to detect player stats using Computer Vision and ML, integrated with a Django web interface.</p>
            <div className="project-tags"><span>Computer Vision</span><span>Django</span><span>Machine Learning</span></div>
          </div>
        </a>

        {/* --- Card 4: E-Commerce (Placeholder Link) --- */}
        <a href="https://github.com/OmShah74" target="_blank" rel="noopener noreferrer" className="project-card-link">
          <div className="project-card">
            <h3 className="project-title">Modern E-Commerce Website</h3>
            <p className="project-description">A responsive e-commerce app using React with Sanity CMS for dynamic content and Stripe for secure payments. Deployed on Vercel.</p>
            <div className="project-tags"><span>React</span><span>Sanity CMS</span><span>Stripe</span><span>Vercel</span></div>
          </div>
        </a>

        {/* --- Card 5: Chat App (Updated Link) --- */}
        <a href="https://github.com/OmShah74/ChatApplication_using_react" target="_blank" rel="noopener noreferrer" className="project-card-link">
          <div className="project-card">
            <h3 className="project-title">Dynamic MERN Chat Room</h3>
            <p className="project-description">A full-stack chat application with JWT authentication and a backend deployed as a dynamic site on Render.</p>
            <div className="project-tags"><span>MERN Stack</span><span>JWT</span><span>Socket.IO</span><span>Render</span></div>
          </div>
        </a>

        {/* --- Card 6: Tumour Classification (Placeholder Link) --- */}
        <a href="https://github.com/OmShah74" target="_blank" rel="noopener noreferrer" className="project-card-link">
          <div className="project-card">
            <h3 className="project-title">Tumour Classification System</h3>
            <p className="project-description">A Machine Learning system to detect and classify tumours using VGG16, custom CNN models, and a Flask interface.</p>
            <div className="project-tags"><span>Flask</span><span>CNN</span><span>VGG16</span><span>Scikit-learn</span></div>
          </div>
        </a>
      </div>
    </section>
  );
}