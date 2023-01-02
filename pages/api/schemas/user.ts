import mongoose from "mongoose";
import { postSchema } from "./post";
import { roomSchema } from "./room";

export const userSchema = new mongoose.Schema({
  username: { type: String, require: true },
  email: { type: String, require: true },
  posts: [postSchema],
  joinedRooms: [roomSchema],
});

export default mongoose.models.User || mongoose.model("User", userSchema);
