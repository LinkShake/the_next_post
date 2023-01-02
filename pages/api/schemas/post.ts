import mongoose from "mongoose";

export const postSchema = new mongoose.Schema({
  author: String,
  title: String,
  body: String,
});

export default mongoose.models.Post || mongoose.model("Post", postSchema);
