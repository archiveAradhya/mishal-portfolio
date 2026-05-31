export default function About() {
  return (
    <section id="about" className="about-section">
      <p className="section-label">ABOUT ME</p>

      <h2 className="section-title">
        Designing AI-powered digital experiences.
      </h2>

      <p className="about-text">
        I am Mishal Series, a creative developer building futuristic web
        experiences, AI tools, computer vision projects, and cinematic user
        interfaces. I focus on clean design, smooth animations, and practical
        technology that feels premium.
      </p>

      <div className="stats-grid">
        <div>
          <h3>10+</h3>
          <p>Mini Projects</p>
        </div>

        <div>
          <h3>AI</h3>
          <p>Apps & Automation</p>
        </div>

        <div>
          <h3>Web</h3>
          <p>React Experiences</p>
        </div>
      </div>

      <div className="skills-box">
        <span>React</span>
        <span>JavaScript</span>
        <span>Python</span>
        <span>AI Tools</span>
        <span>Computer Vision</span>
        <span>GSAP</span>
      </div>
    </section>
  );
}