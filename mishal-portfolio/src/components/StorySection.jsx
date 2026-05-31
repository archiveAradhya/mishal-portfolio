import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StorySection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const panels = gsap.utils.toArray(".story-panel");

    panels.forEach((panel) => {
      gsap.from(panel, {
        opacity: 0,
        y: 100,
        duration: 1.5,

        scrollTrigger: {
          trigger: panel,
          start: "top 70%",
          end: "top 30%",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#000",
      }}
    >
      {/* Panel 1 */}
      <div
        className="story-panel"
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          position: "sticky",
          top: 0,
          background:
            "radial-gradient(circle at center, #111 0%, #000 70%)",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(4rem,12vw,10rem)",
            margin: 0,
            letterSpacing: "-6px",
          }}
        >
          CREATE
        </h1>

        <p style={{ color: "#888" }}>
          Interactive digital experiences
        </p>
      </div>

      {/* Panel 2 */}
      <div
        className="story-panel"
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          position: "sticky",
          top: 0,
          background:
            "radial-gradient(circle at center, #0a0a0a 0%, #000 70%)",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(4rem,12vw,10rem)",
            margin: 0,
            letterSpacing: "-6px",
          }}
        >
          DESIGN
        </h1>

        <p style={{ color: "#888" }}>
          Premium cinematic interfaces
        </p>
      </div>

      {/* Panel 3 */}
      <div
        className="story-panel"
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          position: "sticky",
          top: 0,
          background:
            "radial-gradient(circle at center, #111 0%, #000 70%)",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(4rem,12vw,10rem)",
            margin: 0,
            letterSpacing: "-6px",
          }}
        >
          INNOVATE
        </h1>

        <p style={{ color: "#888" }}>
          AI-powered futuristic systems
        </p>
      </div>
    </section>
  );
}