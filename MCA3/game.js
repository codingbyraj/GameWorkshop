var player, playerobj, tree, treeImg, trees = []
    , fruitImg, fruit, fruits = []
    , sound;

function preload() {
    sound = loadSound("assets/sound.mp3");
    fruitImg = loadImage("assets/fruit1.png");
    player = loadGif("assets/mario.gif");
    treeImg = loadImage("assets/tree3.png");
}

function setup() {
    createCanvas(500, 500);
    playerobj = new Player(player);
    //tree = new Tree(treeImg);
    sound.play();
}

function draw() {
    background("lightblue");
    //console.log("value of framecount = "+ frameCount)
    fill("green");
    rect(0, 450, 500, 50);
    //tree.printTrees();
    //tree.move();
    createTrees();
    printTrees();
    createFruits();
    printFruits();
    playerobj.playerImg();
}

function createTrees() {
    // create trees at a fixed interval
    if (frameCount % 200 == 0) {
        tree = new Tree(treeImg);
        trees.push(tree);
    }
}

function printTrees() {
    for (var i = 0; i < trees.length; i++) {
        trees[i].printTrees();
        trees[i].move();
    }
}

function createFruits() {
    if (frameCount % 100 == 0) {
        fruit = new Fruit(fruitImg);
        fruits.push(fruit);
    }
}

function printFruits() {
    for (var i = 0; i < fruits.length; i++) {
        fruits[i].printFruit();
        fruits[i].move();
    }
}