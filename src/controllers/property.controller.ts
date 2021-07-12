import {Request, Response} from "express";
import Property from "../models/properties"
import multer from "../libs/multer";
import {Multer} from "multer";

export const getProperties = async (req: Request, res: Response) => {
    const properties = await Property.find();
    res.status(200).json(properties);
};

export const createProperty = async (req: Request, res: Response) => {
    /**
     * Get fields from request
     */
    const {name, description, currency, price} = req.body;
    const fields = req.files;
    console.debug(fields); // TODO: How get fieldsnames
    /**
     * Validate empty fields
     */
    if (!name || !description || !currency || !price)
        return res.status(400).send("Complete all fields");

    /**
     * Create new property
     */
    const newProperty = new Property({name, description, currency, price});
    await newProperty.save();

    res.status(200).json(newProperty);
};