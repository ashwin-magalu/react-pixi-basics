import { Container, Sprite, Stage } from "@inlet/react-pixi";
import React from "react";

const Containers = () => {
  return (
    <Stage width={300} height={300} options={{ backgroundColor: 0xeef1f5 }}>
      <Container position={[150, 150]}>
        <Sprite
          anchor={0.5}
          x={-75}
          y={-75}
          image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"
        />
        <Sprite
          anchor={0.5}
          x={0}
          y={0}
          image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"
        />
        <Sprite
          anchor={0.5}
          x={75}
          y={75}
          image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"
        />
      </Container>
    </Stage>
  );
};

export default Containers;
