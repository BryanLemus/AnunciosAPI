import mongoose, { ConnectionOptions } from "mongoose";
const conOptions: ConnectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

const uri: string = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@mycluster.mmsco.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose
  .connect(uri, conOptions)
  .then(() => {
    console.log("DB connection successfully");
  })
  .catch((err) => {
    console.error(err);
  });
