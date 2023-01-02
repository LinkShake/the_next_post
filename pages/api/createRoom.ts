import Room from "./schemas/room";
import dbConnect from "@/utils/dbConnection";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const { body } = req;

  try {
    await dbConnect();

    if (method === "POST") {
      await Room.create({
        roomName: body.roomName,
        description: body.description,
        posts: [],
      });

      res.redirect("/home");
      res.status(200).json({ msg: "success" });
    } else {
      res.status(401).json({ msg: "Invalid fetch method" });
    }
  } catch (err: any) {
    console.log(err);
  }
}
