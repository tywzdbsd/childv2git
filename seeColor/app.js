/**
 * Created by tyw on 15/6/18.
 */
//var stage = new createjs.Stage("gameView"); //创建舞台
//var gameView = new createjs.Container();    //建容器
//stage.addChild(gameView);   //将容器添加到舞台
//
//var s = new createjs.Shape();   //绘制图形
//s.graphics.beginFill("#ff0000");    //填充颜色
//s.graphics.drawRect(0, 0, 100, 100);   //绘制方块
//s.graphics.endFill();   //结束绘制
//gameView.addChild(s);   //添加到gameView中
//
//createjs.Ticker.setFPS(30);
//createjs.Ticker.addEventListener("Ticker", stage);

//Create a stage by getting a reference to the canvas
stage = new createjs.Stage("gamecanvas");
//Create a Shape DisplayObject.
circle = new createjs.Shape();
circle.graphics.beginFill("red").drawCircle(0, 0, 40);
//Set position of Shape instance.
circle.x = circle.y = 50;
//Add Shape instance to stage display list.
stage.addChild(circle);
//Update stage will render next frame
stage.update();