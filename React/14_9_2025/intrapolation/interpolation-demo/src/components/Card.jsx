import { useState, useRef, useEffect } from 'react';
import './styles.css';

// Linear interpolation function
const interpolate = (start, end, progress) => {
  return start + (end - start) * progress;
};

const Card = ({ title, description, imageUrl }) => {
  const [scale, setScale] = useState(1);
  const animationRef = useRef();
  const startTimeRef = useRef();
  const startScaleRef = useRef(1);
  const targetScaleRef = useRef(1);

  const animate = (timestamp) => {
    if (!startTimeRef.current) startTimeRef.current = timestamp;
    const elapsed = timestamp - startTimeRef.current;
    const duration = 300; // animation duration in ms
    const progress = Math.min(elapsed / duration, 1);
    const newScale = interpolate(startScaleRef.current, targetScaleRef.current, progress);
    setScale(newScale);

    if (progress < 1) {
      animationRef.current = requestAnimationFrame(animate);
    } else {
      startTimeRef.current = null;
    }
  };

  const startAnimation = (toScale) => {
    cancelAnimationFrame(animationRef.current);
    startScaleRef.current = scale;
    targetScaleRef.current = toScale;
    startTimeRef.current = null;
    animationRef.current = requestAnimationFrame(animate);
  };

  const handleMouseEnter = () => {
    startAnimation(1.05);
  };

  const handleMouseLeave = () => {
    startAnimation(1);
  };

  useEffect(() => {
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  return (
    <div
      className="card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ transform: `scale(${scale})` }}
    >
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
