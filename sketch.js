/*
BIRD TRAJECTORY:

    BIRD PATH-- ANGRY BIRD IS FLYING FROM SLING TO ATTACK PIGS
    CREATE A PATH BY ADDING A IMAGE. 
    PATH WILL BE CONTINUOUS

    TO MAKE IT HAPPEN WE ARE GOING TO USE ARRAY.
    ARRAY HELPS US TO STORE MANY DATA INTO THE SINGLE VAR 

    DISADVANTAGE OF STORING DATA IN A SINGLE VARIABLE:
        WE ARE ABLE TO STORE ONLY ONE AT A TIME

    STUENT DETAILS:
    NAME, GRADE, ADDRESS, SECTION, PHONE, BLODD GROUP

    DATA STRUCTURE TO STORE MULTIPLE VAULE IS CALLED ARRAY

    SINGLE DIMENSION ARRAY
    TWO DIMENTION ARRAY- IT CAN STORE A LIST OF ARRAYS IN SIDE ARRAY


    PUSH AND POP:

    PUSH IS TO PUSH THE DATA INTO THE ARRAY

    array.push();

    POP IS TO DELETE THE VALUE/DATA FROM THE ARRAY
    
    array.pop();
*/


//Examples on the different types of data in javascript

//string
var A = "This is a string";
console.log(A);

//Nunber
var num=100;
console.log(num);

//Boolean(true/false)
var bool = true;
console.log(bool);

//obj
var obj;
console.log(obj)

//null
obj=null;
console.log(obj);

//Array Examples
names = "ujjwal";
grade = 'b';
section = 9;
address="INDIA";

var student_details = [names, grade, section,address];
console.log(student_details);

var general_data=[15,20,true];
console.log(general_data)

//TWO DIMENTISON ARRAY
var arr3 = [[1,2,33],[3,4],[8,9]];
console.log(arr3[0][2]);

console.log(arr3[2][0]);
arr3.push("hi");
console.log(arr3);

arr3.pop();
console.log(arr3);

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var gameState="onSling";

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
    getTime();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,170,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    
    slingshot.display(); 

    console.log(bird.body.position);
    
   if(gameState==="play"){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
      
   }
}

function mouseDragged(){
    if(gameState==="onSling"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
        gameState="play";
    }
    

}


function mouseReleased(){
    slingshot.fly();
    gameState="launched";
}

function keyPressed(){
    if(keyCode===32){
        slingshot.reload(bird.body);
        bird.trajectory=[];
        gameState="onSling";
    }
}
async function getTime(){
    
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata"); 
    var responseJason = await response.json();
    console.log(responseJason);
    var dayTime = responseJason.datetime;
    var hour = dayTime.slice(11,13);
    console.log(hour);
    if(hour>=06&&hour<=19){
        bg = "sprites/bg.png";
    }
    else{
        
        bg = "sprites/bg2.jpg";

    }
    backgroundImg = loadImage(bg);
    console.log(backgroundImg);

}