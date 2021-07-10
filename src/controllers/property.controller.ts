import { Request, Response } from "express";
import Property from "../models/properties";

export const createProperty = async (res: Response, req: Request) => {
  const { name, description, currency, price, mainPhoto } = req.body;
  const newProperty = new Property({
    name,
    description,
    currency,
    price,
    mainPhoto,
  });
  const propertySaved = await newProperty
    .save()
    .then(() => {
      res.status(201).json(propertySaved);
    })
    .catch((e) => {
      res.status(400).send("Failed to save the property");
      console.error(e);
    });
};
export const getProperties = async (res: Response, req: Request) => {
  const products = await Property.find();
  return res.json(products);
};
export const getPropertyById = async (res: Response, req: Request) => {
  const product = await Property.findById(req.params.id);
  return res.json(product);
};
export const editProperty = async (res: Response, req: Request) => {
  const updatedProperty = await Property.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedProperty);
};
export const deleteProperty = async (res: Response, req: Request) => {
  await Property.findByIdAndDelete(req.params.id);
  res.status(204).json();
};
