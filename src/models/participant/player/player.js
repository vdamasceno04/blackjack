const Participant = require('../participant.js');

class Player extends Participant{
    constructor(){
        super();
        this.money = 0;

    }
    defineMoney(value){
        this.money = value;}
    getMoney(){return this.money;}

    async setMoney(){
        try{
        await fetch("http://localhost:3300", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => response.json())
        .then(data => {
            this.defineMoney(data[3].money);
             //provavel problema pq é assincrono
        })
        // console.log("Response from server:", data);
        .catch((error) => {
        console.error("Error:", error);
        });
        }
        catch(error){ console.error("Error:", error);
    }
            
    };

    printMoney(){console.log("din ", this.money);}
    placeBet(){} //TODO
}
module.exports = Player;