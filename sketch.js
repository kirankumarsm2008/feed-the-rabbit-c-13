   // create sprites
   var garden,gardenImg;
   var rabbit,rabbitImg;
   var apple,appleImg;
   var grass,grassImg;
   var leaf,leafImg;
   var orangeLeaf,orangeLeafImg;

   
   
   function preload(){
   //load images
   gardenImg = loadImage("garden.png");

   rabbitImg = loadImage("rabbit.png");

   appleImg = loadImage("apple.png");

   gardenImg = loadImage("garden.png");

   leafImg = loadImage("leaf.png");

   orangeLeafImg = loadImage("orangeleaf.png");

   }

   function setup(){
  
   createCanvas(400,400);
  
   // create and image for sprites
   garden=createSprite(200,200);
   garden.addImage(gardenImg);

   rabbit = createSprite(180,340,30,30);
   rabbit.scale =0.09;
   rabbit.addImage(rabbitImg);


   //generate random numbers
   var randnum = Math.round(random(1,400))
   console.log(randnum)
   
   
   }


   function draw() {
   background(0);
  
   edges= createEdgeSprites();
   rabbit.collide(edges);
   
   var select_sprite = Math.round(random(1,2));

   if (frameCount % 80 === 0) {
   if (select_sprite === 1) {
    //call create apple function
    createApple() 
   } else {
    //call create leaves
    createLeaves()
   } 
   }

   //functions are given below drawSprites()
   rabbit_move()
   

   drawSprites();
   }

   function rabbit_move(){
   //rabbit moves along with mouse
   rabbit.x = World.mouseX;
   }

   function createApple(){
    if (frameCount % 80 === 0){
    apple = createSprite(random(5,350),10,10,10);

   //image for apple
   apple.addImage("apple",appleImg);

   //scale of the apple
   apple.scale = 0.1; 

   //velocityY for apple to fall downwards
   apple.velocityY = 4;

   //lifetime to apple
   apple.x = Math.round(random(5,350));

   }
   }

   function createLeaves(){
    if(frameCount  % 80 === 0){
    leaf = createSprite(random(5,300),1,10,10);

    //image for leaf
    leaf.addImage("leaf",leafImg);

    //scale of the leaf
    leaf.scale = 0.1;

    //velocityY for leaf to fall downwards
    leaf.velocityY = 3;

    //lifetime to leaf
    leaf.x = Math.round(random(1,300));

   }
   if(frameCount % 80 === 0){
    orangeLeaf = createSprite(random(5,380),1,10,10);
 
    //image for orange leaf
    orangeLeaf.addImage("orangeleaf",orangeLeafImg);
 
    //scale of the orange leaf
    orangeLeaf.scale=0.1;
 
    //velocityY for orange leaf
    orangeLeaf.velocityY = 3;
 
    //lifetime to orange leaf
    orangeLeaf.x = Math.round(random(5,380));
 
    }
   }
 