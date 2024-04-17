import { Schema, model } from "mongoose";

const ReviewSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    tour: { type: Schema.Types.ObjectId, ref: "Tour" },

    content: String,
    star: {
      type: Number,
      min: 1,
      max: 5,
      validate: {
        validator: Number.isInteger,
        message: `{VALUE} is not an integer`,
      },
    },
  },
  { timestamps: true }
);

export const Review = model("Review", ReviewSchema);
