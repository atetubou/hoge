import * as PIXI from "pixi.js";

window.onload = function () {
  const app = new PIXI.Application({
    width: 800,
    height: 600,
  });

  document.body.prepend(app.view);

  const points = document.getElementById("points") as HTMLInputElement;

  let circles = [];
  for (let x = -3; x <= 3; ++x) {
    for (let y = -6; y <= 6; ++y) {
      circles.push({
        "x": x * 10,
        "y": y * 10,
      });
    }
  }

  points.value = JSON.stringify(circles);

  const container = new PIXI.Container();

  app.stage.addChild(container);

  const graphics = new PIXI.Graphics();

  container.addChild(graphics);

  container.x = app.screen.width / 2;
  container.y = app.screen.height / 2;

  container.pivot.x = container.width / 2;
  container.pivot.y = container.height / 2;

  const drawcircles = function () {
    const points = document.getElementById("points") as HTMLInputElement;
    const circles = JSON.parse(points.value);
    console.log("fired", circles);

    graphics.clear();
    graphics.beginFill(0xDE3249, 1);

    circles.forEach((circle: any) =>
      graphics.drawCircle(circle.x, circle.y, 3)
    );

    graphics.endFill();

    app.render();
  };

  drawcircles();
  points.onchange = drawcircles;

  const drag = {
    pos: new PIXI.Point(0, 0),
    dragged: false,
  };

  app.view.onmousedown = function (e) {
    drag.pos.x = e.x;
    drag.pos.y = e.y;
    drag.dragged = true;
  };

  app.view.onmousemove = function (e) {
    if (drag.dragged) {
      container.x += e.x - drag.pos.x;
      container.y += e.y - drag.pos.y;
      drag.pos.x = e.x;
      drag.pos.y = e.y;
    }
  };

  app.view.onmouseup = function () {
    drag.dragged = false;
  };

  // fetch(window.location.origin + "/api", {
  //   method: "POST",
  //   body: JSON.stringify({
  //     "x": 1,
  //     "y": 2,
  //   }),
  // });
};
