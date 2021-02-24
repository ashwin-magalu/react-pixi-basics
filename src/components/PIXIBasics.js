import React, { useEffect } from "react";
import * as PIXI from "pixi.js";

const PIXIBasics = () => {
  useEffect(() => {
    const canvas = document.getElementById("myCanvas");

    const app = new PIXI.Application({
      view: canvas,
      width: window.innerWidth,
      height: window.innerHeight,
    });
    /*document.body.appendChild(app.view); */

    const texture = PIXI.Texture.from("examples/assets/man.jpg");
    // const texture2 = PIXI.Texture.from("examples/assets/nature.jpg");
    const img = new PIXI.Sprite(texture);
    img.anchor.x = 0.5;
    img.anchor.y = 0.5;
    /*  img.x = app.renderer.width / 2;
        img.y = app.renderer.height / 2; 
        app.stage.addChild(img); */
    /* 4th type */
    //let delta = 0; //2nd, 4th type

    const animate = () => {
      /* 2nd type */
      /* img.x = renderer.screen.width / 2; */
      /* img.y = renderer.screen.height / 2; */
      /* 3rd type */
      /* img.x = app.renderer.screen.width / 2;
      img.y = app.renderer.screen.height / 2; */
      //img.rotation += 0.1;
      /* 2nd type */
      /* renderer.render(stage); */
      /* 4th type */
      /* delta += 0.1;
      sprite1.y = 100 + Math.sin(delta) * 10;
      sprite2.x = 240 + Math.sin(delta) * 10;
      //container.x = Math.sin(delta) * 10;
      sprite3.scale = new PIXI.Point(0.5, 0.5);
      sprite3.rotation += 0.05; */
      // sprite1.alpha = Math.sin(delta);
      // oscilates b/n -1 and 1, hence, is visible once and hides once
      //sprite1.blendMode = PIXI.BLEND_MODES.MULTIPLY; // all white values becomes transparent
      //sprite1.visible = false;
      //sprite1.interactive = true; // to make this sprite interactive
      //sprite1.buttonMode = true; // to enable button clicks on this sprite
      // sprite1.mask = sprite2; // sign to another display object
    };

    /* 2nd type */
    /* const renderer = new PIXI.Renderer({
      view: canvas,
      width: window.innerWidth,
      height: window.innerHeight,
      resolution: window.devicePixelRatio,
      autoDensity: true,
    }); 
    
    const resize = () => {
      let _w = window.innerWidth;
      let _h = window.innerHeight;
      renderer.resize(_w, _h);
    }; 
     window.addEventListener("resize", resize);
      const stage = new PIXI.Container(); 
     stage.addChild(img); 
      app.ticker.add(animate); 
       const ticker = new PIXI.Ticker(); 
        ticker.add(animate); 
         ticker.start();  */

    /* 3rd  type */
    /* let img;
    const handleLoadComplete = () => {
      let texture = loader.resources.guy.texture;
      //let texture = loader.resources["examples/assets/man.jpg"].texture;
      img = new PIXI.Sprite(texture);
      img.anchor.x = 0.5;
      img.anchor.y = 0.5;
      app.stage.addChild(img);
      app.ticker.add(animate);
      setTimeout(() => {
        //img.texture = loader.resources["new texture location"].texture;
        console.log("Changed texture");
      }, 2000);
    };
    const handleLoadAsset = (loader, resource) => {
      console.log("asset loaded:", resource.name);
    };
    const handleLoadError = () => {
      console.log("asset loading error");
    };
    const handleLoadProgress = (loader, resource) => {
      console.log(loader.progress + "% loaded");
    };
    console.log(PIXI.utils.TextureCache);
    let loader = PIXI.Loader.shared; // we can use n number of loaders
    loader.onComplete.add(handleLoadComplete);
    loader.onLoad.add(handleLoadAsset);
    loader.onError.add(handleLoadError);
    loader.onProgress.add(handleLoadProgress);
    loader.add("guy", "examples/assets/man.jpg"); // alias name and location of file
    loader.load(); */

    /* 4th type */
    /* let sprite1, sprite2, sprite3;
    let img;

    img = new PIXI.Sprite(texture);
    img.x = app.renderer.width / 2 + 100;
    img.y = app.renderer.height / 2;
    img.anchor.x = 0.5;
    img.anchor.y = 0.5;
    app.stage.addChild(img);

    let container = new PIXI.Container();
    app.stage.addChild(container);

    sprite1 = new PIXI.Sprite(texture2);
    sprite1.x = 10;
    sprite1.y = 100;
    container.addChild(sprite1);
    sprite2 = new PIXI.Sprite(texture2);
    sprite2.x = 240;
    sprite2.y = 100;
    sprite2.tint = 0xff0000;
    container.addChild(sprite2);
    sprite3 = new PIXI.Sprite(texture2);
    //sprite3.x = 470;
    //sprite3.y = 100;
    sprite3.position.set(470, 100);
    sprite3.anchor.set(0.5);
    sprite3.pivot.set(0, 100); // setting a different rotation point instead of its center
    container.addChild(sprite3);
    app.ticker.add(animate); */

    /* 5th type */
    /* let graphic = new PIXI.Graphics();
    graphic.x = app.renderer.width / 2;
    graphic.y = app.renderer.height / 2;
    app.stage.addChild(graphic);

    graphic.lineStyle(5, 0x00ff00); // width, color
    graphic.beginFill(0xff0000);
    //graphic.drawCircle(0, 0, 100); // x,y,radius
    //graphic.drawRect(0, 0, 100, 80); // x,y, width, height
    //graphic.drawStar(0, 0, 5, 100, 40); // x,y, sides, outer radius, inner radius
    //graphic.drawShape(new PIXI.Circle(0, 0, 100));
    //graphic.drawPolygon([
    //  new PIXI.Point(100, 100),
    //  new PIXI.Point(100, 200),
    //  new PIXI.Point(200, 100),
    //]);
    graphic.moveTo(0, 0); //x1, y1
    graphic.lineTo(100, 100); //x2, y2
    graphic.lineTo(100, 200);
    graphic.lineTo(0, 200);
    graphic.bezierCurveTo(-200, 200, -200, 100, -100, 0); // control point 1, control point2, x2,y2
    graphic.quadraticCurveTo(-200, -100, 0, -200); // control point 1, x2,y2
    graphic.arc(0, 0, 50, 0, 0.5);
    // center x, center y, radius, start angle in radians, end angle in radians
    //graphic.closePath();
    graphic.endFill();
    app.ticker.add(animate); */

    return () => {
      //
    };
  }, []);

  return <canvas id="myCanvas"></canvas>;
};

export default PIXIBasics;
