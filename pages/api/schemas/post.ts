import mongoose from "mongoose";
import { commentSchema } from "./comments";

export const postSchema = new mongoose.Schema({
  author: {
    userName: String,
    email: String,
  },
  title: String,
  body: String,
  comments: [commentSchema],
});

export default mongoose.models.Post || mongoose.model("Post", postSchema);
