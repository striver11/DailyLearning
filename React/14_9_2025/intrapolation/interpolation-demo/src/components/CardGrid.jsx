import React, { useState } from "react";
import AnimatedCard from "./AnimatedCard.jsx";

const gridCols = 4, gridRows = 2;
const cellW = 120, cellH = 160, margin = 26;
const baseScale = 1, activeScale = 1.13;
const totalCards = gridCols * gridRows;

function indexToPosition(idx) {
  const row = Math.floor(idx / gridCols);
  const col = idx % gridCols;
  return {
    x: margin + col * cellW,
    y: margin + row * cellH,
  };
}

export default function CardGrid() {
  const [cards, setCards] = useState([...Array(totalCards).keys()]);
  const [active, setActive] = useState(null);

  function handleCardClick(idx) {
    setActive(idx);
    setCards(prev => {
      const arr = [...prev];
      const selected = arr.splice(idx, 1)[0];
      arr.unshift(selected);
      return arr;
    });
  }

  return (
    <div style={{
      position: "relative",
      width: gridCols * cellW + margin * 2,
      height: gridRows * cellH + margin * 2,
      background: "#f0efe4",
      borderRadius: 24,
      margin: "40px auto",
    }}>
      {cards.map((cardId, i) => {
        const { x, y } = indexToPosition(i);
        const scale = cardId === cards[0] && active !== null ? activeScale : baseScale;
        return (
          <AnimatedCard
            key={cardId}
            x={x}
            y={y}
            scale={scale}
            duration={600}
          >
            <div
              style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}
              onClick={() => handleCardClick(i)}
            >
              {cardId + 1}
            </div>
          </AnimatedCard>
        );
      })}
    </div>
  );
}
