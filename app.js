const prompt = require('prompt-sync')();

let Peon = {
    name: "",
    job: "nothing"
};

let Barracks = {
    Peons: []
};

let compPlayer = {
    HP: 10,
    Barracks: Barracks
};

let humanPlayer = {
    HP: 10,
    Barracks: Barracks
};
startGame();
function evaluateGameState() {
    if (compPlayer.HP <= 0 && humanPlayer.HP <= 0) {
        console.log("It's a tie!");
    } else if (compPlayer.HP <= 0) {
        console.log("Congratulations! You win!");
    } else if (humanPlayer.HP <= 0) {
        console.log("Sorry, the computer wins!");
    } else {
        startPlayersTurn();
    }
}

function startGame() {
    console.log("Welcome to the game!");
    const username = prompt('What is your name? ');
    console.log(`Hello, ${username}!`);
    startPlayersTurn();
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function compTurn() { 
let compAction = Math.random() < 0.5 ? 'repair' : 'damage';
let compPoints = getRandomInt(1, 5);
evaluateGameState()
}


function createPeon(name) {
    let newPeon = Object.create(Peon);
    newPeon.name = name;
    return newPeon;
}

function startPlayersTurn(){
let action = prompt('Do you want to select a Peon? Or would you rather create a Peon?');
if (action === "create") {
    let name = prompt("What should the Peon's name be?");
    let newPeon = createPeon(name);
    humanPlayer.Barracks.Peons.push(newPeon)
    console.log(newPeon.name + " has been added to your Barracks ");
    let action = prompt('What should your Peon do? Attack or repair?');
    if (action === 'attack') {
        newPeon.job = 'attack';
        console.log(`${newPeon.name} is set to attack!`);
        compPlayer.HP --
        console.log(`The compPlayer's health is now ${compPlayer.HP}!`);
        // compTurn()
        console.log(`The humanPlayer has ${humanPlayer.HP} health points while the computer has ${compPlayer.HP} points`)
        evaluateGameState()
    } else if (action === 'repair') { 
        newPeon.job = 'repair';
        console.log(`${newPeon.name} is ready to repair!`);
        humanPlayer.HP ++
        console.log(`${humanPlayer.HP} health points left!`)
    } else {
        console.log('Invalid action.');

    }
} else {
    let name = prompt('Which Peon do you want to select?');
    let selectedPeon = humanPlayer.Barracks.Peons.find(peon => peon.name === name);
    if (selectedPeon) {
        let action = prompt('What should your Peon do? Attack or repair?');
        if (action === 'attack') {
            selectedPeon.job = 'attack';
            // console.log(`${name} is set to attack!`);
            compPlayer.HP --
            console.log(`${compPlayer.HP}`);
            compTurn()
        } else if (action === 'repair') { 
            selectedPeon.job = 'repair';
            console.log(`${name} is ready to repair!`);
            humanPlayer.HP ++
            console.log(`${humanPlayer.HP} health points left!`)
            compTurn()
        } else {
            console.log('Invalid action.');
        }
    }
}
}
humanPlayer.Barracks.Peons.forEach(peon => {
    if (peon.job === 'repair') {
        humanPlayer.HP++;
    } else if (peon.job === 'attack') {
        compPlayer.HP--;
    }
});

evaluateGameState()

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function compTurn() { 
let compAction = Math.random() < 0.5 ? 'repair' : 'damage';
let compPoints = getRandomInt(1, 5);

if (compAction === 'repair') {
    compPlayer.HP += compPoints;
    console.log(`Computer repaired itself for ${compPoints} hit points!`);
} else {
    humanPlayer.HP -= compPoints;
    console.log(`Computer damaged you for ${compPoints} hit points!`);
}

startPlayersTurn()
}
