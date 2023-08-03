 import { db } from "../db.js";

 export const readUser = () => { //DONE
   return new Promise((resolve, reject) => {
     const q = "SELECT * FROM players";
     db.query(q, (err, data) => {
       if (err) {
         reject(err); // If there's an error, reject the Promise with the error object
       } else {
         resolve(data); // If successful, resolve the Promise with the query result (data)
       }
     });
   });
 };
 

 export const createUser = (req, res) => { //WORKS, NEED TO SOLVE "RESOLVE"
    console.log("caiu create");
    return new Promise((resolve, reject) => {
    const q = "INSERT INTO players(name, login, senha, id, money) VALUES(?)";

   const info = [
        req.body.nome,
        req.body.login,
        req.body.senha,
        req.body.id,
        req.body.money
    ]

    db.query(q, [info], (err) => {
        if(err) reject(err);

        return resolve(); //PROBLEM RETURNING THIS ARGUMENT
    });
    })
 };


export const updateUser = (req, res) =>{
    console.log("caiu update");
    const q = "UPDATE players SET nome = ?, login = ?, senha = ?, nascimento = ?, sexo = ? WHERE id = ?";

    /*const info = [
        req.body.nome,
        req.body.login,
        req.body.senha,
        req.body.nascimento,
        req.body.sexo
    ];*/

    const userid = req.params.id;
    const info = ['pedro', 'pedrop', 'pedrop24', '2003-10-25', 'F'];

    db.query(q, [...info, userid], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("usuario atualizado com sucesso");
    });
};

export const deleteUser = (req, res) =>{
    console.log("caiu dentro delete");
    const q = "DELETE FROM players WHERE id = ?";
    req.params.id = 1;
    db.query(q, [req.params.id], (err) => {
        if(err){
            return res.json(err);
        }
        return res.status(200).json("usuario deletado com sucesso");
    });
};