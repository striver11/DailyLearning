import React, { useEffect, useRef, useState } from "react";

function lerp(a, b, t) { return a + (b - a) * t; }
function easeInOut(t) { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; }

export default function AnimatedCard2({ x, y, scale, duration, children }) {
  const [display, setDisplay] = useState({ x, y, scale });
  const prevProps = useRef({ x, y, scale });
  const startTimeRef = useRef(null);

  useEffect(() => {
    if (
      display.x === x &&
      display.y === y &&
      display.scale === scale
    ) return;

    const start = { ...display };
    const end = { x, y, scale };

    function step(ts) {
      if (!startTimeRef.current) startTimeRef.current = ts;
      const elapsed = ts - startTimeRef.current;
      let progress = Math.min(elapsed / duration, 1);
      progress = easeInOut(progress);

      setDisplay({
        x: lerp(start.x, end.x, progress),
        y: lerp(start.y, end.y, progress),
        scale: lerp(start.scale, end.scale, progress),
      });

      if (progress < 1) requestAnimationFrame(step);
      else setDisplay(end);
    }

    startTimeRef.current = null;
    requestAnimationFrame(step);

    return () => startTimeRef.current = null;
  }, [x, y, scale, duration]);

  return (
    <div
      style={{
        position: "absolute",
        left: display.x,
        top: display.y,
        transform: `scale(${display.scale})`,
        width: 100,
        height: 140,
        background: "#fdf7e7",
        borderRadius: 12,
        boxShadow: "0 4px 16px rgba(0,0,0,.13)",
        border: "2px solid #c2bfa3",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: 600,
        fontSize: 24,
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      {children}
    </div>
  );
}
