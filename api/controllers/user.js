 import { db } from "../db.js";

 export const readUser = (_, res) => {
    const q = "SELECT * FROM players";
    //const q = "DELETE FROM players WHERE id = 1";


    console.log("caiu read");

    db.query(q, (err, data) => {
        if (err) return res.json(err);
        
        return res.status(200).json(data);
    });
 };

 export const createUser = (req, res) => {

    const q = "INSERT INTO players('nome', 'login', 'senha', 'id', 'nascimento', 'sexo') VALUES(?)";

    const info = [
        req.body.nome,
        req.body.login,
        req.body.senha,
        req.body.id,
        req.body.nascimento,
        req.body.sexo
    ];

    db.query(q, [info], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("usuario criado com sucesso");
    });
 };


export const updateUser = (req, res) =>{
    const q = "UPDATE players SET 'nome' = ?, 'login' = ?, 'senha = ?, 'nascimento' = ?, 'sexo' = ? WHERE 'id' = ?";

    const info = [
        req.body.nome,
        req.body.login,
        req.body.senha,
        req.body.id,
        req.body.nascimento,
        req.body.sexo
    ]
    db.query(q, [...info, req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("usuario atualizado com sucesso");
    });
};

export const deleteUser = (req, res) =>{
    console.log("caiu cdentro delete");
    const q = "DELETE FROM players WHERE id = ?";
    req.params.id = 1;
    db.query(q, [req.params.id], (err) => {
        if(err){
            return res.json(err);
        }
        return res.status(200).json("usuario deletado com sucesso");
    });
};