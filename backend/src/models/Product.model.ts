import { model } from "mongoose";
import { productSchema } from "./Product.schema";
import { IProductDocument } from "./Product.types";

export const Product = model<IProductDocument>("product", productSchema);
