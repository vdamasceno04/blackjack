const Deck = require('./deck.js');
const Player = require('./player.js');

function testeprint(a){
    a.innerText = "gameplay";
}

let deck = new Deck();
let p1 = new Player();
deck.generate();
deck.shuffle();
p1.receive(deck.deal());
p1.printHand();