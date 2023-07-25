const Deck = require('./deck.js');
const Participant = require('./participant.js');

function testeprint(a){
    a.innerText = "gameplay";
}

let deck = new Deck();
let p1 = new Participant();
deck.generate();
deck.shuffle();

console.log("receba");
p1.receive(deck.deal());
p1.printHand();
console.log('count', p1.getCount());

console.log("\nreceba");
p1.receive(deck.deal());
p1.printHand();
console.log('count', p1.getCount());

console.log("\nreceba");
p1.receive(deck.deal());
p1.printHand();
console.log('count', p1.getCount());
