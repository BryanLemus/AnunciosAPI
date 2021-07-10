import express from "express";
import morgan from "morgan";
import cors from "cors";

require("dotenv").config();
const app = express();

// import routes
import authRoutes from "./routes/auth.routes";
import propertiesRoutes from "./routes/property.routes"

app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Main route
app.get("/", (req, res) => {
  res.json({
    msg: "API is Ready"
  });
});

app.use("/api",authRoutes);
app.use("/api/properties", propertiesRoutes);

export default app;
