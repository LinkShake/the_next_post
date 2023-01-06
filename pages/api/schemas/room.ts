import mongoose from "mongoose";
import Post from "./post";
import { postSchema } from "./post";

const PostSchema = Post.schema;

export const roomSchema = new mongoose.Schema({
  roomName: { type: String, require: true },
  posts: [postSchema],
  description: String,
});

export default mongoose.models.Room || mongoose.model("Room", roomSchema);
