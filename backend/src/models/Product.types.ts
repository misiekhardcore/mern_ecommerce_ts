import { Document, Model } from "mongoose";

export interface IProduct {
  name: string;
  description: string;
  price: number;
  countInStock: number;
  imageUrl: string;
}

export interface IProductDocument extends IProduct, Document {}

export interface IProductModel extends Model<IProductDocument> {}
