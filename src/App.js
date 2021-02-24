import React from "react";
import "./App.css";
import AdvancedGraphics from "./components/AdvancedGraphics";
import Containers from "./components/Containers";
import CustomComponents from "./components/CustomComponents";
import Dragging from "./components/Dragging";
import DynamicGraphics from "./components/DynamicGraphics";
import Graphic from "./components/Graphics";
import Interactivity from "./components/Interactivity";
import NineSlicePlanes from "./components/NineSlicePlanes";
import OnClick from "./components/OnClick";
import PIXIBasics from "./components/PIXIBasics";
import SimpleGraphics from "./components/SimpleGraphics";
import Texts from "./components/Texts";
import GameOne from "./components/GameOne";

function App() {
  return (
    <div className="App">
      {/* <Graphic /> */}
      {/* <Containers /> */} {/*  not working */}
      {/* <NineSlicePlanes /> */}
      {/* <CustomComponents /> */}
      {/* <Texts /> */}
      {/* <SimpleGraphics /> */}
      {/* <AdvancedGraphics /> */}
      {/* <DynamicGraphics /> */}
      {/* <OnClick /> */}
      {/* <Interactivity /> */}
      {/* <Dragging /> */}
      {/* <PIXIBasics /> */}
      <GameOne />
    </div>
  );
}

export default App;
