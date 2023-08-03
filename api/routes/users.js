import express from "express";
import { readUser, createUser, updateUser, deleteUser } from "../controllers/user.js"; 

const router = express.Router();

//router.delete("/:id", deleteUser); //D
//router.put("/:id", updateUser); //U
//router.post("/", createUser); //C
//router.get("/", readUser); //R
router.route('/')
    .get(async (req, res) => {
    try {
        console.log("caiu no .get");
        const users = await readUser(); // Call the readUser function to fetch data from the database
        console.log(users);
        res.status(200).json(users); // Send the data as a JSON response
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
        req.body.money = 5;
//        const answer = await createUser(req);
            createUser(req);
     //       res.status(200).json(answer); //doesnt get answer properly
            res.status(200).json("foi"); 
    } catch (err) {
        res.status(500).json({ error: "An error occurred while fetching data." });
    }
    })
//router.route('/:id')

export default router;