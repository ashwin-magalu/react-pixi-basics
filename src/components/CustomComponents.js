import { PixiComponent, Stage } from "@inlet/react-pixi";
import { Graphics } from "pixi.js";
import React from "react";

const Rectangle = PixiComponent("Rectangle", {
  create: (props) => new Graphics(),
  applyProps: (instance, _, props) => {
    const { x, y, width, height, fill } = props;
    instance.clear();
    instance.beginFill(fill);
    instance.drawRect(x, y, width, height);
    instance.endFill();
  },
});

const CustomComponents = () => {
  return (
    <Stage>
      <Rectangle x={100} y={100} width={500} height={300} fill={0xff0000} />
    </Stage>
  );
};

export default CustomComponents;
