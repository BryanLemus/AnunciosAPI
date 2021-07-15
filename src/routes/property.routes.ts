/**
 * Import modules
 */

import { Router } from "express";
import * as controller from "../controllers/property.controller";
import multer from "../libs/multer";

/**
 * Instance router
 */

export const router = Router();

/**
 * GET /api/properties/
 */

router.get("/", controller.GetProperties);

/**
 * GET /api/properties/:id
 */

router.get("/:id", controller.GetProperty);


/**
 * POST /api/properties/
 */

router.post(
  "/",
  multer.fields([
    { name: "photo", maxCount: 1 },
    { name: "gallery", maxCount: 5 },
  ]),
  controller.CreateProperty
);


/**
 * PUT /api/properties/:id
 */

router.put("/:id", controller.EditProperty);


/**
 * DELETE /api/properties/:id
 */

router.delete("/:id", controller.DeleteProperty);


/**
 * Export module
 */

export default router;
