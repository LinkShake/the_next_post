import dbConnect from "@/utils/dbConnection";
import { NextApiRequest, NextApiResponse } from "next";
import Room from "./schemas/room";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const { body } = req;
  const data = body;
  try {
    await dbConnect();

    if (method === "POST") {
      await Room.updateOne(
        { _id: data.roomId },
        {
          $push: {
            posts: {
              author: data.author,
              title: data.title,
              body: data.content,
            },
          },
        }
      );

      res.redirect(`/home`);
      res.status(200).json({ msg: "Success!" });
    } else {
      res.status(401).json({ msg: "Invalid fetch method" });
    }
  } catch (err: any) {
    console.log(err.message);
  }
}
