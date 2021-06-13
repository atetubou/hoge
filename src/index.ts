import * as PIXI from 'pixi.js';

const app = new PIXI.Application({
    width: 800,
    height : 600,
});

document.body.appendChild(app.view);

const container = new PIXI.Container();

app.stage.addChild(container);

const graphics = new PIXI.Graphics();

container.addChild(graphics);


container.x = app.screen.width / 2;
container.y = app.screen.height / 2;


container.pivot.x = container.width / 2;
container.pivot.y =  container.height / 2;


for (let x = -10; x <= 10; ++x){
    for (let y = -20; y <= 20; ++y){
        graphics.beginFill(0xDE3249, 1);
        graphics.drawCircle(x * 10, y * 10, 3);
        graphics.endFill();
    }
}
