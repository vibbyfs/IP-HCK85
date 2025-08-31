import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "@/routes";
import { errorHandler } from "@/middleware/errorHandler";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.use(errorHandler);

export default app;
