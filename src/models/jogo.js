const Deck = require('./deck.js');
//const UnregisteredPlayer = require('./participant/player/unregisteredplayer.js');
const RegisteredPlayer = require('./participant/player/registeredplayer.js');


function testeprint(a){
    a.innerText = "gameplay";
}

let deck = new Deck();
let p1 = new RegisteredPlayer();
deck.generate();
deck.shuffle();
p1.fetchMoney();
p1.getMoney();
/*
console.log("receba");
p1.receive(deck.deal());
p1.printHand();
console.log('count', p1.getCount());
*/
