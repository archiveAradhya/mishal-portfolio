import { useEffect, useState } from "react";

export default function Loader() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHide(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader ${hide ? "loader-hide" : ""}`}>
      <div>
        <h1>MISHAL</h1>
        <p>CREATIVE AI PORTFOLIO</p>
      </div>
    </div>
  );
}