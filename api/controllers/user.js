 import { db } from "../db.js";

 export const readUser = (_, res) => {
    const q = "SELECT * FROM players";

    console.log("caiu read");

    db.query(q, (err, data) => {
        if (err) return res.json(err);
        
        return res.status(200).json(data);
    });
 };

 export const createUser = (_, res) => {
    console.log("caiu create");

    const q = "INSERT INTO players(nome, login, senha, id, money) VALUES(?)";

   /*const info = [
        req.body.nome,
        req.body.login,
        req.body.senha,
        req.body.id,
        req.body.nascimento,
        req.body.sexo
    ];*/

    const info = ['pedro', 'pedrop', 'pedrop24', '6', '69'];

    db.query(q, [info], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("usuario criado com sucesso");
    });
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