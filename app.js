var PLAY = 1;
var END = 0;
var gameState = PLAY;
// var serve = -1;

var bow,
  arrow,
  background,
  redB,
  pinkB,
  greenB,
  blueB,
  whiteB,
  yellowB,
  arrowGroup;
var bowImage,
  arrowImage,
  green_balloonImage,
  red_balloonImage,
  pink_balloonImage,
  blue_balloonImage,
  white_balloonImage,
  yellow_balloonImage,
  backgroundImage;
var gameOverImg, restartImg, gameStartImg;
function preload() {
  backgroundImage = loadImage("1624.jpg");
  restartImg = loadImage("reload.png");
  gameOverImg = loadImage("661.jpg");
  gameStartImg = loadImage("2377.jpg");
  arrowImage = loadImage("player_laser.png");
  bowImage = loadImage("rocket1.png");
  red_balloonImage = loadImage("rocket-ship.png");
  green_balloonImage = loadImage("startup.png");
  pink_balloonImage = loadImage("rocket (1).png");
  blue_balloonImage = loadImage("rocket-ship (1).png");
  white_balloonImage = loadImage("spring-swing-rocket.png");
  yellow_balloonImage = loadImage("launch.png");
}

function setup() {
  createCanvas(1600, 800);

  //creating background
  background = createSprite(0, 0, 1000, 600);
  background.addImage(backgroundImage);
  background.scale = 0.95;

  // creating bow to shoot arrow
  bow = createSprite(580, 220, 20, 50);
  bow.addImage(bowImage);
  bow.scale = 0.3;

  gameOver = createSprite(800, 400);
  gameOver.addImage(gameOverImg);
  gameOver.scale = 0.4;
  // gameStart = createSprite(750, 350);
  // gameStart.addImage(gameStartImg);
  // gameStart.scale = 0.6;
  restart = createSprite(800, 710);
  restart.addImage(restartImg);
  restart.scale = 0.2;
  score = 0;
  redB = new Group();
  greenB = new Group();
  blueB = new Group();
  pinkB = new Group();
  whiteB = new Group();
  yellowB = new Group();
  arrowGroup = new Group();
}

