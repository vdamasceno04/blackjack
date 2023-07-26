//import userRoutes from "../../../../api/routes/users.js";
const Player = require('./player');
//import axios from "axios";

class RegisteredPlayer extends Player{
    constructor(){
        super();
        this.money =  69;
        //this.money = this.router.get("/", readUser);
    }
 /*   fetchMoney(){
        axios.get('/user?ID=12345')
        .then(function (response) {
          // handle success
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }*/
    getMoney(){
        this.money =  console.log("dinheiro: ", this.money);
    }

}

module.exports = RegisteredPlayer;