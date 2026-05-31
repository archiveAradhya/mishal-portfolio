export default function ParticlesBackground() {
  return (
    <>
      <div className="mesh-bg" />
      <div className="grain" />

      <div className="particles">
        {[...Array(160)].map((_, i) => (
          <span
            key={i}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDuration: `${10 + Math.random() * 20}s`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}