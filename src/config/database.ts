// imports
import mongoose, { ConnectionOptions } from "mongoose";

// MongoDB options
const conOptions: ConnectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

// MongoDB URI
const uri: string = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@mycluster.mmsco.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

// MongoDB connection
mongoose
  .connect(uri, conOptions)
  // If MongoDB connection success, send message;
  .then(() => {
    console.log("DB connection successfully");
  })
  // If MongoDB connection failed, send error;
  .catch((err) => {
    console.error(err);
  });
