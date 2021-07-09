import { model, Schema, Document } from "mongoose";

export interface IAmenity extends Document {
  name: string;
  content: string;
}

const amenitySchema = new Schema(
  {
    name: { type: String, required: true },
    content: { type: String, required: true},
  }
);

export default model<IAmenity>("Ad", amenitySchema);
