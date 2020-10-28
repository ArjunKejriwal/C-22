var en, w, ob, gr;

function setup (){

 createCanvas(400, 400);

 en = Matter.Engine.create();

 w = en.world;

 ob = Matter.Bodies.circle(200, 200, 20, {restitution : 1});

 Matter.World.add(w, ob);

 gr = Matter.Bodies.rectangle(200, 390, 400, 20, {isStatic : true});

 Matter.World.add(w, gr);

 console.log(ob);

}

function draw (){

 background(0);

 Matter.Engine.update(en);

 circle(ob.position.x, ob.position.y, 40);

 rectMode(CENTER);

 rect (gr.position.x, gr.position.y, 400, 20);

}