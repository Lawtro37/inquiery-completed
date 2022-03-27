var player, playerX = 400, playerY, playerPushBack = 0.2
var gameState = "start"
var houseX = 300, houseY = playerY, playerCount = 0, floudX = -250, floudWidth = 500, witeTop
var funFacts = ["Fun fact: this is a fun fact", "fun fact: Between 2000 and 2012, natural disasters caused $1.7 trillion in damage and affected 2.9 billion people.", "fun fact: 2012 marked the third consecutive year of worldwide natural disaster damage exceeding $100 billion. 2011 reached a record high of $371 billion.", "fun fact: Worldwide in 2011, there were 154 floods, 16 droughts, and 15 cases of extreme temperature.", "fun fact: Over 1/2 of the victims of both Hurricane Katrina and Hurricane Sandy were senior citizens over the age of 65. ", "fun fact: Floods are the most widespread natural disaster aside from wildfires. 90% of all US natural disasters declared by the president involve some sort of flooding.", "fun fact: Earthquakes are disasters that cause associated destruction of man-made structures and instigate other natural disasters such as tsunamis, avalanches, and landslides.", "fun fact: In 2012 there were 905 natural catastrophes worldwide including severe storms, droughts, tornadoes, earthquakes, floods, hail storms, typhoons, wildfires, and ciclones.", "fun fact: Nearly 50% of the fatalities caused by natural disasters in 2012 were due to hydrological events like flooding or mass movements.", "fun fact: “Hurricanes” are large, spiraling tropical storms that can pack wind speeds of over 160 miles an hour and unleash more than 2.4 trillion gallons of rain a day.", "Hurricanes and ciclones can be coupled with storm surges and severe flooding.", "fun fact: Damage paths of tornadoes can be in excess of one mile wide and 50 miles long.", "fun fact: Landslides often accompany earthquakes, floods, storm surges, hurricanes, wildfires, or volcanic activity. They are often more damaging and deadly than the triggering event.", " fun fact: The largest earthquake ever recorded anywhere in the world occurred in 1960 in Chile. It was a 9.5 on the Magnitude scale. The resulting Tsunami caused damage over 14400 km away on the California coast.", "fun fact: The intensity of a tornado is rated on the (enhanced) Fujita scale. It examines the damage done to man-made structures after the fact. ", 
                "fun fact: According to National Geographic, in 90 percent of avalanche fatalities, the avalanche is started by the victim or someone in the victims party.", "fun fact: There are approximately 1,900 active volcanoes. About 90 percent of them exist in the Ring of Fire in the Pacific Ocean.", "fun fact:  For a tropical storm or cyclone to be upgraded to hurricane status, it must have maximum sustained winds of at least 74 miles per hour.", "fun fact: The Huang He (Yellow) River in China has been responsible for some of the most lethal floods in history. The worst flood took place in 1931.", "fun fact: The 1906 earthquake that shook San Francisco did considerable damage, but it was the three-day fire that followed that caused most of the devastation.", "fun fact: A cow is most often blamed for starting the 1871 fire that engulfed Chicago.", "fun fact: Hurricanes, typhoons and cyclones are all the same thing.", "fun fact: The world’s biggest tidal wave occurred in Latuya Bay, Alaska, and was over 1,720 feet tall. Thats 500 feet taller than the Empire State Building.", "fun fact: The largest hailstone ever recorded in the United States was over seven inches in diameter and weighed almost two pounds.", "fun fact: Lava, the molten rock expelled by a volcano, can reach temperatures of approximately 2,000 degrees F.", "fun fact: Each year, Southern California has over 10,000 earthquakes. Most are too small to be felt.", "fun fact:  In Lake Nyos, Cameroon, a linmic eruption (a release of carbon dioxide gas) killed approximately 1,700 villagers in 1986. The odorless and colorless gas is heavier than air and floated across the ground to the village where it asphyxiated the residents while they slept.", "fun fact: In February of 1972, a week-long blizzard in Iran killed approximately 4,000 people.", "fun fact: It’s estimated that over 24 million people died of starvation during the Chinese famine of 1907.", "fun fact:  The world’s deadliest tsunami was the Indian Ocean tsunami of 2004. According to the U.S. Geological Survey, the energy released was equal to 23,000 Hiroshima-type atomic bombs."];
