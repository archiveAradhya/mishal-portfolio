export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <p className="section-label">SELECTED WORK</p>

      <h2 className="section-title">Projects that feel alive.</h2>

      <div className="project-grid">
        <div className="project-card">
          <span>01</span>
          <h3>AI Assistant</h3>
          <p>
            A smart assistant concept for automation, productivity, and
            futuristic human-computer interaction.
          </p>
          <small>React • AI • UI Design</small>
        </div>

        <div className="project-card">
          <span>02</span>
          <h3>Vision System</h3>
          <p>
            Real-time computer vision project focused on gesture recognition and
            interactive camera-based controls.
          </p>
          <small>Python • OpenCV • MediaPipe</small>
        </div>

        <div className="project-card">
          <span>03</span>
          <h3>Portal FX</h3>
          <p>
            Doctor Strange inspired visual effect using hand tracking, animation,
            and creative coding.
          </p>
          <small>Python • CV • Effects</small>
        </div>
      </div>
    </section>
  );
}