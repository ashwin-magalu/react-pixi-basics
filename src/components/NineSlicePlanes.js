import { NineSlicePlane, Stage, AppConsumer } from "@inlet/react-pixi";
import React from "react";

const img =
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/speech_bubble.png";

const NineSlicePlanes = () => {
  return (
    <Stage width={500} height={300} options={{ backgroundColor: 0xeef1f5 }}>
      <NineSlicePlane
        anchor={[200, 100]}
        pivot={[200, 100]}
        leftWidth={50}
        topHeight={30}
        rightWidth={60}
        bottomHeight={180}
        width={400}
        height={300}
        x={250}
        y={120}
        image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/speech_bubble.png"
      />
    </Stage>
  );
};

export default NineSlicePlanes;
