import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TextReveal() {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0.15, y: 80 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "50px",
        background: "#000",
      }}
    >
      <h2
        ref={textRef}
        style={{
          fontSize: "clamp(3rem, 10vw, 9rem)",
          lineHeight: "0.95",
          textAlign: "center",
          maxWidth: "1200px",
          letterSpacing: "-5px",
        }}
      >
        Building digital experiences that feel alive.
      </h2>
    </section>
  );
}
