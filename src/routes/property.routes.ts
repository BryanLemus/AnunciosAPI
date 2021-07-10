import { Router } from "express";
import * as propertyController from "../controllers/property.controller";
import multer from "../libs/multer";

const router = Router();

router.get("/", propertyController.getProperties);
router.get("/:id", propertyController.getPropertyById);
router.post(
  "/",
  multer.fields([
    { name: "photo", maxCount: 1 },
    { name: "gallery", maxCount: 5 },
  ]),
  propertyController.createProperty
);
router.put("/:id", propertyController.editProperty);
router.delete("/:id", propertyController.deleteProperty);

export default router;
