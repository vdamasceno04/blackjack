const Card = require('./card.js');

class Participant{
    constructor(){
        this.hand = [];
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
        this.count = 0;
        for(var i=0; i<this.hand.length; i++){
            var aux = this.hand[i].getValue();
            if(aux == 11 || aux == 12 || aux == 13)
                this.count += 10;
            else if(this.count <= 10 && aux == 1)
                this.count += 11;
            else
                this.count += aux;
        }
    }
    getCount(){
        this.setCount();
        return this.count;
    }
    checkBusted(){
        if(this.getCount() > 21)
            return true;
    }
    printHand(){
        var aux = '';
        for(var i=0; i<this.size(); i++){
            aux += this.hand[i].getCard();
            aux += ' ';
        }
        console.log('mao: ', aux);
    }
}
module.exports = Participant;