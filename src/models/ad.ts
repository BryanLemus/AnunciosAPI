import { model, Schema, Document } from "mongoose";

export interface IAd extends Document {
  name: string;
  description: string;
  currency: string;
  price: number;
  photos: [];
  amenities: [];
}

const adSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    currency: { type: String },
    price: { type: Number },
    photos: [
      {
        ref: "Photo",
        type: Schema.Types.ObjectId,
      },
    ],
    amenities: [
      {
        ref: "Amenity",
        type: Schema.Types.ObjectId,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model<IAd>("Ad", adSchema);
