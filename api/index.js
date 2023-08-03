import express, { response } from "express";
import router from "./routes/users.js";
import cors from "cors";

export const app = express();

app.use(express.json());
app.use(cors());

app.get("/", router);
app.post("/", router);
app.put("/", router);
app.delete("/", router);

app.listen(3300);
