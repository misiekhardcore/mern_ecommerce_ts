import dotenv from "dotenv";
import { products } from "./data/data";
import { connectDB } from "./config/db";
import { Product } from "./models/Product.model";

dotenv.config();

connectDB();

(async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("Data import successful");
    process.exit();
  } catch (error) {
    console.error("Error during data import:", error.message);
    process.exit(1);
  }
})();
