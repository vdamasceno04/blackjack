const Deck = require('./deck.js');
//const UnregisteredPlayer = require('./participant/player/unregisteredplayer.js');
//const RegisteredPlayer = require('./participant/player/registeredplayer.js');
const Player = require('./participant/player/player.js');

function testeprint(a){
    a.innerText = "gameplay";
}

let deck = new Deck();
let p1 = new Player();
deck.generate();
deck.shuffle();
async function main() {
    await p1.setMoney(); // Wait for setMoney to complete before proceeding
    p1.printMoney();     // This will be called after setMoney has completed
}
main();
//p1.setMoney();
//p1.printMoney(); // This will be called after setMoney has completed


/*
console.log("receba");
p1.receive(deck.deal());
p1.printHand();
console.log('count', p1.getCount());
*/
