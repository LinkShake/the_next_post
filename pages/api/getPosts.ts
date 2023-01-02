import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/utils/dbConnection";
import Post from "./schemas/post";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  try {
    await dbConnect();

    if (method === "GET") {
      const data = await Post.find({});
      //   console.log(data);
      res.status(200).json({ data });
    } else {
      res.status(401).json({ msg: "Invalid fetch method" });
    }
  } catch (err) {
    console.log(err);
  }
}
