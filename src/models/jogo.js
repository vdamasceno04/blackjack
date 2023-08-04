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
p1.setMoney();
p1.printMoney();
/*
console.log("receba");
p1.receive(deck.deal());
p1.printHand();
console.log('count', p1.getCount());
*/
