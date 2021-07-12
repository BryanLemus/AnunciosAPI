/**
 * Required external modules
 */
import * as dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import cors from "cors";

import authRoutes from "./routes/auth.routes";
import propertiesRoutes from "./routes/property.routes";

dotenv.config();


/**
 * 
 * App variables
 * 
 */
const app = express();

/**
 * 
 * App configuration
 * 
 */

app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api/properties", propertiesRoutes);

export default app;
