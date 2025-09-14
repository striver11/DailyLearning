import React, { useState } from "react";
import InterpolatedValue from "./components/InterpolatedValue.jsx";
import AnimatedCard from "./components/AnimatedCard.jsx";
import CardGrid from "./components/CardGrid.jsx";
import AnimatedCard2 from "./components/AnimatedCard2.jsx";

import CardList from './components/CardList';

const cardsData = [
  {
    title: 'Card 1',
    description: 'This is card number 1',
    imageUrl: 'https://via.placeholder.com/150/FF5733/FFFFFF?text=1',
  },
  {
    title: 'Card 2',
    description: 'This is card number 2',
    imageUrl: 'https://via.placeholder.com/150/33C1FF/FFFFFF?text=2',
  },
  {
    title: 'Card 3',
    description: 'This is card number 3',
    imageUrl: 'https://via.placeholder.com/150/85FF33/FFFFFF?text=3',
  },
];  

const App = () => {
  const [target, setTarget] = useState(0);
const [toRight, setToRight] = useState(true);
  return (
    <>
    <div style={{ padding: 40 }}>
      <h2>React Interpolation Animation</h2>
      <InterpolatedValue from={0} to={target} duration={2000} />
      <button onClick={() => setTarget(Math.random() * 100)}>
        Animate To New Value
      </button>
    </div>

     <div style={{ position: "relative", height: 400, width: 600, background: "#f9f9f9", margin: "40px auto", borderRadius: "24px", overflow: "hidden" }}>
      <AnimatedCard
        startX={toRight ? 40 : 440}
        startY={100}
        endX={toRight ? 440 : 40}
        endY={100}
        duration={1200}
      />
      <button
        onClick={() => setToRight(!toRight)}
        style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", padding: "14px 32px", fontSize: 18, borderRadius: 9 }}
      >
        Move Card
      </button>
      <div style={{ position: "absolute", bottom: 20, left: 30 }}>Click the card to animate!</div>
    </div>

   <div>
      <h2 style={{ textAlign: "center", marginTop: 24 }}>
        Interpolated Animated Card Grid
      </h2>
      <CardGrid />
      <div style={{ textAlign: "center", marginTop: 12, color: "#4d4847" }}>
        Click any card — it animates to front and grows!
      </div>
    </div>
     <div className="app">
      <h1>Interpolated Cards Example</h1>
      <CardList cards={cardsData} />
    </div>
    </>
  );
};

export default App;