var funfact
var restartImg, restartTimer = 0, debres1, debres2, debres3, debres4, debres5, debres6, debres7, debres, debresNum = 0, houseImg, runImg, randomImg = []
var obsticles,  obsticlesY, obsticlesX, obsticlesSpeed = 2
var score = 0, highScore = 0, isHighScore = true
var disasterX, runX, clickToStartX

function preload()
{
  restartImg = loadImage('./assets/restart.png');

  //debres
  debres1 = loadImage('./assets/fier.gif');
  debres2 = loadImage('./assets/debreis2.png');
  debres3 = loadImage('./assets/debries3.png');
  debres4 = loadImage('./assets/debres4.png');
  debres5 = loadImage('./assets/debres5.png');
  debres6 = loadImage('./assets/debres6.png');
  debres7 = loadImage('./assets/debres7.gif');
  randomImg = [debres1, debres2, debres3, debres4, debres5, debres6, debres7]

  runImg = loadImage('./assets/run2.gif');
  houseImg = loadImage('./assets/house.png');
  witeTop = loadImage('./assets/New Piskel.gif');
  

}

function setup() 
{
  text("Loading assets...", 10, 20);
  text("loading canvas...", 10, 20);
  fullscreen();
  createCanvas(windowWidth, windowHeight-1);
  houseY = windowHeight/2
  playerY = windowHeight/2+50
  cooseFunFacts();
  obsticlesY = Math.round(random(50, windowHeight-50));
  obsticlesX = windowWidth + 50;
  //image(restartImg, 200, 200, 200, 200);

  
  debresNum = random(0,2);
  text("done!", 10, 20);
  
  disasterX =  windowWidth/2-250;
  runX =  windowWidth/2+150;
  clickToStartX = windowWidth/2-100;
}

function draw() 
{
  rectMode(CENTER)
  
  playerCount += 1

  background("Lime");
  if(gameState === "start")
  {}
  else
  {
    
    if(playerCount >= 250)
      {
        image(runImg, playerX-100 ,playerY-80, 200, 200)
      }
      else if(playerCount <= 200)
      {
        image(runImg, playerX-100+random(1,15) ,playerY-80+random(1,15), 200, 200)
        //player = rect(playerX ,playerY, 50, 50);
      }
      else
      {
        image(runImg, playerX-100+random(1,15/2) ,playerY-80+random(1,15/2), 200, 200)
      }
  }
  
  console.log(keyCode);
  
  
  
  //playerControler(5)
  
  if(gameState === "start")
  {
    push();
    textSize(50);
    text("click to start", windowWidth/2-100, windowHeight/2+15);
    pop();
    

    push();
    textSize(100);
    fill("red")
    text("Disaster", disasterX, windowHeight/2-155);
    fill("Orange")
    text("Run!", runX, windowHeight/2-155);
    pop();

    debres = random(randomImg)

    //rect(300, playerY, 250, 250);
    image(houseImg, 175, houseY-125, 250, 250)
    

    if (mouseIsPressed === true) 
    {
      gameState = "play"
      playerCount = 0
      
    }

    
    
    
    

  }

  if(gameState === "play")
  { 
    push();
    imageMode(CENTER);
    //fill("red");
    //obsticles = rect(obsticlesX, obsticlesY, 100, 100);
      if(playerCount  >= 250)
      {
        image(debres, obsticlesX, obsticlesY, 100, 100)
      }
      else if(playerCount  <= 200)
      {
        image(debres, obsticlesX + random(1,15), obsticlesY + random(1,15), 100, 100)
      }
      else
      {
        image(debres, obsticlesX + random(1,15/2), obsticlesY + random(1,15/2), 100, 100)
      }


    
    obsticlesX -= obsticlesSpeed;
    if(obsticlesX <= 0)
    {
      obsticlesY = Math.round(random(10, windowHeight));
      obsticlesX = windowWidth + 10;
      debres = random(randomImg)
      
      //cooseDebrieImg();
    }
    pop();

    push();
    imageMode(CENTER)
    //rect(houseX, windowHeight/2, 250, 250)
    image(houseImg, houseX+random(1,15), windowHeight/2+random(1,15), 250, 250)
    houseX -= 5
    pop()

    push();
    textSize(100);
    fill("red")
    text("Disaster", disasterX+random(1,15), windowHeight/2-155+random(1,15));
    fill("Orange")
    text("Run!", runX+random(1,15), windowHeight/2-155+random(1,15));
    pop();

    push();
    textSize(50);
    text("click to start", clickToStartX+random(1,15), windowHeight/2+15+random(1,15));
    pop();

    disasterX -= 5;
    runX -= 5;
    clickToStartX -= 5;


    push();
    fill("blue")
    rect(floudX, 400, 500, 1000)
    image(witeTop, floudX-220, 0, 400*2+50, 400*2+50)
    pop();
    //rect(floudX+250, 400, random(19, 22), 1000);

    score += 1
    

    if(obsticlesSpeed < 25)
    {
      obsticlesSpeed += score/100000
    }
    


    push();
    textSize(20);
    text("score: " + score, 10, 20);
    pop();



    if(floudX < 20)
    {
      floudX += 1
      playerX +=0.5
    }
    else
    {
      playerControler(5)
    }

    
    if(playerPushBack < 2)
    {
    playerPushBack += score/10000000
    }
    playerX -= playerPushBack;


    if (playerX > windowWidth)
    {
       playerX -= 5
    }

    if(playerY <= 0)
    {
      playerY += 5
    }

    if(playerY > windowHeight)
    {
      playerY -= 5
    }


    if(playerX <= 280)
    {
      gameState = "lose"
    }

    if(playerX > obsticlesX-50
      && playerX < obsticlesX+50
      && playerY < obsticlesY+50
      && playerY > obsticlesY-50)
      {
        gameState = "lose"
      }





  }
  if(gameState === "lose")
  {
    push();
    fill("blue")
    rect(floudX, 400, floudWidth, 1000)
    pop();
    floudWidth += 25
    playerX -= 5
    image(witeTop, floudWidth/2-473, 0, 400*2+50, 400*2+50)

    if(score > highScore)
  {
    highScore = score
    isHighScore = true
    
    
  }

    push();

    textSize(50);
    text("you lost!", windowWidth/2-100, windowHeight/2-100)
    image(restartImg, windowWidth/2-50, windowHeight/2-70, 100, 100)

    textSize(15);
    //text("high score: " + highScore, windowWidth/2-50, windowHeight/2-150)
    text("your score: " + score, windowWidth/2-50, windowHeight/2-170);

    if(isHighScore === true)
    {
      text("new high score!", windowWidth/2-50, windowHeight/2-150)
    }
    else  
    {
      text("high score: " + highScore, windowWidth/2-50, windowHeight/2-150)
    }

   
    rect(windowWidth/2, windowHeight/2+95, windowWidth, 40)
    text(funfact, 50, windowHeight/2+100)

    pop();

   
    restartTimer += 1
    //console.log(restartTimer)
    if(mouseIsPressed === true || keyIsPressed === true) 
    {
      if(restartTimer >= 150)
      {
      reset();
      gameState = "play"
      score = 0
      isHighScore = false
      restartTimer = 0
      }
    }
    
    

  }

  
}

