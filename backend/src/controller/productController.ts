import { Request, Response } from "express";
import { IProductDocument } from "src/models/Product.types";
import { Product } from "../models/Product.model";

interface ErrorMessage {
  message: string;
}

export const getAllProducts = async (
  _: Request,
  res: Response<IProductDocument[] | ErrorMessage>
): Promise<void> => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "server error" });
  }
};

export const getProductById = async (
  req: Request,
  res: Response<IProductDocument | null | ErrorMessage>
) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "server error" });
  }
};
