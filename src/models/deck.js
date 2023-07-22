const Card = require('./card.js');

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
        return this.deck.length == 0;
     }
     print(){
        for(var i = 0; i<this.deck.length; i++){
            console.log(this.deck[i].card);
        }
     }
     size() {
        return this.deck.length;
    }
     clear() {
        this.deck = [];
    }
    generate(){ //N FUNCIONA
        for(var i=0; i<=3; i++){
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
                this.add(new Card(v, n));
            }   
          }
    }
    shuffle(){
        for(let i =0; i < this.size(); i++){
            var j = Math.floor(Math.random()*i+1);
            var aux = this.deck[i]; 
            this.deck[i] = this.deck[j];
            this.deck[j] = aux;
        }
    }
}
module.exports = Deck;