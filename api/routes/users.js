import express from "express";
import { readUser, createUser, updateUser, deleteUser } from "../controllers/user.js"; 

const router = express.Router();

router.delete("/:id", deleteUser); //D
router.put("/:id", updateUser); //U
router.post("/", createUser); //C
router.get("/", readUser); //R

export default router;