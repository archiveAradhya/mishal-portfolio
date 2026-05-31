import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursor = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (!cursor.current) return;

      cursor.current.style.left = `${e.clientX}px`;
      cursor.current.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return <div ref={cursor} className="cursor" />;
}