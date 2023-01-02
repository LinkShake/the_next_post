import mongoose from "mongoose";
import { postSchema } from "./post";

export const roomSchema = new mongoose.Schema({
  roomName: { type: String, require: true },
  posts: [postSchema],
  description: String,
});

export default mongoose.models.Room || mongoose.model("Room", roomSchema);
