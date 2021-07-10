import express from "express";
import morgan from "morgan";
import cors from "cors";

// import routes
import authRoutes from "./routes/auth.routes";
import propertiesRoutes from "./routes/property.routes"

require("dotenv").config();
const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API ready");
});

app.use("/api", authRoutes);
app.use("/api/properties", propertiesRoutes);

export default app;
