const Participant = require('../participant.js');

class Player extends Participant{
    constructor(){
        super();
        this.money;

    }
    getMoney(){
        fetch("http://localhost:3300", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(console.log("acabate"))
        .then((response) => response.json())
        .then((data) => {
        console.log("Response from server:", data);
        })
        .catch((error) => {
        console.error("Error:", error);
        });};
    placeBet(){} //TODO
}
module.exports = Player;