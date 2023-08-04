const Participant = require('../participant.js');

class Player extends Participant{
    constructor(){
        super();
        this.money = 0;

    }
    setMoney(){
        fetch("http://localhost:3300", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => response.json())
        .then((data) => {
        this.money = data[3].money;
        console.log(data[3].money);
        // console.log("Response from server:", data);
        })
        .catch((error) => {
        console.error("Error:", error);
        });};

    printMoney(){console.log(this.money);}
    placeBet(){} //TODO
}
module.exports = Player;