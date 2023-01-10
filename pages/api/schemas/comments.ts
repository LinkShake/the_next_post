import mongoose from "mongoose";

export const commentSchema = new mongoose.Schema({
  author: {
    userName: String,
    email: String,
  },
  body: String,
});

export default mongoose.models.Comment ||
  mongoose.model("Comment", commentSchema);
