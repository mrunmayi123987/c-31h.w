const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var drop;

function preload(){
    
}

function setup(){
var  canvas = createCanvas(1200,400)   

    engine = Engine.create();
    world = engine.world;

    drop = new Drop(600,200);

    
}

function draw(){
    
    background("white");
    Engine.update(engine);
    drop.display();
}   

