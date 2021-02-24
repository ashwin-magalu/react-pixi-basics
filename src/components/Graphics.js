import { Stage, Graphics } from "@inlet/react-pixi";
import React, { useCallback } from "react";

const Graphic = () => {
  /* draw callback gets called everytime the prop changes */
  const draw = useCallback((g) => {
    g.clear();
    /* line */
    g.beginFill(0xff3300); // inner color of the design
    g.lineStyle(4, 0xffd900, 1); // width, color and opacity of line
    g.moveTo(50, 50);
    g.lineTo(250, 50);
    g.lineTo(100, 100);
    g.lineTo(50, 50);
    g.endFill();
    /* rectangle */
    g.lineStyle(2, 0x0000ff, 1);
    g.beginFill(0xff700b, 1);
    g.drawRect(50, 150, 120, 120); // x1,y1, x2,y2
    /* rounded rectangle */
    g.lineStyle(2, 0xff00ff, 1);
    g.beginFill(0xff00bb, 0.25);
    g.drawRoundedRect(150, 100, 300, 100, 15); // x1,y1, x2,y2, radius
    g.endFill();
    /* circle */
    g.lineStyle(0);
    g.beginFill(0xffff0b, 0.5); // inner color and opacity of the design
    g.drawCircle(470, 90, 60); // x, y, radius
    g.endFill();
  }, []);

  return (
    <Stage width={600} height={300} options={{ backgroundColor: 0xffffff }}>
      <Graphics draw={draw} />
    </Stage>
  );
};

export default Graphic;
