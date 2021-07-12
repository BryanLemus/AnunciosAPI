import {Router} from "express";
import * as controller from '../controllers/property.controller';
import multer from "../libs/multer";

export const router = Router();

// GET /properties
router.get("/", controller.getProperties);
router.post(
    "/",
    multer.fields([{name: "photo", maxCount: 1}, {name: "gallery", maxCount: 5}]),
    controller.createProperty)

export default router;
