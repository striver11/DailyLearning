import React, { useState, useEffect, useRef } from "react";

// Optional: Custom ease-in-out function
function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

const InterpolatedValue = ({ from, to, duration = 1000, easing = easeInOut }) => {
  const [value, setValue] = useState(from);
  const startTimeRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    function step(timestamp) {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      let progress = Math.min(elapsed / duration, 1);
      if (easing) progress = easing(progress);
      const currentValue = from + (to - from) * progress;
      setValue(currentValue);
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    }
    startTimeRef.current = null;
    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [from, to, duration, easing]);

  return (
    <div>
      Value: {value.toFixed(2)}
    </div>
  );
};

export default InterpolatedValue;
