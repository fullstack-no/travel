import mongoose, { Schema, model } from "mongoose";

export enum UserRole {
  "User",
  "Admin",
}

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: { type: String, enum: ["User", "Admin"] },
    age: Number,
  },

  { timestamps: true }
);

export const User = model("User", userSchema);