function playerControler(speed)
{
  if(keyIsDown(UP_ARROW))
  {
    playerY -= speed
  }

  if(keyIsDown(DOWN_ARROW))
  {
    playerY += speed
  }
  
  if(keyIsDown(LEFT_ARROW))
  {
    playerX -= speed/5+playerPushBack
  }

  if(keyIsDown(RIGHT_ARROW))
  {
    playerX += speed/5+playerPushBack
  }

  //if(keyIsPressed === true)
  //{
  //if(keyCode === 87)
  //{
  //  playerY -= speed
  //  
  //}

  //if(keyCode === 83)
  //{
  //  playerY += speed
  //  
  //}
  
  //if(keyCode === 65)
  //{
  //  playerX -= speed/5+playerPushBack
  //  
  //}

  //if(keyCode === 68)
  //{
  //  playerX += speed/5+playerPushBack
  //  
  //}
 //}


}

function cooseFunFacts()
{
  funfact = random(funFacts);

}



function reset()
{
  floudWidth = 500;
  playerX = 400;
  playerY = windowHeight/2;
  floudX = -250;
  playerPushBack = 0.2;
  obsticlesSpeed = 2;
  playerCount = 0;
  disasterX = windowWidth/2-250;
  runX = windowWidth/2+150;

  cooseFunFacts();
  //cooseDebrieImg()

  debres = random(randomImg)

  obsticlesY = Math.round(random(50, windowHeight-50));
  obsticlesX = windowWidth + 50;

  rect(houseX, windowHeight/2, 250, 250)
  houseX = 300

  push();
  fill("blue")
  rect(floudX, 400, 500, 1000)
  pop();
}






