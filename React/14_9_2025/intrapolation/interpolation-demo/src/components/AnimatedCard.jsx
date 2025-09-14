import React, { useState, useEffect, useRef } from "react";

// Linear interpolation helper
function lerp(a, b, t) {
  return a + (b - a) * t;
}

// Optional: Easing example (ease-in-out)
function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

export default function AnimatedCard({ startX, startY, endX, endY, duration = 1000 }) {
  const [position, setPosition] = useState({ x: startX, y: startY });
  const [animating, setAnimating] = useState(false);
  const startTimeRef = useRef(null);

  // Trigger animation on click
  const handleClick = () => {
    setAnimating(true);
    startTimeRef.current = null;
  };

  useEffect(() => {
    if (!animating) return;
    let animationFrameId;

    function step(timestamp) {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      let progress = Math.min(elapsed / duration, 1);
      progress = easeInOut(progress);
      const newX = lerp(startX, endX, progress);
      const newY = lerp(startY, endY, progress);
      setPosition({ x: newX, y: newY });

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setAnimating(false);
      }
    }

    animationFrameId = requestAnimationFrame(step);
    return () => animationFrameId && cancelAnimationFrame(animationFrameId);
  }, [animating, startX, startY, endX, endY, duration]);

  return (
    <div
      onClick={handleClick}
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        width: "120px",
        height: "180px",
        backgroundColor: "#eee",
        border: "2px solid #999",
        borderRadius: "12px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.18)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        userSelect: "none",
        cursor: "pointer",
        transition: "box-shadow .2s",
      }}
    >
      <strong>Card</strong>
    </div>
  );
}
