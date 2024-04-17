import { Schema, model } from "mongoose";

const TourSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    location: String,
    description: String,
    img: String,
    price: Number,
    distance: String,
  },
  { timestamps: true }
);

export const Tour = model("Tour", TourSchema);
