import Room from "./schemas/room";
import dbConnect from "@/utils/dbConnection";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const { body } = req;
  console.log(body);

  try {
    const data = JSON.parse(body);
    await dbConnect();

    if (method === "POST") {
      const rooms = await Room.find({
        roomName: data.value,
      });

      if (rooms) {
        res.redirect(`/${data.originalURL}`);
        res.status(200).json(rooms);
      } else {
        throw new Error("No rooms corrisponding to your query");
      }
    }

    res.status(401).json({ msg: "Invalid fetch method" });
  } catch (err: any) {
    console.log(err.message);
  }
}
