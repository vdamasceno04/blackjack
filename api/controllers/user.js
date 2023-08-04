 import { db } from "../db.js";

 export const readUsers = () => { //DONE
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
 
export const readUser = (req) => { //DONE
  return new Promise((resolve, reject) => {
    const q = "SELECT * FROM players WHERE id = ?";
    const info = req.params.id;
    console.log("Buscando")
    db.query(q, info,(err, data) => {
      if (err) {
        reject(err); // If there's an error, reject the Promise with the error object
      } else {
        resolve(data); // If successful, resolve the Promise with the query result (data)
      }
    });
  });
};

 export const createUser = (req, res) => { //WORKS, NEED TO SOLVE "RESOLVE"
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


export const updateUser = (req, res) =>{ //WORKS, NEED TO SOLVE "RESOLVE"
    return new Promise((resolve, reject) => {
      const q = 'UPDATE players SET name = ?, login = ?, senha = ?, id = ?, money = ? WHERE id = ?';
  
      const userid = req.body.id;
      const info = [
          req.body.nome,
          req.body.login,
          req.body.senha,
          req.body.id,
          req.body.money,
          userid
      ];
  
      db.query(q, info, (err) => {
          if(err) reject(err);
  
          return resolve(); //PROBLEM RETURNING THIS ARGUMENT
      });
      })
};


export const deleteUser = (req, res) =>{
    console.log("caiu dentro delete");
    return new Promise((resolve, reject) => {
    const q = "DELETE FROM players WHERE id = ?";  
  
      db.query(q, req.body.id, (err) => {
          if(err) reject(err);
  
          return resolve(); //PROBLEM RETURNING THIS ARGUMENT
      });
      })   
};