function draw() {
  // if (gameState === serve) {
  //   gameStart.visible = true;
  //   if (mousePressedOver(gameStart)) {
  //     // gameStart();
  //     gameStart.visible = false;
  //     gameState = PLAY;
  //   }
  // }

  if (gameState === PLAY) {
    gameOver.visible = false;
    restart.visible = false;
    // gameStart.visible = true;
    // moving ground
    background.velocityX = -3;

    if (background.x < 0) {
      background.x = background.width / 2;
    }
    // if (mousePressedOver(gameStart)) {
    // gameStart();

    //   gameState = PLAY;
    //   redB.destroyEach();
    //   blueB.destroyEach();
    //   greenB.destroyEach();
    //   pinkB.destroyEach();
    // }
    // moving bow
    bow.y = World.mouseY;
    bow.x = World.mouseX;

    // release arrow when space key is pressed
    if (keyDown("space")) {
      createArrow();
    }
    if (keyDown("left")) {
      bow.x = bow.x - 10;
    }
    if (keyDown("right")) {
      bow.x = bow.x + 10;
    }
    if (keyDown("up")) {
      bow.y = bow.y - 10;
    }
    if (keyDown("down")) {
      // if (bow.y > 120) {
      bow.y = bow.y + 10;
      // }
    }
    if (bow.isTouching(redB)) {
      redB.destroyEach();
      greenB.destroyEach();
      blueB.destroyEach();
      pinkB.destroyEach();
      whiteB.destroyEach();
      yellowB.destroyEach();
      arrowGroup.destroyEach();
      // score = score + 1;
      gameState = END;
    }

    if (bow.isTouching(greenB)) {
      redB.destroyEach();
      greenB.destroyEach();
      blueB.destroyEach();
      pinkB.destroyEach();
      whiteB.destroyEach();
      yellowB.destroyEach();
      arrowGroup.destroyEach();
      // score = score + 2;
      gameState = END;
    }

    if (bow.isTouching(blueB)) {
      redB.destroyEach();
      greenB.destroyEach();
      blueB.destroyEach();
      pinkB.destroyEach();
      whiteB.destroyEach();
      yellowB.destroyEach();
      arrowGroup.destroyEach();
      // score = score + 3;
      gameState = END;
    }

    if (bow.isTouching(pinkB)) {
      redB.destroyEach();
      greenB.destroyEach();
      blueB.destroyEach();
      pinkB.destroyEach();
      whiteB.destroyEach();
      yellowB.destroyEach();
      arrowGroup.destroyEach();
      // score = score + 1;
      gameState = END;
    }
    if (bow.isTouching(whiteB)) {
      redB.destroyEach();
      greenB.destroyEach();
      blueB.destroyEach();
      pinkB.destroyEach();
      whiteB.destroyEach();
      yellowB.destroyEach();
      arrowGroup.destroyEach();
      // score = score + 1;
      gameState = END;
    }
    if (bow.isTouching(yellowB)) {
      redB.destroyEach();
      greenB.destroyEach();
      blueB.destroyEach();
      pinkB.destroyEach();
      whiteB.destroyEach();
      yellowB.destroyEach();
      arrowGroup.destroyEach();
      // score = score + 1;
      gameState = END;
    }
    //creating continous enemies
    var select_balloon = Math.round(random(1, 6));

    if (World.frameCount % 100 == 0) {
      if (select_balloon == 1) {
        redBalloon();
      } else if (select_balloon == 2) {
        greenBalloon();
      } else if (select_balloon == 3) {
        blueBalloon();
      } else if (select_balloon == 4) {
        whiteBalloon();
      } else if (select_balloon == 5) {
        yellowBalloon();
      } else {
        pinkBalloon();
      }
    }

    if (arrowGroup.isTouching(redB)) {
      redB.destroyEach();
      arrowGroup.destroyEach();
      score = score + 1;
    }

    if (arrowGroup.isTouching(greenB)) {
      greenB.destroyEach();
      arrowGroup.destroyEach();
      score = score + 1;
    }

    if (arrowGroup.isTouching(blueB)) {
      blueB.destroyEach();
      arrowGroup.destroyEach();
      score = score + 1;
    }

    if (arrowGroup.isTouching(pinkB)) {
      pinkB.destroyEach();
      arrowGroup.destroyEach();
      score = score + 1;
    }
    if (arrowGroup.isTouching(whiteB)) {
      whiteB.destroyEach();
      arrowGroup.destroyEach();
      score = score + 1;
    }
    if (arrowGroup.isTouching(yellowB)) {
      yellowB.destroyEach();
      arrowGroup.destroyEach();
      score = score + 1;
    }
  } else if (gameState === END) {
    gameOver.visible = true;
    restart.visible = true;
    background.velocityX = 0;
    bow.velocityY = 0;
    // background(0);
    // textSize(20);
    // fill("lightpink");
    // text("GameOver!!", 160, 200);
    // text("Press 'R' To Continue", 130, 250);
    // fill("lightpink");
    // text("GameOver!!", 160, 200);
    // text("Press 'R' To Continue", 130, 250);

    // if (keyDown("r")) {
    //   gameState = PLAY;
    //   bow.y = 320;
    // }
  }

  if (mousePressedOver(restart)) {
    reset();
  }
  drawSprites();
  stroke("black");
  textSize(20);
  // textStyle(bold);
  textFont("Fira Code");
  fill("black");
  text("Score: " + score, 700, 50);
}
function reset() {
  gameOver.visible = false;
  restart.visible = false;
  gameState = PLAY;
  // cloudsGroup.destroyEach()
  // obstaclesGroup.destroyEach()

  score = 0;
}
// function gameStart() {
//   // gameOver.visible = false;
//   // restart.visible = false;
//   gameState = PLAY;
//   gameStart = false;
//   bowImage.visible = true;
//   score = 0;
// }
function redBalloon() {
  var red = createSprite(40, Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityY = 12;
  red.lifetime = 1600;
  red.scale = 0.3;
  redB.add(red);
}

function blueBalloon() {
  var blue = createSprite(500, Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityY = 13;
  blue.lifetime = 1600;
  blue.scale = 0.3;
  blueB.add(blue);
}

function greenBalloon() {
  var green = createSprite(1000, Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityY = 17;
  green.lifetime = 1600;
  green.scale = 0.3;
  greenB.add(green);
}

function pinkBalloon() {
  var pink = createSprite(900, Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityY = 15;
  pink.lifetime = 1600;
  pink.scale = 0.3;
  pinkB.add(pink);
}

function whiteBalloon() {
  var white = createSprite(90, Math.round(random(20, 370)), 10, 10);
  white.addImage(white_balloonImage);
  white.velocityY = 18;
  white.lifetime = 1600;
  white.scale = 0.3;
  whiteB.add(white);
}

function yellowBalloon() {
  var yellow = createSprite(40, Math.round(random(20, 370)), 10, 10);
  yellow.addImage(yellow_balloonImage);
  yellow.velocityY = 10;
  yellow.lifetime = 1600;
  yellow.scale = 0.3;
  yellowB.add(yellow);
}
// Creating  arrows for bow
function createArrow() {
  var arrow = createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y = bow.y;
  arrow.x = bow.x;
  arrow.velocityY = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
}
