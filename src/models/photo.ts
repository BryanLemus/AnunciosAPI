import { Schema, model, Document } from "mongoose";

const schema = new Schema({
  path: String,
});

export interface IPhoto extends Document {
  path: string;
}

export default model<IPhoto>("Photo", schema);
