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
        const users = await readUser(); // Call the readUser function to fetch data from the database
        res.status(200).json(users); // Send the data as a JSON response
    } catch (err) {
        res.status(500).json({ error: "An error occurred while fetching data." });
    }
    })
    .post(async (req, res) =>{
    try {
        const pao = await createUser();
        res.status(200).json(pao); // Send the data as a JSON response
    } catch (err) {
        res.status(500).json({ error: "An error occurred while fetching data." });
    }
    })
//router.route('/:id')

export default router;