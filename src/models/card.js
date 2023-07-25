class Card{
    constructor(v, n){ //value and suit
        this.suit = n;
        this.value = v;
        this.card = v+n;
    }
    print(){
        console.log(this.card);
    }
    getValue(){return this.value;}
    getCard(){return this.card;}
}
module.exports = Card;