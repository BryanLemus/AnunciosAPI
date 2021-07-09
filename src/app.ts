import express from "express";
import morgan from "morgan";
import cors from "cors";
require("dotenv").config();
const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API ready");
});

export default app;
