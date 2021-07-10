import { Router } from "express";
import * as propertyController from "../controllers/property.controller";
import multer from "../libs/multer";

const router = Router();

// Get all properties
router.get("/", propertyController.getProperties);

// Get Property by Id
router.get("/:propertyId", propertyController.getPropertyById);

// Create property
router.post(
  "/",
  multer.fields([
    { name: "photo", maxCount: 1 },
    { name: "gallery", maxCount: 5 },
  ]),
  propertyController.createProperty
);

// Edit property by Id
router.put("/:propertyId", propertyController.editProperty);

// Delete property by Id
router.delete("/:propertyId", propertyController.deleteProperty);

export default router;
