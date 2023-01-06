import mongoose from "mongoose";

export const postSchema = new mongoose.Schema({
  author: {
    userName: String,
    email: String,
  },
  title: String,
  body: String,
});

export default mongoose.models.Post || mongoose.model("Post", postSchema);
