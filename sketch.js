const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

var maxDrops=100;
var drops = [];
function preload(){
    
}

function setup(){
    createCanvas(1536, 750);
    engine = Engine.create();
    world = engine.world;

    for(var i=0; i<maxDrops; i++){
        drops.push(new createDrops(random(0,400),random(0,400)))
    }

    
    
}

function draw(){
    background("black");
    Engine.update(engine);


    drawSprites();
 }

 if (this.rain.position.y > height){
     Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
 }

