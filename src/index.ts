import * as PIXI from "pixi.js";

const app = new PIXI.Application({
  width: 800,
  height: 600,
});

document.body.appendChild(app.view);

const container = new PIXI.Container();

app.stage.addChild(container);

const graphics = new PIXI.Graphics();

container.addChild(graphics);

container.x = app.screen.width / 2;
container.y = app.screen.height / 2;

container.pivot.x = container.width / 2;
container.pivot.y = container.height / 2;

graphics.beginFill(0xDE3249, 1);

for (let x = -10; x <= 10; ++x) {
  for (let y = -20; y <= 20; ++y) {
    graphics.drawCircle(x * 10, y * 10, 3);
  }
}

graphics.endFill();

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

fetch("", {
  method: "POST",
  body: JSON.stringify({
    "x": 1,
    "y": 2,
  }),
});
