import { model, Schema, Document } from "mongoose";

export interface IProperty extends Document {
  name: string;
  description: string;
  currency: string;
  price: number;
  photo: string;
  gallery: string[];
  amenities: [];
}

const propertySchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    currency: { type: String, required: true },
    price: { type: String, required: true },
    photo: { type: String, required: true },
    photos: { type: Array as () => String[] },
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

export default model<IProperty>("Property", propertySchema);
