export default function BackgroundGlow() {
  return (
    <>
      <div
        style={{
          position: "absolute",
          width: "800px",
          height: "800px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.05)",
          filter: "blur(150px)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      />
    </>
  );
}