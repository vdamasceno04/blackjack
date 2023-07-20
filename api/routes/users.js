import express from "express";
import { readUser, createUser, updateUser, deleteUser } from "../controllers/user.js"; 

const router = express.Router();

//router.delete("/", deleteUser); //esse acesso nao funciona
//router.post("/", createUser); //esse acesso nao funciona
//router.put("/", updateUser); //esse acesso nao funciona
//por algum motivo, o acesso router.get funciona, e todas as funções do 
//crud definidas no user.js tambem funcionam se forem passadas por parâmetro no router.get
router.get("/", readUser);

export default router;