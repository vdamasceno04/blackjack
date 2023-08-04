import express from "express";
import { readUsers, readUser, createUser, updateUser, deleteUser } from "../controllers/user.js"; 

const router = express.Router();

router.route('/')
    .get(async (req, res) => {
    try {
        const users = await readUsers(); // Call the readUser function to fetch data from the database
        res.status(200).json(users); //get all of that from user
    } catch (err) {
        res.status(500).json({ error: "An error occurred while fetching data." });
    }
    })

    .post(async (req, res) =>{
        console.log("caiu no .post");
        try {
        req.body.nome = "mauro";
        req.body.login = "mauroido";
        req.body.senha = "mauroido24";
        req.body.id = 6;
        req.body.money = 5; //get all of that from user
//        const answer = await createUser(req);
        createUser(req);
     //       res.status(200).json(answer); //doesnt get answer properly
        res.status(200).json("Created user sucessfully."); 
    } catch (err) {
        res.status(500).json({ error: "An error occurred while fetching data." });
    }
    })

    .put(async (req, res) => {
    try {
        req.body.nome = "mauro";
        req.body.login = "mauroido";
        req.body.senha = "mauroido24";
        req.body.id = 6;
        req.body.money = 4; //get all of that from user
        updateUser(req);
        res.status(200).json("Update user sucessfully.")
    } catch (err){
        res.status(500).json({error: "An error occurred while fetching data."});
    }
    })

    .delete(async (req, res) => {
        try{
            deleteUser(req)
            res.status(200).json("Deleted user sucessfully.")
        } catch(err){
            res.status(500).json({error: "An error occurred while fetching data."})
        }
    })
    
router.route('/:id')
    .get(async (req, res) => {
        try {
            const users = await readUser(); // Call the readUser function to fetch data from the database
            res.status(200).json(users); //get all of that from user
        } catch (err) {
            res.status(500).json({ error: "An error occurred while fetching data." });
        }
        })

export default router;