import express from "express";
import { readUser, createUser, updateUser, deleteUser } from "../controllers/user.js"; 

const router = express.Router();

router.delete("/", deleteUser); //NAO FUNCIONA

router.get("/", readUser);

export default router;