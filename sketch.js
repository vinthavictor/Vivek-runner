const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bg1,b2,b3,b4;
var pirateImage1,pirateImage2,pirateImage3,pirateImage4;
var statueImage;
var greekheadImage, greeklocalImage1;
var gamestate ="level1"

function preload(){
    //Loading Background Images
    bg1 = loadImage("background1.jpg"); 
    bg2 = loadImage("background2.jpg"); 
    bg3 = loadImage("background3.jpg"); 
    bg4 = loadImage("background4.jpg"); 

    //Loading Pirate Images
    pirateImage1 = loadImage("pirate.png"); 
    pirateImage2 = loadImage("pirate1.png"); 
    pirateImage3 = loadImage("pirate2.jpg"); 
    pirateImage4 = loadImage("pirate3.jpg"); 

    //Loading Statue Images
    statueImage = loadImage("statue.png"); 

    //Loading Greek Images
    greekheadImage = loadImage("greek head.png")
    greeklocalImage1 = loadImage("lgreek1.png");

} 
function setup(){
 canvas = createCanvas(600, 400);
 engine = Engine.create();
 world = engine.world;
 
}

function draw(){
    if(gamestate = "level1"){
        background(bg1);
        //level1();
    }
    else if(gamestate = "level2"){
        //background(bg2);
        //level2();
    }
    else if(gamestate = "level3"){
       // background(bg3);
       //level3();
    }
    else if (gamestate = "level4"){
        //background(bg4);
        //level4();
    }
    else{
        background("black")
    }
   

    Engine.update(engine); 
};  
function level1(){

}
function level2(){
    
}
function level3(){
    
}
function level4(){
    
}