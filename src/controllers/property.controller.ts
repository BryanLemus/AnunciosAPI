/**
 * Import modules
 */
import { Request, Response } from "express";
import Property from "../models/properties";

/**
 * GET /api/properties/
 */

export async function GetProperties(req: Request, res: Response) {
  let properties = await Property.find();
  res.status(200).json(properties);
}

/**
 * POST /api/properties/
 */

export async function CreateProperty(req: Request, res: Response) {
  // Get fields from request.body
  const { name, description, currency, price } = req.body;

  // Get fields from request.files
  const fields = req.files as { [p: string]: Express.Multer.File[] };
  const photo: string = fields.photo[0].path;
  const gallery = fields.gallery.map((file) => {
    return file.path;
  });

  //Validate empty fields
  if (!name || !description || !currency || !price || !photo || !gallery)
    return res.status(400).send("Please complete all fields");

  // Create new property
  const newProperty = new Property({
    name,
    description,
    currency,
    price,
    photo,
    gallery,
  });
  await newProperty.save();

  // Send Response
  res.status(200).json(newProperty);
}

/**
 * GET /api/properties/:id
 */

export async function GetProperty(req: Request, res: Response) {
  let property = await Property.findById(req.params.id);
  res.status(200).json(property);
}

/**
 * PUT /api/properties/:id
 */

export async function EditProperty(req: Request, res: Response) {
  let { name, description, currency, price } = req.body;
  res.status(200).send("Updated Property");
}

/**
 * DELETE /api/properties/:id
 */

export async function DeleteProperty(req: Request, res: Response) {
  Property.findByIdAndDelete(req.params.id);
  res.status(200).send("Property deleted");
}