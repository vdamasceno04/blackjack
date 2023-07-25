const Card = require('./card.js');

class Player{
    constructor(){
        this.hand = [];
        this.money; //get this info from db
        this.busted = false;
        this.count = 0;
    }
    receive(c){
        this.hand.push(c);
    }
    size(){
        return this.hand.length;
    }
    setCount(){
        for(var i=0; i<this.hand.length; i++){
            var aux = this.hand[i].getValue();
            if(this.count <= 10 && aux == 1)
                this.count += 11;
            else
                this.count += aux;
        }
    }
    getCount(){
        return this.count;
    }
    checkBusted(){
        if(this.getCount() > 21)
            return true;
    }
    printHand(){
        for(var i=0; i<this.size(); i++){
            console.log(this.hand[i].getCard());
        }
    }
}
module.exports = Player;