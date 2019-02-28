var counter = 0;
var tier = 1;
var upgradeColor = 'white';
var autoScuarers = 0;
var autoOutput = 0;
var tierCost = 1000;
var autoCost = 100;
var roundPocalypse = false;
var decrease = 0;
var scuareColor = 'white';

function setup() {
    createCanvas(600, 600);
    upgrades();
}

function draw() {
    fill('black')
    background(220);
    textSize(32);
    text(counter, 10, 25);
    text('Tier:', 10, 50);
    text(tier, 75, 50);
    text("Cost:", 10, 87);
    text(tierCost, 85, 87);
    clicker();
    fill(scuareColor);
    circle(200, 200, 100);
    fill(upgradeColor);
    fill('black');
    textSize(26.4);
    text("Upgrade", 100, 50);
    upgrades();
}

function clicker() {
    if (mouseX > 200 && mouseX < 400 && mouseY > 200 && mouseY < 400 && mouseIsPressed && tier > 0 && tier < 2) {
        counter = counter + 1
        scuareColor = 'red'
    } else if (mouseX > 200 && mouseX < 400 && mouseY > 200 && mouseY < 400 && mouseIsPressed && tier > 1 && tier < 3) {
        counter = counter + 10
        tierCost = 100000
        scuareColor = 'lightgray'
    } else if (mouseX > 200 && mouseX < 400 && mouseY > 200 && mouseY < 400 && mouseIsPressed && tier > 2 && tier < 4) {
        counter = counter + 20
        tierCost = 9999999
        scuareColor = 'lightgray'
    } else {
        scuareColor = 'white'
    }
}

function upgrades() {
    if (tier > 1 && tier < 3) {
        scuareColor = 'black'
    } else if (tier > 2 && tier < 4) {
        scuareColor = 'red'
    }
}

function mousePressed() {
    if (mouseX < 200 && mouseX > 100 && mouseY > 26 && mouseY < 60 && counter > 1000) {
        upgradeColor = 'lightgray'
        tier++
        counter = counter - tierCost
    } else {
        upgradeColor = 'white'
        fill(0, 0, 0, 0);
        rect
    }
}
