import React, { useEffect, useState } from "react";
import Player from "./player";

const GameOne = () => {
  const [type, setType] = useState("m1");
  return (
    <div className="zone-container">
      <div style={{ position: "absolute", top: 10, left: "40%" }}>
        <input
          type="radio"
          id="male1"
          onChange={() => setType("m1")}
          checked={type === "m1"}
        />
        <label htmlFor="male1">Male 1</label>
        <input
          type="radio"
          id="male2"
          onChange={() => setType("m2")}
          checked={type === "m2"}
        />
        <label htmlFor="male2">Male 2</label>
        <input
          type="radio"
          id="female1"
          onChange={() => setType("f1")}
          checked={type === "f1"}
        />
        <label htmlFor="female1">Female 1</label>
        <input
          type="radio"
          id="female2"
          onChange={() => setType("f2")}
          checked={type === "f2"}
        />
        <label htmlFor="female2">Female 2</label>
        <input
          type="radio"
          id="evil"
          onChange={() => setType("e1")}
          checked={type === "e1"}
        />
        <label htmlFor="evil">Ghost</label>
      </div>
      <div style={{ position: "absolute", top: 50 }}>
        <Player skin={type} />
      </div>
    </div>
  );
};

export default GameOne;
