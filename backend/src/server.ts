import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/db";
import porductRoutes from "./routes/productRoutes";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use("/api/products", porductRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
