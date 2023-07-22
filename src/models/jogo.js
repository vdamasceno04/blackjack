const Deck = require('./deck.js');

function testeprint(a){
    a.innerText = "gameplay";
}

let deck = new Deck();
deck.generate();
deck.shuffle();
deck.print();