function testeprint(a){
    a.innerText = "gameplay";
}

class Deck{
    constructor() {
        this.deck = [];
     }
     add(card) {
        return this.deck.push(card);
     }
     remove() {
        if (this.deck.length > 0) {
            deck.pop();
        }
     }
     peek() {
        return (this.deck[this.stkArr.length - 1]);
     }
     isEmpty() {
        return this.card.length == 0;
     }
     print(){
        for(var i = 0; i<this.deck.length; i++)
            console.log(this.deck[i].card);
     }
     size() {
        return this.deck.length;
    }
     clear() {
        this.deck = [];
    }
}

class Card{
    constructor(v, n){ //value and suit
        this.suit = n;
        this.value = v;
        this.card = v+n;
    }
    print(){
        console.log(this.card);
    }
}

class Player{
    constructor(){
    }
}
  let deck = new Deck();

  for(var i=0; i<3; i++){
    for(var j=1; j<=13; j++){
        if(i == 0)
            var n = 'H'; //heart
        else if(i == 1)
            var n = 'S'; //spade
        else if(i==2)
            var n = 'C'; //club
        else
            var n = 'D'; //diamond
        var v = j.toString();
        deck.add(new Card(v, n));
    }   
  }
  deck.print();
