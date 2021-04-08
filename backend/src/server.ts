import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/db";

dotenv.config();

connectDB()

const app = express();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
